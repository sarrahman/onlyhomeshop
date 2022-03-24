import {
  Badge,
  Box,
  IconButton,
  InputAdornment,
  Link,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuIcon from "@mui/icons-material/Menu";
import SocialButton from "../components/SocialButton";
import { useState } from "react";

const pages = ["Men", "Women", "Shipping", "Clearance", "Lifestyle", "Contact", "Articles"];

const AppBarComp = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#222",
          }}
        >
          <SocialButton />
          <Box
            sx={{
              display: "flex",
              mr: 2,
            }}
          >
            <IconButton>
              <AccountCircleIcon
                sx={{
                  color: "#ddd",
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  ml: 1,
                  color: "#ddd",
                }}
              >
                My Account
              </Typography>
            </IconButton>
          </Box>
        </Box>
      </Box>
      {/* app bar 2 */}
      {/* dekstop */}
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "space-between", md: "space-around" },
          border: "1px solid #777",
          p: 1,
        }}
      >
        {/* responsive menu */}
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
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box
          sx={{
            mr: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ color: "#222" }}>
            Krconex
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {pages.map((page) => (
            <Link
              href="#"
              variant="body1"
              sx={{ color: "#222", mr: 3, textDecoration: "none" }}
            >
              {page}
            </Link>
          ))}
        </Box>
        <TextField
          size="small"
          label="Search"
          color="warning"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <IconButton
            color="inherit"
            sx={{
              mr: 1,
            }}
          >
            <Badge badgeContent={3} color="warning">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={8} color="warning">
              <FavoriteBorderOutlinedIcon />
            </Badge>
          </IconButton>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default AppBarComp;
