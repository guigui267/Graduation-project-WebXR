import *as THREE from '../../node_modules/three/build/three.module.js';
import Stats from '../../node_modules/three/examples/jsm/libs/stats.module.js';
import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls.js';
import { _TJS, _Global } from './global.js';
import { VRButton } from '../../node_modules/three/examples/jsm/webxr/VRButton.js';
import event_Mg from './eventMgr.js';
import { XRcontrol } from './VRGUI.js';
// import { Scene2, scene2light, ChooseScene } from './scene2.js';
import { JTSG } from './M8JT.js';

// var project = new THREE.Projector();
function init() {

    initStats();

    initRender();

    document.getElementById("webgl").appendChild(_TJS.renderer.domElement);
    document.getElementById("webgl").appendChild(VRButton.createButton(_TJS.renderer));
    initScene();
    // ChooseScene();
    // Scene2();

    Camera();
    // VRcamera();
    JTSG();
    initLight();
    // scene2light();
    OrbitControl();

    Axes();
    MR();///////////////////////////场景默认值/////////////////////////////////
    WG_Ground();
    // KB();//数据看板
    // OutlinePass();
    console.log(_TJS.scene.children);
    // Rendering();

    XRcontrol();
    // console.log(_Global.KZTtz,"ssss");
    console.log(_TJS.camera.position, "Newcamera");
    window.addEventListener('resize', event_Mg.WindowResize);
    // console.log(_Global.linectro,"线段控制");
};

////////////////场景默认值////////////////////
function MR() {

    _Global.opendoor = false;


}






/////////////初始化渲染器///////////////////
function initRender() {
    _TJS.renderer = new THREE.WebGLRenderer({ antialias: true });
    // _TJS.renderer.setClearColor(new THREE.Color("#fff"));
    _TJS.renderer.setPixelRatio(window.devicePixelRatio);
    _TJS.renderer.setSize(window.innerWidth, window.innerHeight);
    _TJS.renderer.xr.enabled = true;


}

///////////////////初始化场景////////////////////////
function initScene() {
    var urls = [
        './src/resources/textures/BG/px.png',
        './src/resources/textures/BG/nx.png',
        './src/resources/textures/BG/py.png',
        './src/resources/textures/BG/ny.png',
        './src/resources/textures/BG/pz.png',
        './src/resources/textures/BG/nz.png',
    ]
    // console.log(urls);
    var cubeMap = new THREE.CubeTextureLoader().load(urls);
    _TJS.scene = new THREE.Scene();
    _TJS.scene.background = cubeMap;
}

///////////////////初始化相机/////////////////////////////
function Camera() {
    _TJS.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100000);
    _TJS.camera.position.set(83, 46, -101);
    // _TJS.camera.lookAt(10000, 10, 10);
}

//////////////////////初始化控件对象////////////////////
function OrbitControl() {
    _TJS.orbitControls = new OrbitControls(_TJS.camera, _TJS.renderer.domElement);
}
////////////////////////////帧率显示////////////////////////////

function initStats(type) {
    var panelType = (typeof type !== 'undefined' && type) && (!isNaN(type)) ? parseInt(type) : 0;
    _TJS.stats = new Stats();
    _TJS.stats.showPanel(panelType);//0:fps,1:ms,2:mb,3+:custom
    document.body.appendChild(_TJS.stats.dom);
    return _TJS.stats;
}

////////////////////////初始化灯光//////////////////////

var lightshadowopen = true;/////////一键控制灯光开关/////////

function initLight() {
    var ambLight = new THREE.AmbientLight(0xFFFDF5, 0.0);
    _TJS.scene.add(ambLight);

    var light = new THREE.HemisphereLight(0x444444, 0xFFFDF5, 1.0);
    light.position.set(0, 1, 0);
    light.castShadow = lightshadowopen;
    // _TJS.scene.add(light);////////////////厂房内部灯

    var lighthelper = new THREE.HemisphereLightHelper(light);
    // _TJS.scene.add(lighthelper);

    var light2 = new THREE.DirectionalLight(0xF5F2E9, 1);//0.25
    light2.position.set(3000, 1000, -3000);//-1600, 500, 1200
    light2.scale.set(100, 100, 100);
    light2.castShadow = lightshadowopen;
    _TJS.scene.add(light2);

    var light2helper = new THREE.DirectionalLightHelper(light2);
    // _TJS.scene.add(light2helper);


    var light3 = new THREE.DirectionalLight(0xF5F2E9, 0.8);//0.2
    light3.position.set(-3000, 1000, -2000);//-1600, 500, 1200
    light3.scale.set(100, 100, 100);
    light3.castShadow = lightshadowopen;
    _TJS.scene.add(light3);

    var light3helper = new THREE.DirectionalLightHelper(light3);
    // _TJS.scene.add(light3helper);


    var light4 = new THREE.DirectionalLight(0xF5F2E9, 0.4);//0.1
    light4.position.set(-2000, 2000, 5000);//-1600, 500, 1200
    light4.scale.set(100, 100, 100);
    light4.castShadow = lightshadowopen;
    _TJS.scene.add(light4);

    var light4helper = new THREE.DirectionalLightHelper(light4);
    // _TJS.scene.add(light4helper);

    var light5 = new THREE.DirectionalLight(0xF5F2E9, 0.8);//0.2
    light5.position.set(0, 5000, 0);//-1600, 500, 1200
    light5.scale.set(100, 100, 100);
    light5.castShadow = lightshadowopen;
    _TJS.scene.add(light5);

    var light5helper = new THREE.DirectionalLightHelper(light5);
    // _TJS.scene.add(light5helper);

    // var pointlight = new THREE.PointLight("#fff");//点光源10, 120,0.1
    // pointlight.position.set(10, 100, 10);
    // _TJS.scene.add(pointlight);

}

///////////////////////////辅助线//////////////////////////
function Axes() {
    var axes = new THREE.AxesHelper(50);
    _TJS.scene.add(axes);
}
////////////////////////地面网格///////////////////////////////////
function WG_Ground() {
    var planeGeometry = new THREE.PlaneGeometry(400, 400);
    var planeMaterial = new THREE.MeshStandardMaterial({
        side: THREE.DoubleSide,
        map: new THREE.TextureLoader().load('./src/resources/textures/Grid.png', function (map) {
            map.wrapT = map.wrapS = THREE.RepeatWrapping;
            map.repeat.set(80, 80)
        }),
        transparent: true,
        opacity: 1,
        // color: "#fff",
    });

    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI;
    // plane.scale.set(40, 40, 40);
    plane.receiveShadow = true;
    _TJS.scene.add(plane);
    plane.name = "地面";
    // _TJS.scene2.add(plane.clone());

}



export { init };