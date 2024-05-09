"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaFileInvoice } from "react-icons/fa6";
import toast from "react-hot-toast";
import axios from "axios";
import Loader from "@/components/Loader";

function CompanyPage({ params }: any) {
  const id = params.id;
  const company = params.company;
  const companyName = company.split("-").join(" ");
  const [loader, setLoader] = useState(false);
  const [challanCount, setChallanCount] = useState(0);
  const [loadingSlipCount, setLoadingSlipCount] = useState(0);
  const [billCount, setBillCount] = useState(0);
  const [lrCount, setLrCount] = useState(0);
  const [voucherCount, setVoucherCount] = useState(0);

  useEffect(() => {
    async function getStats() {
      try {
        setLoader(true);
        const challanStat = await axios.post("/api/challans/get-challans", {
          companyId: id,
        });
        const loadingSlipStat = await axios.post(
          "/api/loading-slips/get-loading-slips",
          {
            companyId: id,
          }
        );
        const billStat = await axios.post("/api/bills/get-bills", {
          companyId: id,
        });

        const lrStat = await axios.post("/api/lrs/get-lrs", {
          companyId: id,
        });

        const voucherStat = await axios.post("/api/vouchers/get-vouchers", {
          companyId: id,
        });

        setChallanCount(challanStat.data.challans.length);
        setLoadingSlipCount(loadingSlipStat.data.loadingSlips.length);
        setBillCount(billStat.data.bills.length);
        setLrCount(lrStat.data.lrs.length);
        setVoucherCount(voucherStat.data.vouchers.length);

        setLoader(false);
      } catch (error: any) {
        setLoader(false);
        toast.error(error.message);
      }
    }
    getStats();
  }, [id]);

  const invoicesData = [
    {
      name: "total challans",
      amount: challanCount,
      slug: `/challans/${company}/${id}`,
    },
    {
      name: "total loading slips",
      amount: loadingSlipCount,
      slug: `/loading-slips/${company}/${id}`,
    },
    {
      name: "total bills",
      amount: billCount,
      slug: `/bills/${company}/${id}`,
    },
    {
      name: "total lrs",
      amount: lrCount,
      slug: `/lrs/${company}/${id}`,
    },
    {
      name: "total vouchers",
      amount: voucherCount,
      slug: `/vouchers/${company}/${id}`,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col px-20 py-10 gap-10">
      <div className="">
        <h2 className="text-5xl font-bold text-center pb-2">
          <span className="uppercase">{companyName}</span>
        </h2>
        <hr />
      </div>

      <div className="grid grid-cols-5 gap-x-4 justify-between">
        {invoicesData?.map((invoice) => (
          <div
            className="col capitalize border rounded flex justify-center items-center w-full h-[20vh] flex-col text-lg cursor-pointer hover:border-slate-500 dark:hover:border-white"
            key={invoice.name}
          >
            <Link
              href={invoice.slug}
              className="border w-full h-full flex justify-center items-center flex-col"
            >
              <span className="capitalize">{invoice.name}</span>
              {loader ? <Loader /> : <span>{invoice.amount}</span>}
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-end pt-2">
        <Link href={`/invoice/${company}/${id}/create`}>
          <Button className="flex gap-x-2 text-md capitalize">
            <span>
              <FaFileInvoice />
            </span>
            create invoice
          </Button>
        </Link>
      </div>
    </main>
  );
}

export default CompanyPage;
