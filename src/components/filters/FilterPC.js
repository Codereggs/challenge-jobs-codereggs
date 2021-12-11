import { useState } from "react";
import { Checkbox, FormControlLabel, Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";

const FilterPC = () => {
  const [value, setValue] = useState([0, 1000]);

  const handleChange = (event, newValue) => {
    let allPrices = document.querySelectorAll(".precio");
    allPrices.forEach((e) => {
      let dato = e.children[0].children[1].children[3].textContent.replace(
        "$",
        ""
      );
      if (dato > event.target.value[1] || dato < event.target.value[0]) {
        e.classList.add("disabled");
      } else {
        e.classList.remove("disabled");
      }
    });
    setValue(newValue);
  };
  return (
    <>
      <Box
        style={{
          boxShadow: "0px 0px 26px 0px rgba(0,0,0,0.20)",
          margin: "1rem",
          marginTop: "0",
          padding: "3rem",
        }}
      >
        <Typography variant="h4" style={{ textAlign: "start" }}>
          Filtra tu bebida
        </Typography>
        <Typography variant="h6" style={{ textAlign: "start" }}>
          Precio:
        </Typography>
        <Slider
          getAriaLabel={() => "Rango de Precio"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          max={1000}
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
    </>
  );
};

export default FilterPC;
