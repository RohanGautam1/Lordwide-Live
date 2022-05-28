import React, { useState } from "react";
import "../StatementTable.css"
import deleteicon from "../assets/icon_delete.svg"
import downloadicon from "../assets/icon_dowload.svg"

const StatementTable = () => {

    const tabledata = [

        {


            date: "18-Apr-2021",
            project: "#345623",
            amount: "$330",
            tax: "$3",
            payment: "....1223",
            status: "Paid",
        },
        {
            date: "12-Apr-2021",
            project: "#345623",
            amount: "$330",
            tax: "$3",
            payment: "....1223",
            status: "Cash",
        },
        {
            date: "12-Apr-2021",
            project: "#345623",
            amount: "$330",
            tax: "$3",
            payment: "....1223",
            status: "Paid",
        },
        {
            date: "45-Apr-2021",
            project: "#345623",
            amount: "$330",
            tax: "$3",
            payment: "....1223",
            status: "Cash",
        },
        {
            date: "12-Apr-2021",
            project: "#345623",
            amount: "$330",
            tax: "$3",
            payment: "....1223",
            status: "Cash",
        },

        {
            date: "12-Apr-2021",
            project: "#345623",
            amount: "$330",
            tax: "$3",
            payment: "....1223",
            status: "Paid",
        }
    ]
    const [data, setData] = useState(tabledata);



    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="d-flex justify-content-between">
                        <div>
                            <p className="statement-statement-text">Statements</p>
                        </div>
                        <div className="d-flex align-items-center statement-months-data "><p className="mr-3 p-2 last-month">Last Month</p><p className="mr-3 month p-2">Feb 2021</p><p className="mr-3 next-month p-2">Mar 2021</p></div>
                    </div>
                </div>

                <div className="row">
                    <div className="d-flex justify-content-between">
                        <div className="update-your-information-text">Update Your index information in Setting</div>
                        <div className="d-flex justify-content-center"><div className="statement-delete-icon  d-flex justify-content-center align-items-center me-4"><img src={deleteicon} /></div> <div className="statement-download-icon d-flex justify-content-center align-items-center me-4"><img src={downloadicon} /></div></div>
                    </div>
                </div>

                <div className="row ">
                    <table class="table borderless">
                        <thead>
                            <tr>
                                <th><input type="checkbox" /></th>
                                <th>Date</th>
                                <th>Project ID</th>
                                <th>Amount</th>
                                <th>Tax</th>
                                <th>Payment Method</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>

                            {

                                data.map((val, index) => {

                                    return (

                                        <>
                                            <tr>
                                                <td><input type="checkbox" /></td>

                                                <td className="date-and-projectid-elements">{val.date}</td>
                                                <td>{val.project}</td>
                                                <td>{val.amount}</td>
                                                <td className="tax-text">{val.tax}</td>
                                                <td>{val.payment}</td>
                                                <td ><p className={val.status === "Paid" ? "paid-text" : "cash-text"}>{val.status}</p></td>
                                            </tr>
                                        </>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );

}
export default StatementTable;