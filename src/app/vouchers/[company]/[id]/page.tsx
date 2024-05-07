"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RiArrowGoBackLine } from "react-icons/ri";
import axios from "axios";
import toast from "react-hot-toast";

function VoucherPage({ params }: any) {
  const id = params.id;
  const company = params.company;
  const companyName = company.split("-").join(" ");

  const [entries, setEntries] = useState([]);

  const handleDelete = useCallback(async (id: string) => {
    try {
      const response = await axios.delete(`/api/vouchers`, {
        data: { voucherId: id },
      });

      if (response.status === 200 && response.data.status === 200) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.error);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }, []);

  useEffect(() => {
    const fetchVouchers = async () => {
      try {
        const response = await axios.post("/api/vouchers/get-vouchers", {
          companyId: id,
        });

        console.log(response.data);
        if (response.status === 200 && response.data.status === 200) {
          await setEntries(response.data.vouchers);
          toast.success(response.data.message);
        } else {
          toast.error(response.data.error);
        }
      } catch (error: any) {
        toast.error(error.message);
      }
    };

    fetchVouchers();
  }, [id, handleDelete]);

  return (
    <main className="flex min-h-screen flex-col px-20 py-10 gap-10">
      <section className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-xl font-semibold">
              Vouchers - <span className="uppercase">{companyName} </span>{" "}
            </h2>
            <p className="mt-1 text-sm dark:text-slate-300 text-gray-700">
              All Vouchers of {params.id}
            </p>
          </div>
          <div className="flex gap-x-4">
            <Button className="capitalize">
              <Link href={`/invoice/${company}/${id}/create`}>
                Add New Voucher
              </Link>
            </Button>
            <Button className="capitalize">
              <Link
                href={`/companies/${company}/${id}`}
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

        {/* table  */}
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border md:rounded-lg">
                <table className="min-w-full divide-y dark:divide-gray-700 divide-gray-200">
                  {/* heading */}
                  <thead className="dark:bg-[#020817] bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-md font-semibold dark:text-white text-gray-700"
                      >
                        <span>Type</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-md font-semibold dark:text-white text-gray-700"
                      >
                        Voucher Number
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-md font-semibold dark:text-white text-gray-700"
                      >
                        Paid To
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-md font-semibold dark:text-white text-gray-700"
                      >
                        Date and Time
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-md font-semibold dark:text-white text-gray-700"
                      >
                        Voucher ID
                      </th>
                      <th
                        scope="col"
                        className="relative text-white px-4 py-3.5"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>

                  {/* body  */}
                  <tbody className="divide-y dark:divide-gray-700 divide-gray-200 dark:bg-[#020817] bg-white">
                    {entries?.map((entry: any) => (
                      <tr key={entry.name}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="ml-0">
                              <div className="text-sm font-normal dark:text-white text-gray-900">
                                voucher
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm dark:text-white text-gray-900 ">
                            {entry.voucherNum}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="text-sm dark:text-white text-gray-900 ">
                            {entry.paidTo}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm dark:text-white text-gray-700">
                          {entry.updatedAt}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm dark:text-white text-gray-700">
                          {entry._id}
                        </td>

                        <td className="whitespace-nowrap px-4 py-4 text-right font-medium text-lg flex gap-3 justify-end w-auto">
                          <Button className="">View</Button>
                          <Link
                            href={`/vouchers/${company}/${id}/${entry._id}`}
                          >
                            <Button className="">Update</Button>
                          </Link>
                          <Button
                            className=""
                            onClick={() => handleDelete(entry._id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default VoucherPage;
