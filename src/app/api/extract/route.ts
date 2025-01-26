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

// Define the models as a mapped type
const models: Record<string, any> = {
  "loading-slips": LoadingSlip,
  challans: Challan,
  bills: Bill,
  vouchers: Voucher,
  lrs: LR,
};

export async function POST(request: NextRequest) {
  try {
    const { startDate, endDate, invoiceType, company } = await request.json();

    if (!startDate || !endDate || !invoiceType || !company) {
      return NextResponse.json({
        message: "ALL FIELDS ARE MANDATORY TO EXTRACT DATA.",
        status: 401,
      });
    }

    const companyIds: Record<string, string> = {
      "the-rising-freight-carriers": "663770b3b752100159dc12db",
      "maa-saraswati-road-carriers": "66376f17b752100159dc12d9",
      "sharma-transport": "663771e7b752100159dc12dd",
    };

    if (!(company in companyIds)) {
      return NextResponse.json({
        message: "INVALID COMPANY NAME.",
        status: 401,
      });
    }

    const companyId = companyIds[company];

    // Type-safe way to access the model based on invoiceType
    const Model = models[invoiceType as keyof typeof models];

    if (!Model) {
      return NextResponse.json({
        message: "INVALID INVOICE TYPE.",
        status: 401,
      });
    }

    // Proceed with using the `Model` for database queries
    const transactions = await Model.find({ company: companyId });

    return NextResponse.json({
      message: `${invoiceType.toUpperCase()} EXTRACTED SUCCESSFULLY.`,
      status: 201,
      transactions,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 501 });
  }
}
