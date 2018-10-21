import React from "react";
import Paper from "@material-ui/core/es/Paper/Paper";
import UpperNavbar from "./UpperNavbar";
import LeftMenu from "./LeftMenu";
import CircularProgressbar from 'react-circular-progressbar';
import Button from "@material-ui/core/es/Button/Button";


class Home extends React.Component{


    render(){
        return(
            <div className="main">
                <UpperNavbar {...this.props}/>
                <div className="contentSeparator">
                    <div id="navList">
                        <LeftMenu {...this.props}/>
                    </div>
                    <div id="content">
                        <Paper id="realContent">
                            <br />
                            <center><h3>Emergency fund raising</h3></center>
                            <br />
                            <div className="Wrapper">
                                <div className="PBWrapper">
                                    <CircularProgressbar
                                        percentage={77}
                                        text={"2.7Mln€"}
                                        styles={{
                                            path: { stroke: `rgba(0, 200, 0, ${77 / 100})` },
                                            text: { fill: '#f88', fontSize: '10px', margin: '0 auto', width: '60%' }
                                        }}
                                    />
                                </div>
                                <div className="donationContent">
                                    From the launch of React we've reached the sum of 2.7 Mln€ which will grant a first aid in case of necessity.
                                    If you want to contribute in some way click the link below and find the perfect way for you.
                                </div>
                            </div>
                            <div>
                                <center><Button variant="contained" color="primary">Contribute</Button></center>
                            </div>
                        </Paper>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;