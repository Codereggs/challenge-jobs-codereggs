import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import {
  Checkbox,
  Collapse,
  FormControlLabel,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { AiFillFilter } from "react-icons/ai";

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
          <ListItemIcon>
            <AiFillFilter />
          </ListItemIcon>
          <ListItemText primary="Filtrar" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box sx={{ p: 5 }}>
            <Typography variant="h6" style={{ textAlign: "start" }}>
              Precio:
            </Typography>
            <Slider
              getAriaLabel={() => "Rango de Precio"}
              value={[0, 10000]}
              /*  onChange={handleChange} */
              valueLabelDisplay="auto"
              /*  getAriaValueText={valuetext} */
            />
            <hr />
            <Typography variant="h6" style={{ textAlign: "start" }}>
              ABV:
            </Typography>
            <FormControlLabel control={<Checkbox />} label="Mayor a Menor" />
            <FormControlLabel control={<Checkbox />} label="Menor a Mayor" />

            <hr />
            <Typography variant="h6" style={{ textAlign: "start" }}>
              IBU
            </Typography>
            <FormControlLabel control={<Checkbox />} label="Mayor a Menor" />
            <FormControlLabel control={<Checkbox />} label="Menor a Mayor" />
            <hr />
            <Typography variant="h6" style={{ textAlign: "start" }}>
              PH
            </Typography>
            <FormControlLabel control={<Checkbox />} label="Mayor a Menor" />
            <FormControlLabel control={<Checkbox />} label="Menor a Mayor" />
            <hr />
            <Typography variant="h6" style={{ textAlign: "start" }}>
              Volumen (Lts.)
            </Typography>
            <FormControlLabel control={<Checkbox />} label="Mayor a Menor" />
            <FormControlLabel control={<Checkbox />} label="Menor a Mayor" />
          </Box>
        </Collapse>
      </Grid>
    </>
  );
};

export default MobileFilter;
