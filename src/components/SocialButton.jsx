import { Box, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const SocialButton = () => {
    return(
        <Box>
            <IconButton>
              <InstagramIcon
                sx={{
                  color: "#ddd",
                  mr: 1,
                }}
              />
            </IconButton>
            <IconButton>
              <FacebookIcon
                sx={{
                  color: "#ddd",
                  mr: 1,
                }}
              />
            </IconButton>
            <IconButton>
              <TwitterIcon
                sx={{
                  color: "#ddd",
                  mr: 1,
                }}
              />
            </IconButton>
          </Box>
    )
}

export default SocialButton;