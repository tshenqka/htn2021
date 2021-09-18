import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import 'typeface-roboto';
import CircleSharpIcon from '@mui/icons-material/CircleSharp';
import { Parallax } from 'react-scroll-parallax';


const NUM_STARS = 100;
const STAR_SIZES = [5, 7, 9, 11];
const VERTICAL_DISTANCES = [50, 100, 150, 200];
const SIGNS = [-1, 1]

function getHorizontalDistance() {
    return Math.floor(Math.random() * 100) * getRandom(SIGNS);
}
function renderStar() {
    return (
        <Parallax y={[getRandom(VERTICAL_DISTANCES), getRandom(VERTICAL_DISTANCES)]}>
            <CircleSharpIcon sx={{fontSize: getRandom(STAR_SIZES), color:'#f4cb85'}} 
                style={{marginTop: getRandom(VERTICAL_DISTANCES), 
                marginLeft: `${getHorizontalDistance()}%`}}/>
        </Parallax>
    );
    
}

function renderStars() {
    var stars = []
    for (var i = 0; i < NUM_STARS; i++) {
        stars.push(renderStar());
    }
    return stars;
}

function getRandom(arr) {
    return arr[Math.floor(Math.random()*arr.length)]
}

function Stars(props) {
    return (
        <div style={{position: 'relative'}}>
            { renderStars() }
        </div>
    )
}

export default Stars;