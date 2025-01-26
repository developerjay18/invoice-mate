"use client";

import React, { useState, useEffect } from "react";
import ReactPDF from "@react-pdf/renderer";
import { Page, Text, View, Document, Image } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import toast from "react-hot-toast";
import axios from "axios";

const MyDocument = ({ image, afterVCN, beforeVCN, ...props }: any) => (
  <Document>
    <Page
      size="A4"
      style={{
        flexDirection: "column",
        padding: "15px",
        border: "10",
        borderColor: "skyblue",
      }}
    >
      {/* images and title  */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ width: "50%", paddingRight: 10 }}>
          <Image
            src={{
              uri: image,
              method: "GET",
              headers: { "Cache-Control": "no-cache" },
              body: "",
            }}
            style={{ width: "80px" }}
          />
        </View>

        <View
          style={{
            width: "50%",
            paddingLeft: 10,
            fontSize: "50px",
            textTransform: "uppercase",
            textAlign: "center",
            fontWeight: "extrabold",
          }}
        >
          <Text>Voucher</Text>
        </View>
      </View>

      {/* line 1  */}
      <View
        style={{
          marginTop: "40px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            width: "55%",
          }}
        >
          <Text style={{ fontWeight: "extrabold" }}>Paid To:</Text>
          <Text style={{ borderBottom: "1px", width: "75%" }}>
            {props.paidTo}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            width: "15%",
            marginLeft: "5px",
          }}
        >
          <Text style={{ fontWeight: "extrabold" }}>No:</Text>
          <Text style={{ borderBottom: "1px", width: "70%" }}>
            {props.voucherNum}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: "5px",
            width: "30%",
          }}
        >
          <Text style={{ fontWeight: "extrabold" }}>Date:</Text>
          <Text style={{ borderBottom: "1px" }}>{props.date}</Text>
        </View>
      </View>

      {/* line 2 */}
      <View
        style={{
          marginTop: "25px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            width: "100%",
          }}
        >
          <Text style={{ fontWeight: "extrabold" }}>Debit:</Text>
          <Text style={{ borderBottom: "1px", width: "90%" }}>
            {props.debit}
          </Text>
        </View>
      </View>

      {/* line 3  */}
      <View
        style={{
          marginTop: "25px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            width: "100%",
          }}
        >
          <Text style={{ fontWeight: "extrabold" }}>on A/C of:</Text>
          <Text
            style={{ borderBottom: "1px", width: "70%", marginLeft: "5px" }}
          >
            {beforeVCN}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            width: "100%",
          }}
        >
          <Text style={{ fontWeight: "extrabold" }}>Vehicle No:</Text>
          <Text
            style={{ borderBottom: "1px", width: "70%", marginLeft: "5px" }}
          >
            {afterVCN}
          </Text>
        </View>
      </View>

      {/* table  */}
      <View>
        <View
          style={{
            marginTop: "25px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text style={{ border: "1px", padding: "2px 7px", width: "80%" }}>
              Particulars
            </Text>
            <Text
              style={{
                border: "1px",
                padding: "2px 7px",
                borderLeft: "0px",
                width: "20%",
              }}
            >
              Rs.
            </Text>
          </View>
        </View>

        {/* items  */}
        {props.list?.map((item: any, index: any) => (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              minHeight: "250px",
            }}
            key={index}
          >
            <Text
              style={{
                border: "1px",
                borderTop: "0px",
                padding: "5px 7px",
                width: "80%",
              }}
            >
              {index + 1}. {item.particular}
            </Text>
            <Text
              style={{
                border: "1px",
                borderTop: "0px",
                borderLeft: "0px",
                padding: "5px 7px",
                width: "20%",
              }}
            >
              {item.rupees}.{item.paise}
            </Text>
          </View>
        ))}

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text
            style={{
              border: "1px",
              borderTop: "0px",
              padding: "2px 7px",
              width: "80%",
            }}
          >
            Total
          </Text>
          <Text
            style={{
              border: "1px",
              padding: "2px 7px",
              borderLeft: "0px",
              borderTop: "0px",
              width: "20%",
            }}
          >
            {props.total}
          </Text>
        </View>
      </View>

      {/* line 4 */}
      <View
        style={{
          marginTop: "25px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            width: "100%",
          }}
        >
          <Text style={{ fontWeight: "extrabold" }}>Authorised by:</Text>
          <Text style={{ borderBottom: "1px", width: "80%" }}>
            {props.authorisedBy}
          </Text>
        </View>
      </View>

      {/* line 5 */}
      <View
        style={{
          marginTop: "25px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            width: "100%",
          }}
        >
          <Text style={{ fontWeight: "extrabold" }}>Passed by:</Text>
          <Text style={{ borderBottom: "1px", width: "85%" }}>
            {props.passedBy}
          </Text>
        </View>
      </View>

      {/* line 6 */}
      <View
        style={{
          marginTop: "25px",
          display: "flex",
          flexDirection: "row",

          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              width: "100%",
            }}
          >
            <Text style={{ fontWeight: "extrabold" }}>
              Paid Cash/ Cheque/ Drawn No:
            </Text>
            <Text style={{ borderBottom: "1px", width: "100%" }}>
              {props.payment}
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              gap: "5px",
              width: "100%",
            }}
          >
            <Text style={{ fontWeight: "extrabold" }}>Date:</Text>
            <Text style={{ borderBottom: "1px" }}>{props.date}</Text>
          </View>
        </View>

        <View
          style={{
            border: "1px",
            display: "flex",
            justifyContent: "flex-end",
            padding: "2px 7px",
          }}
        >
          <Text style={{ textTransform: "capitalize" }}>
            Receiver&apos;s sign
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

function splitStringFromVCN(inputString: string) {
  const vcnIndex = inputString.indexOf("VCN");

  // If "VCN" is not found, return the full string as the only part
  if (vcnIndex === -1) {
    return [inputString];
  }

  // Split the string at the position where "VCN" starts, excluding "VCN"
  const beforeVCN = inputString.slice(0, vcnIndex);
  const afterVCN = inputString.slice(vcnIndex + 3); // Skip over "VCN" by adding 3 to the index

  return [beforeVCN, afterVCN];
}

function VoucherPrintingPage({ params }: any) {
  const company = params.company;
  const [beforeVCN, setBeforeVCN] = useState("");
  const [afterVCN, setAfterVCN] = useState("");
  const id = params.id;
  const voucherId = params.voucherId;
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
    paidTo: "",
    voucherNum: "",
    date: "",
    debit: "",
    onAccountOf: "",
    list: [
      {
        particular: "",
        rupees: "",
        paise: "",
      },
    ],
    total: "",
    authorisedBy: "",
    passedBy: "",
    payment: "",
    chequeNum: "",
    company: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("/api/vouchers/get-voucher", {
          voucherId: voucherId,
        });

        if (response.data.status === 200 && response.status === 200) {
          toast.success(response.data.message);
          const [beforeVCN, afterVCN] = splitStringFromVCN(
            response.data.voucher.onAccountOf
          );

          setBeforeVCN(beforeVCN);
          setAfterVCN(afterVCN);
          setEntry(response.data.voucher);
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
      <div className="">
        {beforeVCN}
        {afterVCN}
      </div>
      <PDFViewer className="min-h-[165vh] flex justify-center items-center">
        <MyDocument
          {...entry}
          image={imageUrl}
          afterVCN={afterVCN}
          beforeVCN={beforeVCN}
        />
      </PDFViewer>
    </main>
  );
}

export default VoucherPrintingPage;
