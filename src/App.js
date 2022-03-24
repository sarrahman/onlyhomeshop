import About from "./layouts/About";
import AppBarComp from "./layouts/AppBar";
import Headers from "./layouts/Headers";
import BestSeller from "./layouts/BestSeller";
import { Box, Button } from "@mui/material";
import Footer from "./layouts/Footer";

function App() {
  return (
   <>
   <AppBarComp />
   <Headers />
   <About />
   <BestSeller />
   <Box sx={{
     display: "flex",
      justifyContent: "center",
      alignItems: "center",
      mb: 4
   }}>
    <Button variant="contained" color="warning">Check All Collections</Button>
   </Box>
   <Footer />
   </>
  );
}

export default App;
