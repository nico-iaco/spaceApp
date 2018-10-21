import React from 'react';
import UpperNavbar from "./UpperNavbar";
import LeftMenu from "./LeftMenu";
import Paper from "@material-ui/core/es/Paper/Paper";
import Carousel from 'nuka-carousel';
import Button from "@material-ui/core/es/Button/Button";

class Volcano extends React.Component{
    render(){
        return(
            <div className="main">
                <UpperNavbar/>
                <div className="contentSeparator">
                    <div id="navList">
                        <LeftMenu {...this.props} />
                    </div>
                    <div id="content">
                        <Paper id="realContent">
                            <br/>
                            <center><h2>Volcano's eruption</h2></center>
                            <div id="contenuto">
                                <Carousel>
                                    <center><iframe width="560" height="315" src="https://www.youtube.com/embed/WgktM2luLok" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe></center>
                                    <center><iframe width="560" height="315" src="https://www.youtube.com/embed/uZp1dNybgfc" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe></center>
                                </Carousel>
                                <p>
                                    Testo bla bpdmskvnpsvmpsomvpsnvcpznvsiknvs<br/>
                                    svsrbsnòmvsldjvolfmdbsljdmv sdlòznmv lò.mvlòdsjmvò<br/>
                                    sdgvsndlòkbvsldngslrsdknbdflmbfdlmbdlbjmlò<br/>
                                    <br/>
                                    <center>
                                        <Button variant="contained" color="primary" >
                                            Test your knowledge
                                        </Button>
                                    </center>
                                </p>
                            </div>
                        </Paper>
                    </div>
                </div>
            </div>
        );
    }}

export default Volcano;