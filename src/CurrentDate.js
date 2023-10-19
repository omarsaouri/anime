import './CurrentDate.css'

const CurrentDate = (props) => {
    return (
        <section className='current-date-container'>
            <p>{props.CurrentDateMonth}</p>
            <h2>{props.CurrentDateDay}</h2>
        </section>
    );
}

export default CurrentDate;