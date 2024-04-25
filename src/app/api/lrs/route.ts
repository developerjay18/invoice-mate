import LR from '@/models/lr.model';
import { NextRequest, NextResponse } from 'next/server';

// for creating lrs
export async function POST(request: NextRequest) {
  try {
    const { company, ...data } = await request.json();

    if (!company) {
      return NextResponse.json({
        error: "COMPANY FIELD IS REQUIRED. YOU CAN'T PROCEED FURTHER",
        status: 401,
      });
    }

    const lr = new LR({
      company,
      ...data,
    });

    const savedLr = await lr.save();

    if (!savedLr) {
      return NextResponse.json(
        { error: 'ERROR WHILE CREATING LR PLASE TRY AGAIN' },
        { status: 501 }
      );
    }

    return NextResponse.json({
      message: 'LR CREATED SUCCESSFULLY',
      status: 200,
      success: true,
      savedLr,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'ERROR WHILE CREATING LR FROM BACKEND' },
      { status: 501 }
    );
  }
}

// for updating lrs
export async function PATCH(request: NextRequest) {
  try {
    const { id, ...data } = await request.json();
    const lr = await LR.findOneAndUpdate(
      { _id: id },
      { ...data },
      { new: true }
    );
    return NextResponse.json({
      message: 'LR IS UPDATED',
      success: true,
      lr,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'ERROR WHILE UPDATING LR FROM BACKEND' },
      { status: 501 }
    );
  }
}

// for deleting lrs
export async function DELETE(request: NextRequest) {
  try {
    const { lrId } = await request.json();

    if (!lrId) {
      return NextResponse.json({
        error: "COMPANY AND LR-ID FIELD IS REQUIRED. YOU CAN'T PROCEED FURTHER",
        status: 401,
      });
    }

    const deletedLr = await LR.deleteOne({
      _id: lrId,
    });

    if (!deletedLr) {
      return NextResponse.json(
        { error: 'ERROR WHILE DELETING LR PLASE TRY AGAIN' },
        { status: 501 }
      );
    }

    return NextResponse.json({
      message: 'LR DELETED SUCCESSFULLY',
      status: 200,
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'ERROR WHILE DELETING LR FROM BACKEND' },
      { status: 501 }
    );
  }
}
