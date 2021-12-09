import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import {
  Collapse,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

const MobileFilter = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
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
    </>
  );
};

export default MobileFilter;
