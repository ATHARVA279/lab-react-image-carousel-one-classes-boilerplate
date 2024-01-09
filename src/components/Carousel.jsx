import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor() {
    super()//bring all the methods of react.component in our class
  
    this.state = {
       index:0
    }
  }
  
    render(){
        let {index} = this.state
        let currentImages = images[index]
        let handlePrev = () =>{
            this.setState({index:(this.state.index-1+images.length)%images.length})
        }

        let handleNext= () =>{
            this.setState({index:(this.state.index+1)%images.length})
        }

        return(
            <>
            <div className="mainContainer">
                <div>
                    <ArrowBackIosIcon onClick={handlePrev}/>
                </div>
                <div className="imageBox">
                    <img src={currentImages.img} id="Image" />
                </div>
                <div className="imageContainer">
                    <div className="titleBox">
                        <p>{currentImages.title}</p>
                    </div>
                    <div className="subtitleBox">
                    <p>{currentImages.subtitle}</p>
                    </div>
                </div>
                <div>
                    <ArrowForwardIosIcon onClick={handleNext}/>
                </div>
            </div>
            </>
        )
    }
}

export default Carousel;