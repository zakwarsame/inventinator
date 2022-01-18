import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button
                component={Link}
                to="/"
                sx={{ color: 'white', fontSize:24 }}
              >
                Inventinator
              </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
