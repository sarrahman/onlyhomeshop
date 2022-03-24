import { Box, CardMedia, Grid, Typography } from "@mui/material";
import Shop from "../image/shop.png";
import Package from "../image/package.png";
import Delivery from "../image/delivery.png";
import Diskon from "../image/diskon.png";

const About = () => {
  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{
          backgroundColor: "#222",
          p: 3
        }}
      >
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardMedia
              image={Diskon}
              component="img"
              alt="Shop"
              sx={{
                width: "150px",
                height: "150px",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "space-around", md: "center" },
                alignItems: "center",
                flexDirection: { xs: "row", md: "column" },
              }}
            >
              <CardMedia
                image={Delivery}
                component="img"
                alt="Shop"
                sx={{
                  width: "80px",
                  height: "80px",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  ml: 1,
                  color: "#ddd",
                }}
              >
                Free & Fast Shipping
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "space-around", md: "center" },
                alignItems: "center",
                flexDirection: { xs: "row", md: "column" },
                mt: { xs: 2, md: 0 },
              }}
            >
              <CardMedia
                image={Package}
                component="img"
                alt="Shop"
                sx={{
                  width: "75px",
                  height: "75px",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  ml: 1,
                  color: "#ddd",
                }}
              >
                30-Days Free Return
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "space-around", md: "center" },
                alignItems: "center",
                flexDirection: { xs: "row", md: "column" },
                mt: { xs: 2, md: 0 },
              }}
            >
              <CardMedia
                image={Shop}
                component="img"
                alt="Shop"
                sx={{
                  width: "70px",
                  height: "70px",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  ml: 1,
                  color: "#ddd",
                }}
              >
                100% Secure Shopping
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
