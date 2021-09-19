import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '@fontsource/roboto/300.css';
import { Parallax } from 'react-scroll-parallax';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function Title(props) {
    const { playlistName, creatorName } = props;
    return (
        <div style={{paddingTop: '20%'}}>
            <Parallax y={[-20, 20]}>
                <MusicNoteIcon sx={{ fontSize: '50px', color: '#f4cb85'}}/>
                <Typography component="div">
                    <Box sx={{ typography: 'h2', color: '#f4cb85'}}>
                        { playlistName }
                    </Box>
                    {creatorName !== "" && (<Box sx={{ typography: 'p',  color: '#f4cb85'}}>
                        by { creatorName }
                    </Box>)}
                </Typography>
            </Parallax>
        </div>
        
    )
}

export default Title;