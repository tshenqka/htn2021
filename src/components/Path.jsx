import * as React from 'react';
import Box from '@mui/material/Box';
import '@fontsource/roboto/300.css';


function Path(props) {
    const {x1, y1, x2, y2} = props
    var a = x1 - x2;
    var b = y1 - y2;
    const length =  Math.sqrt( a*a + b*b );
    const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
    const [posX, setPosX] = React.useState(x1);
    React.useEffect(() => {
        if (x2 < x1) {
            setPosX(x2);
        }
        console.log({x1, x2, angle});
    }, [angle, x1, x2])
    
    console.log(angle);
    return (
        <Box style={{
            position:'absolute',
            top: y1,
            left: posX,
            transform: `rotate(${angle}deg)`,
            backgroundColor: '#67bfcd            ',
            height: '5px',
            width: length,
            zIndex: 0,
            }}
            >
        </Box>
    )
}

export default Path;