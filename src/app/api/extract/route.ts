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

    const companyIds = {
      "the-rising-freight-carriers": "663770b3b752100159dc12db",
      "maa-saraswati-road-carriers": "66376f17b752100159dc12d9",
      "sharma-transport": "663771e7b752100159dc12dd",
    };

    const companyId = companyIds[company];
    if (!companyId) {
      return NextResponse.json({
        message: "INVALID COMPANY NAME.",
        status: 401,
      });
    }

    const models = {
      "loading-slips": LoadingSlip,
      challans: Challan,
      bills: Bill,
      vouchers: Voucher,
      lrs: LR,
    };

    const Model = models[invoiceType];
    if (!Model) {
      return NextResponse.json({
        message: "INVALID INVOICE TYPE.",
        status: 401,
      });
    }

    // Optimized query with date range
    const transactions = await Model.find({
      company: companyId,
      date: { $gte: start, $lte: end },
    });

    return NextResponse.json({
      message: `${invoiceType.toUpperCase()} EXTRACTED SUCCESSFULLY.`,
      status: 201,
      transactions,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 501 });
  }
}
