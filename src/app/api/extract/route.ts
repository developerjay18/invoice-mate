import { NextResponse, NextRequest } from "next/server";
import Challan from "@/models/challan.model";
import Bill from "@/models/bill.model";
import LR from "@/models/lr.model";
import Voucher from "@/models/voucher.model";
import LoadingSlip from "@/models/loadingSlip.model";

function convertDateFormat(dateString: any) {
  const parts = dateString.split(/[/.\-]/);

  if (parts.length !== 3) {
    return `1/1/2000`;
  }

  if (dateString === "") {
    return `1/1/2000`;
  }

  const [day, month, year] = parts;

  return `${month}/${day}/${year}`;
}

export async function POST(request: NextRequest) {
  try {
    const { startDate, endDate, invoiceType, company } = await request.json();

    if (!startDate || !endDate || !invoiceType || !company) {
      return NextResponse.json({
        message: "ALL FIELDS ARE MANDATORY TO EXTRACT DATA.",
        status: 401,
      });
    }

    const start = new Date(convertDateFormat(startDate));
    const end = new Date(convertDateFormat(endDate));

    let companyId;

    switch (company) {
      case "the-rising-freight-carriers":
        companyId = "663770b3b752100159dc12db";
        break;

      case "maa-saraswati-road-carriers":
        companyId = "66376f17b752100159dc12d9";
        break;

      case "sharma-transport":
        companyId = "663771e7b752100159dc12dd";
        break;

      default:
        "Invalid-company";
        return NextResponse.json({
          message: "INVALID COMPANY NAME.",
          status: 401,
        });
    }

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
    if (invoiceType === "challans") {
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
    if (invoiceType === "bills") {
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
    if (invoiceType === "vouchers") {
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
    if (invoiceType === "lrs") {
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
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 501 });
  }
}
