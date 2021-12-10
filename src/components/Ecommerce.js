import { Grid, Typography } from "@mui/material";
import FilterPC from "./filters/FilterPC";
import MobileFilter from "./filters/MobileFilter";

const Ecommerce = () => {
  return (
    <>
      {/* Filtro Mobile */}
      <MobileFilter />
      {/* Titulo */}
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

        {/* Filtro */}
        <Grid
          item
          style={{ textAlign: "center" }}
          md={3}
          sx={{ display: { xs: "none", md: "grid" } }}
        >
          <FilterPC />
        </Grid>

        {/* Cards */}
        <Grid item style={{ textAlign: "center" }} xs={12} md={9}>
          <Typography variant="p">Nuestras mejores bebidas</Typography>
          <Typography variant="h4">Beer Shop</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Ecommerce;
