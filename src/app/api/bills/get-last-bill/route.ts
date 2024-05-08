import Bill from "@/models/bill.model";
import { NextRequest, NextResponse } from "next/server";

// get last bill from all
export async function POST(request: NextRequest) {
  try {
    const { companyId } = await request.json();
    const response = await Bill.find({ company: companyId })
      .sort({ _id: -1 })
      .limit(1);

    let lastBill;
    await response.forEach((doc) => {
      lastBill = doc;
    });

    if (!lastBill) {
      return NextResponse.json({
        message: "THERE IS NOT ANY DOCUMENT CREATED YET",
        status: 401,
      });
    }

    return NextResponse.json({
      message: "LAST BILL FETCHED SUCCESSFULLY",
      status: 200,
      success: true,
      lastBill,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "ERROR WHILE FETCHING LAST BILL FROM BACKEND" },
      { status: 501 }
    );
  }
}
