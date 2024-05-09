"use client";

import React, { useState, useEffect } from "react";
import { Label } from "./ui/label";
import { Input } from "@/components/ui/input";
import { getDate } from "@/helpers/getDate";
import { IoIosAddCircle } from "react-icons/io";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

// logic to total is still pending here
function Challan({ ...props }: any) {
  const date = getDate();
  const id = props.id;
  const company = props.company;
  const router = useRouter();

  const [challanNum, setChallanNum] = useState("");

  useEffect(() => {
    const fetchInvoiceNum = async () => {
      try {
        const response = await axios.post("/api/challans/get-last-challan", {
          companyId: id,
        });

        console.log(response);

        if (response.data.status === 200) {
          setChallanNum(
            String(Number(response.data.lastChallan.challanNum) + 1)
          );
        } else {
          if (company === "maa-saraswati-road-carriers") {
            setChallanNum("19935");
          } else if (company === "the-rising-freight-carriers") {
            setChallanNum("201");
          } else if (company === "sharma-transport") {
            setChallanNum("301");
          } else {
            setChallanNum("Invalid company");
          }
        }
      } catch (error: any) {
        toast.error(error.message);
      }
    };

    fetchInvoiceNum();
  }, []);

  const [fieldData, setFieldData] = useState([
    {
      date: ``,
      gcNoteNum: "",
      pkgs: "",
      description: "",
      consignor: "",
      consignee: "",
      weight: "",
      rate: "",
      ccollection: "",
    },
  ]);

  const [normalData, setNormalData]: any = useState([
    {
      mainBillDate: "",
      from: "",
      to: "",
      vehicleNum: "",
      ownersName: "",
      driversName: "",
      panNum: "",
      commission: "",
      refund: "",
      hamali: "",
      other: "",
      munsyanaAndPayment: "",
      textAreaCalc: "",
      total: "",
    },
  ]);

  const addField = (e: any) => {
    e.preventDefault();
    setFieldData((prev): any => {
      return [
        ...prev,
        {
          date: ``,
          gcNoteNum: "",
          pkgs: "",
          description: "",
          consignor: "",
          consignee: "",
          weight: "",
          rate: "",
          ccollection: "",
        },
      ];
    });
  };

  const handleChange = (e: any, index: number) => {
    const { name, value } = e.target;

    setFieldData((prev): any => {
      let item: any = prev[index];
      item[name] = value;
      return [...prev];
    });
  };

  const handleNormalChange = (e: any) => {
    const { name, value } = e.target;

    setNormalData((prev: any) => {
      return { ...prev, [name]: value };
    });
    console.log(normalData.textAreaCalc);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("final stage - " + normalData.textAreaCalc);
    try {
      const response = await axios.post("/api/challans", {
        company: id,
        challanNum: challanNum,
        ...normalData,
        item: fieldData,
      });

      console.log(response.data);
      console.log(response.data);
      if (response.status === 200) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.error);
      }

      setFieldData([
        {
          date: ``,
          gcNoteNum: "",
          pkgs: "",
          description: "",
          consignor: "",
          consignee: "",
          weight: "",
          ccollection: "",
          rate: "",
        },
      ]);
      setNormalData([
        {
          mainBillDate: ``,
          from: "",
          to: "",
          vehicleNum: "",
          ownersName: "",
          driversName: "",
          panNum: "",
          commission: "",
          refund: "",
          hamali: "",
          other: "",
          munsyanaAndPayment: "",
          textAreaCalc: "",
        },
      ]);

      router.push(`/challans/${company}/${id}`);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <form
        action="#"
        method="post"
        className="flex flex-col gap-y-4"
        onSubmit={handleSubmit}
      >
        <div className="border bg-black dark:bg-white/90 dark:text-black text-white rounded p-2 font-semibold capitalize">
          Add New challan details
        </div>
        <div className="grid grid-cols-2 gap-x-6">
          <div className="">
            <Label className="uppercase">challan NO</Label>
            <Input type="text" value={challanNum} readOnly />
          </div>
          <div className="">
            <Label>DATE</Label>
            <Input
              type="text"
              name="mainBillDate"
              id="mainBillDate"
              value={normalData.mainBillDate}
              onChange={handleNormalChange}
              placeholder={`${date}`}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-6">
          <div className="">
            <Label className="uppercase">from</Label>
            <Input
              name="from"
              id="from"
              type="text"
              value={normalData.from}
              onChange={handleNormalChange}
              placeholder="enter from"
            />
          </div>

          <div className="">
            <Label className="uppercase">to</Label>
            <Input
              name="to"
              id="to"
              type="text"
              value={normalData.to}
              onChange={handleNormalChange}
              placeholder="enter to"
            />
          </div>

          <div className="">
            <Label className="uppercase">vehicle Number</Label>
            <Input
              name="vehicleNum"
              id="vehicleNum"
              type="text"
              value={normalData.vehicleNum}
              onChange={handleNormalChange}
              placeholder="enter vehicle number"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-6">
          <div className="">
            <Label className="uppercase">pan number</Label>
            <Input
              name="panNum"
              id="panNum"
              type="text"
              value={normalData.panNum}
              onChange={handleNormalChange}
              placeholder="enter PAN number"
            />
          </div>

          <div className="">
            <Label className="uppercase">owner&apos;s name</Label>
            <Input
              name="ownersName"
              id="ownersName"
              type="text"
              value={normalData.ownersName}
              onChange={handleNormalChange}
              placeholder="enter owners name"
            />
          </div>

          <div className="">
            <Label className="uppercase">driver&apos;s Name</Label>
            <Input
              name="driversName"
              id="driversName"
              type="text"
              value={normalData.driversName}
              onChange={handleNormalChange}
              placeholder="enter drivers name"
            />
          </div>
        </div>
        <div className="border bg-black dark:bg-white/90 dark:text-black text-white rounded p-2 font-semibold capitalize">
          Add Item details
        </div>
        {fieldData?.map((data, index) => (
          <div className="flex flex-col gap-y-4" key={index}>
            <div className="grid grid-cols-3 gap-x-6 gap-y-4">
              <div className="">
                <Label className="uppercase">date</Label>
                <Input
                  name="date"
                  id="date"
                  type="text"
                  value={data.date}
                  onChange={(e: any) => handleChange(e, index)}
                  placeholder={`${date}`}
                />
              </div>

              <div className="">
                <Label className="uppercase">gc Note Number</Label>
                <Input
                  name="gcNoteNum"
                  id="gcNoteNum"
                  type="text"
                  value={data.gcNoteNum}
                  onChange={(e: any) => handleChange(e, index)}
                  placeholder="set GC note number"
                />
              </div>

              <div className="">
                <Label className="uppercase">pkgs</Label>
                <Input
                  name="pkgs"
                  id="pkgs"
                  type="text"
                  value={data.pkgs}
                  onChange={(e: any) => handleChange(e, index)}
                  placeholder="set pkgs"
                />
              </div>

              <div className="">
                <Label className="uppercase">description</Label>
                <Input
                  name="description"
                  id="description"
                  type="text"
                  value={data.description}
                  onChange={(e: any) => handleChange(e, index)}
                  placeholder="set description"
                />
              </div>

              <div className="">
                <Label className="uppercase">consignor</Label>
                <Input
                  name="consignor"
                  id="consignor"
                  type="text"
                  value={data.consignor}
                  onChange={(e: any) => handleChange(e, index)}
                  placeholder="set consignor"
                />
              </div>

              <div className="">
                <Label className="uppercase">consignee</Label>
                <Input
                  name="consignee"
                  id="consignee"
                  type="text"
                  value={data.consignee}
                  onChange={(e: any) => handleChange(e, index)}
                  placeholder="set consignee"
                />
              </div>
            </div>

            <div className="flex justify-between gap-x-6">
              <div className="w-[32%]">
                <Label className="uppercase">weight</Label>
                <Input
                  name="weight"
                  id="weight"
                  type="text"
                  value={data.weight}
                  onChange={(e: any) => handleChange(e, index)}
                  placeholder="set weight"
                />
              </div>

              <div className="w-[32%]">
                <Label className="uppercase">rate</Label>
                <Input
                  name="rate"
                  id="rate"
                  type="text"
                  value={data.rate}
                  onChange={(e: any) => handleChange(e, index)}
                  placeholder="set rate"
                />
              </div>

              <div className="w-[32%]">
                <Label className="uppercase">ccollection</Label>
                <Input
                  name="ccollection"
                  id="ccollection"
                  type="text"
                  value={data.ccollection}
                  onChange={(e: any) => handleChange(e, index)}
                  className="border bg-pink-600"
                  placeholder="set collection"
                />
              </div>

              <div className="text-5xl w-[3.99%] flex justify-end items-end cursor-pointer">
                <IoIosAddCircle
                  className="hover:text-black/85 dark:hover:text-slate-200"
                  onClick={addField}
                />
              </div>
            </div>
          </div>
        ))}
        <div className="border bg-black dark:bg-white/90 dark:text-black text-white rounded p-2 font-semibold capitalize">
          footer details
        </div>
        <div className="grid grid-cols-3 gap-x-6">
          <div className="">
            <Label className="uppercase">commission</Label>
            <Input
              name="commission"
              id="commission"
              type="text"
              value={normalData.commission}
              onChange={handleNormalChange}
              placeholder="enter commission"
            />
          </div>

          <div className="">
            <Label className="uppercase">refund</Label>
            <Input
              name="refund"
              id="refund"
              type="text"
              value={normalData.refund}
              onChange={handleNormalChange}
              placeholder="enter refund"
            />
          </div>

          <div className="">
            <Label className="uppercase">hamali</Label>
            <Input
              name="hamali"
              id="hamali"
              type="text"
              value={normalData.hamali}
              onChange={handleNormalChange}
              placeholder="enter hamali"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-6">
          <div className="">
            <Label className="uppercase">other</Label>
            <Input
              name="other"
              id="other"
              type="text"
              value={normalData.other}
              onChange={handleNormalChange}
              placeholder="enter other"
            />
          </div>
          <div className="">
            <Label className="uppercase">munsyana And Payment</Label>
            <Input
              name="munsyanaAndPayment"
              id="munsyanaAndPayment"
              type="text"
              value={normalData.munsyanaAndPayment}
              onChange={handleNormalChange}
              placeholder="enter munsyana and Payment"
            />
          </div>
          <div className="pt-4">
            <Label className="uppercase">total</Label>
            <Input
              name="total"
              id="total"
              type="text"
              value={normalData.total}
              onChange={handleNormalChange}
              placeholder="enter total"
            />
          </div>
          <div className="flex flex-col pt-4">
            <Label className="uppercase">Rough Calculation</Label>
            <textarea
              name="textAreaCalc"
              id="textAreaCalc"
              className="bg-transparent border rounded mt-2 p-2"
              value={normalData.textAreaCalc}
              rows={5}
              onChange={handleNormalChange}
              placeholder="do your calculations here..."
            ></textarea>
          </div>
        </div>
        {/* // link connection pending... */}
        <div className="flex justify-center pt-8">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default Challan;
