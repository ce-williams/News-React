import React, { Component } from "react";


class Saved extends Component {
    render () {
        return(
            <div className="App">
               <div class="card">
                    <div class="card-header">
                        Saved Articles
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        );
    }
}

export default Saved;