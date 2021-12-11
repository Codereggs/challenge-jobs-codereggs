import * as React from "react";
import Box from "@mui/material/Box";
import "./Footer.css";
import { FaLocationArrow, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Typography, useMediaQuery, Grid } from "@mui/material";
import SimpleMap from "./Gmaps";

const Contact = () => {
  const xsQuery = useMediaQuery("(min-width:500px)");
  return (
    <>
      <Grid
        container
        md={12}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Box sx={{ my: 5 }}>
          <Typography variant="h4">Contáctanos:</Typography>
        </Box>
      </Grid>
      <Box
        style={{
          display: "flex",
          flexDirection: xsQuery ? "row" : "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Grid
          container
          md={4}
          style={{
            justifyContent: xsQuery ? "flex-start" : "center",
            alignItems: "center",
          }}
          sx={{ p: 5 }}
        >
          <Box
            style={{
              display: "inherit",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
            sx={{ mt: 3 }}
          >
            <FaLocationArrow style={{ color: "#a23259", fontSize: "1.5em" }} />
            <Typography variant="h6">
              Petrovskaya <b>Ulitsa, 8, 90</b>
            </Typography>
            <Typography variant="h6">PH, piso 1, entrada 33.</Typography>
          </Box>
          <Box
            style={{ display: "inherit", flexDirection: "column" }}
            sx={{ mt: 3 }}
          >
            <FaPhoneAlt style={{ color: "#a23259", fontSize: "1.5em" }} />
            <Typography variant="h6">
              +7 (495) <b>137-77-45</b>
            </Typography>
            <Typography variant="h6">10:00 - 20:00</Typography>
          </Box>
          <Box
            style={{ display: "inherit", flexDirection: "column" }}
            sx={{ mt: 3 }}
          >
            <FaEnvelope style={{ color: "#a23259", fontSize: "1.5em" }} />
            <Typography variant="h6">info@beeroftomorrow.ru</Typography>
            <Typography variant="h6">order@ventadistribution.ru</Typography>
          </Box>
        </Grid>
        <Grid container md={10} style={{ justifyContent: "center" }}>
          <SimpleMap />
        </Grid>
      </Box>
    </>
  );
};

export default Contact;
