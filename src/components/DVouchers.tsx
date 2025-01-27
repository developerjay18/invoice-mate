"use client";

import React from "react";
import { Page, Text, View, Document } from "@react-pdf/renderer";
// import { PDFViewer } from "@react-pdf/renderer";

import dynamic from "next/dynamic";
const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

const DVouchers = ({ exData }: any) => {
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
  );
};

export default DVouchers;
