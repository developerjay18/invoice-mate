import { connectDB } from "@/dbConfig/dbConfig";
import Challan from "@/models/challan.model";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function POST(request: NextRequest) {
  try {
    const { challanId } = await request.json();

    console.log(challanId);

    if (!challanId) {
      return NextResponse.json({
        error: "CHALLAN ID IS REQUIRED FOR CHALLAN FETCHING",
        status: 401,
      });
    }

    const challan = await Challan.findOne({
      _id: challanId,
    });

    if (!challan) {
      return NextResponse.json(
        { error: "GIVEN CREDENTIALS ARE NOT CORRECT FOR FETCHING CHALLAN" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      message: "CHALLAN FETCHED SUCCESSFULLY",
      status: 200,
      success: true,
      challan,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "ERROR WHILE FETCHING CHALLAN BACKEND" },
      { status: 501 }
    );
  }
}
