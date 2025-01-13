import React from "react";

const DataTable = ({ data }) => {
    return (
        <div className="mt-4">
            <h3 className="text-center">Data Table</h3>
            <table className="table table-bordered mt-3">
                <thead className="table-dark">
                    <tr>
                        <th>Type</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((entry, index) => (
                            <tr key={index}>
                                <td>{entry.type}</td>
                                <td>
                                    {Object.entries(entry)
                                        .filter(([key]) => key !== "type")
                                        .map(([key, value]) => (
                                            <div key={key}>
                                                <strong>{key}:</strong> {value}
                                            </div>
                                        ))}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2" className="text-center">
                                No data available.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
