import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import ShoppingCard from "./cards/ShoppingCard";
const ShoppingCart = () => {
  const { list, precio, precioFinal } = useSelector(
    (state) => state.choosedProduct
  );

  return (
    <>
      <Typography variant="h3" sx={{ my: 5 }}>
        Carro de Compras:
      </Typography>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {list.map((e, i) => (
          <ShoppingCard {...e} precio={precio[i]} key={e.id} id={i} />
        ))}
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "1rem",
        }}
      >
        <Box sx={{ ml: 5 }}>
          <Typography variant="h4">
            {precioFinal !== 0 && "A abonar:"}
          </Typography>
          <Typography variant="h5">
            {precioFinal === 0 ? null : `$ ${precioFinal}`}
          </Typography>
        </Box>
        <Box>
          {precioFinal !== 0 && (
            <Button
              variant="contained"
              onClick={() =>
                Swal.fire({ icon: "success", title: "Próximamente..." })
              }
            >
              Aceptar compra
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
};

export default ShoppingCart;
