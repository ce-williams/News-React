import React, { Component } from "react";
import Savedcard from "../Savedcard/Savedcard.js"
import "./Saved.css";
import articles from "../../articles.json"



class Saved extends Component {
    state = {
        articles
    };

    render () {
        return(
            <div className="container">
               <div class="card">
                    <div class="card-header">
                        Saved Articles
                    </div>
                    {this.state.articles.map(article => (
                        <Savedcard
                            id={article.id}
                            title={article.title}
                            link={article.link}
                            preview={article.preview} 
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Saved;