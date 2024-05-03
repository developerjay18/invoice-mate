import React, { useState } from 'react';
import { Label } from './ui/label';
import { Input } from '@/components/ui/input';
import { getDate } from '@/helpers/getDate';
import { Button } from './ui/button';
import Link from 'next/link';

function LoadingSlip() {
  const date = getDate();
  const [normalData, setNormalData] = useState({
    primaryTo: '',
    truckNum: '',
    from: '',
    to: '',
    rate: '',
    gauranteeBy: '',
    name: '',
    advance: '',
    balance: '',
  });

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
            <Input type="text" value={'118409'} readOnly />
          </div>

          <div className="">
            <Label>DATE</Label>
            <Input type="text" value={date} readOnly />
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
          <Link href={''}>
            <Button>Submit</Button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoadingSlip;
