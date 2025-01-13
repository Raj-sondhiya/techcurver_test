import './App.css';
import React, { useEffect, useState } from "react";
import Checkboxes from './components/Checkboxes';
import ItemDetailsForm from './components/ItemDetailsForm';
import SupplierForm from './components/SupplierForm';
import DataTable from './components/DataTable';

function App() {
  const [selectedForm, setSelectedForm] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      try {
        setData(JSON.parse(savedData));
      } catch (err) {
        console.error("Error parsing local storage data", err);
      }
    }
  }, []);

  const handleFormSubmit = (formData) => {
    const updatedData = [...data, formData];
    setData(updatedData);
    localStorage.setItem("formData", JSON.stringify(updatedData));
  };

  return (
    <div className="container mt-5">
      <Checkboxes setSelectedForm={setSelectedForm} />
      {selectedForm === "Item" && <ItemDetailsForm onSubmit={handleFormSubmit} />}
      {selectedForm === "Supplier" && <SupplierForm onSubmit={handleFormSubmit} />}
      <DataTable data={data} />
    </div>
  );
}

export default App;
