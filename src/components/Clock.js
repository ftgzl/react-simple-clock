import React, {useState, useEffect} from 'react'

function Clock() {
  const [hours, setHours] = useState(new Date().getHours())
  const [minutes, setMinutes] = useState(new Date().getMinutes())
  const [seconds, setSeconds] = useState(new Date().getSeconds())
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(new Date().getSeconds())
    }, 1000);
    return () => {
      clearInterval(interval)
    }
  }, [seconds])

  useEffect(() => {
    const interval = setInterval(() => {
      setHours(new Date().getHours())
    }, 1000);
    return () => {
      clearInterval(interval)
    }
  }, [hours])


  useEffect(() => {
    const interval = setInterval(() => {
      setMinutes(new Date().getMinutes())
    }, 1000);
    return () => {
      clearInterval(interval)
    }
  }, [minutes])

  return (
    <div style={{display: 'flex', justifyContent: 'center',fontSize: 40, width: '100%'}}>
      {`${hours}:${minutes}:${seconds}`}
    </div>
  )
}

export default Clock
