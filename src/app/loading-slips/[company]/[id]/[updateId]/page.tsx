"use client";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import toast from "react-hot-toast";
import axios from "axios";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useRouter } from "next/navigation";

function LoadingSlipUpdatePage({ params }: any) {
  const id = params.id;
  const company = params.company;
  const companyName = company.split("-").join(" ");
  const updateId = params.updateId;
  const router = useRouter();

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "/api/loading-slips/get-loading-slip",
          {
            loadingSlipId: updateId,
          }
        );

        if (response.status === 200 && response.data.status === 200) {
          await setEntry(response.data.loadingSlip);
        } else {
          toast.error(response.data.error);
        }
      } catch (error: any) {
        toast.error(error.message);
      }
    };

    fetchData();
  }, [updateId]);

  const handleNormalChange = (e: any) => {
    const { name, value } = e.target;
    setEntry({ ...entry, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      console.log(entry);
      const response = await axios.patch("/api/loading-slips", {
        id: updateId, // ye bhul raha tha baar baar
        ...entry,
      });
      console.log(response);
      if (response) {
        toast.success(response.data.message);
        router.push(`/loading-slips/${company}/${id}`);
      } else {
        toast.error("ERROR WHILE UPDATING LOADING SLIP");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <main className="flex min-h-screen flex-col px-20 py-10 gap-10">
      <section className="w-full">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-xl font-semibold uppercase">
              update Loading slip -{" "}
              <span className="uppercase">{companyName} </span>{" "}
            </h2>
            <p className="mt-1 flex gap-2 text-sm dark:text-slate-300 text-gray-700">
              Loading Slip ID
              <span className="">{updateId}</span>
            </p>
          </div>
          <div className="flex gap-x-4">
            <Button className="capitalize">
              <Link
                href={`/loading-slips/${company}/${id}`}
                className="flex items-center gap-x-2"
              >
                <span>
                  <RiArrowGoBackLine />
                </span>
                Go back
              </Link>
            </Button>
          </div>
        </div>
      </section>

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
                value={entry?.primaryTo}
                onChange={handleNormalChange}
                placeholder="enter primary to"
              />
            </div>

            <div className="">
              <Label>NO</Label>
              <Input type="text" value={entry?.loadingSlipNum} readOnly />
            </div>

            <div className="">
              <Label>DATE</Label>
              <Input type="text" value={entry?.date} readOnly />
            </div>

            <div className="">
              <Label className="uppercase">truck number</Label>
              <Input
                name="truckNum"
                id="truckNum"
                type="text"
                value={entry?.truckNum}
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
                value={entry?.from}
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
                value={entry?.to}
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
                value={entry?.rate}
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
                value={entry?.gauranteeBy}
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
                value={entry?.name}
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
                value={entry?.advance}
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
                value={entry?.balance}
                onChange={handleNormalChange}
                placeholder="enter balance amount"
              />
            </div>
          </div>

          <div className="flex justify-center pt-8">
            <Button type="submit">Update</Button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default LoadingSlipUpdatePage;
