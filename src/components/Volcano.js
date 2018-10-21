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
                                <p id="textDescription">
                                A volcano is a rupture in the crust of a planetary-mass object, such as Earth, that allows hot lava, volcanic ash, and gases 
                                to escape from a magma chamber below the surface. Earth's volcanoes occur because its crust is broken into 17 major, rigid tectonic 
                                plates that float on a hotter, softer layer in its mantle. Therefore, on Earth, volcanoes are generally found where tectonic plates 
                                are diverging or converging, and most are found underwater. For example, a mid-oceanic ridge, such as the Mid-Atlantic Ridge,
                                has volcanoes caused by divergent tectonic plates whereas the Pacific Ring of Fire has volcanoes caused by convergent tectonic plates.
                                    <br/>
                                    <center>
                                        <Button id="button" variant="contained" color="primary" >
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