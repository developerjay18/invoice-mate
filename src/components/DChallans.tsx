"use client";

import React from "react";

const DChallans = ({ exData }: any) => {
  return (
    <div>
      <table style={{ width: "100%", margin: "20px 0", fontSize: "12px" }}>
        {exData?.map((item: any, index: number) => (
          <React.Fragment key={index}>
            <thead className="border bg-gray-700">
              <tr>
                <th className="border">Challan No.</th>
                <th className="border">Main Date</th>
                <th className="border">From</th>
                <th className="border">To</th>
                <th className="border">Vehicle No.</th>
                <th className="border">Owner's Name</th>
                <th className="border">Driver's Name</th>
                <th className="border">PAN No.</th>
                <th className="border">Commission</th>
                <th className="border">Refund</th>
                <th className="border">Hamali</th>
                <th className="border">Other</th>
                <th className="border">Munsyana and Payment</th>
                <th className="border">Total</th>
                <th className="border">Text Area Calculation</th>
              </tr>
            </thead>
            <tbody>
              <React.Fragment key={index}>
                <tr>
                  <td className="border">{item.challanNum}</td>
                  <td className="border">{item.mainBillDate}</td>
                  <td className="border">{item.from}</td>
                  <td className="border">{item.to}</td>
                  <td className="border">{item.vehicleNum}</td>
                  <td className="border">{item.ownersName}</td>
                  <td className="border">{item.driversName}</td>
                  <td className="border">{item.panNum}</td>
                  <td className="border">{item.commission}</td>
                  <td className="border">{item.refund}</td>
                  <td className="border">{item.hamali}</td>
                  <td className="border">{item.other}</td>
                  <td className="border">{item.munsyanaAndPayment}</td>
                  <td className="border">{item.total}</td>
                  <td className="border">{item.textAreaCalc}</td>
                </tr>
                <tr>
                  <th className="border">Date</th>
                  <th className="border">GC Note No.</th>
                  <th className="border">PKGS</th>
                  <th className="border">Description</th>
                  <th className="border">Consignor</th>
                  <th className="border">Consignee</th>
                  <th className="border">Weight</th>
                  <th className="border">Rate</th>
                  <th className="border">Ccollection</th>
                </tr>
                {item?.item?.map((innerItem: any, innerIndex: number) => (
                  <tr key={innerIndex}>
                    <td className="border">{innerItem.date}</td>
                    <td className="border">{innerItem.gcNoteNum}</td>
                    <td className="border">{innerItem.pkgs}</td>
                    <td className="border">{innerItem.description}</td>
                    <td className="border">{innerItem.consignor}</td>
                    <td className="border">{innerItem.consignee}</td>
                    <td className="border">{innerItem.weight}</td>
                    <td className="border">{innerItem.rate}</td>
                    <td className="border">{innerItem.ccollection}</td>
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

export default DChallans;
