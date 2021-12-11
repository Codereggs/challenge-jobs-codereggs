import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import facebook from "../img/f.png";
import vk from "../img/vk.png";
import { Button, useMediaQuery } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

const options = [
  "Experiencia",
  "Regalos",
  "Vodka",
  "Cerveza",
  "Quienes Somos",
  "Contáctanos",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const xsQuery = useMediaQuery("(min-width:600px)");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      className="appBar"
      style={{ color: "#5e6061", fontWeight: "bolder" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between", m: 5 }}>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
              }}
            >
              Alcohol
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
              }}
            >
              Ventas
            </Typography>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <img src={vk} alt="VK" style={{ width: "2rem" }} />
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <img src={facebook} alt="Facebook" style={{ width: "2rem" }} />
            </IconButton>
          </Box>
          <Link to="/">
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                color: "#000",
              }}
            >
              🍺 Beer of Tomorrow
            </Typography>
          </Link>
          <Box style={{ display: "flex" }}>
            <Button
              variant="contained"
              color="neutral"
              sx={{
                mr: 5,
                color: "#fff",
                display: { xs: "none", md: "flex" },
              }}
            >
              Darse de alta
            </Button>
            <Link to="/buy">
              <Tooltip title="Ver compra">
                <IconButton
                  variant="outlined"
                  sx={{
                    p: 1,
                    borderRadius: 0,
                    border: "thin solid #a23259",
                    opacity: 0.8,
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  <ShoppingCartIcon style={{ color: "#a23259" }} />
                </IconButton>
              </Tooltip>
            </Link>
          </Box>
          {/* MOBILE */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {options.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              🍺 Beer of tomorrow
            </Typography>
          </Link>
          <Link to="/buy">
            <IconButton
              variant="outlined"
              sx={{
                p: 1,
                borderRadius: 0,
                border: "thin solid #a23259",
                opacity: 0.8,
                display: { xs: "flex", md: "none" },
              }}
            >
              <ShoppingCartIcon style={{ color: "#a23259" }} />
            </IconButton>
          </Link>
        </Toolbar>
        {xsQuery && <hr />}
        <Toolbar
          disableGutters
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "space-between",
            mx: 5,
            mb: 5,
          }}
        >
          <NavLink to="/">
            <Typography variant="h6">Experiencia </Typography>
          </NavLink>
          <NavLink to="/">
            <Typography variant="h6">Regalos </Typography>
          </NavLink>
          <NavLink to="/">
            <Typography variant="h6">Vodka </Typography>
          </NavLink>
          <NavLink to="/">
            <Typography variant="h6">Cerveza </Typography>
          </NavLink>
          <NavLink to="/">
            <Typography variant="h6">Quienes Somos </Typography>
          </NavLink>
          <NavLink to="/contacto">
            <Typography variant="h6">Contáctanos </Typography>
          </NavLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
