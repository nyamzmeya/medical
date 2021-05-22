import pic from '../img/photo.png';
import pic1 from '../img/image 7.png';
import pic2 from '../img/Ellipse 2.png';

let initialState = {
    image: pic,
    records: [
      {
        weekday: 'Понедельник',
        day: '15.06.21',
        time: '15:30',
        place: 'СПБ ГБУЗ "Городская поликлиника №25"',
        address: 'пр. Солидарности, д. 1, к. 1, лит. А',
        person: 'Малушко Т. Н.',
        subject: 'Хирургия',
        pic: pic1,
        id: 1

      },
      {
        weekday: 'Понедельник',
        day: '15.06.21',
        time: '18:30',
        place: 'СПБ ГБУЗ "Городская поликлиника №25"',
        address: 'пр. Солидарности, д. 1, к. 1, лит. А',
        person: 'Харьков В. С.',
        subject: 'Терапевтическое отделение',
        pic: pic2,
        id: 2

      },
      {
        weekday: 'Понедельник',
        day: '16.06.21',
        time: '15:30',
        place: 'СПБ ГБУЗ "Городская поликлиника №25"',
        address: 'пр. Солидарности, д. 1, к. 1, лит. А',
        person: 'Малушко Т. Н.',
        subject: 'Хирургия',
        pic: pic1,
        id: 3

      },
      {
        weekday: 'Понедельник',
        day: '16.06.21',
        time: '15:30',
        place: 'СПБ ГБУЗ "Городская поликлиника №25"',
        address: 'пр. Солидарности, д. 1, к. 1, лит. А',
        person: 'Малушко Т. Н.',
        subject: 'Хирургия',
        pic: pic1,
        id: 4

      }
    ]
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE":
      return {
        ...state,
        records: state.records.filter(function(value, index, arr){ 
          return value['id'] != action.value;
      })
      };
      default:
        return state;
  }
};

export const del = (value) => {
  return {
    type: "DELETE",
    value
  };
};
  
export default profileReducer;