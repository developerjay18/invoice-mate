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

const DBills = ({ exData }: any) => {
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
  );
};

export default DBills;
