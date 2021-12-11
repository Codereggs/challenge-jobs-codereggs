import {
  Grid,
  List,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../features/selectedProduct";

const ProductDetails = () => {
  const { list } = useSelector((state) => state.get);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  const xs = useMediaQuery("(max-width:480px)");
  const lista = list[0];
  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: xs ? "center" : "space-between",
          alignItems: "flex-start",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Grid
          container
          xs={12}
          md={6}
          style={{ flexDirection: "column" }}
          sx={{ mt: 8 }}
        >
          <Typography variant={"h4"}>
            ID:{lista.id} - {lista.name}
          </Typography>
          <Typography variant={"h5"}>🍺 Beer of Tomorrow</Typography>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
            sx={{ mt: 6 }}
          >
            <Box>
              <Typography variant={"body1"}>Distribuidor:</Typography>
              <Typography variant={"body1"}>ABV:</Typography>
              <Typography variant={"body1"}>IBU:</Typography>
              <Typography variant={"body1"}>PH:</Typography>
              <Typography variant={"body1"}>Volume (Lts.)</Typography>
              <Typography variant={"body1"}>Nivel de Atenuación:</Typography>
              <Typography variant={"body1"}>Primera elaboración:</Typography>
            </Box>
            <Box>
              <Typography variant={"body1"}>Beer of Tomorrow</Typography>
              <Typography variant={"body1"}>{lista.abv}</Typography>
              <Typography variant={"body1"}>{lista.ibu}</Typography>
              <Typography variant={"body1"}>{lista.ph}</Typography>
              <Typography variant={"body1"}>{lista.volume.value}</Typography>
              <Typography variant={"body1"}>
                {lista.attenuation_level}
              </Typography>
              <Typography variant={"body1"}>{lista.first_brewed}</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          container
          xs={12}
          md={6}
          sx={{ mt: 6 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={lista.image_url}
            alt={lista.name}
            style={{ width: xs ? "5rem" : "40%" }}
          />
        </Grid>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        sx={{ my: 5 }}
      >
        <Typography variant={"h4"} sx={{ my: 1 }}>
          Descripción:
        </Typography>
        <Typography variant={"h6"} sx={{ my: 4 }}>
          {lista.description}
        </Typography>
        <Typography variant={"h4"} sx={{ my: 1 }}>
          Tips de cerveza:
        </Typography>
        <Typography variant={"h6"} sx={{ my: 4 }}>
          {lista.brewers_tips}
        </Typography>
      </Box>
    </>
  );
};

export default ProductDetails;
