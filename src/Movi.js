import React, { Component } from "react";
import { connect } from "react-redux";
import uuid from "uuid";
import Starsratingcomponent from 'react-star-rating-component'
import { removmovie,getRating,getTitle } from "./actions/moviAction";
import AddModal from "./AddModal";
import {Link} from 'react-router-dom'


class Movi extends Component {
    constructor(props) {
        super(props);
        this.state = {
          rating: 1
        };
      }

    onStarClick = (nextValue, prevValue, name) => {
        this.setState({ rating: nextValue }, () =>
          this.props.SetRating(this.state.rating)
        );
      };
      
 
 
    ReNew=(id)=>{
        this.props.changemovie(id);
        
      }
     render(){
         return(
             <div>
                 
                 <input className="inp" type="text" placeholder="search ..." onChange={(e)=>this.props.setText( e.target.value)}/>
                 <Starsratingcomponent
            name="rate1"
            starCount={5}
            value={this.state.rating}
            onStarClick={this.onStarClick}
          />
                 
             <div className="movi">
        
         {this.props.movis.movies.filter(el =>el.rating >= this.props.movis.rating && el.title.toUpperCase().includes(this.props.movis.keyword.toUpperCase().trim())).map(el => <div className="film"><img className="img" src={el.image}/><h1 className="com">{el.title}</h1><h2 className="cim">{el.year}</h2>
         <Starsratingcomponent 
         name="rate1" 
         starCount={5}
         value ={el.rating}  />
     
            <button onClick={()=>this.ReNew(el.id)} className="br">REMOVE</button>
            <AddModal editMode='true' movieToEdit={el} />
       <Link  to={`/movie/${el.id}`}><button className="cnm">Description</button></Link>
         </div> )}
         
             </div>
             
            </div>
             )
             
         }



}
const mapDispatchToProps =dispatch=>{
    return{
        changemovie: id=> dispatch(removmovie(id)),  
        SetRating: rating=> dispatch(getRating(rating)),
        setText: text=> dispatch(getTitle(text))
      }
}
const mapStateToProps = state => {
    return {
      movis: state.moviReducers
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Movi);