import LR from '@/models/lr.model';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { lrId } = await request.json();

    if (!lrId) {
      return NextResponse.json({
        error: 'BOTH FIELDS ARE REQUIRED FOR LR FETCHING',
        status: 401,
      });
    }

    const lr = await LR.findOne({
      _id: lrId,
    });

    if (!lr) {
      return NextResponse.json(
        { error: 'GIVEN CREDENTIALS ARE NOT CORRECT FOR FETCHING LR' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      message: 'LR FETCHED SUCCESSFULLY',
      status: 200,
      success: true,
      lr,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'ERROR WHILE FETCHING LR FROM BACKEND' },
      { status: 501 }
    );
  }
}
