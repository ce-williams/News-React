import React, { Component } from "react";
import Search from "./Search";
import Results from "./Results";
import Saved from "./Saved";

class Home extends Component {

    render () {
        return (
            <div className="App">
                <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Wall Street Journal Article Scraper</h1>
                    <p class="lead">Use the components below to search and save articles</p>
                </div>
                </div>

                <Search />
                <Results />
                <Saved />
            </div>
        );
    }
}

export default Home;