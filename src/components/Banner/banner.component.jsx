import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import React, { useState } from 'react';
import './banner.styles.css';
const Banner = () => {
    const history = useHistory();
    return ( 
        <div className='banner'>
            <div className='banner__info'>
            <div className="info">
                <div className="text1">Discover Hotels Near You</div>
                <div className="text2">
                   Experience Hospitality like never before
                </div>
            </div>
                <Button  onClick={() => history.push('/ITL_LAB1/trending')} variant='outlined'>Explore Nearby Hotels</Button>
            </div>
    </div>
     );
}
 
export default Banner;