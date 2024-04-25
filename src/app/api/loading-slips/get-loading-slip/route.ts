import { connectDB } from '@/dbConfig/dbConfig';
import LoadingSlip from '@/models/loadingSlip.model';
import { NextRequest, NextResponse } from 'next/server';

connectDB();

export async function POST(request: NextRequest) {
  try {
    const { loadingSlipId } = await request.json();

    if (!loadingSlipId) {
      return NextResponse.json(
        { error: "ALL FIELDS ARE REQUIRED. YOU CAN'T PROCEED FURTHER" },
        { status: 401 }
      );
    }

    const loadingSlip = await LoadingSlip.findOne({
      _id: loadingSlipId,
    });

    if (!loadingSlip) {
      return NextResponse.json(
        {
          error: 'ERROR OCCURED WHILE FETCHING LOADING SLIP',
        },
        { status: 501 }
      );
    }

    return NextResponse.json({
      message: 'LOADING SLIP FETCHED SUCCESSFULLY',
      status: 200,
      success: true,
      loadingSlip,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'ERROR WHILE FECTHING LOADING SLIP FROM BACKEND' },
      { status: 501 }
    );
  }
}
