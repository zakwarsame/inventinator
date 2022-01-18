import { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";

import { useParams } from "react-router-dom";
import useInventoryData from "../hooks/useInventoryData";

const UpdateInventory = () => {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState(0);
  const [tags, setTags] = useState([]);
  const [status, setStatus] = useState(true);

  const { updateItem, findItemUsingId } = useInventoryData();

  const { id } = useParams();

  useEffect(() => {
    findItemUsingId(id).then((item) => {
      setTitle(item.data.title);
      setQuantity(item.data.quantity);
      setPrice(item.data.price);
      setTags(item.data.tags);
      setStatus(item.data.status);
    });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    var data = {
      title: title,
      quantity: quantity,
      price: price,
      tags: tags,
      status: status,
    };
    updateItem(id, data);
  };

  const handleTag = (e) => {
    setTags(e.target.value.split(","));
  };

  return (
    <Container
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      maxWidth="xs"
    >
      <Typography component="h1" variant="h5">
        Update Inventory
      </Typography>

      <Grid
        sx={{
          width: "100%", // Fix IE 11 issue.
          marginTop: 3,
        }}
        component="form"
        container
        spacing={2}
        onSubmit={handleSubmit}
      >
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="title"
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            value={quantity}
            id="quantity"
            label="Quantity"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="price"
            value={price}
            label="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Select
            labelId="status-select"
            required
            value={status}
            label="Stock Status"
            id="status"
            onChange={(e) => setStatus(e.target.value)}
          >
            <MenuItem value={true}>Active</MenuItem>
            <MenuItem value={false}>Inactive</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="tags"
            value={tags}
            label="Tags"
            onChange={handleTag}
          />
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ marginTop: 3, marginBottom: 2 }}
        >
          Update
        </Button>
      </Grid>
    </Container>
  );
};

export default UpdateInventory;
