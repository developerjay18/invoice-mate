import { connectDB } from "@/dbConfig/dbConfig";
import Bill from "@/models/bill.model";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function POST(request: NextRequest) {
  try {
    const { billId } = await request.json();

    if (!billId) {
      return NextResponse.json(
        { error: "BILL ID IS REQUIRED. YOU CAN'T PROCEED FURTHER" },
        { status: 401 }
      );
    }

    const bill = await Bill.findOne({ _id: billId });

    if (!bill) {
      return NextResponse.json(
        {
          error: "ERROR OCCURED WHILE FETCHING BILL",
        },
        { status: 501 }
      );
    }

    return NextResponse.json({
      message: "BILL FETCHED SUCCESSFULLY",
      status: 200,
      success: true,
      bill,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "ERROR WHILE FECTHING BILL FROM BACKEND" },
      { status: 501 }
    );
  }
}
