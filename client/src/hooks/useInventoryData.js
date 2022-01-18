import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useInventoryData = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const fetchItems = () => {
    axios
      .get(`/inventory/`)
      .then((fetchedItems) => setItems(fetchedItems.data))
      .catch((err) => console.log(err));
  };

  const updateItem = (id) => {
    navigate(`/update/${id}`);
  };

  const deleteItem = (id) => {
      return axios.delete(`/inventory/${id}`)
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return { items, updateItem, deleteItem };
};

export default useInventoryData;
