"use client";

import React, { useState, useEffect } from "react";
import ReactPDF from "@react-pdf/renderer";
import { Page, Text, View, Document, Image } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import toast from "react-hot-toast";
import axios from "axios";

const MyDocument = ({ companyData, companyName, image, ...props }: any) => (
  <Document>
    <Page
      size={"A4"}
      orientation="landscape"
      style={{
        flexDirection: "column",
        padding: "15px",
        border: "5",
        borderColor: "red",
        color: "red",
        fontSize: "15px",
      }}
    >
      {/* upper column  */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          fontSize: "13px",
          marginTop: "20px",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "70%",
            border: "1px",
            borderRadius: "6px",
            borderColor: "red",
            padding: "5px",
            gap: "10px",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              fontSize: "13px",
            }}
          >
            <Text>Subject to Ahmedabad Jurisdiction</Text>
            <Text style={{ fontSize: "10px" }}>||shree ganeshaya namah||</Text>
            <Text>
              {companyData.gstNum ? "GSTIN: " : "MSME: "}{" "}
              {companyData.gstNum ? companyData.gstNum : companyData.msmeNum}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image
              src={{
                uri: image,
                method: "GET",
                headers: { "Cache-Control": "no-cache" },
                body: "",
              }}
              style={{ width: "65px" }}
            />
            <Text style={{ fontSize: "35px", textTransform: "capitalize" }}>
              {companyName}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "18px",
            }}
          >
            <Text style={{ textAlign: "center" }}>
              TRANSPORT CONTRACTOR & COMMISSION AGENTS
            </Text>
            <Text style={{ textAlign: "center", textTransform: "capitalize" }}>
              {companyData.address}
            </Text>
            <Text style={{ textAlign: "center", padding: "7px 0" }}>
              Mo. {companyData.mobileNum[0]}, {companyData.mobileNum[1]}
            </Text>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: "30%",
            border: "1px",
            borderRadius: "6px",
            borderColor: "red",
            gap: "8px",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              borderBottom: "1px solid red",
              padding: "5px",
            }}
          >
            <Text>Bill No: {props.billNum}</Text>
            <Text>Date : {props.mainBillDate}</Text>
          </View>
          <View
            style={{
              padding: "5px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ width: "12%" }}>M/s.</Text>
            <View
              style={{
                width: "88%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "35px",
              }}
            >
              <Text style={{ borderBottom: "1px solid red" }}>
                {props.name}
              </Text>
              <Text style={{ borderBottom: "1px solid red" }}></Text>
              <Text style={{ borderBottom: "1px solid red" }}></Text>
            </View>
          </View>
        </View>
      </View>

      {/* middle column  */}
      <View style={{ marginTop: "5px" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            fontSize: "13px",
            border: "1px solid red",
            borderRadius: "4px",
            marginTop: "5px",
            minHeight: "30px",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              borderRight: "1px solid red",
              width: "5%",
              padding: "5px",
            }}
          >
            S.No.
          </Text>
          <Text
            style={{
              textAlign: "center",
              borderRight: "1px solid red",
              width: "10%",
              padding: "5px",
            }}
          >
            Date
          </Text>
          <Text
            style={{
              textAlign: "center",
              borderRight: "1px solid red",
              width: "10%",
              padding: "5px",
            }}
          >
            C/N NO.
          </Text>
          <Text
            style={{
              textAlign: "center",
              borderRight: "1px solid red",
              width: "10%",
              padding: "5px",
            }}
          >
            From
          </Text>
          <Text
            style={{
              textAlign: "center",
              borderRight: "1px solid red",
              width: "10%",
              padding: "5px",
            }}
          >
            To
          </Text>
          <Text
            style={{
              textAlign: "center",
              borderRight: "1px solid red",
              width: "10%",
              padding: "5px",
            }}
          >
            Particulars
          </Text>
          <Text
            style={{
              textAlign: "center",
              borderRight: "1px solid red",
              width: "10%",
              padding: "5px",
            }}
          >
            Weight
          </Text>
          <Text
            style={{
              textAlign: "center",
              borderRight: "1px solid red",
              width: "8%",
              padding: "5px",
            }}
          >
            Rate
          </Text>
          <Text
            style={{
              textAlign: "center",
              borderRight: "1px solid red",
              width: "7%",
              padding: "5px",
            }}
          >
            Amount
          </Text>
          <Text
            style={{
              textAlign: "center",
              borderRight: "1px solid red",
              width: "10%",
              padding: "5px",
            }}
          >
            Advance
          </Text>
          <Text
            style={{
              textAlign: "center",
              width: "10%",
              padding: "5px",
            }}
          >
            Balance
          </Text>
        </View>

        <View
          style={{
            border: "1px solid red",
            borderRadius: "4px",
            borderTop: "none",
            minHeight: "40%",
          }}
        >
          {props.list?.map((item: any, index: any) => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                fontSize: "13px",
              }}
              key={index}
            >
              <Text
                style={{
                  textAlign: "center",
                  width: "5%",
                  padding: "5px",
                }}
              >
                {item.sNumber}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  width: "10%",
                  padding: "5px",
                }}
              >
                {item.date}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  width: "10%",
                  padding: "5px",
                }}
              >
                {item.cnNum}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  width: "10%",
                  padding: "5px",
                }}
              >
                {item.from}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  width: "10%",
                  padding: "5px",
                }}
              >
                {item.to}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  width: "10%",
                  padding: "5px",
                }}
              >
                {item.particular}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  width: "10%",
                  padding: "5px",
                }}
              >
                {item.weight}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  width: "8%",
                  padding: "5px",
                }}
              >
                {item.rate}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  width: "7%",
                  padding: "5px",
                }}
              >
                {item.amount}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  width: "10%",
                  padding: "5px",
                }}
              >
                {item.advance}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  width: "10%",
                  padding: "5px",
                }}
              >
                {item.balance}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* lower column  */}
      <View style={{ display: "flex", flexDirection: "column" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            fontSize: "13px",
            border: "1px solid red",
            borderRadius: "4px",
            marginTop: "5px",
          }}
        >
          <Text style={{ padding: "5px" }}>Total {props.total}</Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            fontSize: "13px",
            border: "1px solid red",
            borderRadius: "4px",
            borderTop: "none",
            minHeight: "20%",
          }}
        >
          <View>
            <Text style={{ padding: "5px" }}>Remarks : GST Paid by Party</Text>
          </View>

          <View>
            <Text
              style={{
                padding: "5px",
                textAlign: "right",
                textTransform: "capitalize",
              }}
            >
              For, {companyName}
            </Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

function BillPrintingPage({ params }: any) {
  const company = params.company;
  const id = params.id;
  const billId = params.billId;
  const companyName = company.split("-").join(" ");
  let imageUrl = "";
  if (company === "maa-saraswati-road-carriers") {
    imageUrl =
      "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1715336031/lagf7vogijll9l40pnrp.png";
  } else if (company === "the-rising-freight-carriers") {
    imageUrl =
      "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1715337704/qheie9v0zm0izmy3jyhq.png";
  } else if (company === "sharma-transport") {
    imageUrl =
      "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1715337529/yfasfqzl6aweymkw4cdz.png";
  } else {
    imageUrl = "Invalid company";
  }

  const [entry, setEntry] = useState({
    billNum: "",
    mainBillDate: "",
    name: "",
    total: "",
    company: "",
    list: [
      {
        sNumber: "",
        date: "",
        cnNum: "",
        from: "",
        to: "",
        particular: "",
        weight: "",
        rate: "",
        amount: "",
        advance: "",
        balance: "",
      },
    ],
  });

  const [companyData, setCompanyData] = useState({
    mobileNum: [],
    address: "",
    gstNum: "",
    msmeNum: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("/api/bills/get-bill", {
          billId: billId,
        });

        const companyResponse = await axios.post("/api/companies/get-company", {
          companyId: id,
        });

        console.log(companyResponse);
        if (
          response.data.status === 200 &&
          response.status === 200 &&
          companyResponse.status === 200 &&
          companyResponse.data.status === 200
        ) {
          toast.success(companyResponse.data.message);
          toast.success(response.data.message);
          setEntry(response.data.bill);
          setCompanyData(companyResponse.data.company);
        } else {
          toast.error(response.data.error);
        }
      } catch (error: any) {
        toast.error(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col px-20 py-10 gap-10">
      <PDFViewer className="min-h-[120vh] flex justify-center items-center">
        <MyDocument
          {...entry}
          image={imageUrl}
          companyName={companyName}
          companyData={companyData}
        />
      </PDFViewer>
    </main>
  );
}

export default BillPrintingPage;
