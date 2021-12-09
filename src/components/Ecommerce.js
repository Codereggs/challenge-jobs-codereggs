import { Collapse, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Ecommerce = () => {
  return (
    <>
      <Grid container className="mainShop">
        <Grid
          item
          style={{ textAlign: "center", margin: "5rem" }}
          xs={12}
          md={12}
        >
          <Typography variant="p">Nuestras mejores bebidas</Typography>
          <Typography variant="h4">Beer Shop</Typography>
        </Grid>
        {/* Filtro Mobile */}
        <Collapse>
          <Grid
            item
            style={{ textAlign: "center" }}
            xs={12}
            md={4}
            sx={{ display: { xs: "none", md: "grid" } }}
          >
            <Typography variant="p">Nuestras mejores bebidas</Typography>
            <Typography variant="h4">Beer Shop</Typography>
          </Grid>
        </Collapse>
        {/* Filtro */}
        <Grid
          item
          style={{ textAlign: "center" }}
          md={4}
          sx={{ display: { xs: "none", md: "grid" } }}
        >
          <Typography variant="p">Nuestras mejores bebidas</Typography>
          <Typography variant="h4">Beer Shop</Typography>
        </Grid>
        {/* Cards */}
        <Grid item style={{ textAlign: "center" }} xs={12} md={8}>
          <Typography variant="p">Nuestras mejores bebidas</Typography>
          <Typography variant="h4">Beer Shop</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Ecommerce;
