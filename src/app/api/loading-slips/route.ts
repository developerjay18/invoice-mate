import { connectDB } from "@/dbConfig/dbConfig";
import LoadingSlip from "@/models/loadingSlip.model";
import { NextRequest, NextResponse } from "next/server";

connectDB();

// for creating loading-slips
export async function POST(request: NextRequest) {
  try {
    const { company, ...data } = await request.json();

    if (!company) {
      return NextResponse.json({
        error: "COMPANY FIELD IS REQUIRED. YOU CAN'T PROCEED FURTHER",
        status: 401,
      });
    }

    const loadingSlip = new LoadingSlip({
      company,
      ...data,
    });

    const savedLoadingSlip = await loadingSlip.save();

    if (!savedLoadingSlip) {
      return NextResponse.json(
        { error: "ERROR WHILE CREATING LOADING-SLIP PLASE TRY AGAIN" },
        { status: 501 }
      );
    }

    return NextResponse.json({
      message: "LOADING SLIP CREATED SUCCESSFULLY",
      status: 200,
      success: true,
      savedLoadingSlip,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "ERROR WHILE CREATING LOADING-SLIP FROM BACKEND" },
      { status: 501 }
    );
  }
}

// for updating loading-slips
export async function PATCH(request: NextRequest) {
  try {
    const { id, ...data } = await request.json();
    const loadingSlip = await LoadingSlip.findOneAndUpdate(
      { _id: id },
      { ...data },
      { new: true }
    );
    return NextResponse.json({
      message: "LOADING-SLIP IS UPDATED",
      success: true,
      loadingSlip,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "ERROR WHILE UPDATING LOADING-SLIP FROM BACKEND" },
      { status: 501 }
    );
  }
}

// for deleting loading-slips
export async function DELETE(request: NextRequest) {
  try {
    const { loadingSlipId } = await request.json();

    if (!loadingSlipId) {
      return NextResponse.json({
        error: "SLIP-ID FIELD IS REQUIRED. YOU CAN'T PROCEED FURTHER",
        status: 401,
      });
    }

    const deletedLoadingSlip = await LoadingSlip.deleteOne({
      _id: loadingSlipId,
    });

    if (!deletedLoadingSlip) {
      return NextResponse.json(
        { error: "ERROR WHILE DELETING LOADING-SLIP PLASE TRY AGAIN" },
        { status: 501 }
      );
    }

    return NextResponse.json({
      message: "LOADING SLIP DELETED SUCCESSFULLY",
      status: 200,
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "ERROR WHILE DELETING LOADING-SLIP FROM BACKEND" },
      { status: 501 }
    );
  }
}
