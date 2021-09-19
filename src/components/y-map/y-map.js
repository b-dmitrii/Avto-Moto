import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

import marker from "../../assets/image/svg/marker.svg";

const YMap = () => {
  return (
    <YMaps>
      <div className='ymap'>
        <Map
          defaultState={{ center: [59.968382, 30.319426], zoom: 15 }}
          width="431px"
          height="271px"
        >
          <Placemark geometry={[59.968511, 30.316786]} options={{iconLayout: 'default#image', iconImageHref: marker}} />
        </Map>
      </div>
    </YMaps>
  );
};

export default YMap;
