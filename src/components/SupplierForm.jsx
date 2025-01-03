import React, { useState } from "react";


const SupplierForm = ({ onSubmit }) => {
    const { formData, setFormData } = useState({
        supplierName: '',
        companyName: '',
        email: '',
        phoneNumber: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ type: 'supplier', ...formData });
        setFormData({ supplierName: '', companyName: '', email: '', phoneNumber: '', });
    }

    return (
        <>
            <div className="text-center mt-4 ">Supplier Details</div>
            <form className="mt-4">
                <div className="m-5" style={{ backgroundColor: '#EBEEFD', height: '50vh', }}>
                    <div className="row">
                        <div className="col m-4">
                            <label>Supplier Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter supplier name"
                                value={formData.supplierName}
                                onChange={handleChange}
                                required
                                maxLength="225"
                            />
                        </div>
                        <div className="col m-4">
                            <label>Company Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter company name"
                                value={formData.companyName}
                                onChange={handleChange}
                                required
                                maxLength="225"

                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m-4">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email address"
                                value={formData.email}
                                onChange={handleChange}
                                required

                            />
                        </div>
                        <div className="col m-4">
                            <label>Phone number</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter phone number"
                                value={formData.submissionDate}
                                onChange={handleChange}
                                required
                                maxLength="10"
                            />
                        </div>
                    </div>
                    <button className="btn btn-primary" style={{ display: 'block', margin: 'auto' }}>Submit</button>
                </div>
            </form>
        </>
    )

}

export default SupplierForm;