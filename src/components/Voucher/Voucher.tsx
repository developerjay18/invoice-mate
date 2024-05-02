'use client';

import React from 'react';
import { Label } from '../ui/label';
import { Input } from '@/components/ui/input';
import { getDate } from '@/helpers/getDate';

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

        <div className="grid grid-cols-3 gap-x-6 border">
          TABLE CONTENT LOGIC PENDING...
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
