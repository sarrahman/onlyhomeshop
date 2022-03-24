import { Box, Link, Typography } from "@mui/material";

const FooterLink = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mb: 3,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          mb: 1,
        }}
      >
        {props.title}
      </Typography>
      {props.daftarLink.map((item) => (
        <Link
          href="#"
          variant="body1"
          sx={{ color: "#fff", mr: 3, textDecoration: "none", mb: 1 }}
        >
          {item}
        </Link>
      ))}
    </Box>
  );
};

export default FooterLink;
