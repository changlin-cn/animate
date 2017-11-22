import {createAnimation} from "./src/createAnimation";
import {easing} from "./src/easing";

let el5=document.querySelector('#ani5');
createAnimation({
    target:el5,
    keyFrame:{'left':'300px','top':'100px'},
    onStart(){
        el5.innerHTML='Start Animation'
    },
    onComplete(e){
        el5.innerHTML='animation complete'
    }
});




//
//
// createAnimation({
//     target:document.querySelector('#ani'),
//     keyFrame:{'left':'300px','top':'100px'},
//     useTransition:false,
// });
//
// createAnimation({
//     target:'#ani2',
//     keyFrame:{'left':'700px','top':'150px'},
//     duration:3000,
//     delay:2000,
//     useTransition:false,
// });
//
// createAnimation({
//     target:'#ani3',
//     keyFrame:[
//         {'left':'0px','top':'0px',percent:0},
//         {'left':'200px','top':'0px',percent:25},
//         {'left':'200px','top':'120px',percent:50},
//         {'left':'0px','top':'120px',percent:75},
//         {'left':'0px','top':'0px',percent:100}
//         ],
//     duration:3000,
//     useTransition:false,
//     delay:5000,
//
// });
//
// createAnimation({
//     target:'#ani4',
//     keyFrame:{'left':'+=300px','top':'-=100px'},
//     duration:3000,
//     delay:8000,
//     useTransition:false,
//
// });