"use client";

import React, { useState } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FaDownload } from "react-icons/fa";
import formatDate from "@/helpers/formatDate";
import axios from "axios";
import toast from "react-hot-toast";
import { Page, Text, View, Document } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import DLoadingSlips from "@/components/DLoadingSlips";
import DBills from "@/components/DBills";
import DVouchers from "@/components/DVouchers";
import DChallans from "@/components/DChallans";
import DLrs from "@/components/DLrs";

export default function Home() {
  const [fromDate, setFromDate] = useState<Date>();
  const [toDate, setToDate] = useState<Date>();
  const [invoiceType, setInvoiceType] = useState("");
  const [company, setCompany] = useState("");
  const [pdfState, setPdfState] = useState("");
  const [exData, setExData] = useState([]);

  const companies = [
    {
      href: "/companies/maa-saraswati-road-carriers/66376f17b752100159dc12d9",
      value: "maa-saraswati-road-carriers",
      title: "Maa Saraswati Road Carriers",
    },
    {
      href: "/companies/the-rising-freight-carriers/663770b3b752100159dc12db",
      value: "the-rising-freight-carriers",
      title: "The Rising Freight Carriers",
    },
    {
      href: "/companies/sharma-transport/663771e7b752100159dc12dd",
      value: "sharma-transport",
      title: "Sharma Transport",
    },
  ];

  const invoices = [
    {
      name: "Challan",
      value: "challans",
    },
    {
      name: "Bill",
      value: "bills",
    },
    {
      name: "Loading Slip",
      value: "loading-slips",
    },
    {
      name: "Voucher",
      value: "vouchers",
    },
    {
      name: "Lr",
      value: "lrs",
    },
  ];

  const handleExport = async () => {
    const fromD = formatDate(fromDate);
    const toD = formatDate(toDate);

    try {
      const response = await axios.post("/api/extract", {
        startDate: fromD,
        endDate: toD,
        invoiceType,
        company,
      });

      console.log(response.data);
      if (response.data) {
        console.log(response.data);
        setExData(response.data.transactions);
        setPdfState(invoiceType);
      }
    } catch (error) {
      toast.error("ERROR WHILE EXPORTING DATA FROM FRONTEND");
    }
  };

  return (
    <main className="flex min-h-screen flex-col px-20 py-10 gap-10">
      <div className="companies">
        <div className="">
          <h2 className="text-2xl pb-2 font-semibold">Dashboard</h2>
          <hr />
        </div>

        <div className="py-5 flex justify-between">
          {companies.map((company) => (
            <div
              className="w-[30%] border h-[20vh] flex justify-center items-center text-xl hover:border-slate-500 cursor-pointer text-white dark:hover:border-white rounded card-bg"
              key={company.title}
            >
              <Link
                href={company.href}
                className="w-full h-full flex justify-center items-center"
              >
                {company.title}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="data-exporter">
        {/* heading */}
        <div className="">
          <h2 className="text-2xl pb-2 font-semibold">Export data</h2>
          <hr />
        </div>

        {/* middle one  */}
        <div className="border rounded grid px-5 grid-cols-3 mt-5 py-5">
          {/* date  */}
          <div className="col-1 flex flex-col gap-4">
            <div className="from-date">
              <h3 className="pb-2">From</h3>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !fromDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {fromDate ? (
                      format(fromDate, "PPP")
                    ) : (
                      <span>Pick a From Date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={fromDate}
                    onSelect={setFromDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="to-date">
              <h3 className="pb-2">To</h3>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !toDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {toDate ? (
                      format(toDate, "PPP")
                    ) : (
                      <span>Pick a To Date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={toDate}
                    onSelect={setToDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* invoice selection  */}
          <div className="col-2">
            <h3 className="pb-2">Select Invoice type</h3>
            <RadioGroup defaultValue="bills" className="">
              {invoices.map((invoice) => (
                <div className="flex items-center space-x-2" key={invoice.name}>
                  <RadioGroupItem
                    value={invoice.value}
                    id={invoice.value}
                    onClick={() => {
                      setInvoiceType(invoice.value);
                    }}
                  />
                  <Label htmlFor={invoice.value}>{invoice.name}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* company-name  */}
          <div className="col-3">
            <h3 className="pb-2">Select Company</h3>
            <RadioGroup defaultValue="bills" className="">
              {companies.map((company) => (
                <div
                  className="flex items-center space-x-2"
                  key={company.value}
                >
                  <RadioGroupItem
                    value={company.value}
                    id={company.value}
                    onClick={() => setCompany(company.value)}
                  />
                  <Label htmlFor={company.value}>{company.title}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>

        {/* send button  */}
        <div className="flex justify-center pt-4">
          <Button className="flex gap-x-2 text-md" onClick={handleExport}>
            <span>
              <FaDownload />
            </span>
            Export
          </Button>
        </div>
      </div>

      <div className={`${pdfState === "loading-slips" ? "block" : "hidden"}`}>
        {exData && <DLoadingSlips exData={exData} />}
      </div>

      <div className={`${pdfState === "bills" ? "block" : "hidden"}`}>
        {exData && <DBills exData={exData} />}
      </div>

      <div className={`${pdfState === "vouchers" ? "block" : "hidden"}`}>
        {exData && <DVouchers exData={exData} />}
      </div>

      <div className={`${pdfState === "challans" ? "block" : "hidden"}`}>
        {exData && <DChallans exData={exData} />}
      </div>

      <div className={`${pdfState === "lrs" ? "block" : "hidden"}`}>
        {exData && <DLrs exData={exData} />}
      </div>
    </main>
  );
}
