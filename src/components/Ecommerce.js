import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import {
  Collapse,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const Ecommerce = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      {/* Filtro Mobile */}
      <Grid
        item
        style={{ textAlign: "center" }}
        sx={{ display: { xs: "grid", md: "none" } }}
        xs={12}
      >
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>BOX</ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </Grid>
      {/* Titulo */}
      <Grid container className="mainShop">
        <Grid
          item
          style={{ textAlign: "center", margin: "5rem" }}
          xs={12}
          md={12}
        >
          <Typography variant="p">Nuestras mejores bebidas</Typography>
          <Typography variant="h4">Beer Shop</Typography>
        </Grid>

        {/* Filtro */}
        <Grid
          item
          style={{ textAlign: "center" }}
          md={4}
          sx={{ display: { xs: "none", md: "grid" } }}
        >
          <Typography variant="p">Nuestras mejores bebidas</Typography>
          <Typography variant="h4">Beer Shop</Typography>
        </Grid>

        {/* Cards */}
        <Grid item style={{ textAlign: "center" }} xs={12} md={8}>
          <Typography variant="p">Nuestras mejores bebidas</Typography>
          <Typography variant="h4">Beer Shop</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Ecommerce;
