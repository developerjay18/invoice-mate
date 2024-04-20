import Company from '@/models/company.model';
import { connectDB } from '@/dbConfig/dbConfig';
import { NextResponse, NextRequest } from 'next/server';
import { getDataFromToken } from '@/helpers/getDataFromToken';

connectDB();

// take data and userId
// check if empty
// check duplicate
// create company
// save company
// return response

export async function POST(request: NextRequest) {
  try {
    const { name } = await request.json();
    const userId = await getDataFromToken(request);

    if (!name) {
      return NextResponse.json({
        error: 'ALL FIELDS ARE REQUIRED',
        status: 401,
      });
    }

    const existedCompany = await Company.findOne({ name });

    if (existedCompany) {
      return NextResponse.json(
        { error: 'COMPANY ALREADY EXISTS WITH SAME NAME' },
        { status: 401 }
      );
    }

    const company = new Company({
      name,
      owner: userId,
    });

    const savedCompany = await company.save();

    return NextResponse.json({
      message: 'COMPANY CREATED SUCCESSFULLY',
      savedCompany,
      success: true,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'ERROR WHILE CREATING COMPANY FROM BACKEND' },
      { status: 501 }
    );
  }
}

// take current token's userId
// find userId matching companies
// return them as response

export async function GET(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);

    const filteredCompanies = await Company.find({ owner: userId });

    if (!filteredCompanies) {
      return NextResponse.json(
        { error: 'NO COMPANIES ARE YET CREATED BY THIS USER' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      message: 'COMPANIES FETCHED SUCCESSFULLY',
      status: 200,
      success: true,
      filteredCompanies,
    });
  } catch (error) {

    return NextResponse.json(
      { error: 'ERROR WHILE FECTHING ALL COMPANIES FROM BACKEND' },
      { status: 501 }
    );
  }
}
