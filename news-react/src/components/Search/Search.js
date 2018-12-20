import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import "./Search.css";

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchInput: ""
        };
        
        this.handleChange = this.handleChange.bind(this);
    }

    //makes sure something is entered in the form fields

    validateForm() {
        return this.state.searchInput.length > 0;
    }

    //listenes for any changes in the form fields

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.searchInput);
    }
    
    render () {
        return(
            <div className="container">
               <div class="card">
                    <div class="card-header">
                        Search
                    </div>
                    <div className="card-body searchCard">
                        <blockquote class="blockquote mb-0">
                        <p>Use the fields below to search for an article.</p>
                            <form onSubmit={this.handleSubmit}>
                                <FormGroup controlId="searchInput" bsSize="large">
                                    <ControlLabel>Article Search</ControlLabel>
                                    <FormControl
                                        autoFocus
                                        type="searchInput"
                                        value={this.state.searchInput}
                                        // onChange={this.handleChange}
                                    />
                                </FormGroup>
                                <Button
                                    block
                                    bsSize="large"
                                    disabled={!this.validateForm()}
                                    type="submit"
                                >
                                    Search
                                </Button>
                            </form>
                        </blockquote>
                    </div>
                </div>
            </div>
        );
    }

}

export default Search;