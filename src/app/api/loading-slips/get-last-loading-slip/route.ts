import LoadingSlip from "@/models/loadingSlip.model";
import { NextRequest, NextResponse } from "next/server";

// get last lr from all
export async function POST(request: NextRequest) {
  try {
    const { companyId } = await request.json();
    const response = await LoadingSlip.find({ company: companyId })
      .sort({ _id: -1 })
      .limit(1);

    let lastLoadingSlip;
    await response.forEach((doc) => {
      lastLoadingSlip = doc;
    });

    if (!lastLoadingSlip) {
      return NextResponse.json({
        message: "THERE IS NOT ANY DOCUMENT CREATED YET",
        status: 401,
      });
    }

    return NextResponse.json({
      message: "LAST LOADING SLIP FETCHED SUCCESSFULLY",
      status: 200,
      success: true,
      lastLoadingSlip,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "ERROR WHILE FETCHING LAST LOADING SLIP FROM BACKEND" },
      { status: 501 }
    );
  }
}
