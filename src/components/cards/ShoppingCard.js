import { IconButton, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  precioFinalD,
  precioFinalI,
  deleteAll,
} from "../../features/productChoosed";

const ShoppingCard = (props) => {
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(precioFinalI(props.precio));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          width: "60vw",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "1rem 2rem",
          padding: "1rem",

          boxShadow: "0px 0px 26px 0px rgba(0,0,0,0.20)",
        }}
      >
        <Box>
          <img
            src={props.image_url}
            alt={props.name}
            style={{ width: "1rem" }}
          />
        </Box>
        <Box>{props.name}</Box>
        <Box>$ {props.precio}</Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <IconButton
            style={{ fontSize: "1em" }}
            onClick={() => {
              if (value <= 1) return;
              setValue(value - 1);
              dispatch(precioFinalD(props.precio));
            }}
          >
            ➖
          </IconButton>
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            value={value}
            style={{ width: "100px" }}
            sx={{ mx: 3 }}
          />
          <IconButton
            style={{ fontSize: "1em" }}
            onClick={() => {
              setValue(value + 1);
              dispatch(precioFinalI(props.precio));
            }}
          >
            ➕
          </IconButton>
        </Box>
        <Box style={{ display: "flex" }} className="precioFinal">
          {props.precio * value}
        </Box>
        <IconButton
          onClick={() => dispatch(deleteAll({ id: props.id, cant: value }))}
        >
          🗑️
        </IconButton>
      </Box>
    </>
  );
};

export default ShoppingCard;
