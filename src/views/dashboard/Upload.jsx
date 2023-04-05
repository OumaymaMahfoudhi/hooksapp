/** @format */

import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box, Button, Grid } from "@material-ui/core";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import NotificationsNoneRoundedIcon from "@material-ui/icons/NotificationsNoneRounded";
import PowerSettingsNewRoundedIcon from "@material-ui/icons/PowerSettingsNewRounded";
import Paper from "@material-ui/core/Paper";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import clsx from 'clsx';
import PaperContent from "./PaperContent";
import MyApp from "./Chart";
import DevelopperApp from "./DevelopperChart";







const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  nested: {
    paddingLeft: theme.spacing(5),
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },fixedHeight: {
    height: 180,
  },
}));

function Upload(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <Grid
          style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'row',
            marginTop:'10px',
          }}
          container
        >
          <Grid item>
            <AccountCircleIcon style={{ width: 35, height: 35 }} />
          </Grid>
          <Grid item>
            <Typography>Oumayma Mahfoudhi</Typography>
          </Grid>
        </Grid>
      </div>
     
      <List>
        <ListItem button key='Dashboard' style={{ color: "#5383E7" }}>
          <ListItemText primary='Dashboard' />
        </ListItem>

        <ListItem button key='Missions' className={classes.nested} style={{color:'#8C91A4'}}>
          <ListItemIcon>
           <StarOutlineIcon/> 
          </ListItemIcon>
          <ListItemText primary='Mission' />
          <ListItem />
        </ListItem>
        <div style={{ display: "flex" }}>
          <ListItem button key='Profils' className={classes.nested} style={{color:'#8C91A4'}}>
            <ListItemIcon>
              <FavoriteBorderIcon/>
            </ListItemIcon>
            <ListItemText primary='Profils' />
            <ListItem />
          </ListItem>
        </div>

        <ListItem button key='Out' className={classes.nested} style={{color:'#8C91A4'}}>
          <ListItemIcon>
           <LoyaltyIcon/> 
          </ListItemIcon>
          <ListItemText primary='LogOut' />
          <ListItem />
        </ListItem>
      </List>

      
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={classes.appBar}
        style={{ backgroundColor: "#FFF" }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Grid
            container
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Grid item style={{ flexGrow: "1" }}>
              <SearchRoundedIcon style={{ color: "#C2C4CF" }} />
            </Grid>
            <Grid item>
              <NotificationsNoneRoundedIcon
                edge='end'
                style={{ color: "#C2C4CF" }}
              />
              <PowerSettingsNewRoundedIcon style={{ color: "#C2C4CF" }} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label='mailbox folders'>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation='css'>
          <Drawer
            container={container}
            variant='temporary'
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            style={{height:'100%'}}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content} style={{ backgroundColor: "#F5F7FB" }}>
        <div className={classes.toolbar} />
        
        <Grid
          container
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid item style={{ flexGrow: "1" }}>
            <Typography paragraph>Societe General</Typography>
          </Grid>
          <Grid item>
            <Button
              variant='contained'
              component='span'
              style={{
                borderRadius: 30,
                backgroundColor: "#4D84FE",
                padding: "10px 20px",
                fontSize: "12px",
                color: "#fff",
                marginRight: "30px",
              }}
            >
              Upload Mission
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={3} style={{marginTop:'10px'}}>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper} elevation={3}>
              <PaperContent/>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper} elevation={3}>B</Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper} elevation={3}>C</Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper} elevation={3}>D</Paper>
          </Grid>
        </Grid> 
        <Grid container spacing={3} style={{marginTop:'10px'}}>
          
          
          <Grid item  xs={12} md={8} lg={8}>
          <Paper elevation={3} style={{height:'700', width:"700" }}> 
             <MyApp /> 
          </Paper>
          </Grid>
         <Grid item xs={12} md={4} lg={4} >
          <Paper  elevation={3}>
          <DevelopperApp/> 
          </Paper>
          </Grid>
          
          
          </Grid>
       
        
     
      </main>
    </div>
  );
}

Upload.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Upload;
