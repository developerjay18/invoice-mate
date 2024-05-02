'use client';

import React from 'react';
import { Label } from '../ui/label';
import { Input } from '@/components/ui/input';
import { getDate } from '@/helpers/getDate';
import { IoIosAddCircle } from 'react-icons/io';

function Voucher() {
  const date = getDate();
  return (
    <div>
      <form action="#" method="post" className="flex flex-col gap-y-4">
        <div className="grid grid-cols-3 gap-x-6">
          <div className="">
            <Label>PAID TO</Label>
            <Input type="text" value={'Akshar bhai'} />
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
            <Input type="text" value={'Ram chandra pran'} />
          </div>
          <div className="">
            <Label>ON A/C OF</Label>
            <Input type="text" value={'Ram chandra pran'} />
          </div>
        </div>

        <div className="flex justify-between gap-x-6 rounded">
          <div className="w-[50%]">
            <Label>PARTICULAR</Label>
            <Input type="text" value={'Books and rubbers'} />
          </div>
          <div className="w-[23%]">
            <Label>RS</Label>
            <Input type="text" value={'23546'} />
          </div>
          <div className="w-[23%]">
            <Label>PS</Label>
            <Input type="text" value={'56'} />
          </div>
          <div className="text-5xl w-[4%] flex justify-end items-end">
            <IoIosAddCircle />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-x-6">
          <div className="">
            <Label>AUTHORISED BY</Label>
            <Input type="text" value={'Ram chandra pran'} />
          </div>
          <div className="">
            <Label>PASSED BY</Label>
            <Input type="text" value={'Ram chandra pran'} />
          </div>
          <div className="">
            <Label>PAID CASH/CHEQUE DRAWN ON</Label>
            <Input type="text" value={'Ram chandra pran'} />
          </div>
          <div className="">
            <Label>CHEQUE NO</Label>
            <Input type="text" value={'Ram chandra pran'} />
          </div>
          <div className="">
            <Label>DATE</Label>
            <Input type="text" value={date} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Voucher;
