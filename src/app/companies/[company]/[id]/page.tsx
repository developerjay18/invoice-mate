import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { FaFileInvoice } from 'react-icons/fa6';

function CompanyPage({ params }: any) {
  const id = params.id;
  const company = params.company;

  const invoicesData = [
    {
      name: 'total challans',
      amount: '10000',
      slug: `/challans/${company}/${id}`,
    },
    {
      name: 'total loading slips',
      amount: '15000',
      slug: `/loading-slips/${company}/${id}`,
    },
    {
      name: 'total bills',
      amount: '19000',
      slug: `/bills/${company}/${id}`,
    },
    {
      name: 'total lrs',
      amount: '18000',
      slug: `/lrs/${company}/${id}`,
    },
    {
      name: 'total vouchers',
      amount: '22000',
      slug: `/vouchers/${company}/${id}`,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col px-20 py-10 gap-10">
      <div className="">
        <h2 className="text-3xl font-bold text-center pb-2">
          {id} {company}
        </h2>
        <hr />
      </div>

      <div className="grid grid-cols-5 gap-x-4 justify-between">
        {invoicesData.map((invoice) => (
          <div
            className="col capitalize border rounded flex justify-center items-center w-full h-[20vh] flex-col text-lg cursor-pointer hover:border-slate-500 dark:hover:border-white"
            key={invoice.name}
          >
            <Link
              href={invoice.slug}
              className="border w-full h-full flex justify-center items-center flex-col"
            >
              <span className="capitalize">{invoice.name}</span>
              <span>{invoice.amount}</span>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-end pt-2">
        <Link href={`/invoice/${company}/${id}/create`}>
          <Button className="flex gap-x-2 text-md capitalize">
            <span>
              <FaFileInvoice />
            </span>
            create invoice
          </Button>
        </Link>
      </div>
    </main>
  );
}

export default CompanyPage;
