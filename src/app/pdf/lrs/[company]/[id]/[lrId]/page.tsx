"use client";

import React, { useState, useEffect } from "react";
import { Page, Text, View, Document, Image } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import toast from "react-hot-toast";
import axios from "axios";

const MyDocument = ({
  type,
  companyData,
  companyName,
  image,
  ...props
}: any) => {
  if (props.policeNo && props.iDate && props.amount && props.risk) {
    return (
      <Document>
        <Page
          size={"A4"}
          orientation="landscape"
          style={{
            flexDirection: "column",
            padding: "15px",
            color: "red",
            fontSize: "13px",
          }}
        >
          {/* column 1  */}
          <View style={{ border: "1px solid red", padding: "5px" }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                fontSize: "10px",
              }}
            >
              <Text>Subject to Ahmedabad Jurisdiction</Text>
              <Text>CONSIGNMENT NOTE</Text>
              <Text>|| shree Ganeshaya Namah ||</Text>
              <Text>
                M: {companyData.mobileNum[0]}, {companyData.mobileNum[1]}
              </Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "3px",
              }}
            >
              <View style={{ width: "20%" }}>
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
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  width: "80%",
                }}
              >
                <Text
                  style={{
                    fontSize: "20px",
                    textTransform: "uppercase",
                    textAlign: "center",
                    margin: "0 auto",
                    width: "100%",
                  }}
                >
                  {companyName}
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    margin: "0 auto",
                    width: "100%",
                  }}
                >
                  TRANSPORT CONTRACT & COMMISSION AGENTS
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    margin: "0 auto",
                    padding: "0 7px",
                    width: "100%",
                  }}
                >
                  {companyData.address}
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    margin: "0 auto",
                    padding: "0 7px",
                    width: "100%",
                  }}
                >
                  {type} Copy
                </Text>
              </View>
            </View>
          </View>
          {/* column 2 */}
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View
              style={{
                width: "50%",
                border: "1px solid red",
                borderTop: "none",
              }}
            >
              <Text style={{ borderBottom: "1px solid red", padding: "5px" }}>
                Delivery At :{" "}
                <Text style={{ color: "black" }}>{props.deliveryAt}</Text>
              </Text>
              <Text style={{ fontSize: "10px", padding: "5px" }}>
                Notice: Consignments Covered by this set to special Lorry
                Receipt From shall be stored at the destination under the
                control of the Transport Operator and shall delivery to or to
                order of the consignee bank whose name is maintained in the
                receipt it will under not circumstances delivered without the
                written authority from the consignee bank or its order ensodes
                on the consignee copy or a separate US authority.
              </Text>
            </View>

            <View
              style={{
                width: "25%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid red",
                borderTop: "none",
                borderLeft: "none",
              }}
            >
              <Text
                style={{
                  borderBottom: "1px soid red",
                  width: "100%",
                  padding: "5px",
                  textAlign: "center",
                }}
              >
                INSURANCE
              </Text>

              <Text
                style={{
                  fontSize: "10px",
                  textAlign: "center",
                  padding: "3px",
                }}
              >
                The Customer has arated that The has Insured the consignment of
                he has insured the consignment Company.
              </Text>

              <View style={{ fontSize: "10px", width: "100%", padding: "5px" }}>
                {/* fisrt-row  */}
                <View
                  style={{ display: "flex", flexDirection: "row", gap: "7px" }}
                >
                  <View
                    style={{
                      width: "50%",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Text style={{ width: "50%" }}>Police No. </Text>
                    <Text
                      style={{
                        width: "50%",
                        borderBottom: "1px dotted red",
                        color: "black",
                      }}
                    >
                      {props.policeNo}
                    </Text>
                  </View>

                  <View
                    style={{
                      width: "50%",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Text style={{ width: "25%" }}>Date</Text>
                    <Text
                      style={{
                        width: "75%",
                        borderBottom: "1px dotted red",
                        color: "black",
                      }}
                    >
                      {props.iDate}
                    </Text>
                  </View>
                </View>

                {/* fisrt-row  */}
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "7px",
                    marginTop: "7px",
                  }}
                >
                  <View
                    style={{
                      width: "50%",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Text style={{ width: "50%" }}>Amount</Text>
                    <Text
                      style={{
                        width: "50%",
                        borderBottom: "1px dotted red",
                        color: "black",
                      }}
                    >
                      {props.amount}
                    </Text>
                  </View>

                  <View
                    style={{
                      width: "50%",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Text style={{ width: "25%" }}>Risk</Text>
                    <Text
                      style={{
                        width: "75%",
                        borderBottom: "1px dotted red",
                        color: "black",
                      }}
                    >
                      {props.risk}
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                width: "25%",
                border: "1px solid red",
                borderTop: "none",
                borderLeft: "0px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{ padding: "10px 5px", borderBottom: "1px solid red" }}
              >
                C/N <Text style={{ color: "black" }}>{props.lrNum}</Text>
              </Text>
              <Text
                style={{ padding: "10px 5px", borderBottom: "1px solid red" }}
              >
                Date: <Text style={{ color: "black" }}>{props.date}</Text>
              </Text>
              <Text style={{ padding: "10px 5px" }}>
                Truck No.:{" "}
                <Text style={{ color: "black" }}>{props.truckNum}</Text>
              </Text>
            </View>
          </View>
          {/* column 3 */}
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View
              style={{
                width: "75%",
                border: "1px solid red",
                borderTop: "none",
                padding: "5px",
                display: "flex",
                flexDirection: "column",
                gap: "3px",
                fontSize: "12px",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ width: "30%" }}>
                  Consignor&apos;s Name & Address
                </Text>
                <Text
                  style={{
                    width: "70%",
                    borderBottom: "1px solid red",
                    paddingLeft: "10px",
                    color: "black",
                  }}
                >
                  {props.consignorsName}
                </Text>
              </View>

              {/* new one  */}
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ width: "30%" }}>
                  Consignor&apos;s GST Number
                </Text>
                <Text
                  style={{
                    width: "70%",
                    borderBottom: "1px solid red",
                    paddingLeft: "10px",
                    color: "black",
                  }}
                >
                  {props.consignorsGstNum}
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                  marginTop: "7px",
                }}
              >
                <Text style={{ width: "35%" }}>
                  Consignee&apos;s Bank Name & Address
                </Text>
                <Text
                  style={{
                    width: "65%",
                    borderBottom: "1px solid red",
                    paddingLeft: "10px",
                    color: "black",
                  }}
                >
                  {props.consigneesName}
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                  marginTop: "7px",
                }}
              >
                <Text style={{ width: "30%" }}>
                  Consignee&apos;s GST Number
                </Text>
                <Text
                  style={{
                    width: "70%",
                    borderBottom: "1px solid red",
                    paddingLeft: "10px",
                    color: "black",
                  }}
                >
                  {props.consigneesGstNum}
                </Text>
              </View>
            </View>

            <View
              style={{
                width: "25%",
                border: "1px solid red",
                borderTop: "none",
                borderLeft: "opx",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ padding: "14px 5px" }}>
                From: <Text style={{ color: "black" }}>{props.from}</Text>
              </Text>
              <Text style={{ padding: "14px 5px" }}>
                To: <Text style={{ color: "black" }}>{props.to}</Text>
              </Text>
            </View>
          </View>

          {/* column 4 */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              border: "1px solid red",
              borderTop: "none",
            }}
          >
            <Text
              style={{
                width: "10%",
                padding: "3px",
                borderRight: "1px solid red",
                textAlign: "center",
              }}
            >
              Package
            </Text>
            <Text
              style={{
                width: "25%",
                padding: "3px",
                borderRight: "1px solid red",
                textAlign: "center",
              }}
            >
              Contents as said to be contents
            </Text>
            <View
              style={{
                width: "20%",
                borderRight: "1px solid red",
                textAlign: "center",
              }}
            >
              <Text style={{ borderBottom: "1px solid red", padding: "3px" }}>
                WEIGHT
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  fontSize: "10px",
                }}
              >
                <Text
                  style={{
                    width: "50%",
                    padding: "3px",
                    borderRight: "1px solid red",
                  }}
                >
                  Actual Kg Grm
                </Text>
                <Text style={{ width: "50%", padding: "3px" }}>
                  Charge Kg Grm
                </Text>
              </View>
            </View>
            <Text
              style={{
                width: "10%",
                padding: "3px",
                borderRight: "1px solid red",
                textAlign: "center",
              }}
            >
              Value
            </Text>
            <Text
              style={{
                width: "10%",
                fontSize: "13px",
                textAlign: "center",
                borderRight: "1px solid red",
              }}
            >
              Rate Per Kgs.
            </Text>
            <View
              style={{
                width: "20%",
                textAlign: "center",
                borderRight: "1px solid red",
              }}
            >
              <Text style={{ borderBottom: "1px solid red", padding: "3px" }}>
                FREIGHT
              </Text>
              <View
                style={{
                  fontSize: "10px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    width: "50%",
                    textAlign: "center",
                    padding: "3px",
                    fontSize: "8px",
                    borderRight: "1px solid red",
                  }}
                >
                  Paid/Billed Rs.ps
                </Text>
                <Text
                  style={{ width: "50%", textAlign: "center", padding: "3px" }}
                >
                  To Pay Rs.ps
                </Text>
              </View>
            </View>
            <Text style={{ width: "10%", textAlign: "center", padding: "3px" }}>
              Remarks
            </Text>
          </View>
          {/* column 5  */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              border: "1px solid red",
              borderTop: "none",
            }}
          >
            <Text
              style={{
                width: "10%",
                padding: "3px",
                borderRight: "1px solid red",
                textAlign: "center",
                color: "black",
              }}
            >
              {props.list[0].package}
            </Text>
            <Text
              style={{
                width: "25%",
                padding: "3px",
                borderRight: "1px solid red",
                textAlign: "center",
                color: "black",
              }}
            >
              {props.list[0].content}
            </Text>
            <View
              style={{
                width: "20%",
                borderRight: "1px solid red",
                textAlign: "center",
                display: "flex",
                flexDirection: "row",
                color: "black",
              }}
            >
              <Text style={{ width: "50%", borderRight: "1px solid red" }}>
                {props.list[0].actualWeight}
              </Text>
              <Text style={{ width: "50%" }}>{props.list[0].chargeWeight}</Text>
            </View>
            <Text
              style={{
                width: "10%",
                padding: "3px",
                borderRight: "1px solid red",
                textAlign: "center",
                color: "black",
              }}
            >
              {props.list[0].value}
            </Text>
            <View
              style={{
                width: "10%",
                fontSize: "13px",
                textAlign: "center",
                borderRight: "1px solid red",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                paddingTop: "5px",
              }}
            >
              <Text>First Frieght</Text>
              <Text>Serivce Tax</Text>
              <Text style={{ paddingTop: "1px" }}>T.D.S</Text>
              <Text style={{ paddingTop: "2px" }}>Hamali</Text>
              <Text style={{ paddingTop: "2px" }}>Advance</Text>
              <Text style={{ fontSize: "10px" }}>Statarical Charges</Text>
              <Text>O.D Charges</Text>
              <Text>Gr.Total</Text>
            </View>

            <View
              style={{
                width: "20%",
                textAlign: "center",
                borderRight: "1px solid red",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  borderBottom: "1px solid red",
                }}
              >
                <Text
                  style={{
                    width: "50%",
                    borderRight: "1px solid red",
                    padding: "3px",
                    color: "black",
                  }}
                >
                  {props.list[0].firstFreightPaid}
                </Text>
                <Text style={{ width: "50%", padding: "3px", color: "black" }}>
                  {props.list[0].firstFreightToBePaid}
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  borderBottom: "1px solid red",
                }}
              >
                <Text
                  style={{
                    width: "50%",
                    borderRight: "1px solid red",
                    padding: "3px",
                    color: "black",
                  }}
                >
                  {props.list[0].serviceTax}
                </Text>
                <Text
                  style={{ width: "50%", padding: "3px", color: "black" }}
                ></Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  borderBottom: "1px solid red",
                  color: "black",
                }}
              >
                <Text
                  style={{
                    width: "50%",
                    borderRight: "1px solid red",
                    padding: "3px",
                  }}
                >
                  {props.list[0].tdsPaid}
                </Text>
                <Text style={{ width: "50%", padding: "3px" }}>
                  {props.list[0].tdsToBePaid}
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  borderBottom: "1px solid red",
                  color: "black",
                }}
              >
                <Text
                  style={{
                    width: "50%",
                    borderRight: "1px solid red",
                    padding: "3px",
                  }}
                >
                  {props.list[0].hemaliPaid}
                </Text>
                <Text style={{ width: "50%", padding: "3px" }}>
                  {props.list[0].hemaliToBePaid}
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  borderBottom: "1px solid red",
                  color: "black",
                }}
              >
                <Text
                  style={{
                    width: "50%",
                    borderRight: "1px solid red",
                    padding: "3px",
                  }}
                >
                  {props.list[0].advancePaid}
                </Text>
                <Text style={{ width: "50%", padding: "3px" }}>
                  {props.list[0].advanceToBePaid}
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  borderBottom: "1px solid red",
                  paddingTop: "3px",
                  color: "black",
                }}
              >
                <Text
                  style={{
                    width: "50%",
                    borderRight: "1px solid red",
                    padding: "3px",
                  }}
                >
                  {props.list[0].stataricalPaid}
                </Text>
                <Text style={{ width: "50%", padding: "3px" }}>
                  {props.list[0].stataricalToBePaid}
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  borderBottom: "1px solid red",
                  color: "black",
                }}
              >
                <Text
                  style={{
                    width: "50%",
                    borderRight: "1px solid red",
                    padding: "3px",
                  }}
                >
                  {props.list[0].odChargePaid}
                </Text>
                <Text style={{ width: "50%", padding: "3px" }}>
                  {props.list[0].odChargeToBePaid}
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  color: "black",
                }}
              >
                <Text
                  style={{
                    width: "50%",
                    borderRight: "1px solid red",
                    padding: "3px",
                  }}
                >
                  {props.list[0].grTotalPaid}
                </Text>
                <Text style={{ width: "50%", padding: "3px" }}>
                  {props.list[0].grTotalToBePaid}
                </Text>
              </View>
            </View>
            <Text
              style={{
                width: "10%",
                textAlign: "center",
                padding: "3px",
                color: "black",
              }}
            >
              {props.list[0].remarks}
            </Text>
          </View>
          {/* column 6  */}
          <View
            style={{ display: "flex", flexDirection: "row", fontSize: "7px" }}
          >
            <View
              style={{
                width: "30%",
                border: "1px solid red",
                borderTop: "none",
                padding: "0 3px",
              }}
            >
              <Text style={{ padding: "3px 0" }}>
                Freight to be paid by Consignee / Consignor GST paid by Party
                Consignee / Consignor Cenvet credit has not been taken on duty
                paid on inputs and/or capital goods used for providing this
                transportation Service
              </Text>
              <Text
                style={{
                  padding: "3px 0",
                  textAlign: "center",
                  borderTop: "1px solid red",
                }}
              >
                GST PAID PARTY.
              </Text>
            </View>

            <View
              style={{
                width: "30%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "14px",
                gap: "5px",
                border: "1px solid red",
                borderTop: "none",
                borderLeft: "none",
              }}
            >
              <Text>GSTIN: {companyData.gstNum}</Text>
              <Text>PAN No.: {companyData.panNum}</Text>
            </View>

            <View
              style={{
                width: "40%",
                fontSize: "14px",
                padding: "3px",
                border: "1px solid red",
                borderLeft: "none",
                borderTop: "none",
              }}
            >
              <Text>
                Not Responsible for Leakage or Breakage Booking Office
              </Text>
            </View>
          </View>
        </Page>
      </Document>
    );
  } else {
    return (
      <Document>
        <Page
          size={"A4"}
          orientation="landscape"
          style={{
            flexDirection: "column",
            padding: "15px",
            color: "red",
            fontSize: "13px",
          }}
        >
          {/* column 1  */}
          <View style={{ border: "1px solid red", padding: "5px" }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                fontSize: "10px",
              }}
            >
              <Text>Subject to Ahmedabad Jurisdiction</Text>
              <Text>CONSIGNMENT NOTE</Text>
              <Text>|| shree Ganeshaya Namah ||</Text>
              <Text>
                M: {companyData.mobileNum[0]}, {companyData.mobileNum[1]}
              </Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "3px",
              }}
            >
              <View style={{ width: "20%" }}>
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
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  width: "80%",
                }}
              >
                <Text
                  style={{
                    fontSize: "20px",
                    textTransform: "uppercase",
                    textAlign: "center",
                    margin: "0 auto",
                    width: "100%",
                  }}
                >
                  {companyName}
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    margin: "0 auto",
                    width: "100%",
                  }}
                >
                  TRANSPORT CONTRACT & COMMISSION AGENTS
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    margin: "0 auto",
                    padding: "0 7px",
                    width: "100%",
                  }}
                >
                  {companyData.address}
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    margin: "0 auto",
                    padding: "0 7px",
                    width: "100%",
                  }}
                >
                  {type} Copy
                </Text>
              </View>
            </View>
          </View>
          {/* column 2 */}
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View
              style={{
                width: "50%",
                border: "1px solid red",
                borderTop: "none",
              }}
            >
              <Text style={{ borderBottom: "1px solid red", padding: "5px" }}>
                Delivery At :{" "}
                <Text style={{ color: "black" }}>{props.deliveryAt}</Text>
              </Text>
              <Text style={{ fontSize: "10px", padding: "5px" }}>
                Notice: Consignments Covered by this set to special Lorry
                Receipt From shall be stored at the destination under the
                control of the Transport Operator and shall delivery to or to
                order of the consignee bank whose name is maintained in the
                receipt it will under not circumstances delivered without the
                written authority from the consignee bank or its order ensodes
                on the consignee copy or a separate US authority.
              </Text>
            </View>

            <View
              style={{
                width: "25%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid red",
                borderTop: "none",
                borderLeft: "none",
                position: "relative",
              }}
            >
              <Text
                style={{
                  borderBottom: "1px soid red",
                  width: "100%",
                  padding: "5px",
                  textAlign: "center",
                }}
              >
                INSURANCE
              </Text>

              <Text
                style={{
                  fontSize: "10px",
                  textAlign: "center",
                  padding: "3px",
                }}
              >
                The Customer has arated that The has Insured the consignment of
                he has insured the consignment Company.
              </Text>

              <View style={{ fontSize: "10px", width: "100%", padding: "5px" }}>
                {/* fisrt-row  */}
                <View
                  style={{ display: "flex", flexDirection: "row", gap: "7px" }}
                >
                  <View
                    style={{
                      width: "50%",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Text style={{ width: "50%" }}>Police No. </Text>
                    <Text
                      style={{
                        width: "50%",
                        borderBottom: "1px dotted red",
                        color: "black",
                      }}
                    >
                      {props.policeNo}
                    </Text>
                  </View>

                  <View
                    style={{
                      width: "50%",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Text style={{ width: "25%" }}>Date</Text>
                    <Text
                      style={{
                        width: "75%",
                        borderBottom: "1px dotted red",
                        color: "black",
                      }}
                    >
                      {props.iDate}
                    </Text>
                  </View>
                </View>

                {/* fisrt-row  */}
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "7px",
                    marginTop: "7px",
                  }}
                >
                  <View
                    style={{
                      width: "50%",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Text style={{ width: "50%" }}>Amount</Text>
                    <Text
                      style={{
                        width: "50%",
                        borderBottom: "1px dotted red",
                        color: "black",
                      }}
                    >
                      {props.amount}
                    </Text>
                  </View>

                  <View
                    style={{
                      width: "50%",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Text style={{ width: "25%" }}>Risk</Text>
                    <Text
                      style={{
                        width: "75%",
                        borderBottom: "1px dotted red",
                        color: "black",
                      }}
                    >
                      {props.risk}
                    </Text>
                  </View>
                </View>
              </View>

              <Text
                style={{
                  color: "black",
                  fontSize: "40px",
                  position: "absolute",
                  top: "40",
                }}
              >
                O/R
              </Text>
            </View>

            <View
              style={{
                width: "25%",
                border: "1px solid red",
                borderTop: "none",
                borderLeft: "0px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{ padding: "10px 5px", borderBottom: "1px solid red" }}
              >
                C/N <Text style={{ color: "black" }}>{props.lrNum}</Text>
              </Text>
              <Text
                style={{ padding: "10px 5px", borderBottom: "1px solid red" }}
              >
                Date: <Text style={{ color: "black" }}>{props.date}</Text>
              </Text>
              <Text style={{ padding: "10px 5px" }}>
                Truck No.:{" "}
                <Text style={{ color: "black" }}>{props.truckNum}</Text>
              </Text>
            </View>
          </View>
          {/* column 3 */}
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View
              style={{
                width: "75%",
                border: "1px solid red",
                borderTop: "none",
                padding: "5px",
                display: "flex",
                flexDirection: "column",
                gap: "3px",
                fontSize: "12px",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ width: "30%" }}>
                  Consignor&apos;s Name & Address
                </Text>
                <Text
                  style={{
                    width: "70%",
                    borderBottom: "1px solid red",
                    paddingLeft: "10px",
                    color: "black",
                  }}
                >
                  {props.consignorsName}
                </Text>
              </View>

              {/* new one  */}
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ width: "30%" }}>
                  Consignor&apos;s GST Number
                </Text>
                <Text
                  style={{
                    width: "70%",
                    borderBottom: "1px solid red",
                    paddingLeft: "10px",
                    color: "black",
                  }}
                >
                  {props.consignorsGstNum}
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                  marginTop: "7px",
                }}
              >
                <Text style={{ width: "35%" }}>
                  Consignee&apos;s Bank Name & Address
                </Text>
                <Text
                  style={{
                    width: "65%",
                    borderBottom: "1px solid red",
                    paddingLeft: "10px",
                    color: "black",
                  }}
                >
                  {props.consigneesName}
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                  marginTop: "7px",
                }}
              >
                <Text style={{ width: "30%" }}>
                  Consignee&apos;s GST Number
                </Text>
                <Text
                  style={{
                    width: "70%",
                    borderBottom: "1px solid red",
                    paddingLeft: "10px",
                    color: "black",
                  }}
                >
                  {props.consigneesGstNum}
                </Text>
              </View>
            </View>

            <View
              style={{
                width: "25%",
                border: "1px solid red",
                borderTop: "none",
                borderLeft: "opx",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ padding: "14px 5px" }}>
                From: <Text style={{ color: "black" }}>{props.from}</Text>
              </Text>
              <Text style={{ padding: "14px 5px" }}>
                To: <Text style={{ color: "black" }}>{props.to}</Text>
              </Text>
            </View>
          </View>

          {/* column 4 */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              border: "1px solid red",
              borderTop: "none",
            }}
          >
            <Text
              style={{
                width: "10%",
                padding: "3px",
                borderRight: "1px solid red",
                textAlign: "center",
              }}
            >
              Package
            </Text>
            <Text
              style={{
                width: "25%",
                padding: "3px",
                borderRight: "1px solid red",
                textAlign: "center",
              }}
            >
              Contents as said to be contents
            </Text>
            <View
              style={{
                width: "20%",
                borderRight: "1px solid red",
                textAlign: "center",
              }}
            >
              <Text style={{ borderBottom: "1px solid red", padding: "3px" }}>
                WEIGHT
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  fontSize: "10px",
                }}
              >
                <Text
                  style={{
                    width: "50%",
                    padding: "3px",
                    borderRight: "1px solid red",
                  }}
                >
                  Actual Kg Grm
                </Text>
                <Text style={{ width: "50%", padding: "3px" }}>
                  Charge Kg Grm
                </Text>
              </View>
            </View>
            <Text
              style={{
                width: "10%",
                padding: "3px",
                borderRight: "1px solid red",
                textAlign: "center",
              }}
            >
              Value
            </Text>
            <Text
              style={{
                width: "10%",
                fontSize: "13px",
                textAlign: "center",
                borderRight: "1px solid red",
              }}
            >
              Rate Per Kgs.
            </Text>
            <View
              style={{
                width: "20%",
                textAlign: "center",
                borderRight: "1px solid red",
              }}
            >
              <Text style={{ borderBottom: "1px solid red", padding: "3px" }}>
                FREIGHT
              </Text>
              <View
                style={{
                  fontSize: "10px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    width: "50%",
                    textAlign: "center",
                    padding: "3px",
                    fontSize: "8px",
                    borderRight: "1px solid red",
                  }}
                >
                  Paid/Billed Rs.ps
                </Text>
                <Text
                  style={{ width: "50%", textAlign: "center", padding: "3px" }}
                >
                  To Pay Rs.ps
                </Text>
              </View>
            </View>
            <Text style={{ width: "10%", textAlign: "center", padding: "3px" }}>
              Remarks
            </Text>
          </View>
          {/* column 5  */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              border: "1px solid red",
              borderTop: "none",
            }}
          >
            <Text
              style={{
                width: "10%",
                padding: "3px",
                borderRight: "1px solid red",
                textAlign: "center",
                color: "black",
              }}
            >
              {props.list[0].package}
            </Text>
            <Text
              style={{
                width: "25%",
                padding: "3px",
                borderRight: "1px solid red",
                textAlign: "center",
                color: "black",
              }}
            >
              {props.list[0].content}
            </Text>
            <View
              style={{
                width: "20%",
                borderRight: "1px solid red",
                textAlign: "center",
                display: "flex",
                flexDirection: "row",
                color: "black",
              }}
            >
              <Text style={{ width: "50%", borderRight: "1px solid red" }}>
                {props.list[0].actualWeight}
              </Text>
              <Text style={{ width: "50%" }}>{props.list[0].chargeWeight}</Text>
            </View>
            <Text
              style={{
                width: "10%",
                padding: "3px",
                borderRight: "1px solid red",
                textAlign: "center",
                color: "black",
              }}
            >
              {props.list[0].value}
            </Text>
            <View
              style={{
                width: "10%",
                fontSize: "13px",
                textAlign: "center",
                borderRight: "1px solid red",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                paddingTop: "5px",
              }}
            >
              <Text>First Frieght</Text>
              <Text>Serivce Tax</Text>
              <Text style={{ paddingTop: "1px" }}>T.D.S</Text>
              <Text style={{ paddingTop: "2px" }}>Hamali</Text>
              <Text style={{ paddingTop: "2px" }}>Advance</Text>
              <Text style={{ fontSize: "10px" }}>Statarical Charges</Text>
              <Text>O.D Charges</Text>
              <Text>Gr.Total</Text>
            </View>

            <View
              style={{
                width: "20%",
                textAlign: "center",
                borderRight: "1px solid red",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  borderBottom: "1px solid red",
                }}
              >
                <Text
                  style={{
                    width: "50%",
                    borderRight: "1px solid red",
                    padding: "3px",
                    color: "black",
                  }}
                >
                  {props.list[0].firstFreightPaid}
                </Text>
                <Text style={{ width: "50%", padding: "3px", color: "black" }}>
                  {props.list[0].firstFreightToBePaid}
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  borderBottom: "1px solid red",
                }}
              >
                <Text
                  style={{
                    width: "50%",
                    borderRight: "1px solid red",
                    padding: "3px",
                    color: "black",
                  }}
                >
                  {props.list[0].serviceTax}
                </Text>
                <Text
                  style={{ width: "50%", padding: "3px", color: "black" }}
                ></Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  borderBottom: "1px solid red",
                  color: "black",
                }}
              >
                <Text
                  style={{
                    width: "50%",
                    borderRight: "1px solid red",
                    padding: "3px",
                  }}
                >
                  {props.list[0].tdsPaid}
                </Text>
                <Text style={{ width: "50%", padding: "3px" }}>
                  {props.list[0].tdsToBePaid}
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  borderBottom: "1px solid red",
                  color: "black",
                }}
              >
                <Text
                  style={{
                    width: "50%",
                    borderRight: "1px solid red",
                    padding: "3px",
                  }}
                >
                  {props.list[0].hemaliPaid}
                </Text>
                <Text style={{ width: "50%", padding: "3px" }}>
                  {props.list[0].hemaliToBePaid}
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  borderBottom: "1px solid red",
                  color: "black",
                }}
              >
                <Text
                  style={{
                    width: "50%",
                    borderRight: "1px solid red",
                    padding: "3px",
                  }}
                >
                  {props.list[0].advancePaid}
                </Text>
                <Text style={{ width: "50%", padding: "3px" }}>
                  {props.list[0].advanceToBePaid}
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  borderBottom: "1px solid red",
                  paddingTop: "3px",
                  color: "black",
                }}
              >
                <Text
                  style={{
                    width: "50%",
                    borderRight: "1px solid red",
                    padding: "3px",
                  }}
                >
                  {props.list[0].stataricalPaid}
                </Text>
                <Text style={{ width: "50%", padding: "3px" }}>
                  {props.list[0].stataricalToBePaid}
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  borderBottom: "1px solid red",
                  color: "black",
                }}
              >
                <Text
                  style={{
                    width: "50%",
                    borderRight: "1px solid red",
                    padding: "3px",
                  }}
                >
                  {props.list[0].odChargePaid}
                </Text>
                <Text style={{ width: "50%", padding: "3px" }}>
                  {props.list[0].odChargeToBePaid}
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  color: "black",
                }}
              >
                <Text
                  style={{
                    width: "50%",
                    borderRight: "1px solid red",
                    padding: "3px",
                  }}
                >
                  {props.list[0].grTotalPaid}
                </Text>
                <Text style={{ width: "50%", padding: "3px" }}>
                  {props.list[0].grTotalToBePaid}
                </Text>
              </View>
            </View>
            <Text
              style={{
                width: "10%",
                textAlign: "center",
                padding: "3px",
                color: "black",
              }}
            >
              {props.list[0].remarks}
            </Text>
          </View>
          {/* column 6  */}
          <View
            style={{ display: "flex", flexDirection: "row", fontSize: "7px" }}
          >
            <View
              style={{
                width: "30%",
                border: "1px solid red",
                borderTop: "none",
                padding: "0 3px",
              }}
            >
              <Text style={{ padding: "3px 0" }}>
                Freight to be paid by Consignee / Consignor GST paid by Party
                Consignee / Consignor Cenvet credit has not been taken on duty
                paid on inputs and/or capital goods used for providing this
                transportation Service
              </Text>
              <Text
                style={{
                  padding: "3px 0",
                  textAlign: "center",
                  borderTop: "1px solid red",
                }}
              >
                GST PAID PARTY.
              </Text>
            </View>

            <View
              style={{
                width: "30%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "14px",
                gap: "5px",
                border: "1px solid red",
                borderTop: "none",
                borderLeft: "none",
              }}
            >
              <Text>GSTIN: {companyData.gstNum}</Text>
              <Text>PAN No.: {companyData.panNum}</Text>
            </View>

            <View
              style={{
                width: "40%",
                fontSize: "14px",
                padding: "3px",
                border: "1px solid red",
                borderLeft: "none",
                borderTop: "none",
              }}
            >
              <Text>
                Not Responsible for Leakage or Breakage Booking Office
              </Text>
            </View>
          </View>
        </Page>
      </Document>
    );
  }
};

function LrPrintingPage({ params }: any) {
  const company = params.company;
  const id = params.id;
  const lrId = params.lrId;
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
    deliveryAt: "",
    policeNo: "",
    iDate: "",
    amount: "",
    risk: "",
    lrNum: "",
    date: "",
    truckNum: "",
    consignorsName: "",
    consigneesName: "",
    from: "",
    to: "",
    list: [
      {
        package: "",
        content: "",
        actualWeight: "",
        chargeWeight: "",
        value: "",
        firstFreightPaid: "",
        firstFreightToBePaid: "",
        serviceTax: "",
        tdsPaid: "",
        tdsToBePaid: "",
        hemaliPaid: "",
        hemaliToBePaid: "",
        advancePaid: "",
        advanceToBePaid: "",
        stataricalPaid: "",
        stataricalToBePaid: "",
        odChargePaid: "",
        odChargeToBePaid: "",
        grTotalPaid: "",
        grTotalToBePaid: "",
        remarks: "",
      },
    ],
    company: "",
  });

  const [companyData, setCompanyData] = useState({
    mobileNum: [],
    address: "",
    gstNum: "",
    msmeNum: "",
    panNum: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("/api/lrs/get-lr", {
          lrId: lrId,
        });

        const companyResponse = await axios.post("/api/companies/get-company", {
          companyId: id,
        });

        console.log(companyResponse);
        console.log(response);

        if (
          response.data.status === 200 &&
          response.status === 200 &&
          companyResponse.status === 200 &&
          companyResponse.data.status === 200
        ) {
          toast.success(companyResponse.data.message);
          toast.success(response.data.message);
          setEntry(response.data.lr);
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
      <PDFViewer className="min-h-[165vh] flex justify-center items-center">
        <MyDocument
          {...entry}
          image={imageUrl}
          companyName={companyName}
          companyData={companyData}
          type={"Original"}
        />
      </PDFViewer>
      <PDFViewer className="min-h-[165vh] flex justify-center items-center">
        <MyDocument
          {...entry}
          image={imageUrl}
          companyName={companyName}
          companyData={companyData}
          type={"Duplicate"}
        />
      </PDFViewer>
      <PDFViewer className="min-h-[165vh] flex justify-center items-center">
        <MyDocument
          {...entry}
          image={imageUrl}
          companyName={companyName}
          companyData={companyData}
          type={"Triplicate"}
        />
      </PDFViewer>
    </main>
  );
}

export default LrPrintingPage;
