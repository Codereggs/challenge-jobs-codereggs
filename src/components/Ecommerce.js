import { Grid, Link, Typography } from "@mui/material";
import EcommerceCard from "./cards/EcommerceCard";
import FilterPC from "./filters/FilterPC";
import MobileFilter from "./filters/MobileFilter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getList } from "../features/listGet";

const Ecommerce = () => {
  const { list } = useSelector((state) => state.get);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);
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
          spacing={4}
          style={{
            textAlign: "center",
          }}
          xs={12}
          md={9}
        >
          {list.map((e) => (
            <Grid item={true} xs={12} md={4} className="precio">
              <EcommerceCard {...e} key={e.id} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Ecommerce;
