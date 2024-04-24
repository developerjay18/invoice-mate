import Bill from '@/models/bill.model';
import { connectDB } from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';

connectDB();

// for creating bills
export async function POST(request: NextRequest) {
  try {
    const {
      company,
      name,
      cnNum, // number only
      from,
      to,
      particular,
      weight,
      rate,
      amount,
      advance,
      balance,
      total,
    } = await request.json();

    if (!company) {
      return NextResponse.json({
        error: "COMPANY FIELD IS REQUIRED. YOU CAN'T PROCEED FURTHER",
        status: 401,
      });
    }

    const bill = new Bill({
      company,
      name,
      cnNum,
      from,
      to,
      particular,
      weight,
      rate,
      amount,
      advance,
      balance,
      total,
    });

    const savedBill = await bill.save();

    if (!savedBill) {
      return NextResponse.json(
        { error: 'ERROR WHILE CREATING BILL PLASE TRY AGAIN' },
        { status: 501 }
      );
    }

    return NextResponse.json({
      message: 'BILL CREATED SUCCESSFULLY',
      status: 200,
      success: true,
      savedBill,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'ERROR WHILE CREATING BILL FROM BACKEND' },
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
      { error: 'ERROR WHILE UPDATING BILL FROM BACKEND' },
      { status: 501 }
    );
  }
}

// for deleting bills
export async function DELETE(request: NextRequest) {
  try {
    const { billId, companyId } = await request.json();

    if (!billId || !companyId) {
      return NextResponse.json({
        error:
          "COMPANY AND BILL-ID FIELD IS REQUIRED. YOU CAN'T PROCEED FURTHER",
        status: 401,
      });
    }

    const deletedBill = await Bill.deleteOne({
      _id: billId,
      company: companyId,
    });

    if (!deletedBill) {
      return NextResponse.json(
        { error: 'ERROR WHILE DELETING BILL PLASE TRY AGAIN' },
        { status: 501 }
      );
    }

    return NextResponse.json({
      message: 'BILL DELETED SUCCESSFULLY',
      status: 200,
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'ERROR WHILE DELETING BILL FROM BACKEND' },
      { status: 501 }
    );
  }
}
