import { Box, Card, Link, Typography, Stack, Rating } from "@mui/material";
import { styled } from "@mui/material/styles";
import { fCurrency } from "../utils/formatNumber";
import Label from "./Label";

const ProductImgStyle = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

export default function CardProduct(props) {
  return (
    <Card>
      <Box sx={{ pt: "100%", position: "relative" }}>
        {props.status && (
          <Label
            variant="filled"
            color={(props.status === "sale" && "error") || "warning"}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: "absolute",
              textTransform: "uppercase",
            }}
          >
            {props.status}
          </Label>
        )}
        <ProductImgStyle alt={props.name} src={props.cover} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to="#" color="inherit" underline="hover">
          <Typography variant="h6" noWrap>
            {props.name}
          </Typography>
        </Link>
        <Rating name="read-only" value={props.rating} readOnly />

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: "text.disabled",
                textDecoration: "line-through",
              }}
            >
              Rp {props.priceSale && fCurrency(props.priceSale)}
            </Typography>
            &nbsp;
            Rp {fCurrency(props.price)}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
