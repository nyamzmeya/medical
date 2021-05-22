const Record = (props) => {
    return (
        <div className= 'items'>
            <div className= 'items_1'>
                <p>{props.weekday}</p>
                <p>{props.day}</p>
                <p>|</p>
                <p> {props.time}</p>
            </div>

            <div className= 'items_2'>
                {props.place},{props.address}
            </div>

            <div className="items_3">
                <img src={props.pic} alt="img" />
                <div>
                    <span>{props.person}</span>
                    <br></br>
                    {props.subject}
                </div>
            </div>

            <button onClick= {() => {props.del(props.id)}} className='del'>
                Отменить
            </button>
        </div>
    )
}


const Records = (props) => {


    let RecordEl = props.records.map(p => <Record weekday= {p.weekday}
    day = {p.day}
    time = {p.time}
    place={p.place}
    address ={p.address}
    person= {p.person}
    subject={p.subject}
    pic={p.pic}
    id={p.id}
    del={props.del}/>)
    return (
        <div className= 'itemss'>
        {RecordEl}
        </div>
    );
}

export default Records;

