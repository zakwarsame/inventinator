import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useInventoryData from "../hooks/useInventoryData";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import {
  Box,
  Button,
  ButtonGroup,
  Chip,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Inventory = () => {
  const { items, navigateToUpdate, deleteItem, exportToCSV } =
    useInventoryData();

  return (
    <Container>
      <Toolbar />

      <Box display="flex">
        <Box flexGrow={1}>
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Inventory
          </Typography>
        </Box>
        <Box flexGrow={1}>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<FileDownloadIcon />}
            onClick={() => exportToCSV()}
          >
            Export
          </Button>
        </Box>

        <Button
          component={Link}
          to="/create"
          variant="contained"
          color="primary"
        >
          CREATE
        </Button>
      </Box>
      <TableContainer sx={{ marginTop: 4 }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="inventory table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((eachItem) => (
              <TableRow
                key={eachItem._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{eachItem._id}</TableCell>
                <TableCell component="th" scope="row">
                  {eachItem.title}
                </TableCell>
                <TableCell align="right">{eachItem.quantity}</TableCell>
                <TableCell align="right">
                  {eachItem.status ? (
                    <Chip label="active" color="success" variant="outlined" />
                  ) : (
                    <Chip label="inactive" color="error" variant="outlined" />
                  )}
                </TableCell>
                <TableCell align="right">{eachItem.price}</TableCell>
                <TableCell align="center">
                  <ButtonGroup
                    color="primary"
                    aria-label="outlined primary button group"
                  >
                    <Button onClick={() => navigateToUpdate(eachItem._id)}>
                      Edit
                    </Button>
                    <Button onClick={() => deleteItem(eachItem._id, eachItem)}>
                      Del
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Inventory;
