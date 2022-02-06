import React from 'react';
import {VictoryPie} from 'victory';

const TransportPie = (distribution) => {
    return <VictoryPie data={distribution}/>
}

export default TransportPie;