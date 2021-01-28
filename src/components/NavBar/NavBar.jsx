import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from "@material-ui/core";
import { ShoppingCart} from '@material-ui/icons';
import {Link, useLocation} from 'react-router-dom';

import logo from '../../assets/shop.svg';
import useStyles from './styles';

const NavBar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();

   
    return ( 
        <div>
        <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>
            <Typography component={Link} to='/' variant="h6" className={classes.title} color='inherit' >
                <img src={logo} alt='FlyBuy' height='25px' className={classes.image}/>
                FlyBuy
                </Typography>
              <div className={classes.grow}/>
              {location.pathname ==='/' && (
              <div className={classes.button}>
                  
                  <IconButton component={Link}to='/cart'aria-label="Show cart items" color='inherit'>
                      <Badge badgeContent={totalItems} color='secondary'>
                          <ShoppingCart />
                      </Badge>
                  </IconButton>
                  
              </div>)}
            </Toolbar>

        </AppBar>
        </div>
     );
}
 
export default NavBar;