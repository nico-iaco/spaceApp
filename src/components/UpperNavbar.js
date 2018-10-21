import React from 'react';
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Typography from "@material-ui/core/es/Typography/Typography";
import Avatar from "@material-ui/core/es/Avatar/Avatar";

class UpperNavbar extends React.Component{

    redirectHome = () => {
        this.props.history.push({pathname: "/"});
    };

    render() {
        return(
            <AppBar position="sticky" >
                <Toolbar>
                    <div id="nav">
                        <Typography variant="h3" color="inherit" onClick={this.redirectHome} >
                            React
                        </Typography>
                        <Avatar >
                            <i className="material-icons">
                                account_circle
                            </i>
                        </Avatar>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default UpperNavbar;