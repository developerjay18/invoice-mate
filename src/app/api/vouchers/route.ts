import Voucher from '@/models/voucher.model';
import { connectDB } from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';

connectDB();

export async function GET() {
  const vouchers = await Voucher.find();
  return NextResponse.json({
    success: true,
    data: vouchers,
  });
}

// for creating voucher
export async function POST(request: NextRequest) {
  try {
    const { company, ...data } = await request.json();

    if (!company) {
      return NextResponse.json({
        error: "COMPANY FIELD IS REQUIRED. YOU CAN'T PROCEED FURTHER",
        status: 401,
      });
    }

    const voucher = new Voucher({
      company,
      ...data,
    });

    if (!voucher) {
      return NextResponse.json(
        { error: 'ERROR WHILE CREATING VOUCHER PLASE TRY AGAIN' },
        { status: 501 }
      );
    }

    const savedVoucher = await voucher.save();

    return NextResponse.json({
      message: 'VOUCHER CREATED SUCCESSFULLY',
      status: 200,
      success: true,
      savedVoucher,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'ERROR WHILE CREATING VOUCHER FROM BACKEND' },
      { status: 501 }
    );
  }
}

// I am little bit confused in this route 🔥🔥🔥🔥🔥
export async function PATCH(request: NextRequest) {
  try {
    const { id, ...data } = await request.json();
    const voucher = await Voucher.findOneAndUpdate(
      { _id: id },
      { ...data },
      { new: true }
    );
    return NextResponse.json({
      message: 'VOUCHER IS UPDATED',
      success: true,
      voucher,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'ERROR WHILE UPDATING VOUCHER FROM BACKEND' },
      { status: 501 }
    );
  }
}

// for deleting voucher
export async function DELETE(request: NextRequest) {
  try {
    const { voucherId } = await request.json();

    if (!voucherId) {
      return NextResponse.json({
        error: "VOUCHERID FIELD IS REQUIRED. YOU CAN'T PROCEED FURTHER",
        status: 401,
      });
    }

    const deletedVoucher = await Voucher.deleteOne({ _id: voucherId });

    if (!deletedVoucher) {
      return NextResponse.json(
        { error: 'ERROR WHILE DELETING VOUCHER' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      message: 'VOUCHER DELETED SUCCESSFULLY',
      status: 200,
      success: 'true',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'ERROR WHILE DELETING VOUCHER FROM BACKEND' },
      { status: 501 }
    );
  }
}
