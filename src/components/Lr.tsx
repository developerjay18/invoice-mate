'use client';

import React, { useState } from 'react';
import { Label } from './ui/label';
import { Input } from '@/components/ui/input';
import { getDate } from '@/helpers/getDate';
import { IoIosAddCircle } from 'react-icons/io';
import { Button } from './ui/button';
import Link from 'next/link';

function Lr() {
  const date = getDate();

  const [fieldData, setFieldData] = useState([
    {
      package: '',
      content: '',
      actualWeight: '',
      chargeWeight: '',
      value: '',
      firstFreightPaid: '',
      firstFreightToBePaid: '',
      serviceTax: '',
      tdsPaid: '',
      tdsToBePaid: '',
      hemaliPaid: '',
      hemaliToBePaid: '',
      advancePaid: '',
      advanceToBePaid: '',
      stataricalPaid: '',
      stataricalToBePaid: '',
      odChargePaid: '',
      odChargeToBePaid: '',
      grTotalPaid: '',
      grTotalToBePaid: '',
      remarks: '',
    },
  ]);
  const [normalData, setNormalData] = useState({
    deliveryAt: '',
    truckNum: '',
    consignorsName: '',
    consigneesName: '',
    from: '',
    to: '',
  });

  const addField = (e: any) => {
    e.preventDefault();
    setFieldData((prev): any => {
      return [
        ...prev,
        {
          package: '',
          content: '',
          actualWeight: '',
          chargeWeight: '',
          value: '',
          firstFreightPaid: '',
          firstFreightToBePaid: '',
          serviceTax: '',
          tdsPaid: '',
          tdsToBePaid: '',
          hemaliPaid: '',
          hemaliToBePaid: '',
          advancePaid: '',
          advanceToBePaid: '',
          stataricalPaid: '',
          stataricalToBePaid: '',
          odChargePaid: '',
          odChargeToBePaid: '',
          grTotalPaid: '',
          grTotalToBePaid: '',
          remarks: '',
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

    setNormalData((prev) => {
      return { ...prev, [name]: [value] };
    });
  };
  return (
    <div>
      <form action="#" method="post" className="flex flex-col gap-y-4">
        <div className="border bg-black dark:bg-white/90 dark:text-black text-white rounded p-2 font-semibold capitalize">
          Add New LR details
        </div>

        <div className="grid grid-cols-2 gap-x-6">
          <div className="">
            <Label className="uppercase">c/n/ NO</Label>
            <Input type="text" value={'118409'} readOnly />
          </div>

          <div className="">
            <Label>DATE</Label>
            <Input type="text" value={date} readOnly />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-x-6 gap-y-4">
          <div className="">
            <Label className="uppercase">truck num</Label>
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
            <Label className="uppercase">delivery at</Label>
            <Input
              name="deliveryAt"
              id="deliveryAt"
              type="text"
              value={normalData.deliveryAt}
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
            <Label className="uppercase">consignors Name & address</Label>
            <Input
              name="consignorsName"
              id="consignorsName"
              type="text"
              value={normalData.consignorsName}
              onChange={handleNormalChange}
              placeholder="enter consignors Name & address"
            />
          </div>

          <div className="">
            <Label className="uppercase">consignee Name & address</Label>
            <Input
              name="consigneesName"
              id="consigneesName"
              type="text"
              value={normalData.consigneesName}
              onChange={handleNormalChange}
              placeholder="enter consignee Name & address"
            />
          </div>
        </div>

        <div className="border bg-black dark:bg-white/90 dark:text-black text-white rounded p-2 font-semibold capitalize">
          Add Item details
        </div>

        {fieldData?.map((data, index) => (
          <div className="flex flex-col justify-between" key={data.content}>
            <div className="grid grid-cols-3 gap-x-6 gap-y-4">
              <div className="">
                <Label className="uppercase">package</Label>
                <Input
                  name="package"
                  id="package"
                  type="text"
                  value={data.package}
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
                  value={data.content}
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
                  value={data.actualWeight}
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
                  value={data.chargeWeight}
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
                  value={data.value}
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
                  value={data.firstFreightPaid}
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
                  value={data.firstFreightToBePaid}
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
                  value={data.serviceTax}
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
                  value={data.tdsPaid}
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
                  value={data.tdsToBePaid}
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
                  value={data.hemaliPaid}
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
                  value={data.hemaliToBePaid}
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
                  value={data.advancePaid}
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
                  value={data.advanceToBePaid}
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
                  value={data.stataricalPaid}
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
                  value={data.stataricalToBePaid}
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
                  value={data.odChargePaid}
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
                  value={data.odChargeToBePaid}
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
                  value={data.grTotalPaid}
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
                  value={data.grTotalToBePaid}
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
                  value={data.remarks}
                  onChange={(e: any) => handleChange(e, index)}
                  placeholder="set remarks"
                />
              </div>

              <div className="text-5xl w-[4%] flex justify-end items-end cursor-pointer">
                <IoIosAddCircle
                  className="hover:text-black/85 dark:hover:text-white/90"
                  onClick={addField}
                />
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-center pt-8">
          <Link href={''}>
            <Button>Submit</Button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Lr;