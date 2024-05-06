'use client';

import React, { useState } from 'react';
import { Label } from './ui/label';
import { Input } from '@/components/ui/input';
import { getDate } from '@/helpers/getDate';
import { IoIosAddCircle } from 'react-icons/io';
import { Button } from './ui/button';
import Link from 'next/link';

// total, company, number, date fields are still pending...
function Voucher() {
  const [fieldData, setFieldData] = useState([
    {
      particular: '',
      rupees: '',
      paise: '',
    },
  ]);
  const [normalData, setNormalData] = useState({
    paidTo: '',
    debit: '',
    onAccountOf: '',
    authorisedBy: '',
    passedBy: '',
    payment: '',
    chequeNum: '',
  });

  const date = getDate();

  const addField = (e: any) => {
    e.preventDefault();
    setFieldData((prev): any => {
      return [...prev, { particular: '', rupees: '', paise: '' }];
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
          Add New Voucher details
        </div>
        <div className="grid grid-cols-3 gap-x-6">
          <div className="">
            <Label>PAID TO</Label>
            <Input
              name="paidTo"
              id="paidTo"
              type="text"
              value={normalData.paidTo}
              onChange={handleNormalChange}
              placeholder="paid to"
            />
          </div>
          <div className="">
            <Label>NO</Label>
            <Input type="text" value={'118409'} readOnly />
          </div>
          <div className="">
            <Label>DATE</Label>
            <Input type="text" value={date} readOnly />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6">
          <div className="">
            <Label>DEBIT</Label>
            <Input
              name="debit"
              id="debit"
              type="text"
              value={normalData.debit}
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
              value={normalData.onAccountOf}
              onChange={handleNormalChange}
              placeholder="on account of"
            />
          </div>
        </div>

        <div className="border bg-black dark:bg-white/90 dark:text-black text-white rounded p-2 font-semibold capitalize">
          Add Item details
        </div>

        {fieldData?.map((data, index) => (
          <div className="flex justify-between gap-x-6 rounded" key={index}>
            <div className="w-[50%]">
              <Label>PARTICULAR</Label>
              <Input
                name="particular"
                id="particular"
                type="text"
                value={data.particular}
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
                value={data.rupees}
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
                value={data.paise}
                onChange={(e: any) => handleChange(e, index)}
                placeholder="pasie"
              />
            </div>
            <div className="text-5xl w-[4%] flex justify-end items-end cursor-pointer">
              <IoIosAddCircle
                className="hover:text-black/85"
                onClick={addField}
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
              value={normalData.authorisedBy}
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
              value={normalData.passedBy}
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
              value={normalData.payment}
              onChange={handleNormalChange}
              placeholder="select your payment"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6">
          <div className="">
            <Label>CHEQUE NO</Label>
            <Input
              name="chequeNum"
              id="chequeNum"
              type="text"
              value={normalData.chequeNum}
              onChange={handleNormalChange}
              placeholder="mention cheque number"
            />
          </div>
          <div className="">
            <Label>DATE</Label>
            <Input type="text" value={date} />
          </div>
        </div>

        <div className="flex justify-center pt-8">
          <Link href={''}>
            <Button>Submit</Button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Voucher;