"use client";

import React from "react";

const DLoadingSlips = ({ exData }: any) => {
  return (
    <div>
      <table style={{ width: "100%", margin: "20px 0", fontSize: "13px" }}>
        {exData?.map((item: any, index: number) => (
          <React.Fragment key={index}>
            <thead className="border  bg-gray-700">
              <tr>
                <th className="border">Loading Slip No.</th>
                <th className="border">Date</th>
                <th className="border">Main To</th>
                <th className="border">Truck Number</th>
                <th className="border">From</th>
                <th className="border">To</th>
                <th className="border">Rate</th>
                <th className="border">Guarantee By</th>
                <th className="border">Name</th>
                <th className="border">Advance</th>
                <th className="border">Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr key={index}>
                <td className="border">{item.loadingSlipNum}</td>
                <td className="border">{item.date}</td>
                <td className="border">{item.primaryTo}</td>
                <td className="border">{item.truckNum}</td>
                <td className="border">{item.from}</td>
                <td className="border">{item.to}</td>
                <td className="border">{item.rate}</td>
                <td className="border">{item.guaranteeBy}</td>
                <td className="border">{item.name}</td>
                <td className="border">{item.advance}</td>
                <td className="border">{item.balance}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
    </div>
  );
};

export default DLoadingSlips;
