"use client";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import toast from "react-hot-toast";
import axios from "axios";
import { RiArrowGoBackLine } from "react-icons/ri";
import { IoIosAddCircle } from "react-icons/io";
import { useRouter } from "next/navigation";

function BillUpdatePage({ params }: any) {
  const id = params.id;
  const company = params.company;
  const companyName = company.split("-").join(" ");
  const updateId = params.updateId;
  const total = "yet to be coded";
  const router = useRouter();

  const [entry, setEntry] = useState({
    billNum: "",
    mainBillDate: "",
    name: "",
    total: "",
    company: "",
    list: [
      {
        sNumber: "",
        date: "",
        cnNum: "",
        from: "",
        to: "",
        particular: "",
        weight: "",
        rate: "",
        amount: "",
        advance: "",
        balance: "",
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("/api/bills/get-bill", {
          billId: updateId,
        });

        if (response.status === 200 && response.data.status === 200) {
          await setEntry(response.data.bill);
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
    const subItems = entry.list;
    let targetedItem: any = subItems[index];

    targetedItem[name] = value;

    entry.list = subItems;

    setEntry({ ...entry });
  };

  const handleNormalChange = (e: any) => {
    const { name, value } = e.target;
    console.log(entry);

    setEntry({ ...entry, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      console.log(entry);
      const response = await axios.patch("/api/bills", {
        id: updateId, // ye bhul raha tha baar baar
        ...entry,
      });
      console.log(response);
      if (response) {
        toast.success(response.data.message);
        router.push(`/bills/${company}/${id}`);
      } else {
        toast.error("ERROR WHILE UPDATING BILLS");
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
              update bill - <span className="uppercase">{companyName} </span>{" "}
            </h2>
            <p className="mt-1 flex gap-2 text-sm dark:text-slate-300 text-gray-700">
              Bill ID
              <span className="">{updateId}</span>
            </p>
          </div>
          <div className="flex gap-x-4">
            <Button className="capitalize">
              <Link
                href={`/bills/${company}/${id}`}
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
            Add New Bill details
          </div>

          <div className="grid grid-cols-3 gap-x-6">
            <div className="">
              <Label>M/S.</Label>
              <Input
                name="name"
                id="name"
                type="text"
                value={entry?.name}
                onChange={handleNormalChange}
                placeholder="m/s"
              />
            </div>
            <div className="">
              <Label>BILL NO</Label>
              <Input type="text" value={entry?.billNum} readOnly />
            </div>
            <div className="">
              <Label>DATE</Label>
              <Input
                type="text"
                name="mainBillDate"
                id="mainBillDate"
                value={entry?.mainBillDate}
                onChange={handleNormalChange}
              />
            </div>
          </div>

          <div className="border bg-black dark:bg-white/90 dark:text-black text-white rounded p-2 font-semibold capitalize">
            Add Item details
          </div>

          {entry?.list?.map((item, index) => (
            <div className="flex flex-col gap-y-4" key={index}>
              <div className="grid grid-cols-3 gap-x-6 gap-y-4">
                <div className="">
                  <Label>S.NO.</Label>
                  <Input
                    name="sNumber"
                    id="sNumber"
                    type="text"
                    value={item?.sNumber}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="set particular"
                  />
                </div>

                <div className="">
                  <Label>DATE</Label>
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
                  <Label>CN NUMBER</Label>
                  <Input
                    name="cnNum"
                    id="cnNum"
                    type="text"
                    value={item?.cnNum}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="enter CN number"
                  />
                </div>

                <div className="">
                  <Label>FROM</Label>
                  <Input
                    name="from"
                    id="from"
                    type="text"
                    value={item?.from}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="enter from"
                  />
                </div>

                <div className="">
                  <Label className="uppercase">To</Label>
                  <Input
                    name="to"
                    id="to"
                    type="text"
                    value={item?.to}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="enter to"
                  />
                </div>

                <div className="">
                  <Label className="uppercase">particular</Label>
                  <Input
                    name="particular"
                    id="particular"
                    type="text"
                    value={item?.particular}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="enter particular"
                  />
                </div>

                <div className="">
                  <Label className="uppercase">weight</Label>
                  <Input
                    name="weight"
                    id="weight"
                    type="text"
                    value={item?.weight}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="enter weight"
                  />
                </div>

                <div className="">
                  <Label className="uppercase">rate</Label>
                  <Input
                    name="rate"
                    id="rate"
                    type="text"
                    value={item?.rate}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="enter rate"
                  />
                </div>

                <div className="">
                  <Label className="uppercase">amount</Label>
                  <Input
                    name="amount"
                    id="amount"
                    type="text"
                    value={item?.amount}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="enter amount"
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <div className="w-[43%]">
                  <Label className="uppercase">advance</Label>
                  <Input
                    name="advance"
                    id="advance"
                    type="text"
                    value={item?.advance}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="enter advance"
                  />
                </div>

                <div className="w-[43%]">
                  <Label className="uppercase">balance</Label>
                  <Input
                    name="balance"
                    id="balance"
                    type="text"
                    value={item?.balance}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="enter balance"
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="">
            <Label>TOTAL</Label>
            <Input
              name="total"
              id="total"
              type="text"
              value={entry?.total}
              onChange={handleNormalChange}
            />
          </div>

          <div className="flex justify-center pt-8">
            <Button type="submit">Update</Button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default BillUpdatePage;
