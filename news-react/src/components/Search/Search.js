import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
    render () {
        return(
            <div className="App">
               <div class="card">
                    <div class="card-header">
                        Search
                    </div>
                    <div className="card-body">
                        <blockquote class="blockquote mb-0">
                        <p>Use the fields below to search for an article.</p>
                            <form className="form-inline my-2 my-lg-0">
                                <input
                                    className="form-control mr-sm-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                                    Search
                                </button>
                            </form>
                        <footer class="blockquote-footer"> Search titles ex "2018 election results" <cite title="Source Title"></cite></footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        );
    }

}

export default Search;