function Clock() {


    const [time, setTime] = React.useState(new Date().toLocaleTimeString());
    const [hour, setHour] = React.useState(60);
    const [minute, setMinute] = React.useState(0)


    let increaseHour = () => {
        parseInt(setHour(hour => ((hour + 60) % 60 )))
    }
    let increaseMinute = () => {
        (setMinute(minute + 1))
        
    }

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
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
                        <button><i class="fa-solid fa-arrow-up"></i></button>
                    <h2>{hour}</h2>
                        <button onClick={increaseMinute}><i class="fa-solid fa-arrow-up"></i></button>
                    <h2>{minute}</h2>
                </div>
            </div>
        </div>
    )
}
ReactDOM.render(<Clock />, document.getElementById("root"))