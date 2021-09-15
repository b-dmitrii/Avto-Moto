import carOne from "../assets/image/car_one.jpg";
import carOneMin from "../assets/image/car_one_min.jpg";
import carTwo from "../assets/image/car_two.jpg";
import carTwoMin from "../assets/image/car_two_min.jpg";
import carThree from "../assets/image/car_three.jpg";
import carThreeMin from "../assets/image/car_three_min.jpg";

export const Data = 
  {
    title: "Марпех 11",
    price: "2 300 000",
    oldPrice: "2 400 000",

    configuration: {
      fuel: "бензин",
      trasmission: "механика",
      power: "100 л.с",
      volume: "1.4л",
    },

    specifications: {
      transmission: "Роботизированная",
      enginePower: "249",
      typeEngine: "Бензиновый",
      drive: "Полный",
      engineCapacity: "2.4",
      torqueOutput: "370/4500",
      numberOfCylinders: "4",
    },

    reviews: [
      {
        name: "Борис Иванов",
        plus: "мощность, внешний вид",
        minus: "Слабые тормозные колодки (пришлось заменить)",
        comments:
          "Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.",
        stars: 2,
        timeAgo: "1",
      },
      {
        name: "Марсель Исмагилов",
        plus: "Cтиль, комфорт, управляемость",
        minus: "Дорогой ремонт и обслуживание",
        comments:
          "Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.",
        stars: 2,
        timeAgo: "1",
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
  }
