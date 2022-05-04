import React from 'react'
import CardYear from './CardYear'

function TimeLineStudies(props) {

    return (
        <section class="timeline">
            <div class="container pt-8">
                <CardYear />
                <CardYear   title={"Master SII"}
                            date={"30 JUIN 2016"}
                            description={"Master en system informatique et logiciel "}
                />
            </div>
        </section>
    )
}

export default TimeLineStudies
