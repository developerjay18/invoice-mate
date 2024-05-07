import { connectDB } from '@/dbConfig/dbConfig';
import Bill from '@/models/bill.model';
import { NextRequest, NextResponse } from 'next/server';

connectDB()

export async function POST(request: NextRequest) {
  try {
    const { companyId } = await request.json();

    if (!companyId) {
      return NextResponse.json(
        { error: "COMPANY ID IS REQUIRED. YOU CAN'T PROCEED FUIRTHER" },
        { status: 401 }
      );
    }

    const bills = await Bill.find({ company: companyId });

    if (!bills) {
      return NextResponse.json(
        {
          error: 'BILLS ARE NOT CREATED OR EXSISTS YET WITH THIS COMPANY ID',
        },
        { status: 401 }
      );
    }

    return NextResponse.json({
      message: 'BILLS FETCHED SUCCESSFULLY',
      status: 200,
      success: true,
      bills,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'ERROR WHILE FECTHING BILLS FROM BACKEND' },
      { status: 501 }
    );
  }
}
