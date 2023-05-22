import React, { useEffect, useState } from 'react'

interface CardProps {
  posx: number
  posy: number
  symbol: string,
  color: string
}

function Card(props: CardProps) {
  let x = props.posx;
  let y = props.posy;
  return (
    <div style={{position: 'absolute', width: 300, height: 200, backgroundColor: `${props.color}`, left: x, top: y}} className={`text-center text-white text-9xl font-bold`}>
      <span className='align-middle'>{props.symbol}</span>
    </div>
  )
}



export default Card