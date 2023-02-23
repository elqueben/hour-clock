function Clock() {


    const [time, setTime] = React.useState(new Date().toLocaleTimeString());
    const [minute, setMinute] = React.useState(0)
    const [start, setStart] = React.useState(false)

    let increaseMinute = () => {
        setMinute(minute + 1) 
    }

    let decreaseMinute = () => {
        if (minute > 0) {
            setMinute(minute - 60 / 60)
        }
    }

    let startTime = () => {
        setStart(true)
    }

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
            if ()
        }, 1000)

        return () => clearInterval(interval)
    }, []);

    return (
        <div id="background">
            <div id="container">
                <div id="hour">
                    <h3>Current Time:</h3>
                    <h2>{time}</h2>
                </div>
                <div id="timer" className="pb-3">
                    <h3>Timer:</h3>
                        <button onClick={increaseMinute}><i className="fa-solid fa-arrow-up"></i></button>
                    <h2>{minute}</h2>
                        <button onClick={decreaseMinute}><i className="fa-solid fa-arrow-down"></i></button>
                    <button onClick={startTime} type="submit" className="btn btn-primary">start</button>
                </div>
            </div>
        </div>
    )
}
ReactDOM.render(<Clock />, document.getElementById("root"))