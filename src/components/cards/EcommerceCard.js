import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import orna from "../../img/orna.svg";

const randomPrice = () => {
  return Math.floor(Math.random() * 1000);
};

export default function EcommerceCard(props) {
  console.log(props);
  return (
    <Card
      sx={{
        minWidth: 275,
        px: 2,
        minHeight: "80vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        src={orna}
        alt="Ornamenta"
        width="50px"
        style={{ transform: "rotate(180deg)", opacity: ".2" }}
      />
      <CardContent
        style={{
          textAlign: "center",
        }}
      >
        <Typography variant="h5">{props.name}</Typography>
        <br />
        <img src={props.image_url} alt={props.name} width="50vw" />
        <Typography variant="h5">$ {randomPrice()}</Typography>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          padding: 0,
          justifyContent: "flex-end",
        }}
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
