import {createAnimation} from "../../src/createAnimation";
import {easing} from "../../src/easing";

window.onload=()=>{


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

    let el6=document.querySelector('#ani6');
    let ani6= createAnimation({
        target:el6,
        keyFrame:{'transform':'rotate(170deg) scale(2,2)','left':'100px'},
        duration:4000
    });
    setTimeout(()=>ani6.stop(),2500);






    createAnimation({
        target:document.querySelector('#ani'),
        keyFrame:{'left':'300px','top':'100px'},
        useTransition:false,
    });

    createAnimation({
        target:'#ani2',
        keyFrame:{'left':'700px','top':'150px'},
        duration:3000,
        delay:5000,
        useTransition:false,
    });

    createAnimation({
        target:'#ani3',
        keyFrame:[
            {'left':'0px','top':'0px',percent:0},
            {'left':'200px','top':'0px',percent:25},
            {'left':'200px','top':'120px',percent:50},
            {'left':'0px','top':'120px',percent:75},
            {'left':'0px','top':'0px',percent:100}
        ],
        duration:3000,
        useTransition:false,
        delay:8000,

    });

    createAnimation({
        target:'#ani4',
        keyFrame:{'left':'+=300px','top':'-=100px'},
        duration:3000,
        delay:11000,
        useTransition:false,

    });


}

