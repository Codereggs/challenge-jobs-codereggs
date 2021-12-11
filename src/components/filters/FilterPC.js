import { useState } from "react";
import { Checkbox, FormControlLabel, Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  getList,
  orderByHigherABV,
  orderByHigherIBU,
  orderByHigherPH,
  orderByLowABV,
  orderByLowIBU,
  orderByLowPH,
} from "../../features/listGet";
import { useDispatch } from "react-redux";

const FilterPC = () => {
  const [value, setValue] = useState([0, 1000]);
  const [ABVSwitch, setABVSwitch] = useState([false, false]);
  const [IBUSwitch, setIBUSwitch] = useState([false, false]);
  const [PHSwitch, setPHSwitch] = useState([false, false]);
  const [VolumeSwitch, setVolumeSwitch] = useState([false, false]);
  const dispatch = useDispatch();
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
        <FormControlLabel
          control={
            <Checkbox
              onChange={(e) => {
                if (e.target.checked === true) {
                  dispatch(orderByHigherABV());
                  setABVSwitch([true, false]);
                } else {
                  dispatch(getList());
                  setABVSwitch([false, false]);
                }
              }}
              disabled={ABVSwitch[1]}
            />
          }
          label="Mayor a Menor"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={(e) => {
                if (e.target.checked === true) {
                  dispatch(orderByLowABV());
                  setABVSwitch([false, true]);
                } else {
                  dispatch(getList());
                  setABVSwitch([false, false]);
                }
              }}
              disabled={ABVSwitch[0]}
            />
          }
          label="Menor a Mayor"
        />

        <hr />
        <Typography variant="h6" style={{ textAlign: "start" }}>
          IBU
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              onChange={(e) => {
                if (e.target.checked === true) {
                  dispatch(orderByHigherIBU());
                  setIBUSwitch([true, false]);
                } else {
                  dispatch(getList());
                  setIBUSwitch([false, false]);
                }
              }}
              disabled={IBUSwitch[1]}
            />
          }
          label="Mayor a Menor"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={(e) => {
                if (e.target.checked === true) {
                  dispatch(orderByLowIBU());
                  setIBUSwitch([false, true]);
                } else {
                  dispatch(getList());
                  setIBUSwitch([false, false]);
                }
              }}
              disabled={IBUSwitch[0]}
            />
          }
          label="Menor a Mayor"
        />
        <hr />
        <Typography variant="h6" style={{ textAlign: "start" }}>
          PH
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              onChange={(e) => {
                if (e.target.checked === true) {
                  dispatch(orderByHigherPH());
                  setPHSwitch([true, false]);
                } else {
                  dispatch(getList());
                  setPHSwitch([false, false]);
                }
              }}
              disabled={PHSwitch[1]}
            />
          }
          label="Mayor a Menor"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={(e) => {
                if (e.target.checked === true) {
                  dispatch(orderByLowPH());
                  setPHSwitch([false, true]);
                } else {
                  dispatch(getList());
                  setPHSwitch([false, false]);
                }
              }}
              disabled={PHSwitch[0]}
            />
          }
          label="Menor a Mayor"
        />
      </Box>
    </>
  );
};

export default FilterPC;
