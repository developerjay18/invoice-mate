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
      style={{
        flexDirection: "column",
        padding: "15px",
        // border: "5",
        // borderColor: "red",
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
            marginTop: "10px",
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
                fontSize: "30px",
                textTransform: "capitalize",
                textAlign: "center",
                margin: "0 auto",
                width: "100%",
              }}
            >
              {companyName}
            </Text>
            <Text
              style={{ textAlign: "center", margin: "0 auto", width: "100%" }}
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
          </View>
        </View>
      </View>

      {/* column 2  */}
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          border: "1px solid red",
          padding: "5px",
          borderTop: "none",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>Challan No: {props.challanNum}</Text>
          <Text>Date: {props.mainBillDate}</Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "15px",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "33%",
            }}
          >
            <Text style={{ width: "20%" }}>From</Text>
            <Text style={{ width: "80%", borderBottom: "1px dotted red" }}>
              {props.from}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "33%",
            }}
          >
            <Text style={{ width: "20%" }}>To,</Text>
            <Text style={{ width: "80%", borderBottom: "1px dotted red" }}>
              {props.to}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "33%",
            }}
          >
            <Text style={{ width: "40%" }}>Vehicle No.</Text>
            <Text style={{ width: "60%", borderBottom: "1px dotted red" }}>
              {props.vehicleNum}
            </Text>
          </View>
        </View>

        <View>
          <Text>
            Owner of the Vehicle is responsible for the goods which are loaded
            in this truck for safe & sound Delivery as under.
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "15px",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "40%",
            }}
          >
            <Text style={{ width: "40%", fontSize: "12px" }}>
              Owner’s Name & Address
            </Text>
            <Text style={{ width: "60%", borderBottom: "1px dotted red" }}>
              {props.ownersName}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "30%",
            }}
          >
            <Text style={{ width: "40%" }}>Driver&apos;s Name</Text>
            <Text style={{ width: "60%", borderBottom: "1px dotted red" }}>
              {props.driversName}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "30%",
            }}
          >
            <Text style={{ width: "40%" }}>PAN No.</Text>
            <Text style={{ width: "60%", borderBottom: "1px dotted red" }}>
              {props.panNum}
            </Text>
          </View>
        </View>
      </View>

      {/* column 3 */}
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            border: "1px solid red",
            marginTop: "5px",
            gap: "3px",
          }}
        >
          <Text
            style={{
              width: "7%",
              textAlign: "center",
              borderRight: "1px solid red",
              padding: "1px",
            }}
          >
            Date
          </Text>
          <Text
            style={{
              width: "10%",
              textAlign: "center",
              borderRight: "1px solid red",
              padding: "1px",
            }}
          >
            G.C Note No.
          </Text>
          <Text
            style={{
              width: "8%",
              textAlign: "center",
              borderRight: "1px solid red",
              padding: "1px",
            }}
          >
            Pkgs.
          </Text>
          <Text
            style={{
              width: "15%",
              textAlign: "center",
              borderRight: "1px solid red",
              padding: "1px",
            }}
          >
            Description
          </Text>
          <Text
            style={{
              width: "14%",
              textAlign: "center",
              borderRight: "1px solid red",
              padding: "1px",
            }}
          >
            Consignor
          </Text>
          <Text
            style={{
              width: "15%",
              textAlign: "center",
              borderRight: "1px solid red",
              padding: "1px",
            }}
          >
            Consignee
          </Text>
          <Text
            style={{
              width: "10%",
              textAlign: "center",
              borderRight: "1px solid red",
              padding: "1px",
            }}
          >
            Weg. kg.gr.
          </Text>
          <Text
            style={{
              width: "8%",
              textAlign: "center",
              borderRight: "1px solid red",
              padding: "1px",
            }}
          >
            Rate
          </Text>
          <Text style={{ width: "13%", textAlign: "center", padding: "1px" }}>
            Collection Rs.Ps
          </Text>
        </View>

        <View
          style={{
            minHeight: "20%",
            border: "1px solid red",
            borderTop: "none",
            fontSize: "10px",
          }}
        >
          {props.item?.map((item: any, index: any) => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: "3px",
              }}
              key={index}
            >
              <Text
                style={{
                  width: "7%",
                  textAlign: "center",
                  padding: "1px",
                  fontSize: "7px",
                }}
              >
                {item.date}
              </Text>
              <Text
                style={{
                  width: "10%",
                  textAlign: "center",
                  padding: "1px",
                }}
              >
                {item.gcNoteNum}
              </Text>
              <Text
                style={{
                  width: "8%",
                  textAlign: "center",
                  padding: "1px",
                }}
              >
                {item.pkgs}
              </Text>
              <Text
                style={{
                  width: "15%",
                  textAlign: "center",
                  padding: "1px",
                }}
              >
                {item.description}
              </Text>
              <Text
                style={{
                  width: "14%",
                  textAlign: "center",
                  padding: "1px",
                }}
              >
                {item.consignor}
              </Text>
              <Text
                style={{
                  width: "15%",
                  textAlign: "center",
                  padding: "1px",
                }}
              >
                {item.consignee}
              </Text>
              <Text
                style={{
                  width: "10%",
                  textAlign: "center",
                  padding: "1px",
                }}
              >
                {item.weight}
              </Text>
              <Text
                style={{
                  width: "8%",
                  textAlign: "center",
                  padding: "1px",
                }}
              >
                {item.rate}
              </Text>
              <Text
                style={{ width: "13%", textAlign: "center", padding: "1px" }}
              >
                {item.ccollection}
              </Text>
            </View>
          ))}
        </View>

        <View
          style={{
            minHeight: "13%",
            border: "1px solid red",
            borderTop: "none",
            padding: "5px",
          }}
        >
          <Text>Caluclation area</Text>
          <Text>{props.textAreaCalc} </Text>
        </View>
      </View>

      {/* column 4 */}
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "7px",
            width: "69%",
            padding: " 0 3px",
            border: "1px solid red",
          }}
        >
          <Text style={{ fontSize: "10px" }}>
            Note: If there is any incident or accident on the road, the
            responsibility of reaching the merchandise safely will be on the
            larger truck driver and the owner of the merchandise. (4) Balance
            rent will not be given if the merchandise does not arrive within 15
            days. (3) The damage to the vehicle and staff will be borne by the
            larger truck owner. (4) O.K. Rent and tax will be deducted only upon
            depositing the L.M. Passbook.
          </Text>

          <Text style={{ fontSize: "10px" }}>
            After office hours, Sundays, and any holiday, it is not our
            company&apos;s responsibility if the goods are left unattended.
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>GST Paid by Party</Text>
            <Text>PAN No.: {props.panNum}</Text>
          </View>
        </View>

        <View
          style={{
            width: "18%",
            border: "1px solid red",
            borderLeft: "none",
            padding: "3px",
            gap: "3px",
          }}
        >
          <Text style={{ textAlign: "right" }}>Commission</Text>
          <Text style={{ textAlign: "right" }}>Refund</Text>
          <Text style={{ textAlign: "right" }}>Hamali</Text>
          <Text style={{ textAlign: "right" }}>Other</Text>
          <Text style={{ textAlign: "right" }}>Munsyana And Payment</Text>
          <Text style={{ textAlign: "right" }}>Total</Text>
        </View>

        <View
          style={{
            width: "13%",
            border: "1px solid red",
            borderLeft: "none",
            gap: "3px",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              border: "1px solid red",
              borderLeft: "none",
              borderTop: "none",
              borderRight: "none",
            }}
          >
            {props.commission}
          </Text>
          <Text
            style={{
              textAlign: "center",
              border: "1px solid red",
              borderLeft: "none",
              borderTop: "none",
              borderRight: "none",
            }}
          >
            {props.refund}
          </Text>
          <Text
            style={{
              textAlign: "center",
              border: "1px solid red",
              borderLeft: "none",
              borderTop: "none",
              borderRight: "none",
            }}
          >
            {props.hamali}
          </Text>
          <Text
            style={{
              textAlign: "center",
              border: "1px solid red",
              borderLeft: "none",
              borderTop: "none",
              borderRight: "none",
            }}
          >
            {props.other}
          </Text>
          <Text
            style={{
              textAlign: "center",
              border: "1px solid red",
              borderLeft: "none",
              borderTop: "none",
              borderRight: "none",
              padding: "7px 0",
            }}
          >
            {props.munsyanaAndPayment}
          </Text>
          <Text
            style={{
              textAlign: "center",
            }}
          >
            {props.total}
          </Text>
        </View>
      </View>

      {/* column 5  */}
      <View style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <Text style={{ fontSize: "10px" }}>
          Note: Payment shall be made against production of the memo together
          Wit RASIVANA (1) In case the truck goes out of order enrote, the goods
          have to be transported. I shall beare the Expanses is will be meets
          with an accident the truck owner will make loss. (3) In case godd
          responsible for the delivery of the goods to the proper owner. (2) In
          case any shotee is found in goods or the touch delivered at the
          correct address, I will be responsible for the same. (4) At the time
          of touching Meer to the proper or not and verified the item & if any
          shortage is found, the owner and the driver will be responsible (5) I
          shall submit the acknowledgment as per the on closed later after
          delivery.
        </Text>
        <Text>Contact No</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "13px",
          }}
        >
          <Text>Sign. of Receiver&apos;s Owner</Text>
          <Text>Agent</Text>
          <Text style={{ textTransform: "uppercase" }}>For, {companyName}</Text>
        </View>
      </View>

      {/* column 6  */}
      <View>
        <Text
          style={{
            textAlign: "center",
            padding: "3px 0",
            marginTop: "8px",
            backgroundColor: "red",
            color: "white",
          }}
        >
          We do not have any other branches anywhere in India.
        </Text>
      </View>
    </Page>
  </Document>
);

function ChallanPrinitngPage({ params }: any) {
  const company = params.company;
  const id = params.id;
  const challanId = params.challanId;
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
    challanNum: "",
    mainBillDate: "",
    from: "",
    to: "",
    vehicleNum: "",
    ownersName: "",
    driversName: "",
    panNum: "",
    item: [
      {
        date: "",
        gcNoteNum: "",
        pkgs: "",
        description: "",
        consignor: "",
        consignee: "",
        weight: "",
        rate: "",
        ccollection: "",
      },
    ],
    commission: "",
    refund: "",
    hamali: "",
    other: "",
    munsyanaAndPayment: "",
    company: "",
    textAreaCalc: "",
    total: "",
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
        const response = await axios.post("/api/challans/get-challan", {
          challanId: challanId,
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
          setEntry(response.data.challan);
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
        />
      </PDFViewer>
    </main>
  );
}

export default ChallanPrinitngPage;
