import React from 'react'

function OverviewCard({type,number}) {
    return (
        <div className='over-viewcard'>
            <h1>{number}</h1>
            <h5>{type}</h5>
        </div>
    )
}

export { OverviewCard }