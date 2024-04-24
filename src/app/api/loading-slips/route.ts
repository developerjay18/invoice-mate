import LoadingSlip from '@/models/loadingSlip.model';
import { NextRequest, NextResponse } from 'next/server';

// for creating loading-slips
export async function POST(request: NextRequest) {
  try {
    const {
      company, // the objectId of the company
      primaryTo,
      truckNum,
      from,
      to,
      rate,
      gauranteeBy,
      name,
      advance,
      balance,
    } = await request.json();

    if (!company) {
      return NextResponse.json({
        error: "COMPANY FIELD IS REQUIRED. YOU CAN'T PROCEED FURTHER",
        status: 401,
      });
    }

    const loadingSlip = new LoadingSlip({
      company,
      primaryTo,
      truckNum,
      from,
      to,
      rate,
      gauranteeBy,
      name,
      advance,
      balance,
    });

    const savedLoadingSlip = await loadingSlip.save();

    if (!savedLoadingSlip) {
      return NextResponse.json(
        { error: 'ERROR WHILE CREATING LOADING-SLIP PLASE TRY AGAIN' },
        { status: 501 }
      );
    }

    return NextResponse.json({
      message: 'LOADING SLIP CREATED SUCCESSFULLY',
      status: 200,
      success: true,
      savedLoadingSlip,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'ERROR WHILE CREATING LOADING-SLIP FROM BACKEND' },
      { status: 501 }
    );
  }
}

// for updating loading-slips
export async function PATCH(request: NextRequest) {
  try {
    const {} = await request.json();
  } catch (error) {
    return NextResponse.json(
      { error: 'ERROR WHILE UPDATING LOADING-SLIP FROM BACKEND' },
      { status: 501 }
    );
  }
}

// for deleting loading-slips
export async function DELETE(request: NextRequest) {
  try {
    const { loadingSlipId, companyId } = await request.json();

    if (!loadingSlipId || !companyId) {
      return NextResponse.json({
        error:
          "COMPANY AND SLIP-ID FIELD IS REQUIRED. YOU CAN'T PROCEED FURTHER",
        status: 401,
      });
    }

    const deletedLoadingSlip = await LoadingSlip.deleteOne({
      _id: loadingSlipId,
      company: companyId,
    });

    if (!deletedLoadingSlip) {
      return NextResponse.json(
        { error: 'ERROR WHILE DELETING LOADING-SLIP PLASE TRY AGAIN' },
        { status: 501 }
      );
    }

    return NextResponse.json({
      message: 'LOADING SLIP DELETED SUCCESSFULLY',
      status: 200,
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'ERROR WHILE DELETING LOADING-SLIP FROM BACKEND' },
      { status: 501 }
    );
  }
}
