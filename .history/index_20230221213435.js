function Clock() {


    const [time, setTime] = React.useState(new Date().toLocaleTimeString());
    const [minute, setMinute] = React.useState(0)
    const [start, setStart] = React.useState(false)

    let increaseMinute = () => {
        setMinute(minute + 1) 
    }

    let decreaseMinute = () => {
        if (minute > 0) {
            setMinute(minute - 1)
        }
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
                <div id="timer">

                </div>
            </div>
        </div>
    )
}
ReactDOM.render(<Clock />, document.getElementById("root"))