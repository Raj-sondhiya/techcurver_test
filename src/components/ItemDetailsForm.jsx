import React, { useState } from "react";

const ItemDetailsForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        itemName: "",
        quantity: "",
        unitPrice: "",
        submissionDate: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ type: "Item", ...formData });
        setFormData({ itemName: "", quantity: "", unitPrice: "", submissionDate: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <div className="m-5" style={{ backgroundColor: "#EBEEFD", padding: "20px" }}>
                <div className="text-center mb-3">Item Details</div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label>Item Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="itemName"
                            placeholder="Enter item name"
                            value={formData.itemName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>Quantity</label>
                        <input
                            type="number"
                            className="form-control"
                            name="quantity"
                            placeholder="Enter quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label>Unit Price</label>
                        <input
                            type="number"
                            className="form-control"
                            name="unitPrice"
                            placeholder="Enter unit price"
                            value={formData.unitPrice}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>Submission Date</label>
                        <input
                            type="date"
                            className="form-control"
                            name="submissionDate"
                            value={formData.submissionDate}
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

export default ItemDetailsForm;
