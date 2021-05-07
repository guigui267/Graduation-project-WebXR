import { _TJS } from './global.js';
// import *as THREE from '../build/three.module.js';
console.log("===================tjs=======================")
console.log(_TJS);
let camerapos = ()=>{
    console.log(_TJS.camera.position,"当前相机位置");
    // console.log(_TJS.camera.position);
}
// function camerapos(){
//     console.log(_TJS);
// }
// camerapos()
export {camerapos};