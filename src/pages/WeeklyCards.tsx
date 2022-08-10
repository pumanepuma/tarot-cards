import CardsList from "../components/CardsList"

const WeeklyCards = () => {
    return(
        <div className="weekly">
            <h1>Weekly alignment</h1>
            <CardsList days={7} />
        </div>
    )
}

export default WeeklyCards