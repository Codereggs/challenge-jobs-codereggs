import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton, useMediaQuery } from "@mui/material";
import orna from "../../img/orna.svg";
import { useDispatch } from "react-redux";
import { choosed } from "../../features/productChoosed";
import { Link } from "react-router-dom";

const randomPrice = () => {
  return Math.floor(Math.random() * 1000);
};

export default function EcommerceCard(props) {
  const dispatch = useDispatch();
  const xs = useMediaQuery("(max-width:480px)");
  return (
    <>
      <Link
        to="/product"
        onClick={() => window.localStorage.setItem("product", `${props.id}`)}
      >
        <Card
          sx={{
            width: xs ? "80%" : "auto",
            minWidth: 260,
            px: 2,
            minHeight: xs ? "40vh" : "80vh",
            display: "flex",
            justifyContent: xs ? "center" : "space-between",
            alignItems: "center",
            flexDirection: "column",
          }}
          className="ecommerceCards"
        >
          <img
            src={orna}
            alt="Ornamenta"
            width="50px"
            style={{ transform: "rotate(180deg)", opacity: ".2" }}
            className="ornamentaCards"
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
          ></CardActions>
        </Card>
      </Link>
      <IconButton
        size="small"
        style={{
          backgroundColor: "#a23259",
          padding: "1rem",
          transform: "translate(0, -50px)",
        }}
        onClick={() => dispatch(choosed(props))}
        className="shoppingBtn"
      >
        <ShoppingCartIcon style={{ color: "#fff" }} />
      </IconButton>
    </>
  );
}
