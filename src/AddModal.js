import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {addMovie,editMovie} from './actions/moviAction';
import {connect} from 'react-redux';

class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      id: this.props.editMode?this.props.movieToEdit.id:0,
      title: this.props.editMode?this.props.movieToEdit.title:"",
      year: this.props.editMode?this.props.movieToEdit.year:"",
      rating: this.props.editMode?this.props.movieToEdit.rating:0,
      image: this.props.editMode?this.props.movieToEdit.image:""
    };
  }
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  add = () => {
    this.props.addNewMovie(this.state);
    this.setState({ show: false });
  };
  edit=()=>{
    this.props.UpdateMovie(this.state);
    console.log(this.state)
    this.setState({ show: false });
  }
  render() {
    return (
      <div>
        <Button className="fer" variant="primary" onClick={this.handleShow}>{this.props.editMode?"Edit":" Add New Movie"}
         
        </Button>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>Title:</label>
                <input type="text" onChange={this.handleChange} name="title" value={this.state.title}/>
              </div>
              <div>
                <label>Image:</label>
                <input type="text" onChange={this.handleChange} name="image" value={this.state.image} />
              </div>
              <div>
                <label>Rating:</label>
                <input type="text" onChange={this.handleChange} name="rating" value={this.state.rating} />
              </div>
              <div>
                <label>Year:</label>
                <input type="text" onChange={this.handleChange} name="year" value={this.state.year} />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button onClick={this.props.editMode?this.edit:this.add} variant="primary">
            {this.props.editMode?"Edit":" Add New Movie"}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewMovie: newMovie => dispatch(addMovie(newMovie)),
    
    UpdateMovie:newEdit=> dispatch(editMovie(newEdit))

  }
}
export default connect(null, mapDispatchToProps)(AddModal)