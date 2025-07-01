import React from 'react'
import BigImage from "../../assets/image 36.png"

const LatestEvent = () => {
  return (
    <div className='latest-event'>
      <img className='latest-event-big-img' src={BigImage} alt="" />
      <p className='latest-event-heading'>LATEST EVENTS</p>
      <div className="latest-events-cards">
        <div className="latest-event-card"></div>
        <div className="latest-event-card"></div>
        <div className="latest-event-card"></div>
      </div>
    </div>
  )
}

export default LatestEvent
