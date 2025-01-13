import React, { useState } from "react";

const SupplierForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        supplierName: "",
        companyName: "",
        email: "",
        phoneNumber: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ type: "Supplier", ...formData });
        setFormData({ supplierName: "", companyName: "", email: "", phoneNumber: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <div className="m-5" style={{ backgroundColor: "#EBEEFD", padding: "20px" }}>
                <div className="text-center mb-3">Supplier Details</div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label>Supplier Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="supplierName"
                            placeholder="Enter supplier name"
                            value={formData.supplierName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>Company Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="companyName"
                            placeholder="Enter company name"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Enter email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>Phone Number</label>
                        <input
                            type="text"
                            className="form-control"
                            name="phoneNumber"
                            placeholder="Enter phone number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </div>
        </form>
    );
};

export default SupplierForm;
