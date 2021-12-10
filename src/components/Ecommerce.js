import { Grid, Typography } from "@mui/material";
import EcommerceCard from "./cards/EcommerceCard";
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
        <Grid
          container
          spacing={3}
          style={{ textAlign: "center" }}
          xs={12}
          md={9}
        >
          <Grid item xs={12} md={4}>
            <EcommerceCard />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Ecommerce;
