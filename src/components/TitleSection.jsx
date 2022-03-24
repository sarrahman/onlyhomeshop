import { Box, Typography } from "@mui/material";

const TitleSection = (props) => {
    return(
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: 3,
            mb: 1,
        }}>
            <Typography variant="h5" noWrap>
                {props.title}
            </Typography>
            <Typography variant="subtitle1" noWrap>
                See what's trending in the market
            </Typography>
        </Box>
    )
}

export default TitleSection;