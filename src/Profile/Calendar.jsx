import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './Profile.css';

const WEEKDAYS_SHORT = {
    ru: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
  };
const MONTHS = {
    ru: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ]
  };





const CalendarComponent = (props) => {

    const countOccurrences = arr => arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
    let d = props.dates.map(day => day.setHours(12));
    d = countOccurrences(d);

    let renderDay = (day) => {

        return(
          <div>
              {d.hasOwnProperty(day.setHours(12))
                ? <div>
                    <span>{day.getDate()}</span>
                    <span className='small'>{d[day.setHours(12)]}</span>
                </div>
                : <span>{day.getDate()}</span>
              }
          </div>
        );
    }
    return (
      <DayPicker className='calendar'
      initialMonth={new Date(2021, 5)}
      selectedDays={props.dates}
      months={MONTHS['ru']}
      weekdaysShort={WEEKDAYS_SHORT['ru']}
      renderDay={renderDay}/>
    )
}

export default CalendarComponent;