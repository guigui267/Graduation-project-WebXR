import *as THREE from '../../node_modules/three/build/three.module.js';

import load_Mgr from './loadMgr.js';
import { _TJS, _Global } from '../Myjs/global.js';
import { FBXLoader } from '../../node_modules/three/examples/jsm/loaders/FBXLoader.js';
import { group, objects } from '../Myjs/VRGUI.js';
import { clonemod } from '../Myjs/clonemod.js';
import { T1_4pos, M3_3pos, M1_4pos, TC500pos, VMC850pos } from '../Myjs/modelpos_rot.js';


// import '../examples/js/libs/fflate.min.js';

// _Global.controlline = function () {
//     var geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, - 1)]);

//     var line = new THREE.Line(geometry);
//     line.name = 'line';
//     line.scale.z = 5;
//     _Global.linectro=line;
//     console.log(_Global.linectro,"线段控制");
//     load_Mgr.loaded();
// }





////////////////创建加载器////////////////////////////

var loader = new FBXLoader();
var textureloader = new THREE.TextureLoader();
///////////////////////模型阴影开关/////////////////////////////
var modelcastshadow = true;
var modelreceiveshadow = true;



////////////////////////////创建草地///////////////////////////////////
_Global.grass = function () {

    var grassMat = new THREE.MeshStandardMaterial({
        side: THREE.DoubleSide,
        map: textureloader.load('./src/resources/textures/plane/grasslight-big.jpg', function (map) {
            map.wrapT = map.wrapS = THREE.RepeatWrapping;
            map.repeat.set(20, 20)
        }),
        normalMap: textureloader.load('./src/resources/textures/plane/grasslight-big-nm.jpg', function (map) {
            map.wrapT = map.wrapS = THREE.RepeatWrapping;
            map.repeat.set(20, 20)
        }),
        // transparent: true,
        // opacity: 1,
        // color: "#fff",

    });

    loader.load('./src/resources/models/grass.fbx', function (object) {
        object.traverse(function (child) {
            if (child.isMesh) {
                child.material = grassMat;
            }
        })
        _TJS.scene.add(object);


    })
    load_Mgr.loaded();
}


///////////////////////厂房模型//////////////////////////////////////
_Global.CF = function () {

    let roof_tex = textureloader.load('./src/resources/textures/CF/GL_HYTJD.jpg', function (map) {
        map.wrapS = map.wrapT = THREE.RepeatWrapping;
        map.repeat.set(20, 40);
    });


    let neiqiang_tex = textureloader.load('./src/resources/textures/CF/gggg.png', function (map) {
        map.wrapS = map.wrapT = THREE.RepeatWrapping;
        map.repeat.set(40, 40);
    });


    let qiang_tex1 = textureloader.load('./src/resources/textures/CF/gggg.png', function (map) {
        map.wrapS = map.wrapT = THREE.RepeatWrapping;
        map.repeat.set(40, 40);
    });

    let qiang_tex2 = textureloader.load('./src/resources/textures/CF/qiangmian.jpg', function (map) {
        map.wrapS = map.wrapT = THREE.RepeatWrapping;
        map.repeat.set(20, 40);
    });



    let qiang_nor2 = textureloader.load('./src/resources/textures/CF/qiangmiannor.png', function (map) {
        map.wrapS = map.wrapT = THREE.RepeatWrapping;
        map.repeat.set(20, 40);
    });

    let door_tex2 = textureloader.load('./src/resources/textures/CF/KBS.png');





    let roof_mat = new THREE.MeshStandardMaterial({
        color: "#0080c0",
        normalMap: roof_tex,
        side: THREE.DoubleSide,
        metalness: 0.0,
        roughness: 0.5,
    })
    let qiang_mat = new THREE.MeshStandardMaterial({
        // color: "#0080c0",
        map: qiang_tex1,
        // normalMap: qiang_nor1,
        side: THREE.DoubleSide,
        metalness: 0.0,
        roughness: 0.5,
    })

    let qiang_mat1 = new THREE.MeshStandardMaterial({
        // color: "#0080c0",
        map: qiang_tex2,
        normalMap: qiang_nor2,
        side: THREE.DoubleSide,
        metalness: 0.0,
        roughness: 0.5,
    })

    let door_mat = new THREE.MeshStandardMaterial({
        color: "#c0c0c0",
        // map: door_tex2,
        // normalMap: roof_tex,
        side: THREE.DoubleSide,
        metalness: 0.2,
        roughness: 0.5,
    })



    let neiqiang_mat = new THREE.MeshStandardMaterial({
        // color: "#0080c0",
        map: neiqiang_tex,
        // normalMap: roof_tex,
        side: THREE.DoubleSide,
        metalness: 0.0,
        roughness: 0.5,
    })


    let Boli_mat = new THREE.MeshStandardMaterial({
        color: "#0080c0",
        // map: door_tex2,
        // normalMap: roof_tex,
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide,
        metalness: 0.0,
        roughness: 0.5,
    })



    loader.load('./src/resources/models/CF.fbx', function (object) {
        object.traverse(function (child) {
            if (child.isMesh) {
                if (child.name.indexOf("door") > -1) {
                    // child.material = CFdoor_mat;
                    child.material = door_mat;
                    // child.material=Boli_mat;
                }
                else if (child.name == "qiang7" || child.name == "qiang6") {
                    child.material[1] = qiang_mat;
                    child.material[0] = qiang_mat1;
                }
                else if (child.name == "qiang" || child.name == "qiang5") {
                    child.material[0] = qiang_mat;
                    child.material[1] = qiang_mat1;
                }
                else if (child.name == "ss8" || child.name == "ss9") {
                    child.material = qiang_mat;
                }
                else if (child.name == "ss4") {
                    child.material = roof_mat;
                    // console.log(child, "顶");
                }
                else if (child.name == "Boli") {
                    child.material = Boli_mat;
                }
                else {
                    child.material = neiqiang_mat;
                }


            }
        })
        console.log(object, "房子");
        object.castShadow = modelcastshadow;
        object.receiveShadow = modelreceiveshadow;
        _TJS.scene.add(object);
        _Global.CFDOOR = object;
    })
    load_Mgr.loaded();
}





////////////////////////厂房地面//////////////////
_Global.plane = function () {
    let mat = new THREE.MeshStandardMaterial({

        color: "#afafaf",
        map: textureloader.load('./src/resources/textures/DM/地面.jpg', function (map) {
            map.wrapS = map.wrapT = map.RepeatWrapping;
            map.repeat.set(40, 40);
        }),
        side: THREE.DoubleSide,
        metalness: 0,
        roughness: 0.6,
    })





    let mat1 = new THREE.MeshStandardMaterial({

        color: "#008040",
        // normalMap: qiang_nor1,
        map: textureloader.load('./src/resources/textures/DM/地面2.jpg', function (map) {
            map.wrapS = map.wrapT = map.RepeatWrapping;
            map.repeat.set(40, 40);
        }),
        side: THREE.DoubleSide,
        metalness: 0,
        roughness: 0.6,
    })


    let mat2 = new THREE.MeshStandardMaterial({

        color: "#ff8040",
        // normalMap: qiang_nor1,
        map: textureloader.load('./src/resources/textures/DM/地面2.jpg', function (map) {
            map.wrapS = map.wrapT = map.RepeatWrapping;
            map.repeat.set(40, 40);
        }),
        side: THREE.DoubleSide,
        metalness: 0,
        roughness: 0.6,
    })
    let mat3 = new THREE.MeshStandardMaterial({

        color: "#804000",
        // normalMap: qiang_nor1,
        map: textureloader.load('./src/resources/textures/DM/地面2.jpg', function (map) {
            map.wrapS = map.wrapT = map.RepeatWrapping;
            map.repeat.set(40, 40);
        }),
        side: THREE.DoubleSide,
        metalness: 0,
        roughness: 0.6,
    })

    let mat4 = new THREE.MeshStandardMaterial({

        color: "#0080c0",
        // normalMap: qiang_nor1,
        map: textureloader.load('./src/resources/textures/DM/地面2.jpg', function (map) {
            map.wrapS = map.wrapT = map.RepeatWrapping;
            map.repeat.set(40, 40);
        }),
        side: THREE.DoubleSide,
        metalness: 0,
        roughness: 0.6,
    })





    loader.load('./src/resources/models/DM.fbx', function (object) {
        object.traverse(function (child) {
            if (child.isMesh) {
                // child.material = mat;
                child.material[1] = mat;
                child.material[0] = mat3;
                child.material[2] = mat2;
                child.material[3] = mat4;
                child.material[4] = mat1;
            }
        })
        object.castShadow = modelcastshadow;
        object.receiveShadow = modelreceiveshadow;
        _TJS.scene.add(object);
        console.log(object, "地面");

    })
    load_Mgr.loaded();
}



//////////////////////////创建工厂灯///////////////////////

_Global.GC_light = function () {



    let light_mat = new THREE.MeshStandardMaterial({
        color: "#ffff00",
        side: THREE.DoubleSide,
        transparent: true,
        metalness: 0.0,
        roughness: 0.4
    })

    // let spotLight = new THREE.SpotLight(0xffffff, 1);
    // // spotLight.position.set(0, 50, 0);


    // spotLight.castShadow = true;
    // spotLight.distance = 40;
    // spotLight.shadow.mapSize.width = 128;
    // spotLight.shadow.mapSize.height = 128;
    // spotLight.angle = 0.7;
    // spotLight.shadow.camera.near = 5;
    // spotLight.shadow.camera.far = 400;
    // spotLight.shadow.camera.fov = 30;
    // spotLight.penumbra = 0.5;


    // var spotLightHelper = new THREE.SpotLightHelper(spotLight);
    // _TJS.scene.push(spotLightHelper);

    loader.load('./src/resources/models/spotlightQiu.fbx', function (object) {
        object.traverse(function (child) {
            if (child.isMesh) {
                child.material = light_mat;
            }
        })
        _TJS.scene.add(object);
        object.position.y = 2;
        console.log(object, "qidong");

        // let targets = object.clone();
        // targets.position.y = -20;
        // spotLight.target = targets.children[0];
        // spotLight.position.set(object.children[0].position.x, object.children[0].position.y - 0.5, object.children[0].position.z);
        // _TJS.scene.add(spotLight);
        // object.add(spotLightHelper);
        // _TJS.scene.add(targets);
        // targets.visible = false;

        // GC_lightClone(targets, object, spotLight);

    })
    load_Mgr.loaded();
}
/////////////////////垃圾处理、危险品处理////////////////////
_Global.LJCL = function () {


    let las_tex = textureloader.load('./src/resources/textures/CF/gggg.png', function (map) {
        map.wrapS = map.wrapT = THREE.RepeatWrapping;
        map.repeat.set(40, 40);
    });

    let mat = new THREE.MeshStandardMaterial({
        // color: "#00ffff",
        map: las_tex,
        side: THREE.DoubleSide,
        metalness: 0.1,
        roughness: 0.5
    })

    loader.load('./src/resources/models/CLJ.fbx', function (object) {
        object.traverse(function (child) {
            if (child.isMesh) {
                child.material = mat;
            }
        })
        _TJS.scene.add(object);
        _Global.CLJ = object;
    })
}




//////////////////////////模型//////////////////////////////

_Global.load_M8 = function () {
    // console.log("ssssd");

    let baimeta = new THREE.MeshStandardMaterial({
        color: "#fff",
        side: THREE.DoubleSide,
        metalness: 0.3,
        roughness: 0.4
    })
    let huimeta = new THREE.MeshStandardMaterial({
        color: "#565656",
        side: THREE.DoubleSide,
        metalness: 0.3,
        roughness: 0.4
    })


    let heimeta = new THREE.MeshStandardMaterial({
        color: "#000000",
        side: THREE.DoubleSide,
        metalness: 0.3,
        roughness: 0.4
    })


    loader.load('./src/resources/models/robotman.fbx',
        function (object) {
            // console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

            object.traverse(function (child) {
                if (child.isMesh) {
                    child.catch = true;
                    // var geometry = child.geometry;
                    // geometry.addAttribute('uv2', new THREE.BufferAttribute(geometry.attributes.uv.array, 2));

                    group.children.push(child);
                    if (child.name == "toe") {
                        child.material[0] = huimeta;
                        child.material[1] = heimeta;
                    } else {
                        child.material = baimeta;
                    }

                }
            })

            _TJS.scene.add(object);
            // group.add(object);
            object.position.set(-6.037, 5.98, -35.181);

            _Global.M8JT = object;

            let M8mod = object.clone();
            M8mod.position.set(-1.274, 5.98, 46.255);
            _TJS.scene.add(M8mod);
            // _Global.M8mod = object;
            object.castShadow = true;
            object.receiveShadow = true;
            // console.log(object.position, "xingxinghxinh");

        })

    load_Mgr.loaded();
}


// _Global.Mod8_scene2 = function () {
//     let M8lone = _Global.M8mod.clone();
//     _TJS.scene2.add(M8lone);
//     load_Mgr.loaded();
// }



_Global.load_M1_4 = function () {
    let carpaint_tex = textureloader.load('./src/resources/textures/car/T_RS3_BaseColor.png');
    let carpaint_nor = textureloader.load('./src/resources/textures/car/T_RS3_Normal.png');
    let carpaint_mat = textureloader.load('./src/resources/textures/car/T_RS3_OcRouMet.png');

    let In_tex = textureloader.load('./src/resources/textures/car/T_RS3_BaseColor_1.png');
    let In_nor = textureloader.load('./src/resources/textures/car/T_RS3_Normal_3.png');
    let In_mat = textureloader.load('./src/resources/textures/car/T_RS3_OcRouMet_2.png');

    let Tire_tex = textureloader.load('./src/resources/textures/car/T_RS3_BaseColor_5.png');
    let Tire_nor = textureloader.load('./src/resources/textures/car/T_RS3_Normal_7.png');
    let Tire_mat = textureloader.load('./src/resources/textures/car/T_RS3_OcRouMet_6.png');





    let mat1 = new THREE.MeshStandardMaterial({
        map: carpaint_tex,
        normalMap: carpaint_nor,
        side: THREE.DoubleSide,
        roughness: 0.4,
        metalnessMap: carpaint_mat,

    })

    let mat2 = new THREE.MeshStandardMaterial({
        map: In_tex,
        normalMap: In_nor,
        side: THREE.DoubleSide,
        roughness: 0.4,
        metalnessMap: In_mat,

    })


    let mat3 = new THREE.MeshStandardMaterial({
        map: Tire_tex,
        normalMap: Tire_nor,
        side: THREE.DoubleSide,
        roughness: 0.4,
        metalnessMap: Tire_mat,

    })


    let glass_mat = new THREE.MeshStandardMaterial({
        color: "#008080",
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.4,
        metalness: 0.3,
        roughness: 0.5
    })



    loader.load('./src/resources/models/show/Car.fbx', function (object) {
        object.traverse(function (child) {
            if (child.isMesh) {
                if (child.name == "win_l") {
                    child.material[0] = glass_mat;
                    child.material[1] = mat1;
                    child.material[2] = mat2;
                    child.material[3] = mat3;

                }
            }
        })
        _TJS.scene.add(object);
        // console.log(object, "小汽车");
        object.castShadow = modelcastshadow;
        object.receiveShadow = modelreceiveshadow;
        clonemod(M1_4pos, object);

    })
    load_Mgr.loaded();
}

_Global.load_M3_3 = function () {
    let Tex1 = textureloader.load('./src/resources/textures/Fplane/HeliconCorpBruteClassFrigateBeigeAlbedo.png');
    let Tex2 = textureloader.load('./src/resources/textures/Fplane/HeliconCorpStandardWeaponsAlbedo.png');

    let mat1 = new THREE.MeshStandardMaterial({
        map: Tex1,
        side: THREE.DoubleSide,
        metalness: 0.3,
        roughness: 0.5
    })

    let mat2 = new THREE.MeshStandardMaterial({
        map: Tex2,
        side: THREE.DoubleSide,
        metalness: 0.3,
        roughness: 0.5
    })


    loader.load('./src/resources/models/show/FChuan.fbx', function (object) {
        object.traverse(function (child) {
            if (child.isMesh) {
                if (child.name == "M11") {
                    child.material = mat2;
                } else if (child.name == "M12") {
                    child.material = mat1;
                }
            }
        })
        _TJS.scene.add(object);
        object.castShadow = modelcastshadow;
        object.receiveShadow = modelreceiveshadow;
        clonemod(M3_3pos, object);

    })
    load_Mgr.loaded();
}

_Global.load_T1_4 = function () {

    let C_tex = textureloader.load('./src/resources/textures/JC/Texture ToyotaPrado Albedo.png');
    let C_nor = textureloader.load('./src/resources/textures/JC/Texture ToyotaPrado Normals.png');
    let C_met = textureloader.load('./src/resources/textures/JC/Texture ToyotaPrado Metal.png');
    let C_emss = textureloader.load('./src/resources/textures/JC/Texture ToyotaPrado Emissive.png');

    let mats = new THREE.MeshStandardMaterial({
        map: C_tex,
        normalMap: C_nor,
        emssiveMap: C_emss,
        metalnessMap: C_met,
        roughness: 0.4
    })

    loader.load('./src/resources/models/show/JC.fbx', function (object) {
        object.traverse(function (child) {
            if (child.isMesh) {
                child.material = mats;
            }
        })
        _TJS.scene.add(object);
        object.castShadow = modelcastshadow;
        object.receiveShadow = modelreceiveshadow;

        clonemod(T1_4pos, object)
    })
    load_Mgr.loaded();
}



_Global.load_TC500 = function () {

    let a1_tex = textureloader.load('./src/resources/textures/pz/Body_Color.png');
    let a1_nor = textureloader.load('./src/resources/textures/pz/Body_Normal.png');
    let a1_emss = textureloader.load('./src/resources/textures/pz/Body_Emissive.png');
    let a1_meta = textureloader.load('./src/resources/textures/pz/Body_Metallic.png');
    let a1_rough = textureloader.load('./src/resources/textures/pz/Body_Roughness.png');


    let a2_tex = textureloader.load('./src/resources/textures/pz/Glass_Color.png');
    let a2_emss = textureloader.load('./src/resources/textures/pz/Glass_Emissive.png');
    let a2_rough = textureloader.load('./src/resources/textures/pz/Glass_Roughness.png');


    let a3_tex = textureloader.load('./src/resources/textures/pz/Leaf_Diffuse.png');
    // let a3_alpha = textureloader.load('./src/resources/textures/pz/Leaf_Alpha.jpg');
    let a3_nor = textureloader.load('./src/resources/textures/pz/Leaf_Normals.png');



    let mata1 = new THREE.MeshStandardMaterial({
        map: a1_tex,
        side: THREE.DoubleSide,
        normalMap: a1_nor,
        emssiveMap: a1_emss,
        metalnessMap: a1_meta,
        roughnessMap: a1_rough,
    })

    let mata2 = new THREE.MeshStandardMaterial({
        map: a2_tex,
        side: THREE.DoubleSide,
        // normalMap: a1_nor,
        transparent: true,

        emssiveMap: a2_emss,
        metalness: 0.1,
        roughnessMap: a2_rough,
    })

    let mata3 = new THREE.MeshStandardMaterial({
        map: a3_tex,
        side: THREE.DoubleSide,
        normalMap: a3_nor,
        // emssiveMap: a1_emss,
        // alphaMap: a3_alpha,
        transparent: true,
        metalness: 0,
        roughness: 0.4,
    })


    let dian_mat = new THREE.MeshStandardMaterial({
        color: "#0080c0",
        // emssive: "#00ffff",
        map: textureloader.load('./src/resources/textures/pz/Sprite.png'),
        transparent: true,
        metalness: 0,
        roughness: 0.5,
    })






    loader.load('./src/resources/models/show/PZ.fbx', function (object) {
        object.traverse(function (child) {
            if (child.isMesh) {
                if (child.name == "HydroUnit_02") {
                    child.material[0] = mata3;
                    child.material[1] = mata2;
                    child.material[2] = mata1;
                    child.material[3] = dian_mat;
                }
            }
        })
        _TJS.scene.add(object);
        // console.log(object, "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM");
        object.castShadow = modelcastshadow;
        object.receiveShadow = modelreceiveshadow;
        clonemod(TC500pos, object);

    })
    load_Mgr.loaded();
}




_Global.load_TC700 = function () {
    loader.load('./src/resources/models/equipment/TC700.fbx', function (object) {
        object.traverse(function (child) {
            if (child.isMesh) {

            }
        })
        _TJS.scene.add(object);
        object.castShadow = modelcastshadow;
        object.receiveShadow = modelreceiveshadow;

    })
    load_Mgr.loaded();
}

_Global.load_VMC850 = function () {

    let carpaint_tex = textureloader.load('./src/resources/textures/AE86/T_AE86_BaseColor.png');
    let carpaint_nor = textureloader.load('./src/resources/textures/AE86/T_AE86_Normal.png');
    let carpaint_mat = textureloader.load('./src/resources/textures/AE86/T_AE86_OcRouMet.png');

    let In_tex = textureloader.load('./src/resources/textures/AE86/T_AE86_BaseColor_5.png');
    let In_nor = textureloader.load('./src/resources/textures/AE86/T_AE86_Normal_7.png');
    let In_mat = textureloader.load('./src/resources/textures/AE86/T_AE86_OcRouMet_6.png');

    let Tire_tex = textureloader.load('./src/resources/textures/AE86/T_AE86_BaseColor_9.png');
    let Tire_nor = textureloader.load('./src/resources/textures/AE86/T_AE86_Normal_11.png');
    let Tire_mat = textureloader.load('./src/resources/textures/AE86/T_AE86_OcRouMet_10.png');


    let mats1 = new THREE.MeshStandardMaterial({
        map: carpaint_tex,
        side: THREE.DoubleSide,
        normalMap: carpaint_nor,
        metalnessMap: carpaint_mat,
        roughness: 0.5,
    })

    let mats2 = new THREE.MeshStandardMaterial({
        map: In_tex,
        side: THREE.DoubleSide,
        normalMap: In_nor,
        metalnessMap: In_mat,
        roughness: 0.5,
    })
    let mats3 = new THREE.MeshStandardMaterial({
        map: Tire_tex,
        side: THREE.DoubleSide,
        normalMap: Tire_nor,
        metalnessMap: Tire_mat,
        roughness: 0.5,
    })


    let matsglass = new THREE.MeshStandardMaterial({
        color: "#008080",
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.4,
        metalness: 0.3,
        roughness: 0.5,
    })


    loader.load('./src/resources/models/show/SM_AE86.fbx', function (object) {
        object.traverse(function (child) {
            if (child.isMesh) {
                if (child.name == "glass_l002") {
                    child.material[0] = matsglass;
                    child.material[1] = mats1;
                    child.material[2] = mats3;
                    child.material[3] = mats2;
                }
            }
        })
        _TJS.scene.add(object);
        // console.log(object, "xiaoqichesssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        object.castShadow = modelcastshadow;
        object.receiveShadow = modelreceiveshadow;
        clonemod(VMC850pos, object);

    })
    load_Mgr.loaded();
}




//////////////////////////////加载救援机器人//////////////////////////////////
_Global.SaveMod119 = function () {
    let n_mat1 = new THREE.MeshStandardMaterial({
        color: "#2f8059",
        side: THREE.DoubleSide,
        metalness: 0.0,
        roughness: 0.4

    })

    let n_mat2 = new THREE.MeshStandardMaterial({
        color: "#000000",
        side: THREE.DoubleSide,
        metalness: 0.0,
        roughness: 0.4

    })


    let n_mat3 = new THREE.MeshStandardMaterial({
        color: "#c5c5c5",
        side: THREE.DoubleSide,
        metalness: 0.0,
        roughness: 0.4

    })
    let n_mat4 = new THREE.MeshStandardMaterial({
        color: "#fff",
        side: THREE.DoubleSide,
        metalness: 0.3,
        roughness: 0.4

    })

    let n_mat5 = new THREE.MeshStandardMaterial({
        color: "#fff",
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
        metalness: 0.3,
        roughness: 0.4

    })

    loader.load('./src/resources/models/Robot119.fbx', function (object) {
        object.traverse(function (child) {
            if (child.isMesh) {
                if (child.name == "wheel1" || child.name == "wheel2") {
                    child.material = n_mat2;
                }
                else if (child.name == "TZ") {
                    child.material = n_mat1;
                }
                else if (child.name == "leg" || child.material == "raw") {
                    child.material = n_mat3;
                }
                else if (child.name == "rawg" || child.name == "legg") {
                    child.material = n_mat4;
                } else if (child.name == "qiu") {
                    child.material = n_mat5;
                }
            }
        })
        _TJS.scene.add(object);
        _Global.robot119 = object;
    })
    load_Mgr.loaded();
}

/////////////////////////煤气罐////////////////////////
_Global.MQG = function () {
    let mat1 = new THREE.MeshStandardMaterial({
        map: new THREE.TextureLoader().load('./src/resources/textures/MQG/hui.jpg', function (map) { map.wrapS = map.wrapT = THREE.RepeatWrapping; }),
        normalMap: new THREE.TextureLoader().load('./src/resources/textures/MQG/nor.jpg', function (map) { map.wrapS = map.wrapT = THREE.RepeatWrapping; }),
        side: THREE.DoubleSide,
        metalness: 0.2,
        roughness: 0.4,
    })
    let mat2 = new THREE.MeshStandardMaterial({
        map: new THREE.TextureLoader().load('./src/resources/textures/MQG/JIN.jpg', function (map) { map.wrapS = map.wrapT = THREE.RepeatWrapping; }),
        side: THREE.DoubleSide,
        metalness: 0.2,
        roughness: 0.4,
    })
    loader.load('./src/resources/models/MQGMod.fbx', function (object) {
        object.traverse(function (child) {
            if (child.isMesh) {
                if (child.name.indexOf("M") > -1) {
                    child.material = mat1;
                } else if (child.name.indexOf("T") > -1) {
                    child.material = mat2;
                }
            }
        })
        _TJS.scene.add(object);
        _Global.MQGMod = object;
        // console.log(object, "meiqiguan.......................................");
    })
    load_Mgr.loaded();

}


/////////////////////////////////////加载看板///////////////////////

// _Global.introduceKB = function () {


//     let mat1 = new THREE.MeshStandardMaterial({
//         // color: "#0080ff",
//         map: new THREE.TextureLoader().load('./src/resources/textures/KB/KBS.png'),
//         side: THREE.DoubleSide,
//         transparent: true,
//         metalness: 0.3,
//         roughness: 0.4
//     })
// KBcreate();

//     let KBGeo = new THREE.PlaneGeometry(10, 10, 1);
//     let KB = new THREE.Mesh(KBGeo, mat1);

//     // loader.load('./src/resources/models/KB.fbx', function (object) {
//     //     object.traverse(function (child) {
//     //         if (child.isMesh) {
//     //             if (child.name == "M3_3KB") {
//     //                 // KBcreate(child, M3_3pos);
//     //                 child.material = mat1;
//     //             } else if (child.name == "TC700KB") {
//     //                 child.material = mat1;
//     //             } else if (child.name == "M8KB") {
//     //                 child.material = mat1;
//     //             } else if (child.name == "VMC850KB") {
//     //                 child.material = mat1;
//     //             } else if (child.name == "M1_4KB") {
//     //                 child.material = mat1;
//     //             } else if (child.name == "T1_4KB") {
//     //                 child.material = mat1;
//     //             }

//     //         }
//     //     })
//     // _TJS.scene.add(object);
//     console.log(_TJS,"站台。。。。。。。。。。。。。。。。。。。。。。。。。。。。");
//     // _TJS.scene.add(KB);
//     // console.log(object, "kanban");
//     // _Global.zhanban = object;

//     // })
//     load_Mgr.loaded();
// }

////////////////////////////加载起飞台//////////////
_Global.Qifei = function () {


    let mat1 = new THREE.MeshStandardMaterial({
        // color: "#0080ff",
        map: textureloader.load('./src/resources/textures/QFT/Base_Color.png'),
        emssiveMap: textureloader.load('./src/resources/textures/QFT/base_Emissive.png'),
        metalnessMap: textureloader.load('./src/resources/textures/QFT/base_Metallic.png'),
        aoMap: textureloader.load('./src/resources/textures/QFT/base_Mixed_AO.png'),
        normalMap: textureloader.load('./src/resources/textures/QFT/base_Normal_OpenGL.png'),
        roughnessMap: textureloader.load('./src/resources/textures/QFT/base_Roughness.png'),
    })


    loader.load('./src/resources/models/QFT.FBX', function (object) {
        object.traverse(function (child) {
            if (child.isMesh) {
                var geometry = child.geometry;
                geometry.addAttribute('uv2', new THREE.BufferAttribute(geometry.attributes.uv.array, 2));
                if (child.name == "base") {
                    child.material = mat1;
                }


            }
        })
        _TJS.scene.add(object);

    })
    load_Mgr.loaded();
}


_Global.Zhisheng = function () {

    let mat1 = new THREE.MeshStandardMaterial({
        // color:"#00ffff",
        map: textureloader.load('./src/resources/textures/airplanetexture/AS360_Diffuse_Map.png'),
        aoMap: textureloader.load('./src/resources/textures/airplanetexture/AS360_Bump_Map.jpg'),
        side: THREE.DoubleSide,
        transparent: true,
        // opacity: 0,
        roughness: 0.4,
        metalness: 0.2
    })

    let light_mat = new THREE.MeshStandardMaterial({
        color: "#c6c6c6",
        // map: textureloader.load('./src/resources/textures/airplanetexture/AS360_Diffuse_Map.jpg'),
        // aoMap: textureloader.load('./src/resources/textures/airplanetexture/AS360_Bump_Map.jpg'),
        side: THREE.DoubleSide,
        transparent: true,
        roughness: 0.4,
        metalness: 0.2
    })



    loader.load('./src/resources/models/show/airplanes.fbx', function (object) {
        object.traverse(function (child) {
            if (child.isMesh) {
                var geometry = child.geometry;
                geometry.addAttribute('uv2', new THREE.BufferAttribute(geometry.attributes.uv.array, 2));
                if (child.name == "Light") {
                    child.material = light_mat;
                }
                else if (child.name == "Mesh07" || child.name.indexOf("Gear") > -1) {

                }
                else {
                    child.material = mat1;

                }


            }
        })
        _TJS.scene.add(object);

        // _Global.airplanes = object;
        _Global.mixer = new THREE.AnimationMixer(object);
        _Global.clips = object.animations;
        let clip = object.animations[0];
        _Global.action = _Global.mixer.clipAction(clip);



        // clips.forEach(function (clip) {
        //     _Global.mixer.clipAction(clip).play();
        // })
        console.log(object, "///////////////////////////////////////////////////////////////");

    })
    load_Mgr.loaded();
}



// _Global.house = function () {

//     let tex1 = textureloader.load('./src/resources/textures/house/tex_Bark.jpg');
//     // let tex1 = textureloader.load('./src/resources/textures/house/tex_Bark.jpg');
//     let tex2 = textureloader.load('./src/resources/textures/housetex_Foliage_op.jpg');
//     let tex3 = textureloader.load('./src/resources/textures/house/tex_Folliage.jpg');
//     let tex4 = textureloader.load('./src/resources/textures/house/tex_GrassFloor.jpg');
//     let tex5 = textureloader.load('./src/resources/textures/house/tex_PolesRoofBranches.jpg');
//     let tex6 = textureloader.load('./src/resources/textures/house/tex_PolesRoofBranches_Op.jpg');
//     let tex7 = textureloader.load('./src/resources/textures/house/tex_RoofTiles.jpg');
//     let tex8 = textureloader.load('./src/resources/textures/house/tex_Stones.jpg');
//     let tex9 = textureloader.load('./src/resources/textures/house/tex_StonseWall.jpg');
//     let tex10 = textureloader.load('./src/resources/textures/house/tex_Wood.jpg');



//     loader.load('./src/resources/models/show/house.fbx', function (object) {
//         object.traverse(function (child) {
//             if (child.isMesh) {
//                 if (child.name == "baseFBXASC032tower"){

//                 }
//             }
//         })
//     })





// }