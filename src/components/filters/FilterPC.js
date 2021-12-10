import { Checkbox, FormControlLabel, Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";

const FilterPC = () => {
  return (
    <>
      <Box
        style={{
          boxShadow: "0px 0px 26px 0px rgba(0,0,0,0.20)",
          margin: "1rem",
          marginTop: "0",
          padding: "3rem",
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
        <hr />
        <Typography variant="h6" style={{ textAlign: "start" }}>
          ABV:
        </Typography>
        <FormControlLabel control={<Checkbox />} label="Mayor a Menor" />
        <FormControlLabel control={<Checkbox />} label="Menor a Mayor" />

        <hr />
        <Typography variant="h6" style={{ textAlign: "start" }}>
          IBU
        </Typography>
        <FormControlLabel control={<Checkbox />} label="Mayor a Menor" />
        <FormControlLabel control={<Checkbox />} label="Menor a Mayor" />
        <hr />
        <Typography variant="h6" style={{ textAlign: "start" }}>
          PH
        </Typography>
        <FormControlLabel control={<Checkbox />} label="Mayor a Menor" />
        <FormControlLabel control={<Checkbox />} label="Menor a Mayor" />
        <hr />
        <Typography variant="h6" style={{ textAlign: "start" }}>
          Volumen (Lts.)
        </Typography>
        <FormControlLabel control={<Checkbox />} label="Mayor a Menor" />
        <FormControlLabel control={<Checkbox />} label="Menor a Mayor" />
      </Box>
    </>
  );
};

export default FilterPC;
