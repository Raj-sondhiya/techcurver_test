import React, { useState } from "react";

const ItemDetailsForm = (onSubmit) => {

    const [formData, setFormData] = useState({
        itemName: '',
        quantity: '',
        unitPrice: '',
        submissionDate: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ type: 'Item', ...formData });
        setFormData({ itemName: '', quantity: '', unitPrice: '', submissionDate: '' });
    }


    return (
        <>
            <div className="text-center mt-4 ">Item Details</div>
            <form className="mt-4">
                <div className="m-5" style={{ backgroundColor: '#EBEEFD', height: '50vh', }}>
                    <div className="row">
                        <div className="col m-4">
                            <label>Item Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter item name"
                                value={formData.itemName}
                                onChange={handleChange}
                                required
                                maxLength="225"
                            />
                        </div>
                        <div className="col m-4">
                            <label>Quantity</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                required
                                maxLength="10"

                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m-4">
                            <label>Unit price</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter unit price"
                                value={formData.unitPrice}
                                onChange={handleChange}
                                required
                                step="0.01"

                            />
                        </div>
                        <div className="col m-4">
                            <label>Date of Submission</label>
                            <input
                                type="date"
                                className="form-control"
                                placeholder="Enter date"
                                value={formData.submissionDate}
                                onChange={handleChange}
                                min={new Date().toString().split('T')[0]}
                                required
                            />
                        </div>
                    </div>
                    <button className="btn btn-primary" style={{ display: 'block', margin: 'auto' }}>Submit</button>
                </div>
            </form>
        </>
    )

};

export default ItemDetailsForm;