import { Clock } from '../../node_modules/three/build/three.module.js';
import { WEBGL } from '../../node_modules/three/examples/jsm/WebGL.js';
import { init } from './init.js';
import event_Mg from './eventMgr.js';
import load_Mgr from '../LoadObject/loadMgr.js';
import { _Global, _TJS } from './global.js';
import { intersectObjects, cleanintersected, controllerL, controllerR } from './VRGUI.js';
import { TWEEN } from '../../node_modules/three/examples/jsm/libs/tween.module.min.js';


if (WEBGL.isWebGLAvailable() === false) { //检测浏览器是否支持webgl
    document.body.appendChild(WEBGL.getWebGLErrorMessage());
};

var clock = new Clock();
function animate() {
    _TJS.renderer.setAnimationLoop(renderSC);

    // _TJS.renderer.setAnimationLoop(function(){
    // _TJS.renderer.render(_TJS.scene,_TJS.camera);
    // });
    // console.log(_TJS.camera.position,"相机位置");

}
function renderSC() {


    _TJS.stats.update();
    var delta = clock.getDelta();
    _TJS.renderer.clear();
    _TJS.orbitControls.update();
    cleanintersected();
    intersectObjects(controllerL);
    intersectObjects(controllerR);
    /////////////////手柄///////////////////////
    // if()
    // XRline();


    // requestAnimationFrame(animate);
    // _TJS.renderer.setAnimationLoop(function(){
    //     _TJS.renderer.render(_TJS.scene,_TJS.camera);
    // })
    if (_Global.enterVR == 0) {

        // if (_Global.sceneChangeNum == "scene") {
        _TJS.renderer.render(_TJS.scene, _TJS.camera);//执行渲染操作(不加后期通道)
        // }
        // _Global.zhanban.lookAt(_TJS.camera.position);
     
        // else if (_Global.sceneChangeNum == "scene2") {
        //     _TJS.renderer.render(_TJS.scene2, _TJS.camera);//执行渲染操作(不加后期通道)
        // }
    }
    if (_Global.enterVR == 1) {
        // _TJS.renderer.render(_TJS.scene, _TJS.VRcamera);
        // if (_Global.sceneChangeNum == "scene") {
        _TJS.renderer.render(_TJS.scene, _TJS.VRcamera);


        // }

    }
    TWEEN.update();
    // requestAnimationFrame(renderSC);
    // console.log(_TJS.scene.children);
    // renderer.setViewport();
    // _TJS.composer.render(delta);//执行渲染操作（加后期通道）
    // TWEEN.update();
}
function Rendering() {

    event_Mg.init();
    load_Mgr.init();
    init();
    //开启事件监听
    animate();
    // renderSC();//循环渲染
}
// console.log("xuanran");
// Rendering();
export { Rendering };