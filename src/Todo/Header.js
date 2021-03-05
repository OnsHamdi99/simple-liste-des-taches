import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    toolbar: {
        textAlign: "center",
        height: 80
   },
    heading: {
        margin: "auto",
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 59,
        padding: '0 30px',
    }
});
const Header = () => {
    const classes = useStyles();
    return (
        <AppBar style={{ background: '#2E3B55' }} position="static">
          <Toolbar className={classes.toolbar}>
                <Typography className={classes.heading} variant="h3" align="center">Liste des tâches</Typography>
           </Toolbar>
        </AppBar>
    )
}

export default Header;