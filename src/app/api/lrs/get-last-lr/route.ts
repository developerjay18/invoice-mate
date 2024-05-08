import LR from "@/models/lr.model";
import { NextRequest, NextResponse } from "next/server";

// get last lr from all
export async function POST(request: NextRequest) {
  try {
    const { companyId } = await request.json();
    const response = await LR.find({ company: companyId })
      .sort({ _id: -1 })
      .limit(1);

    let lastLr;
    await response.forEach((doc) => {
      lastLr = doc;
    });

    if (!lastLr) {
      return NextResponse.json({
        message: "THERE IS NOT ANY DOCUMENT CREATED YET",
        status: 401,
      });
    }

    return NextResponse.json({
      message: "LAST LR FETCHED SUCCESSFULLY",
      status: 200,
      success: true,
      lastLr,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "ERROR WHILE FETCHING LAST LR FROM BACKEND" },
      { status: 501 }
    );
  }
}
