import React from 'react'

import './card-list.css'
import Card from '../card/card'



const CardList = (props) => (
        <div className="card-list">
            { props.oeuvres.map((o, i) => (
                    <Card key={i} oeuvre={o} route={props.route} onDelete={props.onDeleteItem}/>
                    )
                )
            }

        </div>
)

export default CardList