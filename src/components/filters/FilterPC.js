import { Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";

const FilterPC = () => {
  return (
    <>
      <Box
        style={{
          borderRadius: "15px",
          border: "1px black solid",
          margin: "1rem",
          padding: "1rem",
        }}
      >
        <Typography variant="h4" style={{ textAlign: "start" }}>
          Filtra tu bebida
        </Typography>
        <Typography variant="h6" style={{ textAlign: "start" }}>
          Precio:
        </Typography>
        <Slider
          getAriaLabel={() => "Rango de Precio"}
          value={[0, 10000]}
          /*  onChange={handleChange} */
          valueLabelDisplay="auto"
          /*  getAriaValueText={valuetext} */
        />
      </Box>
    </>
  );
};

export default FilterPC;
