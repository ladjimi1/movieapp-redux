import React, { Component } from "react";
import { connect } from "react-redux";
import Starsratingcomponent from 'react-star-rating-component';


class Movi extends Component {
    state = {};
    componentDidMount = () => {
      this.setState({
        ...this.props.movis.movies.filter(
          movie => String(movie.id) === this.props.match.params.id
        )[0]
      });
    
   
    }


    
    render() {
        return (
            <div>


                <div className="movi">

                    <div className="film"><img className="img" src={this.state.image} />
                    <h1 className="com">{this.state.title}</h1>
                    <h2 className="cim">{this.state.year}</h2>
                        <Starsratingcomponent
                            name="rate1"
                            starCount={5}
                            value={this.state.rating} />


                    </div>

                </div>

            </div>
        )

    }



}
const mapStateToProps = state => {
    return {
      movis: state.moviReducers
    };
}
export default connect(mapStateToProps)(Movi);