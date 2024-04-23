import Voucher from '@/models/voucher.model';
import { NextRequest, NextResponse } from 'next/server';

// for fetching all vouchers
export async function POST(request: NextRequest) {
  try {
    const { companyId } = await request.json();

    if (!companyId) {
      return NextResponse.json({
        error: 'COMPANY ID IS REQUIRED FOR FETCHING ALL VOUCHERS',
        status: 401,
      });
    }

    const vouchers = await Voucher.find({ company: companyId });

    if (!vouchers) {
      return NextResponse.json(
        {
          error: 'VOUCHERS ARE NOT CREATED OR EXSISTS YET WITH THIS COMPANY ID',
        },
        { status: 401 }
      );
    }

    return NextResponse.json({
      message: 'ALL VOUCHERS FETCEHD SUCCESSFULLY',
      success: true,
      status: 200,
      vouchers,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'ERROR WHILE SIGNUP USER FROM BACKEND' },
      { status: 501 }
    );
  }
}
