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
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
            <Tooltip title="Ver compra">
              <IconButton
                variant="outlined"
                onClick={handleOpenUserMenu}
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
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
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
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            🍺 Beer of tomorrow
          </Typography>
          <IconButton
            variant="outlined"
            onClick={handleOpenUserMenu}
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
          <Typography variant="h6">Experiencia</Typography>•
          <Typography variant="h6">Regalos</Typography>•
          <Typography variant="h6">Vodka</Typography>•
          <Typography variant="h6">Cerveza</Typography>•
          <Typography variant="h6">Quienes Somos </Typography>•
          <Typography variant="h6">Contáctanos </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
