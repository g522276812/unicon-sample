import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
};

class Header extends React.Component {
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>
                    <ListItemIcon><HomeIcon /><ListItemText primary='Home' /></ListItemIcon>

                </List>
                <List>
                <ListItemIcon><MailIcon /><ListItemText primary='Product' /></ListItemIcon>

                </List>
                <List>
                <ListItemIcon><PhoneIcon /><ListItemText primary='Contact US' /></ListItemIcon>

                </List>
                <Divider />
            </div>
        );

        return (
            <div>
                <div className={classes.root}>
                    <AppBar position="fixed">
                        <Toolbar>
                            <IconButton className={classes.menuButton} onClick={this.toggleDrawer('left', true)} color="inherit" aria-label="Menu">
                                <MenuIcon  />
                            </IconButton>
                            <Typography variant="h5" color="inherit" className={classes.grow}>
                                Unicon HealthCare
                            </Typography>
                            <Typography variant="h6" color="inherit"><MailIcon /></Typography>
                            <Typography variant="h6" color="inherit">&nbsp;<PhoneIcon /></Typography>
                            <Typography variant="h6" color="inherit">&nbsp;+91-8875884888</Typography>
                        </Toolbar>
                    </AppBar>
                </div>



                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
