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

function VoucherUpdatePage({ params }: any) {
  const id = params.id;
  const company = params.company;
  const companyName = company.split("-").join(" ");
  const updateId = params.updateId;
  const total = "yet to be coded";
  const router = useRouter();

  const [entry, setEntry] = useState({
    paidTo: "",
    voucherNum: "",
    date: "",
    debit: "",
    onAccountOf: "",
    list: [
      {
        particular: "",
        rupees: "",
        paise: "",
      },
    ],
    total: "",
    authorisedBy: "",
    passedBy: "",
    payment: "",
    chequeNum: "",
    company: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("/api/vouchers/get-voucher", {
          voucherId: updateId,
        });

        if (response.status === 200 && response.data.status === 200) {
          await setEntry(response.data.voucher);
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
    const targetedItem: any = subItems[index];

    targetedItem[name] = value;

    entry.list = subItems;

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
      const response = await axios.patch("/api/vouchers", {
        id: updateId, // ye bhul raha tha baar baar
        ...entry,
      });
      console.log(response);
      if (response) {
        toast.success(response.data.message);
        router.push(`/vouchers/${company}/${id}`);
      } else {
        toast.error("ERROR WHILE UPDATING VOUCHERS");
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
              update voucher - <span className="uppercase">{companyName} </span>{" "}
            </h2>
            <p className="mt-1 flex gap-2 text-sm dark:text-slate-300 text-gray-700">
              Voucher ID
              <span className="">{updateId}</span>
            </p>
          </div>
          <div className="flex gap-x-4">
            <Button className="capitalize">
              <Link
                href={`/vouchers/${company}/${id}`}
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
            Add New Voucher details
          </div>
          <div className="grid grid-cols-3 gap-x-6">
            <div className="">
              <Label>PAID TO</Label>
              <Input
                name="paidTo"
                id="paidTo"
                type="text"
                value={entry?.paidTo}
                onChange={handleNormalChange}
                placeholder="paid to"
              />
            </div>
            <div className="">
              <Label>NO</Label>
              <Input type="text" value={entry?.voucherNum} readOnly />
            </div>
            <div className="">
              <Label>DATE</Label>
              <Input type="text" value={entry?.date} readOnly />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6">
            <div className="">
              <Label>DEBIT</Label>
              <Input
                name="debit"
                id="debit"
                type="text"
                value={entry?.debit}
                onChange={handleNormalChange}
                placeholder="debit"
              />
            </div>
            <div className="">
              <Label>ON A/C OF</Label>
              <Input
                name="onAccountOf"
                id="onAccountOf"
                type="text"
                value={entry?.onAccountOf}
                onChange={handleNormalChange}
                placeholder="on account of"
              />
            </div>
          </div>

          <div className="border bg-black dark:bg-white/90 dark:text-black text-white rounded p-2 font-semibold capitalize">
            Add Item details
          </div>

          {entry?.list?.map((item, index) => (
            <div className="flex justify-between gap-x-6 rounded" key={index}>
              <div className="w-[50%]">
                <Label>PARTICULAR</Label>
                <Input
                  name="particular"
                  id="particular"
                  type="text"
                  value={item?.particular}
                  onChange={(e: any) => handleChange(e, index)}
                  placeholder="set particular"
                />
              </div>
              <div className="w-[23%]">
                <Label>RS</Label>
                <Input
                  name="rupees"
                  id="rupees"
                  type="text"
                  value={item?.rupees}
                  onChange={(e: any) => handleChange(e, index)}
                  placeholder="rupees"
                />
              </div>
              <div className="w-[23%]">
                <Label>PS</Label>
                <Input
                  name="paise"
                  id="paise"
                  type="text"
                  value={item?.paise}
                  onChange={(e: any) => handleChange(e, index)}
                  placeholder="pasie"
                />
              </div>
            </div>
          ))}

          <div className="border bg-black dark:bg-white/90 dark:text-black text-white rounded p-2 font-semibold capitalize">
            footer details
          </div>
          <div className="grid grid-cols-3 gap-x-6">
            <div className="">
              <Label>AUTHORISED BY</Label>
              <Input
                name="authorisedBy"
                id="authorisedBy"
                type="text"
                value={entry?.authorisedBy}
                onChange={handleNormalChange}
                placeholder="authorised by"
              />
            </div>
            <div className="">
              <Label>PASSED BY</Label>
              <Input
                name="passedBy"
                id="passedBy"
                type="text"
                value={entry?.passedBy}
                onChange={handleNormalChange}
                placeholder="passed by"
              />
            </div>
            <div className="">
              <Label>PAID CASH/CHEQUE DRAWN ON</Label>
              <Input
                name="payment"
                id="payment"
                type="text"
                value={entry?.payment}
                onChange={handleNormalChange}
                placeholder="select your payment"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-x-6">
            <div className="">
              <Label>CHEQUE NO</Label>
              <Input
                name="chequeNum"
                id="chequeNum"
                type="text"
                value={entry?.chequeNum}
                onChange={handleNormalChange}
                placeholder="mention cheque number"
              />
            </div>
            <div className="">
              <Label>DATE</Label>
              <Input type="text" value={entry?.date} />
            </div>
            <div className="">
              <Label>TOTAL</Label>
              <Input type="text" value={total} />
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

export default VoucherUpdatePage;
