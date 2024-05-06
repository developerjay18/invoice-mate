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
  const id: any = params.id;
  const company: any = params.company;
  const companyName = company.split('-').join(' ');
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
        <div className="flex items-center font-bold text-5xl uppercase">
          {companyName}
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
          {type === 'lr' ? <Lr id={id} company={company} /> : ''}
          {type === 'bill' ? <Bill /> : ''}
          {type === 'challan' ? <Challan /> : ''}
          {type === 'voucher' ? <Voucher /> : ''}
          {type === 'loading-slip' ? <LoadingSlip /> : ''}
        </div>
      </div>
    </main>
  );
}

export default InvoicePage;
