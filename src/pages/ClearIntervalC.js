import React, {useState, useEffect} from 'react'

const ClearIntervalC = () => {
    const [time, settime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            settime(time => time + 1)
        }, 1000);

        return () => {
            clearInterval(interval)
        }
    }, []);

    console.log("time", time)

  return (
    <div>
        
        <h1>Timer: {time}</h1>
        <p>{time} secondes se sont ecoules depuis le montage du component</p>
    </div>
  )
}

export default ClearIntervalC