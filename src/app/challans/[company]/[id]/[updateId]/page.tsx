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

function ChallanUpdatePage({ params }: any) {
  const id = params.id;
  const company = params.company;
  const companyName = company.split("-").join(" ");
  const updateId = params.updateId;
  const router = useRouter();

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
        collection: "",
      },
    ],
    commission: "",
    refund: "",
    hamali: "",
    other: "",
    munsyanaAndPayment: "",
    company: "",
    total: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("/api/challans/get-challan", {
          challanId: updateId,
        });

        if (response.status === 200 && response.data.status === 200) {
          await setEntry(response.data.challan);
        } else {
          toast.error(response.data.error);
        }
      } catch (error: any) {
        toast.error(error.message);
      }
    };

    fetchData();
  }, [updateId]);

  const handleChange = (e: any, index: any) => {
    const { name, value } = e.target;
    const subItems = entry.item;
    const targetedItem: any = subItems[index];

    targetedItem[name] = value;

    entry.item = subItems;

    setEntry({ ...entry });
  };

  const handleNormalChange = (e: any) => {
    const { name, value } = e.target;
    setEntry({ ...entry, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      console.log(entry);
      const response = await axios.patch("/api/challans", {
        id: updateId, // ye bhul raha tha baar baar
        ...entry,
      });
      console.log(response);
      if (response) {
        toast.success(response.data.message);
        router.push(`/challans/${company}/${id}`);
      } else {
        toast.error("ERROR WHILE UPDATING CHALLAN");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <main className="flex min-h-screen flex-col px-20 py-10 gap-10">
      <section className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-xl font-semibold uppercase">
              update challan - <span className="uppercase">{companyName} </span>{" "}
            </h2>
            <p className="mt-1 flex gap-2 text-sm dark:text-slate-300 text-gray-700">
              Challan ID
              <span className="">{updateId}</span>
            </p>
          </div>
          <div className="flex gap-x-4">
            <Button className="capitalize">
              <Link
                href={`/challans/${company}/${id}`}
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
          className="flex flex-col gap-y-4"
          onSubmit={handleSubmit}
        >
          <div className="border bg-black dark:bg-white/90 dark:text-black text-white rounded p-2 font-semibold capitalize">
            update challan details
          </div>
          <div className="grid grid-cols-2 gap-x-6">
            <div className="">
              <Label className="uppercase">challan NO</Label>
              <Input type="text" value={entry?.challanNum} readOnly />
            </div>
            <div className="">
              <Label>DATE</Label>
              <Input type="text" value={entry?.mainBillDate} readOnly />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-6">
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
              <Label className="uppercase">vehicle Number</Label>
              <Input
                name="vehicleNum"
                id="vehicleNum"
                type="text"
                value={entry?.vehicleNum}
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
                value={entry?.panNum}
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
                value={entry?.ownersName}
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
                value={entry?.driversName}
                onChange={handleNormalChange}
                placeholder="enter drivers name"
              />
            </div>
          </div>
          <div className="border bg-black dark:bg-white/90 dark:text-black text-white rounded p-2 font-semibold capitalize">
            update Item details
          </div>
          {entry?.item?.map((item, index) => (
            <div className="flex flex-col gap-y-4" key={index}>
              <div className="grid grid-cols-3 gap-x-6 gap-y-4">
                <div className="">
                  <Label className="uppercase">date</Label>
                  <Input
                    name="date"
                    id="date"
                    type="text"
                    value={item?.date}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="set date"
                  />
                </div>

                <div className="">
                  <Label className="uppercase">gc Note Number</Label>
                  <Input
                    name="gcNoteNum"
                    id="gcNoteNum"
                    type="text"
                    value={item?.gcNoteNum}
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
                    value={item?.pkgs}
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
                    value={item?.description}
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
                    value={item?.consignor}
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
                    value={item?.consignee}
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
                    value={item?.weight}
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
                    value={item?.rate}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="set rate"
                  />
                </div>

                <div className="w-[32%]">
                  <Label className="uppercase">collection</Label>
                  <Input
                    name="collection"
                    id="collection"
                    type="text"
                    value={item?.collection}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="set collection"
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="border bg-black dark:bg-white/90 dark:text-black text-white rounded p-2 font-semibold capitalize">
            update footer details
          </div>
          <div className="grid grid-cols-3 gap-x-6">
            <div className="">
              <Label className="uppercase">commission</Label>
              <Input
                name="commission"
                id="commission"
                type="text"
                value={entry?.commission}
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
                value={entry?.refund}
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
                value={entry?.hamali}
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
                value={entry?.other}
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
                value={entry?.munsyanaAndPayment}
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
                value={entry?.total}
                onChange={handleNormalChange}
                placeholder="enter total"
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

export default ChallanUpdatePage;
