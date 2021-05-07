import { _Global, _TJS } from './global.js';
import *as THREE from '../../node_modules/three/build/three.module.js';



function Scene2() {
    // var urls2 = [
    //     './three/resources/textures/BG/px.png',
    //     './three/resources/textures/BG/nx.png',
    //     './three/resources/textures/BG/py.png',
    //     './three/resources/textures/BG/ny.png',
    //     './three/resources/textures/BG/pz.png',
    //     './three/resources/textures/BG/nz.png',
    // ]
    // // console.log(urls);
    // var cubeMaps = new THREE.CubeTextureLoader().load(urls2);
    console.log(_TJS.scene.background, "场景1背景");
    _TJS.scene2 = new THREE.Scene();
    _TJS.scene2.background = _TJS.scene.background;
}





function scene2light() {
    var ambLight = new THREE.AmbientLight(0xFFFDF5, 0.0);
    _TJS.scene2.add(ambLight);

    var light = new THREE.HemisphereLight(0x444444, 0xFFFDF5, 1.0);
    light.position.set(0, 1, 0);
    // light.castShadow = lightshadowopen;
    // _TJS.scene.add(light);////////////////厂房内部灯

    // var lighthelper = new THREE.HemisphereLightHelper(light);
    // _TJS.scene.add(lighthelper);

    var light2 = new THREE.DirectionalLight(0xF5F2E9, 1);//0.25
    light2.position.set(3000, 1000, -3000);//-1600, 500, 1200
    light2.scale.set(100, 100, 100);
    // light2.castShadow = lightshadowopen;
    _TJS.scene2.add(light2);

    // var light2helper = new THREE.DirectionalLightHelper(light2);
    // // _TJS.scene.add(light2helper);


    var light3 = new THREE.DirectionalLight(0xF5F2E9, 0.8);//0.2
    light3.position.set(-3000, 1000, -2000);//-1600, 500, 1200
    light3.scale.set(100, 100, 100);
    // light3.castShadow = lightshadowopen;
    _TJS.scene2.add(light3);

    var light3helper = new THREE.DirectionalLightHelper(light3);
    // _TJS.scene.add(light3helper);


    var light4 = new THREE.DirectionalLight(0xF5F2E9, 0.4);//0.1
    light4.position.set(-2000, 2000, 5000);//-1600, 500, 1200
    light4.scale.set(100, 100, 100);
    // light4.castShadow = lightshadowopen;
    _TJS.scene2.add(light4);

    var light4helper = new THREE.DirectionalLightHelper(light4);
    // _TJS.scene.add(light4helper);

    var light5 = new THREE.DirectionalLight(0xF5F2E9, 0.8);//0.2
    light5.position.set(0, 5000, 0);//-1600, 500, 1200
    light5.scale.set(100, 100, 100);
    // light5.castShadow = lightshadowopen;
    _TJS.scene2.add(light5);

}


////////////////////默认场景/////////////////////////
function ChooseScene() {
    _Global.sceneChangeNum = "scene";//默认场景
}



function ChangeScene() {
    if (_Global.sceneChangeNum == "scene") {
        _Global.sceneChangeNum = "scene2";
    }
    else if (_Global.sceneChangeNum == "scene2") {
        _Global.sceneChangeNum = "scene";
    }

}

export { Scene2, scene2light, ChangeScene, ChooseScene }