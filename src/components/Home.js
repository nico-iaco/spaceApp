import React from "react";
import Paper from "@material-ui/core/es/Paper/Paper";
import UpperNavbar from "./UpperNavbar";
import LeftMenu from "./LeftMenu";
import Button from "@material-ui/core/es/Button/Button";
import GridList from "@material-ui/core/es/GridList/GridList";
import GridListTile from "@material-ui/core/es/GridListTile/GridListTile";
import GridListTileBar from "@material-ui/core/es/GridListTileBar/GridListTileBar";
import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'

//ReactChartkick.addAdapter(Chart);

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
                            <center><h2>Emergency fund raising</h2></center>
                            <br />
                            <div className="Wrapper">
                                <div className="PBWrapper">
                                    {/*<LineChart
                                        colors={["#e53935"]}
                                        ytitle="K€ donated"
                                        data={{"2018-10-03": 10, "2018-10-10": 16, "2018-10-17": 22, "2018-10-24": 42, "2018-11-03": 57, "2018-11-10": 70, "2018-11-17": 85, "2018-11-24": 100}}
                                    />*/}
                                </div>
                                <div className="donationContent">
                                    <p>
                                    From the launch of React we've reached the sum of 100 K€ which will grant a first aid in case of necessity.
                                    If you want to contribute in some way click the link below and find the perfect way for you.
                                    </p>
                                    <h2>Our partners:</h2>
                                    <GridList cols={4} className="rowList">
                                        <GridListTile key={1}>
                                            <img src="http://icons.iconarchive.com/icons/bokehlicia/pacifica/256/amazon-icon.png" alt={"Amazon logo"} />
                                            <GridListTileBar
                                                title={"Amazon"}
                                            />
                                        </GridListTile>
                                        <GridListTile key={2}>
                                            <img src={"https://pbs.twimg.com/profile_images/1030937442310868992/DKh6US_F.jpg"} alt={"Atac logo"} />
                                            <GridListTileBar
                                                title={"Atac"}
                                            />
                                        </GridListTile>
                                        {/*<GridListTile key={3}>*/}
                                            {/*<img src={"https://dxxbxu0f802py.cloudfront.net/wp-content/uploads/2018/01/30093444/Logo%20BlaBlaCar-500x500.png"} alt={"Bla Bla car logo"} />*/}
                                            {/*<GridListTileBar*/}
                                                {/*title={"Bla Bla car"}*/}
                                            {/*/>*/}
                                        {/*</GridListTile>*/}
                                        <GridListTile key={4}>
                                            <img src={"https://s3.amazonaws.com/i3.cleantech/uploads/company/company_logo/57/404957/obike.png"} alt={"Obike logo"} />
                                            <GridListTileBar
                                                title={"Obike"}
                                            />
                                        </GridListTile>
                                    </GridList>
                                </div>

                            </div>
                            <div>

                                <br/>
                                <center><Button id="button" variant="contained" color="primary">Contribute</Button></center>
                            </div>
                        </Paper>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
