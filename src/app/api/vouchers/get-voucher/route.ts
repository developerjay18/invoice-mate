import { connectDB } from '@/dbConfig/dbConfig';
import Voucher from '@/models/voucher.model';
import { NextRequest, NextResponse } from 'next/server';

connectDB()

export async function POST(request: NextRequest) {
  try {
    const { voucherId } = await request.json();

    if (!voucherId) {
      return NextResponse.json({
        error: 'VOUCHER ID IS REQUIRED FOR VOUCHER FETCHING',
        status: 401,
      });
    }

    const voucher = await Voucher.findOne({
      _id: voucherId,
    });

    if (!voucher) {
      return NextResponse.json(
        { error: 'GIVEN CREDENTIALS ARE NOT CORRECT FOR FETCHING VOUCHER' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      message: 'VOUCHER FETCHED SUCCESSFULLY',
      status: 200,
      success: true,
      voucher,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'ERROR WHILE SIGNUP USER FROM BACKEND' },
      { status: 501 }
    );
  }
}
