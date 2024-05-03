'use client';

import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Voucher from '@/components/Voucher';
import Bill from '@/components/Bill';
import LoadingSlip from '@/components/LoadingSlip';
import Challan from '@/components/Challan';
import Lr from '@/components/Lr';

function InvoicePage({ params }: any) {
  const company = params.company;
  const id = params.id;
  const [type, setType] = useState('');

  return (
    <main className="flex min-h-screen flex-col px-20 py-10 gap-10">
      {/* header  */}
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <Label className="capitalize">Select your Invoice type</Label>
          <Select onValueChange={(e) => setType(e)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Invoices" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="lr">LR</SelectItem>
                <SelectItem value="bill">Bill</SelectItem>
                <SelectItem value="challan">Challan</SelectItem>
                <SelectItem value="voucher">Voucher</SelectItem>
                <SelectItem value="loading-slip">Loading Slip</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center text-2xl font-semibold">
          {company} ({id})
        </div>
      </div>
      <hr />

      {/* main section  */}
      <div className="flex flex-col gap-y-10">
        <h2 className="text-center text-3xl capitalize font-bold">
          Create your {type}
        </h2>

        {/* form container  */}
        <div className="">
          {type === 'lr' ? <Lr /> : 'none'}
          {type === 'bill' ? <Bill /> : 'none'}
          {type === 'challan' ? <Challan /> : 'none'}
          {type === 'voucher' ? <Voucher /> : 'none'}
          {type === 'loading-slip' ? <LoadingSlip /> : 'none'}
        </div>
      </div>
    </main>
  );
}

export default InvoicePage;
