import React, { Component } from "react";
import "./Results.css";
import articles from "../../articles.json"
import Resultscard from "../Resultscard/Resultscard.js"


class Results extends Component {
    state = {
        articles
    };
    
    render () {
        return(
            <div className="container">
               <div class="card">
                    <div class="card-header">
                        Search Results
                    </div>
                    {this.state.articles.map(article => (
                        <Resultscard
                            id={article.id}
                            title={article.title}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Results;