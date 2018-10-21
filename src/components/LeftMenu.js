import React from 'react';
import List from "@material-ui/core/es/List/List";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/es/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import Typography from "@material-ui/core/es/Typography/Typography";

class LeftMenu extends React.Component{

    redirectTo = (path) => {
        this.props.history.push({pathname: path});
    };

    render() {
        return(
            <div>
                <List >
                    <ListItem button onClick={() => this.redirectTo("/earthquake")}>
                        <ListItemIcon>
                            <i className="flaticon-earthquake" ></i>
                        </ListItemIcon>
                        <ListItemText disableTypography primary={<Typography color="secondary" variant="h4" >Earthquake</Typography>}/>
                    </ListItem>
                    <ListItem button onClick={() => this.redirectTo("/volcano")}>
                        <ListItemIcon>
                            <i className="flaticon-volcano" ></i>
                        </ListItemIcon>
                        <ListItemText disableTypography primary={<Typography color="secondary" variant="h4" >Volcano's eruption</Typography>} />
                    </ListItem>
                    <ListItem button onClick={() => this.redirectTo("/storm")}>
                        <ListItemIcon>
                            <i className="flaticon-thunder" ></i>
                        </ListItemIcon>
                        <ListItemText disableTypography primary={<Typography color="secondary" variant="h4" >Storm</Typography>} />
                    </ListItem>
                    <ListItem button onClick={() => this.redirectTo("/tsunami")}>
                        <ListItemIcon>
                            <i className="flaticon-tsunami" ></i>
                        </ListItemIcon>
                        <ListItemText disableTypography primary={<Typography color="secondary" variant="h4" >Tsunami</Typography>} />
                    </ListItem>
                </List>
            </div>
        );
    }
}

export default LeftMenu;