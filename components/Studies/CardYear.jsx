import React from 'react'

function CardYear(props) {
    return (
        <div className="timeline-item">

            <div className="timeline-img"></div>

            <div className="timeline-content timeline-card js--fadeInRight">
                <div className="timeline-img-header">
                    <h2 className="title-diplome">{props.title || "Licence ISIL"}</h2>
                </div>
                <div className="date">{props.date  || "25 MAY 2016"}</div>
                <p className="description-diplome">{props.description || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam."}</p>
                <a className="bnt-more" href="javascript:void(0)">More </a>
            </div>

        </div>
    )
}

export default CardYear
