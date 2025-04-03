"use client";

import React from "react";

const DVouchers = ({ exData }: any) => {
  return (
    <div>
      <table
        style={{
          width: "100%",
          margin: "20px 0",
          fontSize: "12px",
        }}
      >
        {exData?.map((item: any, index: number) => (
          <React.Fragment key={index}>
            <thead className="bg-gray-700  border">
              <tr>
                <th className="border">Paid To</th>
                <th className="border">Voucher No.</th>
                <th className="border">Date</th>
                <th className="border">Debit</th>
                <th className="border">On Account Of</th>
                <th className="border">Total</th>
                <th className="border">Authorised By</th>
                <th className="border">Passed By</th>
                <th className="border">Payment</th>
                <th className="border">Check No.</th>
                <th className="border">Particular</th>
                <th className="border">Rupees</th>
                <th className="border">Paise</th>
              </tr>
            </thead>
            <tbody>
              <React.Fragment key={index}>
                <tr style={{ fontWeight: "bold" }}>
                  <td className="border">{item.paidTo}</td>
                  <td className="border">{item.voucherNum}</td>
                  <td className="border">{item.date}</td>
                  <td className="border">{item.debit}</td>
                  <td className="border">{item.onAccountOf}</td>
                  <td className="border">{item.total}</td>
                  <td className="border">{item.authorisedBy}</td>
                  <td className="border">{item.passedBy}</td>
                  <td className="border">{item.payment}</td>
                  <td className="border">{item.chequeNum}</td>
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
                    <td className="border"></td>
                    <td className="border"></td>
                    <td className="border"></td>
                    <td className="border"></td>
                    <td className="border"></td>
                    <td className="border"></td>
                    <td className="border">{innerItem.particular}</td>
                    <td className="border">{innerItem.rupees}</td>
                    <td className="border">{innerItem.paise}</td>
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

export default DVouchers;
