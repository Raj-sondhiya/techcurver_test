import React from "react";

const Checkboxes = ({ setSelectedForm }) => (
    <div className="text-center">
        <label className="me-3">
            <input
                type="radio"
                name="formType"
                value="Item"
                onChange={(e) => setSelectedForm(e.target.value)}
            >
            </input>
            Item
        </label>
        <label className="me-3">
            <input
                type="radio"
                name="formType"
                value="supplier"
                onChange={(e) => setSelectedForm(e.target.value)}
            >
            </input>
            Supplier
        </label>

    </div>
);

export default Checkboxes;