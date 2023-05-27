import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { headStyle, paraStyle } from "../components/TextStyle"
import { pageBoxProps } from "../components/PageBoxProps"

function Error404() {
    return (
        <Box {...pageBoxProps}>
        <Typography aria-label="error heading" sx={headStyle}>
          Error 404
        </Typography>
        <Typography paragraph sx={paraStyle}>
          We are all searching for something in life. What you are searching for,
          however, is not here.
        </Typography>
        </Box>
    )
}

export default Error404