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
        <PDFViewer className="min-h-[120vh] w-full flex justify-center items-center">
          <Document>
            <Page
              size={"A2"}
              orientation="landscape"
              style={{
                flexDirection: "column",
                padding: "15px",
                fontSize: "15px",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  fontSize: "13px",
                  marginTop: "20px",
                  border: "2px",
                  padding: "2px 0",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                }}
              >
                <Text style={{ width: "7%", borderRight: "1px" }}>
                  loading slip no.
                </Text>
                <Text style={{ width: "5%", borderRight: "1px" }}>date</Text>
                <Text style={{ width: "11%", borderRight: "1px" }}>
                  main to
                </Text>
                <Text style={{ width: "7%", borderRight: "1px" }}>
                  truck number
                </Text>
                <Text style={{ width: "7%", borderRight: "1px" }}>from</Text>
                <Text style={{ width: "7%", borderRight: "1px" }}>to</Text>
                <Text style={{ width: "5%", borderRight: "1px" }}>rate</Text>
                <Text style={{ width: "7%", borderRight: "1px" }}>
                  gaurantee by
                </Text>
                <Text style={{ width: "7%", borderRight: "1px" }}>name</Text>
                <Text style={{ width: "7%", borderRight: "1px" }}>advance</Text>
                <Text style={{ width: "7%" }}>balance</Text>
              </View>

              {exData?.map((item: any, index) => (
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    fontSize: "13px",
                    border: "2px",
                    borderTop: "0px",
                    padding: "2px 0",
                    textTransform: "capitalize",
                  }}
                  key={index}
                >
                  <Text style={{ width: "7%", borderRight: "1px" }}>
                    {item?.loadingSlipNum}
                  </Text>
                  <Text style={{ width: "5%", borderRight: "1px" }}>
                    {item?.date}
                  </Text>
                  <Text style={{ width: "11%", borderRight: "1px" }}>
                    {item?.primaryTo}
                  </Text>
                  <Text style={{ width: "7%", borderRight: "1px" }}>
                    {item?.truckNum}
                  </Text>
                  <Text style={{ width: "7%", borderRight: "1px" }}>
                    {item?.from}
                  </Text>
                  <Text style={{ width: "7%", borderRight: "1px" }}>
                    {item?.to}
                  </Text>
                  <Text style={{ width: "5%", borderRight: "1px" }}>
                    {item?.rate}
                  </Text>
                  <Text style={{ width: "7%", borderRight: "1px" }}>
                    {item?.gauranteeBy}
                  </Text>
                  <Text style={{ width: "7%", borderRight: "1px" }}>
                    {item?.name}
                  </Text>
                  <Text style={{ width: "7%", borderRight: "1px" }}>
                    {item?.advance}
                  </Text>
                  <Text style={{ width: "7%" }}>{item?.balance}</Text>
                </View>
              ))}
            </Page>
          </Document>
        </PDFViewer>
      </div>

      <div className={`${pdfState === "bills" ? "block" : "hidden"}`}>
        <PDFViewer className="min-h-[120vh] w-full flex justify-center items-center">
          <Document>
            <Page
              size={"A2"}
              orientation="landscape"
              style={{
                flexDirection: "column",
                padding: "15px",
                fontSize: "15px",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  fontSize: "12px",
                  marginTop: "20px",
                  border: "2px",
                  padding: "2px 0",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                }}
              >
                <Text
                  style={{
                    width: "5%",
                    borderRight: "1px",
                    paddingLeft: "2px",
                  }}
                >
                  Bill no.
                </Text>
                <Text
                  style={{
                    width: "5%",
                    borderRight: "1px",
                    paddingLeft: "2px",
                  }}
                >
                  bill date
                </Text>
                <Text
                  style={{
                    width: "10%",
                    borderRight: "1px",
                    paddingLeft: "2px",
                  }}
                >
                  name
                </Text>
                <Text
                  style={{
                    width: "14%",
                    borderRight: "1px",
                    paddingLeft: "2px",
                  }}
                >
                  total
                </Text>

                {/* loops */}
                <Text
                  style={{
                    width: "5%",
                    borderRight: "1px",
                    paddingLeft: "2px",
                  }}
                >
                  s no.
                </Text>
                <Text
                  style={{
                    width: "5%",
                    borderRight: "1px",
                    paddingLeft: "2px",
                  }}
                >
                  date
                </Text>
                <Text
                  style={{
                    width: "5%",
                    borderRight: "1px",
                    paddingLeft: "2px",
                  }}
                >
                  cn no.
                </Text>
                <Text
                  style={{
                    width: "8%",
                    borderRight: "1px",
                    paddingLeft: "2px",
                  }}
                >
                  from
                </Text>
                <Text
                  style={{
                    width: "8%",
                    borderRight: "1px",
                    paddingLeft: "2px",
                  }}
                >
                  to
                </Text>
                <Text
                  style={{
                    width: "10%",
                    borderRight: "1px",
                    paddingLeft: "2px",
                  }}
                >
                  particular
                </Text>
                <Text
                  style={{
                    width: "5%",
                    borderRight: "1px",
                    paddingLeft: "2px",
                  }}
                >
                  weight
                </Text>
                <Text
                  style={{
                    width: "5%",
                    borderRight: "1px",
                    paddingLeft: "2px",
                  }}
                >
                  rate
                </Text>
                <Text
                  style={{
                    width: "5%",
                    borderRight: "1px",
                    paddingLeft: "2px",
                  }}
                >
                  amount
                </Text>
                <Text
                  style={{
                    width: "5%",
                    borderRight: "1px",
                    paddingLeft: "2px",
                  }}
                >
                  advance
                </Text>
                <Text style={{ width: "5%", paddingLeft: "4px" }}>balance</Text>
              </View>

              {/* loooped */}

              {exData?.map((item: any, index: number) => (
                <View key={index} style={{ margin: "4px 0" }}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      fontSize: "12px",
                      border: "2px",
                      padding: "2px 0",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                    }}
                  >
                    <Text
                      style={{
                        width: "5%",
                        borderRight: "1px",
                        paddingLeft: "2px",
                      }}
                    >
                      {item?.billNum}
                    </Text>
                    <Text
                      style={{
                        width: "5%",
                        borderRight: "1px",
                        paddingLeft: "2px",
                      }}
                    >
                      {item?.mainBillDate}
                    </Text>
                    <Text
                      style={{
                        width: "10%",
                        borderRight: "1px",
                        paddingLeft: "2px",
                      }}
                    >
                      {item?.name}
                    </Text>
                    <Text
                      style={{
                        width: "14%",
                        borderRight: "1px",
                        paddingLeft: "2px",
                      }}
                    >
                      {item?.total}
                    </Text>

                    {/* loops */}
                    <Text
                      style={{
                        width: "5%",
                        borderRight: "1px",
                        paddingLeft: "2px",
                      }}
                    ></Text>
                    <Text
                      style={{
                        width: "5%",
                        borderRight: "1px",
                        paddingLeft: "2px",
                      }}
                    ></Text>
                    <Text
                      style={{
                        width: "5%",
                        borderRight: "1px",
                        paddingLeft: "2px",
                      }}
                    ></Text>
                    <Text
                      style={{
                        width: "8%",
                        borderRight: "1px",
                        paddingLeft: "2px",
                      }}
                    ></Text>
                    <Text
                      style={{
                        width: "8%",
                        borderRight: "1px",
                        paddingLeft: "2px",
                      }}
                    ></Text>
                    <Text
                      style={{
                        width: "10%",
                        borderRight: "1px",
                        paddingLeft: "2px",
                      }}
                    ></Text>
                    <Text
                      style={{
                        width: "5%",
                        borderRight: "1px",
                        paddingLeft: "2px",
                      }}
                    ></Text>
                    <Text
                      style={{
                        width: "5%",
                        borderRight: "1px",
                        paddingLeft: "2px",
                      }}
                    ></Text>
                    <Text
                      style={{
                        width: "5%",
                        borderRight: "1px",
                        paddingLeft: "2px",
                      }}
                    ></Text>
                    <Text
                      style={{
                        width: "5%",
                        borderRight: "1px",
                        paddingLeft: "2px",
                      }}
                    ></Text>
                    <Text style={{ width: "5%", paddingLeft: "4px" }}></Text>
                  </View>

                  {item?.list?.map((innerItem: any, innerIndex: number) => (
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        fontSize: "12px",
                        border: "2px",
                        padding: "2px 0",
                        borderTop: "0px",
                        textTransform: "capitalize",
                        fontWeight: "bold",
                      }}
                      key={innerIndex}
                    >
                      <Text
                        style={{
                          width: "5%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      ></Text>
                      <Text
                        style={{
                          width: "5%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      ></Text>
                      <Text
                        style={{
                          width: "10%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      ></Text>
                      <Text
                        style={{
                          width: "14%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      ></Text>

                      {/* loops */}
                      <Text
                        style={{
                          width: "5%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {innerItem?.sNumber}
                      </Text>
                      <Text
                        style={{
                          width: "5%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {innerItem?.date}
                      </Text>
                      <Text
                        style={{
                          width: "5%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {innerItem?.cnNum}
                      </Text>
                      <Text
                        style={{
                          width: "8%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {innerItem?.from}
                      </Text>
                      <Text
                        style={{
                          width: "8%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {innerItem?.to}
                      </Text>
                      <Text
                        style={{
                          width: "10%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {innerItem?.particular}
                      </Text>
                      <Text
                        style={{
                          width: "5%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {innerItem?.weight}
                      </Text>
                      <Text
                        style={{
                          width: "5%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {innerItem?.rate}
                      </Text>
                      <Text
                        style={{
                          width: "5%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {innerItem?.amount}
                      </Text>
                      <Text
                        style={{
                          width: "5%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {innerItem?.advance}
                      </Text>
                      <Text style={{ width: "5%", paddingLeft: "4px" }}>
                        {innerItem?.balance}
                      </Text>
                    </View>
                  ))}
                </View>
              ))}
            </Page>
          </Document>
        </PDFViewer>
      </div>

      <div className={`${pdfState === "vouchers" ? "block" : "hidden"}`}>
        <PDFViewer className="min-h-[120vh] w-full flex justify-center items-center">
          <Document>
            <Page
              size={"A2"}
              orientation="landscape"
              style={{
                flexDirection: "column",
                padding: "15px",
                fontSize: "15px",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  fontSize: "12px",
                  marginTop: "20px",
                  border: "2px",
                  padding: "2px 0",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                }}
              >
                <Text
                  style={{
                    width: "5%",
                    borderRight: "1px",
                    paddingLeft: "2px",
                  }}
                >
                  paid to
                </Text>
                <Text
                  style={{
                    width: "5%",
                    borderRight: "1px",
                    paddingLeft: "2px",
                  }}
                >
                  voucher no.
                </Text>
                <Text
                  style={{
                    width: "5%",
                    borderRight: "1px",
                    paddingLeft: "2px",
                  }}
                >
                  date
                </Text>
                <Text
                  style={{
                    width: "10%",
                    borderRight: "1px",
                    paddingLeft: "2px",
                  }}
                >
                  debit
                </Text>
                <Text
                  style={{
                    width: "10%",
                    borderRight: "1px",
                    paddingLeft: "2px",
                  }}
                >
                  on account of
                </Text>
                <Text
                  style={{
                    width: "5%",
                    borderRight: "1px",
                    paddingLeft: "2px",
                  }}
                >
                  total
                </Text>
                <Text
                  style={{
                    width: "10%",
                    borderRight: "1px",
                    paddingLeft: "2px",
                  }}
                >
                  authorised by
                </Text>
                <Text
                  style={{
                    width: "10%",
                    borderRight: "1px",
                    paddingLeft: "2px",
                  }}
                >
                  passed by
                </Text>
                <Text
                  style={{
                    width: "5%",
                    borderRight: "1px",
                    paddingLeft: "2px",
                  }}
                >
                  payment
                </Text>
                <Text
                  style={{
                    width: "5%",
                    borderRight: "1px",
                    paddingLeft: "2px",
                  }}
                >
                  check no.
                </Text>
                <Text
                  style={{
                    width: "10%",
                    borderRight: "1px",
                    paddingLeft: "2px",
                  }}
                >
                  particular
                </Text>
                <Text
                  style={{
                    width: "5%",
                    borderRight: "1px",
                    paddingLeft: "2px",
                  }}
                >
                  rupees
                </Text>
                <Text
                  style={{
                    width: "5%",

                    paddingLeft: "2px",
                  }}
                >
                  paise
                </Text>
              </View>

              {/* looped one */}
              {exData?.map((item: any, index: number) => (
                <View style={{ margin: "4px 0" }} key={index}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      fontSize: "12px",
                      borderTop: "0px",
                      border: "2px",
                      padding: "2px 0",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                    }}
                  >
                    <Text
                      style={{
                        width: "5%",
                        borderRight: "1px",
                        paddingLeft: "2px",
                      }}
                    >
                      {item?.paidTo}
                    </Text>
                    <Text
                      style={{
                        width: "5%",
                        borderRight: "1px",
                        paddingLeft: "2px",
                      }}
                    >
                      {item?.voucherNum}
                    </Text>
                    <Text
                      style={{
                        width: "5%",
                        borderRight: "1px",
                        paddingLeft: "2px",
                      }}
                    >
                      {item?.date}
                    </Text>
                    <Text
                      style={{
                        width: "10%",
                        borderRight: "1px",
                        paddingLeft: "2px",
                      }}
                    >
                      {item?.debit}
                    </Text>
                    <Text
                      style={{
                        width: "10%",
                        borderRight: "1px",
                        paddingLeft: "2px",
                      }}
                    >
                      {item?.onAccountOf}
                    </Text>
                    <Text
                      style={{
                        width: "5%",
                        borderRight: "1px",
                        paddingLeft: "2px",
                      }}
                    >
                      {item?.total}
                    </Text>
                    <Text
                      style={{
                        width: "10%",
                        borderRight: "1px",
                        paddingLeft: "2px",
                      }}
                    >
                      {item?.authorisedBy}
                    </Text>
                    <Text
                      style={{
                        width: "10%",
                        borderRight: "1px",
                        paddingLeft: "2px",
                      }}
                    >
                      {item?.passedBy}
                    </Text>
                    <Text
                      style={{
                        width: "5%",
                        borderRight: "1px",
                        paddingLeft: "2px",
                      }}
                    >
                      {item?.payment}
                    </Text>
                    <Text
                      style={{
                        width: "5%",
                        borderRight: "1px",
                        paddingLeft: "2px",
                      }}
                    >
                      {item?.chequeNum}
                    </Text>
                    <Text
                      style={{
                        width: "10%",
                        borderRight: "1px",
                        paddingLeft: "2px",
                      }}
                    ></Text>
                    <Text
                      style={{
                        width: "5%",
                        borderRight: "1px",
                        paddingLeft: "2px",
                      }}
                    ></Text>
                    <Text
                      style={{
                        width: "5%",

                        paddingLeft: "2px",
                      }}
                    ></Text>
                  </View>

                  {item?.list?.map((innerItem: any, innerIndex: number) => (
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        fontSize: "12px",
                        border: "2px",
                        borderTop: "0px",
                        padding: "2px 0",
                        textTransform: "capitalize",
                        fontWeight: "bold",
                      }}
                      key={innerIndex}
                    >
                      <Text
                        style={{
                          width: "5%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      ></Text>
                      <Text
                        style={{
                          width: "5%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      ></Text>
                      <Text
                        style={{
                          width: "5%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      ></Text>
                      <Text
                        style={{
                          width: "10%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      ></Text>
                      <Text
                        style={{
                          width: "10%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      ></Text>
                      <Text
                        style={{
                          width: "5%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      ></Text>
                      <Text
                        style={{
                          width: "10%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      ></Text>
                      <Text
                        style={{
                          width: "10%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      ></Text>
                      <Text
                        style={{
                          width: "5%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      ></Text>
                      <Text
                        style={{
                          width: "5%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      ></Text>
                      <Text
                        style={{
                          width: "10%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {innerItem?.particular}
                      </Text>
                      <Text
                        style={{
                          width: "5%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {innerItem?.rupees}
                      </Text>
                      <Text
                        style={{
                          width: "5%",

                          paddingLeft: "2px",
                        }}
                      >
                        {innerItem?.paise}
                      </Text>
                    </View>
                  ))}
                </View>
              ))}
            </Page>
          </Document>
        </PDFViewer>
      </div>

      <div className={`${pdfState === "challans" ? "block" : "hidden"}`}>
        <PDFViewer className="min-h-[120vh] w-full flex justify-center items-center">
          <Document>
            <Page
              size={"A2"}
              orientation="landscape"
              style={{
                flexDirection: "column",
                padding: "15px",
                fontSize: "15px",
              }}
            >
              {/* main looper */}

              {exData?.map((item: any, index: number) => (
                <View style={{ margin: "4px 0" }} key={index}>
                  {/* sub top looper */}
                  <View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        fontSize: "12px",
                        marginTop: "20px",
                        border: "2px",
                        padding: "2px 0",
                        textTransform: "capitalize",
                        fontWeight: "bold",
                      }}
                    >
                      <Text
                        style={{
                          width: "6%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        challan no.
                      </Text>
                      <Text
                        style={{
                          width: "6%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        main date
                      </Text>
                      <Text
                        style={{
                          width: "6%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        from
                      </Text>
                      <Text
                        style={{
                          width: "6%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        to
                      </Text>
                      <Text
                        style={{
                          width: "6%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        vehicle no.
                      </Text>
                      <Text
                        style={{
                          width: "6%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        owners name
                      </Text>
                      <Text
                        style={{
                          width: "6%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        drivers name
                      </Text>
                      <Text
                        style={{
                          width: "6%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        pan no.
                      </Text>
                      <Text
                        style={{
                          width: "6%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        commission
                      </Text>
                      <Text
                        style={{
                          width: "6%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        refund
                      </Text>
                      <Text
                        style={{
                          width: "6%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        hamali
                      </Text>
                      <Text
                        style={{
                          width: "6%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        other
                      </Text>
                      <Text
                        style={{
                          width: "6%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        munsyana and payment
                      </Text>
                      <Text
                        style={{
                          width: "6%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        total
                      </Text>
                      <Text
                        style={{
                          width: "16%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        text area calculation
                      </Text>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        fontSize: "12px",
                        border: "2px",
                        borderTop: "0px",
                        padding: "2px 0",
                        textTransform: "capitalize",
                        fontWeight: "bold",
                      }}
                    >
                      <Text
                        style={{
                          width: "6%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {item?.challanNum}
                      </Text>
                      <Text
                        style={{
                          width: "6%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {item?.mainBillDate}
                      </Text>
                      <Text
                        style={{
                          width: "6%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {item?.from}
                      </Text>
                      <Text
                        style={{
                          width: "6%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {item?.to}
                      </Text>
                      <Text
                        style={{
                          width: "6%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {item?.vehicleNum}
                      </Text>
                      <Text
                        style={{
                          width: "6%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {item?.ownersName}
                      </Text>
                      <Text
                        style={{
                          width: "6%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {item?.driversName}
                      </Text>
                      <Text
                        style={{
                          width: "6%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {item?.panNum}
                      </Text>
                      <Text
                        style={{
                          width: "6%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {item?.commission}
                      </Text>
                      <Text
                        style={{
                          width: "6%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {item?.refund}
                      </Text>
                      <Text
                        style={{
                          width: "6%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {item?.hamali}
                      </Text>
                      <Text
                        style={{
                          width: "6%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {item?.other}
                      </Text>
                      <Text
                        style={{
                          width: "6%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {item?.munsyanaAndPayment}
                      </Text>
                      <Text
                        style={{
                          width: "6%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {item?.total}
                      </Text>
                      <Text
                        style={{
                          width: "16%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {item?.textAreaCalc}
                      </Text>
                    </View>
                  </View>

                  {/* sub bottom looper */}
                  <View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        fontSize: "12px",
                        border: "2px",
                        borderTop: "0px",
                        padding: "2px 0",
                        textTransform: "capitalize",
                        fontWeight: "bold",
                      }}
                    >
                      <Text
                        style={{
                          width: "11%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        date
                      </Text>
                      <Text
                        style={{
                          width: "11%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        GC note no.
                      </Text>
                      <Text
                        style={{
                          width: "11%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        pkgs
                      </Text>
                      <Text
                        style={{
                          width: "12%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        description
                      </Text>
                      <Text
                        style={{
                          width: "11%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        consignor
                      </Text>
                      <Text
                        style={{
                          width: "11%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        consignee
                      </Text>
                      <Text
                        style={{
                          width: "11%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        weight
                      </Text>
                      <Text
                        style={{
                          width: "11%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        rate
                      </Text>
                      <Text
                        style={{
                          width: "11%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        ccollection
                      </Text>
                    </View>

                    {item?.item?.map((innerItem: any, innerIndex: number) => (
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          fontSize: "12px",
                          border: "2px",
                          borderTop: "0px",
                          padding: "2px 0",
                          textTransform: "capitalize",
                          fontWeight: "bold",
                        }}
                        key={innerIndex}
                      >
                        <Text
                          style={{
                            width: "11%",
                            borderRight: "1px",
                            paddingLeft: "2px",
                          }}
                        >
                          {innerItem?.date}
                        </Text>
                        <Text
                          style={{
                            width: "11%",
                            borderRight: "1px",
                            paddingLeft: "2px",
                          }}
                        >
                          {innerItem?.gcNoteNum}
                        </Text>
                        <Text
                          style={{
                            width: "11%",
                            borderRight: "1px",
                            paddingLeft: "2px",
                          }}
                        >
                          {innerItem?.pkgs}
                        </Text>
                        <Text
                          style={{
                            width: "12%",
                            borderRight: "1px",
                            paddingLeft: "2px",
                          }}
                        >
                          {innerItem?.description}
                        </Text>
                        <Text
                          style={{
                            width: "11%",
                            borderRight: "1px",
                            paddingLeft: "2px",
                          }}
                        >
                          {innerItem?.consignor}
                        </Text>
                        <Text
                          style={{
                            width: "11%",
                            borderRight: "1px",
                            paddingLeft: "2px",
                          }}
                        >
                          {innerItem?.consignee}
                        </Text>
                        <Text
                          style={{
                            width: "11%",
                            borderRight: "1px",
                            paddingLeft: "2px",
                          }}
                        >
                          {innerItem?.weight}
                        </Text>
                        <Text
                          style={{
                            width: "11%",
                            borderRight: "1px",
                            paddingLeft: "2px",
                          }}
                        >
                          {innerItem?.rate}
                        </Text>
                        <Text
                          style={{
                            width: "11%",
                            borderRight: "1px",
                            paddingLeft: "2px",
                          }}
                        >
                          {innerItem?.ccollection}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
              ))}
            </Page>
          </Document>
        </PDFViewer>
      </div>

      <div className={`${pdfState === "lrs" ? "block" : "hidden"}`}>
        <PDFViewer className="min-h-[120vh] w-full flex justify-center items-center">
          <Document>
            <Page
              size={"A2"}
              orientation="landscape"
              style={{
                flexDirection: "column",
                padding: "15px",
                fontSize: "15px",
              }}
            >
              {/* main looper */}
              {exData?.map((item: any, index: number) => (
                <View style={{ margin: "4px 0" }} key={index}>
                  {/* outsider looper */}
                  <View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        fontSize: "12px",
                        marginTop: "20px",
                        border: "2px",
                        padding: "2px 0",
                        textTransform: "capitalize",
                        fontWeight: "bold",
                      }}
                    >
                      <Text
                        style={{
                          width: "7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        delivery at
                      </Text>
                      <Text
                        style={{
                          width: "7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        polic no.
                      </Text>
                      <Text
                        style={{
                          width: "7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        i date
                      </Text>
                      <Text
                        style={{
                          width: "7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        amount
                      </Text>
                      <Text
                        style={{
                          width: "7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        risk
                      </Text>
                      <Text
                        style={{
                          width: "7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        LR no.
                      </Text>
                      <Text
                        style={{
                          width: "7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        date
                      </Text>
                      <Text
                        style={{
                          width: "7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        truck no.
                      </Text>
                      <Text
                        style={{
                          width: "7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        consignors name
                      </Text>
                      <Text
                        style={{
                          width: "7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        consignors GST no.
                      </Text>
                      <Text
                        style={{
                          width: "7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        consignees name
                      </Text>
                      <Text
                        style={{
                          width: "7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        consignees GST no.
                      </Text>
                      <Text
                        style={{
                          width: "8%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        from
                      </Text>
                      <Text
                        style={{
                          width: "8%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        to
                      </Text>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        fontSize: "12px",
                        border: "2px",
                        borderTop: "0px",
                        padding: "2px 0",
                        textTransform: "capitalize",
                        fontWeight: "bold",
                      }}
                    >
                      <Text
                        style={{
                          width: "7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {item?.deliveryAt}
                      </Text>
                      <Text
                        style={{
                          width: "7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {item?.policeNo}
                      </Text>
                      <Text
                        style={{
                          width: "7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {item?.iDate}
                      </Text>
                      <Text
                        style={{
                          width: "7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {item?.amount}
                      </Text>
                      <Text
                        style={{
                          width: "7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {item?.risk}
                      </Text>
                      <Text
                        style={{
                          width: "7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {item?.lrNum}
                      </Text>
                      <Text
                        style={{
                          width: "7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {item?.date}
                      </Text>
                      <Text
                        style={{
                          width: "7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {item?.truckNum}
                      </Text>
                      <Text
                        style={{
                          width: "7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {item?.consignorsName}
                      </Text>
                      <Text
                        style={{
                          width: "7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {item?.consignorsGstNum}
                      </Text>
                      <Text
                        style={{
                          width: "7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {item?.consigneesName}
                      </Text>
                      <Text
                        style={{
                          width: "7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {item?.consigneesGstNum}
                      </Text>
                      <Text
                        style={{
                          width: "8%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {item?.from}
                      </Text>
                      <Text
                        style={{
                          width: "8%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        {item?.to}
                      </Text>
                    </View>
                  </View>

                  {/* insider looper */}
                  <View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        fontSize: "12px",
                        border: "2px",
                        borderTop: "0px",
                        padding: "2px 0",
                        textTransform: "capitalize",
                        fontWeight: "bold",
                      }}
                    >
                      <Text
                        style={{
                          width: "4.7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        package
                      </Text>
                      <Text
                        style={{
                          width: "4.7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        content
                      </Text>
                      <Text
                        style={{
                          width: "4.7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        actual Weight
                      </Text>
                      <Text
                        style={{
                          width: "4.7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        charge Weight
                      </Text>
                      <Text
                        style={{
                          width: "4.7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        value
                      </Text>
                      <Text
                        style={{
                          width: "4.7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        first Freight Paid
                      </Text>
                      <Text
                        style={{
                          width: "4.7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        first Freight To Be Paid
                      </Text>
                      <Text
                        style={{
                          width: "4.7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        service Tax
                      </Text>
                      <Text
                        style={{
                          width: "4.7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        TDS Paid
                      </Text>
                      <Text
                        style={{
                          width: "4.7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        TDS to be paid
                      </Text>
                      <Text
                        style={{
                          width: "4.7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        hemali Paid
                      </Text>
                      <Text
                        style={{
                          width: "4.7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        hemali To Be Paid
                      </Text>
                      <Text
                        style={{
                          width: "4.7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        advance Paid
                      </Text>
                      <Text
                        style={{
                          width: "4.7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        advance To Be Paid
                      </Text>
                      <Text
                        style={{
                          width: "4.7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        statarical Paid
                      </Text>
                      <Text
                        style={{
                          width: "4.7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        statarical To Be Paid
                      </Text>
                      <Text
                        style={{
                          width: "4.7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        odCharge Paid
                      </Text>
                      <Text
                        style={{
                          width: "4.7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        odCharge To Be Paid
                      </Text>
                      <Text
                        style={{
                          width: "4.7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        gr Total Paid
                      </Text>
                      <Text
                        style={{
                          width: "4.7%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        gr Total To Be Paid
                      </Text>
                      <Text
                        style={{
                          width: "6%",
                          borderRight: "1px",
                          paddingLeft: "2px",
                        }}
                      >
                        remarks
                      </Text>
                    </View>

                    {item?.list?.map((innerItem: any, innerIndex: number) => (
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          fontSize: "12px",
                          border: "2px",
                          borderTop: "0px",
                          padding: "2px 0",
                          textTransform: "capitalize",
                          fontWeight: "bold",
                        }}
                        key={innerIndex}
                      >
                        <Text
                          style={{
                            width: "4.7%",
                            borderRight: "1px",
                            paddingLeft: "2px",
                          }}
                        >
                          {innerItem?.package}
                        </Text>
                        <Text
                          style={{
                            width: "4.7%",
                            borderRight: "1px",
                            paddingLeft: "2px",
                          }}
                        >
                          {innerItem?.content}
                        </Text>
                        <Text
                          style={{
                            width: "4.7%",
                            borderRight: "1px",
                            paddingLeft: "2px",
                          }}
                        >
                          {innerItem?.actualWeight}
                        </Text>
                        <Text
                          style={{
                            width: "4.7%",
                            borderRight: "1px",
                            paddingLeft: "2px",
                          }}
                        >
                          {innerItem?.chargeWeight}
                        </Text>
                        <Text
                          style={{
                            width: "4.7%",
                            borderRight: "1px",
                            paddingLeft: "2px",
                          }}
                        >
                          {innerItem?.value}
                        </Text>
                        <Text
                          style={{
                            width: "4.7%",
                            borderRight: "1px",
                            paddingLeft: "2px",
                          }}
                        >
                          {innerItem?.firstFreightPaid}
                        </Text>
                        <Text
                          style={{
                            width: "4.7%",
                            borderRight: "1px",
                            paddingLeft: "2px",
                          }}
                        >
                          {innerItem?.firstFreightToBePaid}
                        </Text>
                        <Text
                          style={{
                            width: "4.7%",
                            borderRight: "1px",
                            paddingLeft: "2px",
                          }}
                        >
                          {innerItem?.serviceTax}
                        </Text>
                        <Text
                          style={{
                            width: "4.7%",
                            borderRight: "1px",
                            paddingLeft: "2px",
                          }}
                        >
                          {innerItem?.tdsPaid}
                        </Text>
                        <Text
                          style={{
                            width: "4.7%",
                            borderRight: "1px",
                            paddingLeft: "2px",
                          }}
                        >
                          {innerItem?.tdsToBePaid}
                        </Text>
                        <Text
                          style={{
                            width: "4.7%",
                            borderRight: "1px",
                            paddingLeft: "2px",
                          }}
                        >
                          {innerItem?.hemaliPaid}
                        </Text>
                        <Text
                          style={{
                            width: "4.7%",
                            borderRight: "1px",
                            paddingLeft: "2px",
                          }}
                        >
                          {innerItem?.hemaliToBePaid}
                        </Text>
                        <Text
                          style={{
                            width: "4.7%",
                            borderRight: "1px",
                            paddingLeft: "2px",
                          }}
                        >
                          {innerItem?.advancePaid}
                        </Text>
                        <Text
                          style={{
                            width: "4.7%",
                            borderRight: "1px",
                            paddingLeft: "2px",
                          }}
                        >
                          {innerItem?.advanceToBePaid}
                        </Text>
                        <Text
                          style={{
                            width: "4.7%",
                            borderRight: "1px",
                            paddingLeft: "2px",
                          }}
                        >
                          {innerItem?.stataricalPaid}
                        </Text>
                        <Text
                          style={{
                            width: "4.7%",
                            borderRight: "1px",
                            paddingLeft: "2px",
                          }}
                        >
                          {innerItem?.stataricalToBePaid}
                        </Text>
                        <Text
                          style={{
                            width: "4.7%",
                            borderRight: "1px",
                            paddingLeft: "2px",
                          }}
                        >
                          {innerItem?.odChargePaid}
                        </Text>
                        <Text
                          style={{
                            width: "4.7%",
                            borderRight: "1px",
                            paddingLeft: "2px",
                          }}
                        >
                          {innerItem?.odChargeToBePaid}
                        </Text>
                        <Text
                          style={{
                            width: "4.7%",
                            borderRight: "1px",
                            paddingLeft: "2px",
                          }}
                        >
                          {innerItem?.grTotalPaid}
                        </Text>
                        <Text
                          style={{
                            width: "4.7%",
                            borderRight: "1px",
                            paddingLeft: "2px",
                          }}
                        >
                          {innerItem?.grTotalToBePaid}
                        </Text>
                        <Text
                          style={{
                            width: "6%",
                            borderRight: "1px",
                            paddingLeft: "2px",
                          }}
                        >
                          {innerItem?.remarks}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
              ))}
            </Page>
          </Document>
        </PDFViewer>
      </div>
    </main>
  );
}
