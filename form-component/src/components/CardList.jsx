import React from 'react'
import Card from './Card'


function CardList(props) {
  const profiles = props.profiles

  return (
    <div>
        {/* using map method */}
            {profiles.map((profile, key) => 
              (<div key={key}>
                <Card  {...profile} />
                </div> 
               ))}
    </div>
  )
}

export default CardList;
