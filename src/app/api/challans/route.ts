import Challan from '@/models/challan.model';
import { NextRequest, NextResponse } from 'next/server';

// for creating challans
export async function POST(request: NextRequest) {
  try {
    const {
      company,
      from,
      to,
      vehicleNum,
      ownersName,
      driversName,
      gcNoteNum,
      pkgs,
      description,
      consignor,
      consignee,
      weight,
      rate,
      collection,
      commission,
      refund,
      hamali,
      other,
      munsyanaAndPayment,
      total,
    } = await request.json();

    if (!company) {
      return NextResponse.json({
        error: "COMPANY FIELD IS REQUIRED. YOU CAN'T PROCEED FURTHER",
        status: 401,
      });
    }

    const challan = new Challan({
      company,
      from,
      to,
      vehicleNum,
      ownersName,
      driversName,
      gcNoteNum,
      pkgs,
      description,
      consignor,
      consignee,
      weight,
      rate,
      collection,
      commission,
      refund,
      hamali,
      other,
      munsyanaAndPayment,
      total,
    });

    const savedChallan = await challan.save();

    if (!savedChallan) {
      return NextResponse.json(
        { error: 'ERROR WHILE CREATING CHALLAN PLASE TRY AGAIN' },
        { status: 501 }
      );
    }

    return NextResponse.json({
      message: 'CHALLAN CREATED SUCCESSFULLY',
      status: 200,
      success: true,
      savedChallan,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'ERROR WHILE CREATING CHALLAN FROM BACKEND' },
      { status: 501 }
    );
  }
}

// for updating challans
export async function PATCH(request: NextRequest) {
  try {
    const {} = await request.json();
  } catch (error) {
    return NextResponse.json(
      { error: 'ERROR WHILE UPDATING CHALLAN FROM BACKEND' },
      { status: 501 }
    );
  }
}

// for deleting challans
export async function DELETE(request: NextRequest) {
  try {
    const { challanId } = await request.json();

    if (!challanId) {
      return NextResponse.json({
        error:
          "COMPANY AND CHALLAN ID FIELD IS REQUIRED. YOU CAN'T PROCEED FURTHER",
        status: 401,
      });
    }

    const deletedChallan = await Challan.deleteOne({
      _id: challanId,
    });

    if (!deletedChallan) {
      return NextResponse.json(
        { error: 'ERROR WHILE DELETING CHALLAN PLASE TRY AGAIN' },
        { status: 501 }
      );
    }

    return NextResponse.json({
      message: 'CHALLAN DELETED SUCCESSFULLY',
      status: 200,
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'ERROR WHILE DELETING CHALLAN FROM BACKEND' },
      { status: 501 }
    );
  }
}