import React, { useState, useEffect } from "react";
import dayjs from 'dayjs'
import Countdown, { calcTimeDelta } from 'react-countdown';
import './countdown.module.scss'

const SundayCountdown = () => {

  const weekday = require('dayjs/plugin/weekday')
  dayjs.extend(weekday)
  const [remainingTime, setRemainingTime] = useState(null)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const nextSunday = dayjs().weekday(7).hour(10).minute(0).second(0)
  //     const diff = nextSunday.diff(dayjs(), "milliseconds")
  //     setRemainingTime(diff)
  //   }, 1000)

  //   return () => {
  //     clearInterval(interval)
  //   };
  // }, [])

  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <span>{hours}:{minutes}:{seconds}</span>;
    }
  };

  return (
    <aside className="countdown">
      <Countdown 
        date={Date.now() + 10000}
        renderer={renderer}
      />
    </aside>
  )

  // if (!remainingTime) {
  //   return <div className="countdown">Loading...</div>
  // }

  // const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
  // const hours = Math.floor(
  //   (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  // )
  // const minutes = Math.floor(
  //   (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
  // )
  // const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000)

  // return (
  //   <aside className="countdown">
  //     <p>Countdown to next Sunday at 10am:</p>
  //     <p>
  //       {days > 0 && (`${days} ${days === 1 ? `day` : `days`},`)} {hours} hours, {minutes} minutes, {seconds} seconds
  //     </p>
  //   </aside>
  // )
}

export default SundayCountdown

