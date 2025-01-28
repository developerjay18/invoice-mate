import { NextResponse, NextRequest } from "next/server";
import Challan from "@/models/challan.model";
import Bill from "@/models/bill.model";
import LR from "@/models/lr.model";
import Voucher from "@/models/voucher.model";
import LoadingSlip from "@/models/loadingSlip.model";
import convertDateFormat from "@/helpers/convertDateFormat";

export async function POST(request: NextRequest) {
  try {
    const { startDate, endDate, invoiceType, company } = await request.json();

    console.log("Data comed successfully")
    let companyId;
    const start = new Date(convertDateFormat(startDate));
    const end = new Date(convertDateFormat(endDate));

    if (company === "the-rising-freight-carriers") {
      companyId = "663770b3b752100159dc12db";
    } else if (company === "maa-saraswati-road-carriers") {
      companyId = "66376f17b752100159dc12d9";
    } else {
      companyId = "663771e7b752100159dc12dd";
    }

    console.log("company id selected and date also converted")
    if (invoiceType === "loading-slips") {
      const loadingSlips = await LoadingSlip.find({ company: companyId });

      const transactions = await loadingSlips.filter((slip) => {
        const sDate = convertDateFormat(slip.date || "");
        const slipDate = new Date(sDate);

        if (slipDate >= start && slipDate <= end) {
          return slip;
        }
      });

      return NextResponse.json({
        message: "LOADING SLIPS EXTRACTED SUCCESSFULLY.",
        status: 201,
        transactions,
      });
    }
    else if (invoiceType === "challans") {
      const challans = await Challan.find({ company: companyId });

      const transactions = await challans.filter((slip) => {
        const sDate = convertDateFormat(slip.mainBillDate || "");
        const slipDate = new Date(sDate);

        if (slipDate >= start && slipDate <= end) {
          return slip;
        }
      });

      return NextResponse.json({
        message: "CHALLANS EXTRACTED SUCCESSFULLY.",
        status: 201,
        transactions,
      });
    }
    else if (invoiceType === "bills") {
      const bills = await Bill.find({ company: companyId });

      const transactions = await bills.filter((slip) => {
        const sDate = convertDateFormat(slip.mainBillDate || "");

        const slipDate = new Date(sDate);

        if (slipDate >= start && slipDate <= end) {
          return slip;
        }
      });

      return NextResponse.json({
        message: "BILLS EXTRACTED SUCCESSFULLY.",
        status: 201,
        transactions,
      });
    }
    else if (invoiceType === "vouchers") {
      const vouchers = await Voucher.find({ company: companyId });

      const transactions = await vouchers.filter((slip) => {
        const sDate = convertDateFormat(slip.date || "");
        const slipDate = new Date(sDate);

        if (slipDate >= start && slipDate <= end) {
          return slip;
        }
      });

      return NextResponse.json({
        message: "VOUCHERS EXTRACTED SUCCESSFULLY.",
        status: 201,
        transactions,
      });
    }
    else if (invoiceType === "lrs") {
      const lrs = await LR.find({ company: companyId });

      const transactions = await lrs.filter((slip) => {
        const sDate = convertDateFormat(slip.date || "");
        const slipDate = new Date(sDate);

        if (slipDate >= start && slipDate <= end) {
          return slip;
        }
      });

      return NextResponse.json({
        message: "LRS EXTRACTED SUCCESSFULLY.",
        status: 201,
        transactions,
      });
    }
    else {
      return NextResponse.json(
        { error: "Failure to extract data." },
        { status: 501 }
      );
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 501 });
  }
}
