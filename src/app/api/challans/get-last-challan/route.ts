import Challan from "@/models/challan.model";
import { NextRequest, NextResponse } from "next/server";

// get last challan from all
export async function POST(request: NextRequest) {
  try {
    const { companyId } = await request.json();
    const response = await Challan.find({ company: companyId })
      .sort({ _id: -1 })
      .limit(1);

    let lastChallan;
    await response.forEach((doc) => {
      lastChallan = doc;
    });

    if (!lastChallan) {
      return NextResponse.json({
        message: "THERE IS NOT ANY DOCUMENT CREATED YET",
        status: 401,
      });
    }

    return NextResponse.json({
      message: "LAST CHALLAN FETCHED SUCCESSFULLY",
      status: 200,
      success: true,
      lastChallan,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "ERROR WHILE FETCHING LAST CHALLAN FROM BACKEND" },
      { status: 501 }
    );
  }
}
