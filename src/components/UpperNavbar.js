import React from 'react';
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
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
                        <div onClick={this.redirectHome}>
                            <img src="logo1.png" width={"80px"} />
                        </div>
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