"use client";

import React from "react";
import { Page, Text, View, Document } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";

const DLrs = ({ exData }: any) => {
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
  );
};

export default DLrs;
