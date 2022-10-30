//继承一个接口
// interface Alarm {
//     alert(): void;
// }

// class Door {
// }

// class SecurityDoor extends Door implements Alarm {
//     alert() {
//         console.log('SecurityDoor alert');
//     }
// }

// class Car implements Alarm {
//     alert() {
//         console.log('Car alert');
//     }
// }

//继承多个接口
// interface Alarm {
//     alert(): void;
// }

// interface Light {
//     lightOn(): void;
//     lightOff(): void;
// }

// class Car implements Alarm, Light {
//     alert() {
//         console.log('Car alert');
//     }
//     lightOn() {
//         console.log('Car light on');
//     }
//     lightOff() {
//         console.log('Car light off');
//     }
// }

//接口继承接口
interface Alarm {
    alert(): void;
}

interface LightableAlarm extends Alarm {
    lightOn(): void;
    lightOff(): void;
}