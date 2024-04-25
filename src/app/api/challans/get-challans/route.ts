import Challan from '@/models/challan.model';
import { NextRequest, NextResponse } from 'next/server';

// for fetching all challans
export async function POST(request: NextRequest) {
  try {
    const { companyId } = await request.json();

    if (!companyId) {
      return NextResponse.json({
        error: 'COMPANY ID IS REQUIRED FOR FETCHING ALL VOUCHERS',
        status: 401,
      });
    }

    const challans = await Challan.find({ company: companyId });

    if (!challans) {
      return NextResponse.json(
        {
          error: 'CHALLANS ARE NOT CREATED OR EXSISTS YET WITH THIS COMPANY ID',
        },
        { status: 401 }
      );
    }

    return NextResponse.json({
      message: 'ALL CHALLANS FETCEHD SUCCESSFULLY',
      success: true,
      status: 200,
      challans,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'ERROR WHILE FETCHING CHALLANS FROM BACKEND' },
      { status: 501 }
    );
  }
}
