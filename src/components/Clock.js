import React, {useState, useEffect} from 'react'

function Clock() {
  const [hours, setHours] = useState(new Date().getHours())
  const [minutes, setMinutes] = useState(new Date().getMinutes())
  const [seconds, setSeconds] = useState(new Date().getSeconds())
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(new Date().getSeconds() < 10 ? "0" + new Date().getSeconds() : new Date().getSeconds())
    }, 1000);
    return () => {
      clearInterval(interval)
    }
  }, [seconds])

  useEffect(() => {
    const interval = setInterval(() => {
      setHours(new Date().getHours() < 10 ? "0" + new Date().getHours() : new Date().getHours())
    }, 1000);
    return () => {
      clearInterval(interval)
    }
  }, [hours])


  useEffect(() => {
    const interval = setInterval(() => {
      setMinutes(new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes())
    }, 1000);
    return () => {
      clearInterval(interval)
    }
  }, [minutes])

  // useEffect(()=>{
    // setHours(hours < 10 ? "0" + hours : hours)
    // setMinutes(minutes < 10 ? "0" + minutes : minutes)
    // setSeconds(seconds < 10 ? "0" + seconds : seconds)
  // },[])

  return (
    <div style={{display: 'flex', justifyContent: 'center',fontSize: 40, width: '100%'}}>
      {`${hours}:${minutes}:${seconds}`}
    </div>
  )
}

export default Clock
