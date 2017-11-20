import {createAnimation} from "./src/createAnimation";
import {easing} from "./src/easing";




// createAnimation({
//     target:document.querySelector('#ani'),
//     keyFrame:{'style.left':'300px','style.top':'100px'},
//     duration:2000,
//     easing:easing.Quad.easeInOut
// });
// createAnimation({
//     target:'#ani2',
//     keyFrame:{'style.left':'700px','style.top':'150px'},
//     duration:3000
// });



import {lasllll} from 'lodash'

createAnimation({
    target:'#ani3',
    keyFrame:[
        {'style.left':'0px','style.top':'0px',percent:0},
        {'style.left':'200px','style.top':'0px',percent:25},
        {'style.left':'200px','style.top':'200px',percent:50},
        {'style.left':'0px','style.top':'200px',percent:75},
        {'style.left':'0px','style.top':'0px',percent:100}
        ],
    duration:3000,
    easing:easing.Bounce.easeOut
});
