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

function LrUpdatePage({ params }: any) {
  const id = params.id;
  const company = params.company;
  const companyName = company.split("-").join(" ");
  const updateId = params.updateId;
  const router = useRouter();

  const [entry, setEntry] = useState({
    deliveryAt: "",
    policeNo: "",
    iDate: "",
    amount: "",
    risk: "",
    lrNum: "",
    date: "",
    truckNum: "",
    consignorsName: "",
    consignorsGstNum: "",
    consigneesName: "",
    consigneesGstNum: "",
    from: "",
    to: "",
    list: [
      {
        package: "",
        content: "",
        actualWeight: "",
        chargeWeight: "",
        value: "",
        firstFreightPaid: "",
        firstFreightToBePaid: "",
        serviceTax: "",
        tdsPaid: "",
        tdsToBePaid: "",
        hemaliPaid: "",
        hemaliToBePaid: "",
        advancePaid: "",
        advanceToBePaid: "",
        stataricalPaid: "",
        stataricalToBePaid: "",
        odChargePaid: "",
        odChargeToBePaid: "",
        grTotalPaid: "",
        grTotalToBePaid: "",
        remarks: "",
      },
    ],
    company: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("/api/lrs/get-lr", {
          lrId: updateId,
        });

        if (response.status === 200 && response.data.status === 200) {
          await setEntry(response.data.lr);
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
      const response = await axios.patch("/api/lrs", {
        id: updateId, // ye bhul raha tha baar baar
        ...entry,
      });
      console.log(response);
      if (response) {
        toast.success(response.data.message);
        router.push(`/lrs/${company}/${id}`);
      } else {
        toast.error("ERROR WHILE UPDATING LRS");
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
              update lr - <span className="uppercase">{companyName} </span>{" "}
            </h2>
            <p className="mt-1 flex gap-2 text-sm dark:text-slate-300 text-gray-700">
              LR ID
              <span className="">{updateId}</span>
            </p>
          </div>
          <div className="flex gap-x-4">
            <Button className="capitalize">
              <Link
                href={`/lrs/${company}/${id}`}
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
            Add New LR details
          </div>

          <div className="grid grid-cols-2 gap-x-6">
            <div className="">
              <Label className="uppercase">c/n/ NO</Label>
              <Input type="text" value={entry?.lrNum}  />
            </div>

            <div className="">
              <Label>DATE</Label>
              <Input
                type="text"
                name="date"
                id="date"
                value={entry?.date}
                onChange={handleNormalChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-x-6 gap-y-4">
            <div className="">
              <Label className="uppercase">police no</Label>
              <Input
                name="policeNo"
                id="policeNo"
                type="text"
                value={entry?.policeNo}
                onChange={handleNormalChange}
                placeholder="enter police number"
              />
            </div>

            <div className="">
              <Label className="uppercase">Insurance Date</Label>
              <Input
                name="iDate"
                id="iDate"
                type="text"
                value={entry?.iDate}
                onChange={handleNormalChange}
                placeholder="enter insurance date"
              />
            </div>

            <div className="">
              <Label className="uppercase">Insurance Amount</Label>
              <Input
                name="amount"
                id="amount"
                type="text"
                value={entry?.amount}
                onChange={handleNormalChange}
                placeholder="enter insurance amount"
              />
            </div>

            <div className="">
              <Label className="uppercase">Insurance Risk</Label>
              <Input
                name="risk"
                id="risk"
                type="text"
                value={entry?.risk}
                onChange={handleNormalChange}
                placeholder="enter insurance risk"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-x-6 gap-y-4">
            <div className="">
              <Label className="uppercase">truck num</Label>
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
              <Label className="uppercase">delivery at</Label>
              <Input
                name="deliveryAt"
                id="deliveryAt"
                type="text"
                value={entry?.deliveryAt}
                onChange={handleNormalChange}
                placeholder="enter delivert at place"
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
              <Label className="uppercase">consignors Name & address</Label>
              <Input
                name="consignorsName"
                id="consignorsName"
                type="text"
                value={entry?.consignorsName}
                onChange={handleNormalChange}
                placeholder="enter consignors Name & address"
              />
            </div>

            <div className="">
              <Label className="uppercase">consignors GST Number</Label>
              <Input
                name="consignorsGstNum"
                id="consignorsGstNum"
                type="text"
                value={entry?.consignorsGstNum}
                onChange={handleNormalChange}
                placeholder="enter consignors GST Number"
              />
            </div>

            <div className="">
              <Label className="uppercase">consignee Name & address</Label>
              <Input
                name="consigneesName"
                id="consigneesName"
                type="text"
                value={entry?.consigneesName}
                onChange={handleNormalChange}
                placeholder="enter consignee Name & address"
              />
            </div>

            <div className="">
              <Label className="uppercase">consignee GST Number</Label>
              <Input
                name="consigneesGstNum"
                id="consigneesGstNum"
                type="text"
                value={entry?.consigneesGstNum}
                onChange={handleNormalChange}
                placeholder="enter consignee GST Number"
              />
            </div>
          </div>

          <div className="border bg-black dark:bg-white/90 dark:text-black text-white rounded p-2 font-semibold capitalize">
            Add Item details
          </div>

          {entry?.list?.map((item, index) => (
            <div className="flex flex-col justify-between" key={index}>
              <div className="grid grid-cols-3 gap-x-6 gap-y-4">
                <div className="">
                  <Label className="uppercase">package</Label>
                  <Input
                    name="package"
                    id="package"
                    type="text"
                    value={item?.package}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="set package"
                  />
                </div>

                <div className="">
                  <Label className="uppercase">
                    content as said to be contents
                  </Label>
                  <Input
                    name="content"
                    id="content"
                    type="text"
                    value={item?.content}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="set content"
                  />
                </div>

                <div className="">
                  <Label className="uppercase">actual Weight (kg.grm)</Label>
                  <Input
                    name="actualWeight"
                    id="actualWeight"
                    type="text"
                    value={item?.actualWeight}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="set actual weight"
                  />
                </div>

                <div className="">
                  <Label className="uppercase">charge Weight (kg.grm)</Label>
                  <Input
                    name="chargeWeight"
                    id="chargeWeight"
                    type="text"
                    value={item?.chargeWeight}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="set charge weight"
                  />
                </div>

                <div className="">
                  <Label className="uppercase">value</Label>
                  <Input
                    name="value"
                    id="value"
                    type="text"
                    value={item?.value}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="set value"
                  />
                </div>

                <div className="">
                  <Label className="uppercase">first Freight Paid</Label>
                  <Input
                    name="firstFreightPaid"
                    id="firstFreightPaid"
                    type="text"
                    value={item?.firstFreightPaid}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="set first freight paid"
                  />
                </div>

                <div className="">
                  <Label className="uppercase">first Freight to be Paid</Label>
                  <Input
                    name="firstFreightToBePaid"
                    id="firstFreightToBePaid"
                    type="text"
                    value={item?.firstFreightToBePaid}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="set first freight to be paid"
                  />
                </div>

                <div className="">
                  <Label className="uppercase">service tax</Label>
                  <Input
                    name="serviceTax"
                    id="serviceTax"
                    type="text"
                    value={item?.serviceTax}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="set service tax"
                  />
                </div>

                <div className="">
                  <Label className="uppercase">tds paid</Label>
                  <Input
                    name="tdsPaid"
                    id="tdsPaid"
                    type="text"
                    value={item?.tdsPaid}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="set TDS paid"
                  />
                </div>

                <div className="">
                  <Label className="uppercase">tds to be paid</Label>
                  <Input
                    name="tdsToBePaid"
                    id="tdsToBePaid"
                    type="text"
                    value={item?.tdsToBePaid}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="set TDS to be paid"
                  />
                </div>

                <div className="">
                  <Label className="uppercase">hemali Paid</Label>
                  <Input
                    name="hemaliPaid"
                    id="hemaliPaid"
                    type="text"
                    value={item?.hemaliPaid}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="hemali paid"
                  />
                </div>

                <div className="">
                  <Label className="uppercase">hemali To Be Paid</Label>
                  <Input
                    name="hemaliToBePaid"
                    id="hemaliToBePaid"
                    type="text"
                    value={item?.hemaliToBePaid}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="set hemali to be paid"
                  />
                </div>

                <div className="">
                  <Label className="uppercase">advance paid</Label>
                  <Input
                    name="advancePaid"
                    id="advancePaid"
                    type="text"
                    value={item?.advancePaid}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="set advance paid"
                  />
                </div>

                <div className="">
                  <Label className="uppercase">advance to be paid</Label>
                  <Input
                    name="advanceToBePaid"
                    id="advanceToBePaid"
                    type="text"
                    value={item?.advanceToBePaid}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="set advance to be paid"
                  />
                </div>

                <div className="">
                  <Label className="uppercase">statarical paid</Label>
                  <Input
                    name="stataricalPaid"
                    id="stataricalPaid"
                    type="text"
                    value={item?.stataricalPaid}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="set statarical paid"
                  />
                </div>

                <div className="">
                  <Label className="uppercase">statarical to be paid</Label>
                  <Input
                    name="stataricalToBePaid"
                    id="stataricalToBePaid"
                    type="text"
                    value={item?.stataricalToBePaid}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="set statarical to be paid"
                  />
                </div>

                <div className="">
                  <Label className="uppercase">odCharge paid</Label>
                  <Input
                    name="odChargePaid"
                    id="odChargePaid"
                    type="text"
                    value={item?.odChargePaid}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="set odCharge paid"
                  />
                </div>

                <div className="">
                  <Label className="uppercase">odCharge to be paid</Label>
                  <Input
                    name="odChargeToBePaid"
                    id="odChargeToBePaid"
                    type="text"
                    value={item?.odChargeToBePaid}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="set odCharge to be paid"
                  />
                </div>
              </div>

              <div className="flex justify-between pt-4 gap-x-6">
                <div className="w-[32%]">
                  <Label className="uppercase">gr total paid</Label>
                  <Input
                    name="grTotalPaid"
                    id="grTotalPaid"
                    type="text"
                    value={item?.grTotalPaid}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="set gr total paid"
                  />
                </div>

                <div className="w-[32%]">
                  <Label className="uppercase">gr Total to be paid</Label>
                  <Input
                    name="grTotalToBePaid"
                    id="grTotalToBePaid"
                    type="text"
                    value={item?.grTotalToBePaid}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="set gr Total to be paid"
                  />
                </div>

                <div className="w-[32%]">
                  <Label className="uppercase">remarks</Label>
                  <Input
                    name="remarks"
                    id="remarks"
                    type="text"
                    value={item?.remarks}
                    onChange={(e: any) => handleChange(e, index)}
                    placeholder="set remarks"
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-center pt-8">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default LrUpdatePage;
