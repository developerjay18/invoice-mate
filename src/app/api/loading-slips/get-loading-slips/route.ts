import { connectDB } from '@/dbConfig/dbConfig';
import LoadingSlip from '@/models/loadingSlip.model';
import { NextRequest, NextResponse } from 'next/server';

connectDB();

export async function POST(request: NextRequest) {
  try {
    const { companyId } = await request.json();

    if (!companyId) {
      return NextResponse.json(
        { error: "COMPANY ID IS REQUIRED. YOU CAN'T PROCEED FUIRTHER" },
        { status: 401 }
      );
    }

    const loadingSlips = await LoadingSlip.find({ company: companyId });

    if (!loadingSlips) {
      return NextResponse.json(
        {
          error:
            'LOADING-SLIPS ARE NOT CREATED OR EXSISTS YET WITH THIS COMPANY ID',
        },
        { status: 401 }
      );
    }

    return NextResponse.json({
      message: 'LOADING SLIPS FETCHED SUCCESSFULLY',
      status: 200,
      success: true,
      loadingSlips,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'ERROR WHILE FECTHING LOADING SLIPS FROM BACKEND' },
      { status: 501 }
    );
  }
}
