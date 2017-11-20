

declare module "changlin-animate" {

    export function createAnimation(config: createConfig): animation

    interface createConfig {
        target: string | object ;
        keyFrame: onekeyFrame | keyFrames[];
        startTime?: number | object;
        duration?:number;
        delay?:number;
        autoUpDate?: boolean;
        type?: string;
        loop?: boolean|number;

        easing?(progress: number, startValue: number, distance: number): number;

        onComplete?(): void;
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

}