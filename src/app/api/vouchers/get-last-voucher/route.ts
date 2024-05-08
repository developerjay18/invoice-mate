import Voucher from "@/models/voucher.model";
import { NextRequest, NextResponse } from "next/server";

// get last voucher from all
export async function POST(request: NextRequest) {
  try {
    const { companyId } = await request.json();
    const response = await Voucher.find({ company: companyId })
      .sort({ _id: -1 })
      .limit(1);

    let lastVoucher;
    await response.forEach((doc) => {
      lastVoucher = doc;
    });

    if (!lastVoucher) {
      return NextResponse.json({
        message: "THERE IS NOT ANY DOCUMENT CREATED YET",
        status: 401,
      });
    }

    return NextResponse.json({
      message: "LAST VOUCHER FETCHED SUCCESSFULLY",
      status: 200,
      success: true,
      lastVoucher,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "ERROR WHILE FETCHING LAST VOUCHER FROM BACKEND" },
      { status: 501 }
    );
  }
}
