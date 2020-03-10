import React from 'react';
import './componentList.css'
import Item from './Item/item';


const List =() =>{
    return(
        <div>
            <h2>Component List</h2>
            <div className="container">

                <div className="card card-default" id="card_contacts">
                    <div id="contacts" className="panel-collapse collapse show" aria-expanded="true" >
                        <ul className="list-group pull-down" id="contact-list"></ul>
                        </div>
                        </div>
                        </div>
            <Item />
        </div>
    )

}
export default List;



