import React, { useState, useEffect } from "react";
import { Label } from "./ui/label";
import { Input } from "@/components/ui/input";
import { getDate } from "@/helpers/getDate";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

function LoadingSlip({ ...props }) {
  const date = getDate();
  const id = props.id;
  const company = props.company;
  const router = useRouter();

  const [loadingSlipNum, setLoadingSlipNum] = useState("");

  useEffect(() => {
    const fetchInvoiceNum = async () => {
      try {
        const response = await axios.post(
          "/api/loading-slips/get-last-loading-slip",
          {
            companyId: id,
          }
        );

        if (response.data.status === 200) {
          setLoadingSlipNum(
            String(Number(response.data.lastLoadingSlip.loadingSlipNum) + 1)
          );
        } else {
          if (company === "maa-saraswati-road-carriers") {
            setLoadingSlipNum("1");
          } else if (company === "the-rising-freight-carriers") {
            setLoadingSlipNum("205");
          } else if (company === "sharma-transport") {
            setLoadingSlipNum("301");
          } else {
            setLoadingSlipNum("Invalid company");
          }
        }
      } catch (error: any) {
        toast.error(error.message);
      }
    };

    fetchInvoiceNum();
  }, []);

  const [normalData, setNormalData] = useState({
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
  });

  const handleNormalChange = (e: any) => {
    const { name, value } = e.target;

    setNormalData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/loading-slips", {
        company: id,
        loadingSlipNum: loadingSlipNum,
        // date: `${date}`,
        ...normalData,
      });

      if (response.status === 200 && response.data.status === 200) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.error);
      }

      router.push(`/loading-slips/${company}/${id}`);
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <div>
      <form
        action="#"
        method="post"
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-4"
      >
        <div className="border bg-black dark:bg-white/90 dark:text-black text-white rounded p-2 font-semibold capitalize">
          Add New Loading Slips details
        </div>

        <div className="grid grid-cols-3 gap-x-6 gap-y-4">
          <div className="">
            <Label className="uppercase">TO</Label>
            <Input
              name="primaryTo"
              id="primaryTo"
              type="text"
              value={normalData.primaryTo}
              onChange={handleNormalChange}
              placeholder="enter primary to"
            />
          </div>

          <div className="">
          <Label>NO</Label>
          <Input type="text"
          value={loadingSlipNum}
          placeholder={`${loadingSlipNum}`}
          onChange={(e) => setLoadingSlipNum(e.target.value)} />
        </div>


          <div className="">
            <Label>DATE</Label>
            <Input
              type="text"
              name="date"
              id="date"
              value={normalData.date}
              onChange={handleNormalChange}
              placeholder={`${date}`}
            />
          </div>

          <div className="">
            <Label className="uppercase">truck number</Label>
            <Input
              name="truckNum"
              id="truckNum"
              type="text"
              value={normalData.truckNum}
              onChange={handleNormalChange}
              placeholder="enter truck number"
            />
          </div>

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
            <Label className="uppercase">rate</Label>
            <Input
              name="rate"
              id="rate"
              type="text"
              value={normalData.rate}
              onChange={handleNormalChange}
              placeholder="enter rate"
            />
          </div>

          <div className="">
            <Label className="uppercase">gaurantee by</Label>
            <Input
              name="gauranteeBy"
              id="gauranteeBy"
              type="text"
              value={normalData.gauranteeBy}
              onChange={handleNormalChange}
              placeholder="enter gaurantee by name"
            />
          </div>

          <div className="">
            <Label className="uppercase">confirmed by M/s / shree</Label>
            <Input
              name="name"
              id="name"
              type="text"
              value={normalData.name}
              onChange={handleNormalChange}
              placeholder="enter confirmee's name"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6">
          <div className="">
            <Label className="uppercase">advance</Label>
            <Input
              name="advance"
              id="advance"
              type="text"
              value={normalData.advance}
              onChange={handleNormalChange}
              placeholder="enter advance amount"
            />
          </div>

          <div className="">
            <Label className="uppercase">balance</Label>
            <Input
              name="balance"
              id="balance"
              type="text"
              value={normalData.balance}
              onChange={handleNormalChange}
              placeholder="enter balance amount"
            />
          </div>
        </div>

        <div className="flex justify-center pt-8">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default LoadingSlip;
