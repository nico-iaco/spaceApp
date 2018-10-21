import React from "react";
import Paper from "@material-ui/core/es/Paper/Paper";
import Carousel from 'nuka-carousel';
import UpperNavbar from "./UpperNavbar";
import LeftMenu from "./LeftMenu";
import Button from "@material-ui/core/es/Button/Button";


class Earthquake extends React.Component{

    toGame = () => {
        this.props.history.push({pathname: "/game"});
    };
    render(){
        return(
            <div className="main">
                <UpperNavbar {...this.props}/>
                <div className="contentSeparator">
                    <div id="navList">
                        <LeftMenu {...this.props} />
                    </div>
                    <div id="content">
                        <Paper id="realContent">
                            <br/>
                            <center><h2>Earthquakes</h2></center>
                            <div id="contenuto">
                                <Carousel>
                                    <center><iframe width="560" height="315" src="https://www.youtube.com/embed/T0AEtX-uPLA" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe></center>
                                    <center><iframe width="560" height="315" src="https://www.youtube.com/embed/VSgB1IWr6O4" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe></center>
                                    <center><img src="https://images-assets.nasa.gov/image/PIA20002/PIA20002~small.jpg" alt="earthquake photo" id="photo" /></center>
                                </Carousel>
                                <p id="textDescription">
                                    Testo bla bpdmskvnpsvmpsomvpsnvcpznvsiknvs<br/>
                                    svsrbsnòmvsldjvolfmdbsljdmv sdlòznmv lò.mvlòdsjmvò<br/>
                                    sdgvsndlòkbvsldngslrsdknbdflmbfdlmbdlbjmlò<br/>
                                    <br/>
                                    <center>
                                        <Button id="button" variant="contained" color="primary" onClick={this.toGame}>
                                            Test your knowledge
                                        </Button>
                                    </center>
                                </p>
                            </div>
                        </Paper>
                    </div>
                </div>
            </div>
        )
    }
}

export default Earthquake;