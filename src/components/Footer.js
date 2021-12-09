import Grid from "@mui/material/Grid";
import "./Footer.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaLocationArrow,
  FaPhoneAlt,
} from "react-icons/fa";
import { Box, typography } from "@mui/system";
import { Button, Typography, useMediaQuery } from "@mui/material";

const Footer = () => {
  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  };
  //320px, 480px, 760px, 1021px, 1200px

  const xs = useMediaQuery("(min-width:480px)"),
    md = useMediaQuery("(min-width: 761px)"),
    xl = useMediaQuery("(min-width:1021px)"),
    xxl = useMediaQuery("(min-width:1200px)");

  return (
    <>
      <Box className="footer">
        <Box
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Box>
            <Typography variant="h5">🍺 Beer of Tomorrow</Typography>
          </Box>
          {md && (
            <Box style={{ display: "inherit", flexDirection: "column" }}>
              <FaLocationArrow
                style={{ color: "#a23259", fontSize: "1.2em" }}
              />
              <Typography variant="h6">Petrovskaya Ulitsa, 8, 90</Typography>
              <Typography variant="h6">PH, piso 1, entrada 33.</Typography>
            </Box>
          )}
          {md && (
            <Box style={{ display: "inherit", flexDirection: "column" }}>
              <FaPhoneAlt style={{ color: "#a23259", fontSize: "1.2em" }} />
              <Typography variant="h6">+7 (495) 137-77-45</Typography>
              <Typography variant="h6">10:00 - 20:00</Typography>
            </Box>
          )}
          {md && (
            <Box style={{ display: "inherit", flexDirection: "column" }}>
              <Typography variant="h5">Mail</Typography>
            </Box>
          )}
          {md && (
            <Box style={{ display: "flex", flexDirection: "column" }}>
              <Button
                color="neutral"
                variant="contained"
                sx={{ color: "#fff", mb: 2 }}
              >
                Las mejores Ofertas
              </Button>
              <Typography variant="p">
                Ofertas limitadas a disponibilidad.
              </Typography>
            </Box>
          )}
        </Box>
        {md && <hr />}
        <Box>
          <Grid container>
            <Grid xs={12} spacing={4} md={4}>
              aaaa
            </Grid>
            <Grid xs={12} spacing={4} md={4} style={columnStyle}>
              <h2>Dispuestos a ayudar:</h2>
            </Grid>
            <Grid xs={12} spacing={4} md={4} style={columnStyle}>
              <h2>Redes sociales:</h2>
              <a target="_blank" rel="noreferrer" href={`#`}>
                <FaFacebookSquare />
              </a>
              <a target="_blank" rel="noreferrer" href={`#`}>
                <FaInstagramSquare />
              </a>
              <a target="_blank" rel="noreferrer" href={`#`}>
                <FaLinkedin />
              </a>
              <a target="_blank" rel="noreferrer" href={`#`}>
                <FaTwitterSquare />
              </a>
              <Typography variant="p" className="creditos">
                Beer of Tomorrow &copy; 2021 - Developed by: Codereggs
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
