"use client";
import React, { useState, useEffect } from "react";
import { Page, Text, View, Document, Image, Font } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import toast from "react-hot-toast";
import axios from "axios";

const MyDocument = ({ companyData, companyName, image, ...props }: any) => (
  <Document>
    <Page
      size="A4"
      style={{
        flexDirection: "column",
        padding: "15px",
        border: "5",
        borderColor: "red",
        color: "red",
        fontSize: "15px",
      }}
    >
      {/* line-1  */}
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ textAlign: "center" }}>
          <Text
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            || shree ganeshaya namah ||
          </Text>
          <Text>Subject to Ahmedabad Jurisdiction</Text>
        </View>

        <View>
          <Text>MO: {companyData.mobileNum[0]}</Text>
          <Text style={{ marginLeft: "auto" }}>{companyData.mobileNum[1]}</Text>
        </View>
      </View>

      {/* line-2  */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <View>
          <Image
            src={{
              uri: image,
              method: "GET",
              headers: { "Cache-Control": "no-cache" },
              body: "",
            }}
            style={{ width: "65px" }}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            {companyName}
          </Text>
        </View>
      </View>

      {/* line-3  */}
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          gap: "10px",
        }}
      >
        <View>
          <Text
            style={{
              textAlign: "center",
              textTransform: "capitalize",
              margin: "0 50px",
            }}
          >
            {companyData.address}
          </Text>
        </View>
        <View>
          <Text>HOENSTY IS THE BEST POLICY</Text>
        </View>
      </View>

      {/* line-4  */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: "25px",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text>
            No. <Text style={{ color: "red" }}>{props.loadingSlipNum}</Text>
          </Text>
        </View>
        <View>
          <Text>Date {props.date}</Text>
        </View>
      </View>

      {/* line-5 */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "7px",
          marginTop: "25px",
        }}
      >
        <View style={{ width: "5%" }}>
          <Text>To,</Text>
        </View>
        <View style={{ width: "95%", color: "red" }}>
          <Text style={{ borderBottom: "1px", borderColor: "red" }}>
            {props.primaryTo}
          </Text>
          <Text
            style={{
              borderBottom: "1px",
              borderColor: "red",
              marginTop: "20px",
            }}
          ></Text>
        </View>
      </View>

      {/* line-6  */}
      <View>
        <Text
          style={{
            textTransform: "capitalize",
            margin: "30px auto",
            fontSize: "16px",
          }}
        >
          We are sending you here with our
        </Text>
      </View>

      {/* line-7  */}
      <View>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Text style={{ width: "13%" }}>Truck No. </Text>
          <Text
            style={{ borderBottom: "1px", borderColor: "red", width: "87%" }}
          >
            {props.truckNum}
          </Text>
        </View>

        <View style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              marginTop: "25px",
              width: "50%",
            }}
          >
            <Text style={{ width: "16%" }}>From </Text>
            <Text
              style={{ borderBottom: "1px", borderColor: "red", width: "84%" }}
            >
              {props.from}
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              marginTop: "25px",
              width: "50%",
            }}
          >
            <Text style={{ width: "14%", textAlign: "right" }}>To, </Text>
            <Text
              style={{
                borderBottom: "1px",
                borderColor: "red",
                width: "86%",
                marginLeft: "3px",
              }}
            >
              {props.to}
            </Text>
          </View>
        </View>

        <View style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              marginTop: "25px",
              width: "50%",
            }}
          >
            <Text style={{ width: "14%" }}>Rate </Text>
            <Text
              style={{ borderBottom: "1px", borderColor: "red", width: "86%" }}
            >
              {props.rate}
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              marginTop: "25px",
              width: "50%",
            }}
          >
            <Text style={{ width: "60%", textAlign: "right" }}>
              For 10 M.T Gurantee{" "}
            </Text>
            <Text
              style={{
                borderBottom: "1px",
                borderColor: "red",
                width: "40%",
                marginLeft: "3px",
                fontSize: "13px",
              }}
            >
              {props.gauranteeBy}
            </Text>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            marginTop: "25px",
          }}
        >
          <Text style={{ width: "35%" }}>Confirmed by M/s. / Shree</Text>
          <Text
            style={{ borderBottom: "1px", borderColor: "red", width: "65%" }}
          >
            {props.name}
          </Text>
        </View>
      </View>

      {/* line-8  */}
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          marginTop: "25px",
        }}
      >
        <View style={{ width: "50%" }}>
          <Text>To, Pay To billed</Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            width: "50%",
          }}
        >
          <Text style={{ width: "37%" }}>Advance Rs</Text>
          <Text
            style={{ borderBottom: "1px", borderColor: "red", width: "63%" }}
          >
            {props.advance}
          </Text>
        </View>
      </View>

      {/* line-9  */}
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          marginTop: "25px",
        }}
      >
        <View style={{ width: "50%" }}>
          <Text>Please load truck</Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            width: "50%",
          }}
        >
          <Text style={{ width: "37%" }}>Balance Rs.</Text>
          <Text
            style={{ borderBottom: "1px", borderColor: "red", width: "63%" }}
          >
            {props.balance}
          </Text>
        </View>
      </View>

      {/* paragraph 10  */}
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          gap: "15px",
          marginTop: "25px",
        }}
      >
        <Text style={{ width: "6%" }}>Note</Text>
        <Text style={{ width: "94%", fontSize: "13px" }}>
          Loading & Unloading by your company Please Check Truck No. Chasis No.
          & Driver Licence No. before Loading Please Check Papers of Vehicle
          Only Fatak Dalali
        </Text>
      </View>

      {/* line-11  */}
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "25px",
          gap: "6px",
        }}
      >
        <View>
          <Text style={{ textAlign: "center" }}>
            Leakage, Breakage & Damages are responsibility of party.
          </Text>
        </View>
        <View>
          <Text style={{ textAlign: "center" }}>
            sadar maalno vimo levi jaruri che.
          </Text>
        </View>
      </View>

      {/* line-11  */}
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "25px",
          gap: "20px",
        }}
      >
        <View>
          <Text style={{ textAlign: "left" }}>GST Paid by Party</Text>
        </View>
        <View>
          <Text style={{ textAlign: "right" }}>For, {companyName}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

function LoadingSlipPrintingPage({ params }: any) {
  const company = params.company;
  const id = params.id;
  const loadingSlipId = params.loadingSlipId;
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
    loadingSlipNum: "",
    date: "",
    primaryTo: "",
    truckNum: "",
    from: "",
    to: "",
    rate: "",
    gauranteeBy: "",
    name: "",
    advance: "",
    balance: "",
    company: "",
  });

  const [companyData, setCompanyData] = useState({
    mobileNum: [],
    address: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "/api/loading-slips/get-loading-slip",
          {
            loadingSlipId: loadingSlipId,
          }
        );

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
          setEntry(response.data.loadingSlip);
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

export default LoadingSlipPrintingPage;
