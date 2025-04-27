import React, {useState, useEffect} from 'react'

const TimerInterval = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time => time+1)
        }, 1000);
        return () => {
            clearInterval(interval)
        }
    }, []);

  return (
    <div>
        <h1>TimerInterval</h1>
        <p>{time} seconde qui se sont ecouler depuis le montage de mon component</p>
        {time >=  5 && "voulez vous continuer la cession ?"}
    </div>
  )
}

export default TimerInterval