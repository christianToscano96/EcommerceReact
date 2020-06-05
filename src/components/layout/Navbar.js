import React from 'react';
//material ui
import AppBar from '@material-ui/core/AppBar';
//components
import BarSession from './bar/BarSession';

const Navbar = () => {
    return ( 
        <div>
            <AppBar position="static">
                <BarSession />
            </AppBar>
        </div>
     );
}
 
export default Navbar;