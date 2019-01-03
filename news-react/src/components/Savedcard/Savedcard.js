import React from "react";
import "./Savedcard.css";


const Savedcard = props => (
    <div className="list-group">
        <a href={props.link} className="list-group-item list-group-item-action flex-column align-items-start active">
            <div className="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{props.title}</h5>
                <small>3 days ago</small>
            </div>
            <p class="mb-1">{props.preview}</p>
            <small>Donec id elit non mi porta.</small>
        </a>
    </div>
);



// class Saved extends Component {
//     render() {
//         return (
//             <div className="container">
//                 <div class="card">
//                     <div class="card-header">
//                         Saved Articles
//                     </div>
//                     <div class="list-group">
//                         <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
//                             <div class="d-flex w-100 justify-content-between">
//                                 <h5 class="mb-1">List group item heading</h5>
//                                 <small>3 days ago</small>
//                             </div>
//                             <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
//                             <small>Donec id elit non mi porta.</small>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

export default Savedcard;