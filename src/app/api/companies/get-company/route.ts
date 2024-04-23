import { connectDB } from '@/dbConfig/dbConfig';
import Company from '@/models/company.model';
import { NextRequest, NextResponse } from 'next/server';
import { getDataFromToken } from '@/helpers/getDataFromToken';

connectDB();

export async function POST(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);
    const { companyId } = await request.json();

    if (!userId || !companyId) {
      return NextResponse.json(
        { error: 'ALL FIELDS ARE REQUIRED' },
        { status: 401 }
      );
    }

    const company = await Company.findOne({ owner: userId, _id: companyId });

    if (!company) {
      return NextResponse.json(
        { error: 'NOT ANY COMPANY IS MATCHING BY THIS COMPANY AND USER IDS' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      message: 'COMPANY FETCHED SUCCESSFULLY',
      status: 200,
      success: true,
      company,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'ERROR WHILE FECTHING COMPANY FROM BACKEND' },
      { status: 501 }
    );
  }
}
