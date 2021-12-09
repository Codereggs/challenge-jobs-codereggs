import Grid from "@mui/material/Grid";
import "./Footer.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaLocationArrow,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Box } from "@mui/system";
import { Button, Typography, useMediaQuery } from "@mui/material";
import facebook from "../img/f.png";
import vk from "../img/vk.png";

const Footer = () => {
  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  };
  //320px, 480px, 760px, 1021px, 1200px

  const xs = useMediaQuery("(max-width:480px)"),
    md = useMediaQuery("(min-width: 761px)"),
    xl = useMediaQuery("(min-width:1021px)"),
    xxl = useMediaQuery("(min-width:1200px)");

  return (
    <>
      <Box className="footer">
        <Box
          style={{
            flexDirection: xs ? "column" : "row",
            display: "flex",
            justifyContent: xs ? "center" : "space-evenly",
            textAlign: "start",
          }}
        >
          <Box style={{ display: "inherit", alignItems: "center" }}>
            <Typography variant="h5">🍺 Beer of Tomorrow</Typography>
          </Box>

          <Box
            style={{
              display: "inherit",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
            sx={{ mt: 3 }}
          >
            <FaLocationArrow style={{ color: "#a23259", fontSize: "1.5em" }} />
            <Typography variant="h6">
              Petrovskaya <b>Ulitsa, 8, 90</b>
            </Typography>
            <Typography variant="h6">PH, piso 1, entrada 33.</Typography>
          </Box>

          <Box
            style={{ display: "inherit", flexDirection: "column" }}
            sx={{ mt: 3 }}
          >
            <FaPhoneAlt style={{ color: "#a23259", fontSize: "1.5em" }} />
            <Typography variant="h6">
              +7 (495) <b>137-77-45</b>
            </Typography>
            <Typography variant="h6">10:00 - 20:00</Typography>
          </Box>

          <Box
            style={{ display: "inherit", flexDirection: "column" }}
            sx={{ mt: 3 }}
          >
            <FaEnvelope style={{ color: "#a23259", fontSize: "1.5em" }} />
            <Typography variant="h6">info@beeroftomorrow.ru</Typography>
            <Typography variant="h6">order@ventadistribution.ru</Typography>
          </Box>

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
                <b>Ofertas limitadas a disponibilidad.</b>
              </Typography>
            </Box>
          )}
        </Box>
        {md && <hr />}
        <Box
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-evenly",
            textAlign: "start",
          }}
        >
          <Box
            style={{
              display: "inherit",

              flexDirection: "column",
            }}
          >
            <Typography variant="h4" sx={{ mb: 3 }}>
              Mas información
            </Typography>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Vinos
            </Typography>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Top Cervezas
            </Typography>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Vodka
            </Typography>
          </Box>
          {md && (
            <Box
              style={{
                display: "inherit",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Typography variant="h5" sx={{ mb: 2, mt: 8.5 }}>
                Otros licores
              </Typography>
              <Typography variant="h5" sx={{ mb: 2 }}>
                Especialidades
              </Typography>
              <Typography variant="h5" sx={{ mb: 2 }}>
                Grados alcoholicos
              </Typography>
            </Box>
          )}
          {md && (
            <Box style={{ display: "inherit", flexDirection: "column" }}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                Venta y Distribución
              </Typography>
              <Typography variant="h5" sx={{ mb: 2 }}>
                Venta canal mayorista
              </Typography>
              <Typography variant="h5" sx={{ mb: 2 }}>
                Venta minorista VIP
              </Typography>
              <Typography variant="h5" sx={{ mb: 2 }}>
                Envíos por fecha
              </Typography>
            </Box>
          )}
          {md && (
            <Box style={{ display: "inherit", flexDirection: "column" }}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                Redes Sociales
              </Typography>

              <Typography variant="h5" sx={{ mb: 2 }}>
                <img
                  src={facebook}
                  alt="Vkontakte"
                  style={{ width: "1.5rem", marginRight: ".5rem" }}
                />
                Vkontakte
              </Typography>
              <Typography variant="h5" sx={{ mb: 2 }}>
                <img
                  src={vk}
                  alt="Facebook"
                  style={{ width: "1.5rem", marginRight: ".5rem" }}
                />
                Facebook
              </Typography>
            </Box>
          )}
          {md && (
            <Box style={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                Detalles
              </Typography>

              <Typography variant="h5" sx={{ mb: 2 }}>
                Viñedos en Europa
              </Typography>
              <Typography variant="h5" sx={{ mb: 2 }}>
                Certificado de Calidad
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Footer;
