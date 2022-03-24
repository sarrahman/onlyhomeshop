import { Box, Typography } from "@mui/material";
import SocialButton from "../components/SocialButton";
import FooterLink from "../components/FooterLink";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#222",
        flexDirection: { xs: "column", md: "row" },
        color: "#fff",
        pt: 5,
        pb: 6,
        p: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6">Krconex</Typography>
        <SocialButton />
      </Box>
      <FooterLink
        title="Help"
        daftarLink={[
          "Privacy policy",
          "Shiping & Delivery",
          "Refund Policy",
          "Track Order",
        ]}
      />
      <FooterLink
        title="Store"
        daftarLink={[
          "Men Fashion",
          "Women Fashion",
          "Store Sale",
          "Collections",
        ]}
      />
      <FooterLink
        title="Suport"
        daftarLink={[
          "Feedback",
          "Contact Us",
          "Costumer Service",
          "Term & Conditions",
        ]}
      />
    </Box>
  );
};

export default Footer;
