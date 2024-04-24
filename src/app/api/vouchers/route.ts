import Voucher from '@/models/voucher.model';
import { connectDB } from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';

connectDB();

// for creating voucher
export async function POST(request: NextRequest) {
  try {
    const {
      company, // the objectId of the company
      paidTo,
      debit,
      onAccountOf,
      particular,
      rupees,
      paise,
      total,
      authorisedBy,
      passedBy,
      payment,
      chequeNum,
    } = await request.json();

    if (!company) {
      return NextResponse.json({
        error: "COMPANY FIELD IS REQUIRED. YOU CAN'T PROCEED FURTHER",
        status: 401,
      });
    }

    const voucher = new Voucher({
      company,
      paidTo,
      debit,
      onAccountOf,
      particular,
      rupees,
      paise,
      total,
      authorisedBy,
      passedBy,
      payment,
      chequeNum,
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
    const {} = await request.json(); // what to do here
  } catch (error) {
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