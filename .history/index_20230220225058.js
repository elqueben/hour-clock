function Clock() {

    const [time, setTime] = React.useState(new Date().toLocaleTimeString());

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000)

        return () => clearInterval(interval)
    }, []);

    return (
        <div id="background" className="">
            <div className="container">
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div className="pb-3">
                        <h3>Current Time:</h3>
                        <h2>{time}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
ReactDOM.render(<Clock />, document.getElementById("root"))