import * as React from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { LocalActivity } from '@mui/icons-material';

const TITLE_Y_POS = 20;
const TEXT_Y_POS = 80;
const TEXT_X_POS = 75;
const LOC_X_POS = -95;
const LOC_Y_POS = -50;

function SongIcon(props) {
    const { songName, artistName, albumArtLink, x, y, size} = props;
    const [showText, setShowText] = React.useState(false);
    const testArt = 'https://media.pitchfork.com/photos/5f1e2abad421092dd8f6c7ca/1:1/w_320/Taylor_Swift_folklore.jpeg'

    function onMouseEnter() {
        setShowText(true);
    }

    function onMouseLeave() {
        setShowText(false);
    }

    return (
        <Box>
            <Box
                sx={{
                    display: 'flex', flexWrap: 'wrap', '& > :not(style)': {
                        m: 1, width: size, height: size, position: 'absolute', top: y, left: x
                    },
                }}
            >
                <img src={testArt} style={{ borderRadius: '50%'}} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
            </Box>
            <LocationOnIcon sx={{ fontSize: 100, color: '#67bfcd', position: 'absolute', top: y + LOC_Y_POS, left: x + size + LOC_X_POS, transform: 'rotate(15deg)'}}/>
            <Fade in={showText}>
                <Typography component="div">
                    <Box sx={{ typography: 'h3', color: '#f4cb85', position: 'absolute', top: y + TITLE_Y_POS, left: x + size + TEXT_X_POS}}>
                        { `${songName}` }
                    </Box>
                    <Box sx={{ typography: 'p', color: '#f4cb85', position: 'absolute', top: y + TEXT_Y_POS, left: x + size + TEXT_X_POS}}>
                        {`by ${artistName}`}
                    </Box>
                </Typography>
            </Fade>
        </Box>
    )
}

export default SongIcon;