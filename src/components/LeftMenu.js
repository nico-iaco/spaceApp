import React from 'react';
import List from "@material-ui/core/es/List/List";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/es/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";

class LeftMenu extends React.Component{

    redirectTo = (path) => {
        this.props.history.push({pathname: path});
    };

    render() {
        return(
            <List >
                <ListItem button onClick={() => this.redirectTo("/earthquake")}>
                    <ListItemIcon>
                        <i className="flaticon-earthquake" ></i>
                    </ListItemIcon>
                    <ListItemText primary="Earthquakes" />
                </ListItem>
                <ListItem button onClick={() => this.redirectTo("/volcano")}>
                    <ListItemIcon>
                        <i className="flaticon-volcano" ></i>
                    </ListItemIcon>
                    <ListItemText primary="Volcano's eruptions" />
                </ListItem>
                <ListItem button onClick={() => this.redirectTo("/storm")}>
                    <ListItemIcon>
                        <i className="flaticon-thunder" ></i>
                    </ListItemIcon>
                    <ListItemText primary="Storm" />
                </ListItem>
                <ListItem button onClick={() => this.redirectTo("/tsunami")}>
                    <ListItemIcon>
                        <i className="flaticon-tsunami" ></i>
                    </ListItemIcon>
                    <ListItemText primary="Tsunami" />
                </ListItem>
            </List>
        );
    }
}

export default LeftMenu;