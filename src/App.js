import './App.css';
import Checkboxes from './components/Checkboxes';
import Navigation from "./components/Navigation"
import ItemDetailsForm from './components/ItemDetailsForm';
import SupplierForm from './components/SupplierForm';
import { useEffect, useState } from 'react';
import DataTable from './components/DataTable';
function App() {

  const [selectedForm, setSelectedForm] = useState(null);
  const [data, setData] = useState([]);


  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        if (Array.isArray(parsedData)) {
          setData(parsedData);
        } else {
          setData([]);
        }
      } catch (e) {
        console.error("An error occured");
      }
      setData([]);
    }
  }, []);

  const handleFormSubmit = (formData) => {
    const updatedData = [...data, formData];
    setData(...data, formData);
    localStorage.setItem('formData', JSON.stringify(updatedData));

  };




  return (
    <>
      <Navigation />
      <div className="container mt-5">
        <Checkboxes setSelectedForm={setSelectedForm} />
        {selectedForm === 'Supplier' && <SupplierForm onSubmit={handleFormSubmit} />}
        {selectedForm === 'Item' && <ItemDetailsForm onSubmit={handleFormSubmit} />}
        <DataTable data={data} setData={setData} />
      </div>
    </>
  );
}

export default App;
