

declare module "changlin-animate" {

    export function createAnimation(config: createConfig|createConfig2): animation

    interface createConfig {
        target: string | object ;
        keyFrame: onekeyFrame | keyFrames[];
        startTime?: number | object;
        duration?:number;
        delay?:number;
        autoUpDate?: boolean;
        type?: string;
        loop?: boolean|number;
        useTransition:false;
        easing?:(progress: number, startValue: number, distance: number)=> number;
        onComplete?(): void;
        onStart?(): void;
    }

    interface createConfig2 {
        target: string | object ;
        keyFrame: onekeyFrame;
        startTime?: number | object;
        duration?:number;
        delay?:number;
        autoUpDate: true;
        type?: string;
        loop?: boolean|number;
        useTransition?:true;
        easing?:string;
        onComplete?(): void;
        onStart?(): void;
    }


    interface animation {
        start(): this;

        stop(): this;

        upDate(): this;
        state:number;
    }

    interface onekeyFrame {
        [key: string]: number | string;
    }


    interface keyFrames {
        percent: number;

        [key: string]: number | string;
    }

    export const ransitionTimingFunction:{
        linear:string;
        ease:string;
        easeIn:string;
        easeInOut:string;
        easeOut:string;
    }

    export const easing:object

}