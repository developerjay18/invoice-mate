"use client";

import React from "react";
import { Page, Text, View, Document } from "@react-pdf/renderer";
// import { PDFViewer } from "@react-pdf/renderer";

import dynamic from "next/dynamic";
const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
  }
);


const DChallans = ({ exData }: any) => {
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
  );
};

export default DChallans;
