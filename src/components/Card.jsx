import React from 'react'
import Button from './Button'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.cardData.imgUrl} />
        <div className='cardDes'>
            <h2>{props.cardData.title}</h2>
            <p>
              {props.cardData.desc}
            </p>
        <Button btnText="Buy"/>
        </div>
    </div>
  )
}

export default Card