import carOne from "../assets/image/car_one.jpg";
import carOneMin from "../assets/image/car_one_min.jpg";
import carTwo from "../assets/image/car_two.jpg";
import carTwoMin from "../assets/image/car_two_min.jpg";
import carThree from "../assets/image/car_three.jpg";
import carThreeMin from "../assets/image/car_three_min.jpg";



export const Data = {
  title: "Марпех 11",
  price: "2 300 000",
  oldPrice: "2 400 000",

  configurations: [
    {
      type: "fuel",
      value: "бензин",
    },
    {
      type: "trasmission",
      value: "механика",
    },
    {
      type: "power",
      value: "100 л.с",
    },
    {
      type: "volume",
      value: "1.4л",
    },
  ],

  characteristics: [
    {
      type: `Трансмиссия`,
      value: `Роботизированная`,
    },
    {
      type: `Мощность двигателя, л.с.`,
      value: `249`,
    },
    {
      type: `Тип двигателя`,
      value: `Бензиновый`,
    },
    {
      type: `Привод`,
      value: `Полный`,
    },
    {
      type: `Объем двигателя, л`,
      value: `2.4`,
    },
    {
      type: `Макс. крутящий момент`,
      value: `370/4500`,
    },
    {
      type: `Количество цилиндров`,
      value: `4`,
    },
  ],

  reviews: [
    {
      name: "Борис Иванов",
      plus: "мощность, внешний вид",
      minus: "Слабые тормозные колодки (пришлось заменить)",
      comments:
        "Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.",
      stars: 2,
      time: '2021-09-18T12:08:00'
    },
    {
      name: "Марсель Исмагилов",
      plus: "Cтиль, комфорт, управляемость",
      minus: "Дорогой ремонт и обслуживание",
      comments:
        "Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.",
      stars: 4,
      time: '2021-09-12T13:30:00'
    },
  ],

  images: [
    {
      big: `${carOne}`,
      small: `${carOneMin}`,
      alt: `Фотография внешнего вида автомобиля`,
    },
    {
      big: `${carTwo}`,
      small: `${carTwoMin}`,
      alt: `Фотография салона автомобиля`,
    },
    {
      big: `${carThree}`,
      small: `${carThreeMin}`,
      alt: `Фотография приборной панели автомобиля`,
    },
  ],
};
