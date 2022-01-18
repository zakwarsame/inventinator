import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import download from "downloadjs";

const useInventoryData = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const fetchItems = () => {
    axios
      .get(`/inventory/`)
      .then((fetchedItems) => setItems(fetchedItems.data))
      .catch((err) => console.log(err));
  };

  const navigateToUpdate = (id) => {
    navigate(`/update/${id}`);
  };


  const updateItem = (id, itemToBeUpdated) => {
    axios
      .put(`/inventory/${id}`, itemToBeUpdated)
      .then((updatedItem) => {
        alert(updatedItem.statusText);
        if (updatedItem.status === 200) {
          navigate("/");
        }
        console.log(updatedItem);
      })
      .catch((err) => console.log(err));
  };

  const deleteItem = (id, item) => {
    return axios
      .delete(`/inventory/${id}`)
      .then(() => fetchItems())
      .catch((err) => console.log(err));
  };

  const createItem = (newItem) => {
    axios
      .post(`/inventory`, newItem)
      .then((createdItem) => {
        alert(createdItem.statusText);
        if (createdItem.status === 200) {
          navigate("/");
        }
        console.log(createdItem);
      })
      .catch((err) => console.log(err));
  };

  const exportToCSV = () => {
    axios
      .get(`inventory/export`)
      .then((csvItems) => {
        if (csvItems) {
          download(csvItems.data, new Date().toLocaleDateString() + "-items.csv");
        } else {
          alert("Items not found :(");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return {
    items,
    updateItem,
    navigateToUpdate,
    deleteItem,
    navigate,
    createItem,
    exportToCSV
  };
};

export default useInventoryData;
