import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import orna from "../../img/orna.svg";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const randomPrice = () => {
  return Math.floor(Math.random() * 1000);
};

export default function EcommerceCard() {
  return (
    <Card sx={{ minWidth: 275, px: 2 }}>
      <img
        src={orna}
        alt="Ornamenta"
        width="50px"
        style={{ transform: "rotate(180deg)", opacity: ".2" }}
      />
      <CardContent style={{ textAlign: "center" }}>
        <Typography variant="h5">Punk IPA 2007 - 2010</Typography>
        <br />
        <img
          src="https://images.punkapi.com/v2/192.png"
          alt="Cerveza"
          width="60px"
        />
        <Typography variant="h5">$ {randomPrice()}</Typography>
      </CardContent>
      <CardActions
        style={{ display: "flex", justifyContent: "center", padding: 0 }}
      >
        <IconButton
          size="small"
          style={{
            backgroundColor: "#a23259",
            padding: "1rem",
          }}
        >
          <ShoppingCartIcon style={{ color: "#fff" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
