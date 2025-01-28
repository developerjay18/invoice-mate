"use client";

import React from "react";
import { Page, Text, View, Document } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";

// import dynamic from "next/dynamic";
// const PDFViewer = dynamic(
//   () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
//   {
//     ssr: false,
//     loading: () => <p>Loading...</p>,
//   }
// );


const DLoadingSlips = ({ exData }: any) => {
  return (
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
            <Text style={{ width: "11%", borderRight: "1px" }}>main to</Text>
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

          {exData?.map((item: any, index: any) => (
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
  );
};

export default DLoadingSlips;
