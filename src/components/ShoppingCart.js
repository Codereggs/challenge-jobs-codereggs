import { Typography } from "@mui/material";
import ShoppingCard from "./cards/ShoppingCard";
const ShoppingCart = () => {
  return (
    <>
      <Typography variant="h3">Carro de Compras:</Typography>
      <ShoppingCard></ShoppingCard>
    </>
  );
};

export default ShoppingCart;
