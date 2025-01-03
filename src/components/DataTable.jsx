import React from "react";

const DataTable = (data, setData) => {

    if (!Array.isArray(data) || !data.length) {
        return <div className="text-center mt-3">No data available in table</div>
    }


    return (

        <>

            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Supplier</th>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Email</th>
                        <th>Phone number</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.supplierName}</td>
                            <td>{row.itemName}</td>
                            <td>{row.quantity}</td>
                            <td>{row.email}</td>
                            <td>{row.phoneNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
};
export default DataTable;