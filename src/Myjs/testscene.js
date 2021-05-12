import { _Global, _TJS } from './global.js';
import { KBupdate } from './controlpanel.js';
// import *as THREE from '../build/three.module.js';
console.log("===================tjs=======================")
console.log(_TJS);
let camerapos = () => {
    console.log(_TJS.camera.position, "当前相机位置");
    console.log(_TJS.orbitControls, "kongzhiq");
    // _Global.canvased.clearReact();
    // _Global.neirong = "当前相机位置";

    KBupdate("当前相机位置");
    // _Global.canvased.restore();
    // _Global.kanbanmap.map=
    setTimeout(function () {
        // _Global.neirong = "当前事件执行完成";
        KBupdate("当前事件执行完成")

    }, 1000);
    // console.log(_TJS.camera.position);
}
// function camerapos(){
//     console.log(_TJS);
// }
// camerapos()
export { camerapos };