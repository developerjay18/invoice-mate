"use client";
import React from "react";

const DLrs = ({ exData }: any) => {
  return (
    <div>
      <table
        style={{
          width: "100%",
          margin: "20px 0",
          fontSize: "12px",
        }}
        border={1}
        className="border"
      >
        {exData?.map((item: any, index: number) => (
          <React.Fragment key={index}>
            <thead className="border bg-gray-700 mt-4">
              <tr>
                <th className="border">Delivery At</th>
                <th className="border">Police No.</th>
                <th className="border">I Date</th>
                <th className="border">Amount</th>
                <th className="border">Risk</th>
                <th className="border">LR No.</th>
                <th className="border">Date</th>
                <th className="border">Truck No.</th>
                <th className="border">Consignors Name</th>
                <th className="border">Consignors GST No.</th>
                <th className="border">Consignees Name</th>
                <th className="border">Consignees GST No.</th>
                <th className="border">From</th>
                <th className="border">To</th>
              </tr>
            </thead>
            <tbody className="mb-4">
              <React.Fragment key={index}>
                <tr className="border">
                  <td className="border">{item.deliveryAt}</td>
                  <td className="border">{item.policeNo}</td>
                  <td className="border">{item.iDate}</td>
                  <td className="border">{item.amount}</td>
                  <td className="border">{item.risk}</td>
                  <td className="border">{item.lrNum}</td>
                  <td className="border">{item.date}</td>
                  <td className="border">{item.truckNum}</td>
                  <td className="border">{item.consignorsName}</td>
                  <td className="border">{item.consignorsGstNum}</td>
                  <td className="border">{item.consigneesName}</td>
                  <td className="border">{item.consigneesGstNum}</td>
                  <td className="border">{item.from}</td>
                  <td className="border">{item.to}</td>
                </tr>
                <tr className="border">
                  <td colSpan={14}>
                    <table
                      style={{
                        width: "100%",
                      }}
                      className="border"
                    >
                      <thead>
                        <tr>
                          <th className="border">Package</th>
                          <th className="border">Content</th>
                          <th className="border">Actual Weight</th>
                          <th className="border">Charge Weight</th>
                          <th className="border">Value</th>
                          <th className="border">First Freight Paid</th>
                          <th className="border">First Freight To Be Paid</th>
                          <th className="border">Service Tax</th>
                          <th className="border">TDS Paid</th>
                          <th className="border">TDS To Be Paid</th>
                          <th className="border">Hemali Paid</th>
                          <th className="border">Hemali To Be Paid</th>
                          <th className="border">Advance Paid</th>
                          <th className="border">Advance To Be Paid</th>
                          <th className="border">Statarical Paid</th>
                          <th className="border">Statarical To Be Paid</th>
                          <th className="border">OdCharge Paid</th>
                          <th className="border">OdCharge To Be Paid</th>
                          <th className="border">GR Total Paid</th>
                          <th className="border">GR Total To Be Paid</th>
                          <th className="border">Remarks</th>
                        </tr>
                      </thead>
                      <tbody>
                        {item?.list?.map(
                          (innerItem: any, innerIndex: number) => (
                            <tr key={innerIndex}>
                              <td className="border">{innerItem.package}</td>
                              <td className="border">{innerItem.content}</td>
                              <td className="border">
                                {innerItem.actualWeight}
                              </td>
                              <td className="border">
                                {innerItem.chargeWeight}
                              </td>
                              <td className="border">{innerItem.value}</td>
                              <td className="border">
                                {innerItem.firstFreightPaid}
                              </td>
                              <td className="border">
                                {innerItem.firstFreightToBePaid}
                              </td>
                              <td className="border">{innerItem.serviceTax}</td>
                              <td className="border">{innerItem.tdsPaid}</td>
                              <td className="border">
                                {innerItem.tdsToBePaid}
                              </td>
                              <td className="border">{innerItem.hemaliPaid}</td>
                              <td className="border">
                                {innerItem.hemaliToBePaid}
                              </td>
                              <td className="border">
                                {innerItem.advancePaid}
                              </td>
                              <td className="border">
                                {innerItem.advanceToBePaid}
                              </td>
                              <td className="border">
                                {innerItem.stataricalPaid}
                              </td>
                              <td className="border">
                                {innerItem.stataricalToBePaid}
                              </td>
                              <td className="border">
                                {innerItem.odChargePaid}
                              </td>
                              <td className="border">
                                {innerItem.odChargeToBePaid}
                              </td>
                              <td className="border">
                                {innerItem.grTotalPaid}
                              </td>
                              <td className="border">
                                {innerItem.grTotalToBePaid}
                              </td>
                              <td className="border">{innerItem.remarks}</td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </td>
                </tr>
              </React.Fragment>
            </tbody>
          </React.Fragment>
        ))}
      </table>
    </div>
  );
};

export default DLrs;
