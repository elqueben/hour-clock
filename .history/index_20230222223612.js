function Clock() {


    const [time, setTime] = React.useState(new Date().toLocaleTimeString());
    const [minute, setMinute] = React.useState(0)
    const [second, setSecond] = React.useState(0)
    const [zero, setZero] = React.useState("0")
    const [countdown, setCountdown] = React.useState(false)

    let increaseSecond = () => {
        setSecond(second + 1)
        if (second > 8) {
            setZero("")
        }
    }

    let decreaseSecond = () => {
        if (second > 0) {
            setSecond(second - 1)
        }
        if (second < 11) {
            setZero("0")
        }
    }

    let increaseMinute = () => {
        if (second > 8) {
            setZero("")
        }
    }

    let decreaseMinute = () => {
        setMinute(minute - 1)
    }

    let start = () => {
        if (second > 0) {
            setCountdown(true)
        }
        else {
            setCountdown(false)
        }
    }

    let stop = () => {
        setCountdown(false)
    }

    let reset = () => {
        setSecond(0)
        setZero("0")
    }

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
            if (countdown && second > 0) {
                setSecond(second - 1)
                if (second < 11) {
                    setZero("0")
                }    
            }
        }, 1000)

        return () => clearInterval(interval)
    });

    return (
        <div id="background">
            <div id="hour">
                <h3>Current Time:</h3>
                <h2>{time}</h2>
            </div>
            <div id="timer"> 
                <h3>Timer:</h3> 
                    <button onClick={decreaseMinute} ><i className="fa-solid fa-arrow-down"></i></button> 
                    <button onClick={increaseMinute} ><i className="fa-solid fa-arrow-up"></i></button>  
                <h2>{zero}{minute}:{zero}{second}</h2>
                    <button onClick={decreaseSecond} ><i className="fa-solid fa-arrow-down"></i></button> 
                    <button onClick={increaseSecond}><i className="fa-solid fa-arrow-up"></i></button>
                <div id="buttons">
                    <button className="btn btn-danger" onClick={stop}>stop</button>
                    <button className="btn btn-primary" onClick={start}>start</button>
                    <button className="btn btn-success" onClick={reset}>reset</button>
                </div>
           </div>
        </div>
    )
}
ReactDOM.render(<Clock />, document.getElementById("root"))