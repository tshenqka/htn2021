import * as React from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';

const TITLE_Y_POS = 20;
const TEXT_Y_POS = 80;
const TEXT_X_POS = 75;



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
                        m: 1, width: size, height: size, position: 'relative', top: y, left: x
                    },
                }}
            >
                <img src={testArt} style={{ borderRadius: '50%'}} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
            </Box>
            <Fade in={showText}>
                <Typography component="div">
                    <Box sx={{ typography: 'h3', color: '#f4cb85', position: 'relative', top: y + TITLE_Y_POS, left: x + size + TEXT_X_POS}}>
                        { songName }
                    </Box>
                    <Box sx={{ typography: 'p', color: '#f4cb85', position: 'relative', top: y + TEXT_Y_POS, left: x + size + TEXT_X_POS}}>
                        {`by ${artistName}`}
                    </Box>
                </Typography>
            </Fade>
        </Box>
    )
}

export default SongIcon;