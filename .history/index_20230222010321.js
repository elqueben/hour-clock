function Clock() {


    const [time, setTime] = React.useState(new Date().toLocaleTimeString());
    const [second, setSecond] = React.useState(0)
    const [countdown, setCountdown] = React.useState(false)

    let increaseSecond = () => {
        setSecond(second + 1)
    }

    let decreaseSecond = () => {
        if (second > 0) {
            setSecond(second - 1)
        }
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
    }


    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
            if (countdown && second > 0) {
                setSecond(second - 1)
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
                    <button onClick={decreaseSecond} ><i className="fa-solid fa-arrow-down"></i></button>    
                <h2>{second}</h2>
                    <button onClick={increaseSecond}><i className="fa-solid fa-arrow-up"></i></button>
                    
                <button className="btn btn-primary" onClick={start}>start</button>
                <button className="btn btn-success" onClick={reset}>reset</button>
           </div>
        </div>
    )
}
ReactDOM.render(<Clock />, document.getElementById("root"))