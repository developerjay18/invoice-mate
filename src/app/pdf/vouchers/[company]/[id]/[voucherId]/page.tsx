'use client';

import { useRef } from 'react';
import jspdf from 'jspdf';
import html2Canvas from 'html2canvas';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function EVoucherComponent() {
  const documentRef = useRef<HTMLDivElement | null>(null);
  const handlePdf = async () => {
    let inputData = documentRef.current;
    try {
      const canvas = await html2Canvas(inputData as HTMLElement);
      const pdfData = canvas.toDataURL('application/pdf');
      const pdf = new jspdf({
        orientation: 'landscape',
        unit: 'px',
        format: 'a4',
      });
      pdf.addPage(pdfData);
      pdf.save('EVoucher.pdf');
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <main className="flex min-h-screen flex-col px-20 py-10 gap-10">
      <div className="bg-blue-100 p-8 w-1/2 m-auto">
        <div ref={documentRef} className="bg-white h-full p-8 text-black">
          <div className="flex mb-10 gap-5">
            <div className="image w-1/2 border"></div>
            <h1 className="text-[45px] w-1/2 text-red-900 font-serif font-bold">
              VOUCHER
            </h1>
          </div>
          <form className="flex flex-wrap gap-y-8 gap-x-2">
            <label className="uppercase w-full flex gap-x-2">
              Paid To{' '}
              <input type="text" className="bg-inherit grow border-b-2" />
            </label>
            <div className="flex gap-x-4 justify-between">
              <label className="uppercase w-1/2">
                No <input type="text" className="bg-inherit border-b-2" />
              </label>
              <label className="uppercase w-1/2">
                DATE <input type="text" className="bg-inherit border-b-2" />
              </label>
            </div>
            <label className="w-full flex  gap-x-2">
              DEBIT <input type="text" className="grow bg-inherit border-b-2" />
            </label>
            <label className="w-full flex  gap-x-2">
              ON A/C OF{' '}
              <input type="text" className="grow bg-inherit border-b-2" />
            </label>
            <div className="w-full">
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="">
                    <th className="border text-left pl-2">PARTICULARS:</th>
                    <th className="border">RS</th>
                    <th className="border">PS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border">
                      <div className="flex pl-2">
                        <span>VALUE</span>
                      </div>
                    </td>
                    <td className="border text-center">VV</td>
                    <td className="border text-center">VV</td>
                  </tr>
                  <tr>
                    <td className="border">
                      <div className="flex justify-between pl-2">
                        <span>RUPEES IN WORDS</span>{' '}
                        <span className="pr-2">TOTAL</span>
                      </div>
                    </td>
                    <td className="border"></td>
                    <td className="border"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-full grid gap-y-4 gap-x-2 grid-cols-4">
              <label className="col-span-2">
                AUTHORISED BY{' '}
                <input type="text" className="w-full bg-inherit border-b-2" />
              </label>
              <label className="col-span-2">
                PASSED BY{' '}
                <input type="text" className="w-full bg-inherit border-b-2" />
              </label>
              <label className="col-span-3">
                PAID CASH/CHEQUE/DRAWN NO{' '}
                <input type="text" className="w-full bg-inherit border-b-2" />
              </label>
              <label htmlFor="" className="col-span-2">
                CHEQUE NO{' '}
                <input type="text" className="w-full bg-inherit border-b-2" />
              </label>
              <label htmlFor="">
                DATE
                <input type="text" className="w-full bg-inherit border-b-2" />
              </label>
              <label className="col-start-4 row-start-2 row-span-3 flex flex-col">
                <input type="text" className="h-24 bg-inherit border" />
                <span className="self-center text-center">RECEIVER’S SIGN</span>
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className="mx-auto">
        <Button onClick={handlePdf}>Download PDF</Button>
      </div>
    </main>
  );
}
