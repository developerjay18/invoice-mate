import LR from '@/models/lr.model';
import { NextRequest, NextResponse } from 'next/server';

// for fetching all lrs
export async function POST(request: NextRequest) {
  try {
    const { companyId } = await request.json();

    if (!companyId) {
      return NextResponse.json({
        error: 'COMPANY ID IS REQUIRED FOR FETCHING ALL VOUCHERS',
        status: 401,
      });
    }

    const lrs = await LR.find({ company: companyId });

    if (!lrs) {
      return NextResponse.json(
        {
          error: 'LRS ARE NOT CREATED OR EXSISTS YET WITH THIS COMPANY ID',
        },
        { status: 401 }
      );
    }

    return NextResponse.json({
      message: 'ALL LRS FETCEHD SUCCESSFULLY',
      success: true,
      status: 200,
      lrs,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'ERROR WHILE FETCHING LRS FROM BACKEND' },
      { status: 501 }
    );
  }
}
