import React, { Component } from "react";
import "./Results.css";


class Results extends Component {
    render () {
        return(
            <div className="App">
               <div class="card">
                    <div class="card-header">
                        Search Results
                    </div>
                    <div class="card-body">
                        <div class="list-group">
                        <button type="button" class="list-group-item list-group-item-action active">
                            Cras justo odio
                        </button>
                        <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
                        <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
                        <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>
                        <button type="button" class="list-group-item list-group-item-action" disabled>Vestibulum at eros</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Results;