"use client";

import { useRef } from "react";
import jspdf from "jspdf";
import html2Canvas from "html2canvas";

export default function EVoucherComponent() {
	const documentRef = useRef<HTMLDivElement | null>(null);
	const handlePdf = async () => {
		let inputData = documentRef.current;
		try {
			const canvas = await html2Canvas(inputData as HTMLElement);
			const pdfData = canvas.toDataURL("application/pdf");
			const pdf = new jspdf({
				orientation: "landscape",
				unit: "px",
				format: "a4",
			});
			pdf.addPage(pdfData);
			pdf.save("EVoucher.pdf");
		} catch (err) {
			console.error(err);
		}
	};
	return (
		<div className="bg-blue-100 p-8 w-1/2 m-auto">
			<div ref={documentRef} className="bg-white h-full p-8 text-black">
				<h1 className="text-[70px] text-red-900">VOUCHER</h1>
				<form className="flex flex-wrap gap-y-8 gap-x-2">
					<label>
						Paid TO <input type="text" className="bg-inherit border-b-2" />
					</label>
					<label>
						No: <input type="text" className="bg-inherit border-b-2" />
					</label>
					<label>
						DATE: <input type="text" className="bg-inherit border-b-2" />
					</label>
					<label className="w-full flex">
						DEBIT <input type="text" className="grow bg-inherit border-b-2" />
					</label>
					<label className="w-full flex">
						ON A/C OF <input type="text" className="grow bg-inherit border-b-2" />
					</label>
					<div className="w-full">
						<table className="w-full table-auto border-collapse">
							<thead>
								<tr>
									<th className="border text-left">PARTICULARS:</th>
									<th className="border">RS</th>
									<th className="border">PS</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="border">
										<div className="flex justify-between">
											<span>RUPEES IN WORDS</span> <span>TOTAL</span>
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
							AUTHORISED BY{" "}
							<input type="text" className="w-full bg-inherit border-b-2" />
						</label>
						<label className="col-span-2">
							PASSED BY <input type="text" className="w-full bg-inherit border-b-2" />
						</label>
						<label className="col-span-3">
							PAID CASH/CHEQUE/DRAWN NO{" "}
							<input type="text" className="w-full bg-inherit border-b-2" />
						</label>
						<label htmlFor="" className="col-span-2">
							CHEQUE NO <input type="text" className="w-full bg-inherit border-b-2" />
						</label>
						<label htmlFor="">
							DATE
							<input type="text" className="w-full bg-inherit border-b-2" />
						</label>
						<label className="col-start-4 row-start-2 row-span-3 flex flex-col">
							<input type="text" className="h-24 bg-inherit border" />
							<span className="self-center">RECEIVER’S SIGN</span>
						</label>
					</div>
				</form>
			</div>
		</div>
	);
}

