"use client";

import React from "react";

const DBills = ({ exData }: any) => {
  return (
    <div>
      <table style={{ width: "100%", margin: "20px 0", fontSize: "12px" }}>
        {exData?.map((item: any, index: number) => (
          <React.Fragment key={index}>
            <thead className="border bg-gray-700">
              <tr>
                <th className="border">Bill No.</th>
                <th className="border">Bill Date</th>
                <th className="border">Name</th>
                <th className="border">Total</th>
                <th className="border">S No.</th>
                <th className="border">Date</th>
                <th className="border">CN No.</th>
                <th className="border">From</th>
                <th className="border">To</th>
                <th className="border">Particular</th>
                <th className="border">Weight</th>
                <th className="border">Rate</th>
                <th className="border">Amount</th>
                <th className="border">Advance</th>
                <th className="border">Balance</th>
              </tr>
            </thead>
            <tbody>
              <React.Fragment key={index}>
                <tr>
                  <td className="border">{item.billNum}</td>
                  <td className="border">{item.mainBillDate}</td>
                  <td className="border">{item.name}</td>
                  <td className="border">{item.total}</td>
                  <td className="border"></td>
                  <td className="border"></td>
                  <td className="border"></td>
                  <td className="border"></td>
                  <td className="border"></td>
                  <td className="border"></td>
                  <td className="border"></td>
                  <td className="border"></td>
                  <td className="border"></td>
                  <td className="border"></td>
                </tr>
                {item?.list?.map((innerItem: any, innerIndex: number) => (
                  <tr key={innerIndex}>
                    <td className="border"></td>
                    <td className="border"></td>
                    <td className="border"></td>
                    <td className="border"></td>
                    <td className="border">{innerItem.sNumber}</td>
                    <td className="border">{innerItem.date}</td>
                    <td className="border">{innerItem.cnNum}</td>
                    <td className="border">{innerItem.from}</td>
                    <td className="border">{innerItem.to}</td>
                    <td className="border">{innerItem.particular}</td>
                    <td className="border">{innerItem.weight}</td>
                    <td className="border">{innerItem.rate}</td>
                    <td className="border">{innerItem.amount}</td>
                    <td className="border">{innerItem.advance}</td>
                    <td className="border">{innerItem.balance}</td>
                  </tr>
                ))}
              </React.Fragment>
            </tbody>
          </React.Fragment>
        ))}
      </table>
    </div>
  );
};

export default DBills;
