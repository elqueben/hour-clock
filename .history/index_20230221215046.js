function Clock() {


    const [time, setTime] = React.useState(new Date().toLocaleTimeString());
    const [second, setSecond] = React.useState(0)
    const [start, setStart] = React.useState(false)

    let increaseSecond = () => {
        setSecond(second + 1)
    }

    let decreaseSecond = () => {
        setSecond(second - 1)
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
                    <h3>Timer:</h3>
                    <button><i className="fa-solid fa-arrow-up"></i></button>
                    <h2>{second}</h2>
                    <button><i className="fa-solid fa-arrow-down"></i></button>
                </div>
            </div>
        </div>
    )
}
ReactDOM.render(<Clock />, document.getElementById("root"))