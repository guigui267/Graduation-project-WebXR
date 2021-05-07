import { _TJS, _Global } from "./global.js";
import { TWEEN } from '../../node_modules/three/examples/jsm/libs/tween.module.min.js';
import { group } from "./VRGUI.js";

/////////////////////////解体////////////////////











function JTSG() {
    // _Global.JT = 1;
}



function M8_JT() {
    // console.log(_Global.M8JT, "你好");

    if (_Global.JT == 1) {
        group.traverse(function (b) {
            if (b.catch == true) {
                // console.log(b, "moxing");



                let d = { x: 0, y: 0, z: 0 };
                let s1 = new TWEEN.Tween(d);
                s1.to({ x: 5, y: 5, z: 5 }, 5000);
                s1.onUpdate(function () {
                    if (b.name == "iron03") {
                        b.position.y = d.y;

                    } else if (b.name == "inner_normal") {
                        b.position.z = -d.z;
                    } else if (b.name == "black02") {
                        b.position.z = d.x;
                    } else if (b.name == "inner_normal02") {
                        b.position.y = d.y
                    } else if (b.name == "white") {
                        b.position.x = -d.z;
                    } else if (b.name == "black1") {
                        b.position.x = d.x;
                    }

                });
                s1.start();
            }
        })


        _Global.JT = 0;
    }
    else if (_Global.JT == 0) {
        _Global.JT = 1;
        
        group.traverse(function (b) {
            if (b.catch == true) {
                console.log(b, "xingming");            // for (let i = 0; i < group.children.length; i++) {
                let a = { x: 0, y: 0, z: 0, r: 0, s: 0, g: 0 };
                a.x = b.position.x;
                a.y = b.position.y;
                a.z = b.position.z;
                a.r = b.rotation.r;
                a.s = b.rotation.s;
                a.g = b.rotation.g;

                let s2 = new TWEEN.Tween(a);
                s2.to({ x: 0, y: 0, z: 0, r: 0, s: 0, g: 0 }, 5000);
                s2.onUpdate(function () {
                    b.position.set(a.x, a.y, a.z);
                    // b.rotation.set(a.r, a.s, a.g);
                    b.rotation._x = a.r;
                    b.rotation._y = a.s;
                    b.rotation._z = a.g;

                })

                s2.start();



            }
        })
    }
}


// if (_Global.JT == 1) {
//     // s2.stop();
//     let a = { x: 0, y: 0, z: 0 }
//     let s1 = new TWEEN.Tween(a);
//     s1.to({ x: 5, y: 5, z: 5 }, 10000);
//     s1.onUpdate(function () {

//         _Global.M8JT.children[20].position.x = -a.z;
//         _Global.M8JT.children[22].position.x = a.x;
//         _Global.M8JT.children[10].position.z = a.x;
//         _Global.M8JT.children[3].position.z = -a.z;
//         _Global.M8JT.children[17].position.y = a.y;
//         _Global.M8JT.children[4].position.y = a.y;

//     })
//     s1.start();
//     _Global.JT = 0;
// }
// else if (_Global.JT == 0) {
//     // s1.stop();
//     /////////////////////////重组//////////////////////////
//     for (let i = 0; i < _Global.M8JT.children.length; i++) {
//         let b = { x: 0, y: 0, z: 0, r: 0, s: 0, g: 0 };
//         b.x = _Global.M8JT.children[i].position.x;
//         b.y = _Global.M8JT.children[i].position.y;
//         b.z = _Global.M8JT.children[i].position.z;
//         b.r = _Global.M8JT.children[i].rotation.x;
//         b.s = _Global.M8JT.children[i].rotation.y;
//         b.g = _Global.M8JT.children[i].rotation.z;
//         let s2 = new TWEEN.Tween(b);
//         s2.to({ x: 0, y: 0, z: 0, r: 0, s: 0, g: 0 }, 5000);
//         s2.onUpdate(function () {
//             _Global.M8JT.children[i].position.x = b.x;
//             _Global.M8JT.children[i].position.y = b.y;
//             _Global.M8JT.children[i].position.z = b.z;
//             _Global.M8JT.children[i].rotation.x = b.r;
//             _Global.M8JT.children[i].rotation.y = b.s;
//             _Global.M8JT.children[i].rotation.z = b.g;


//             // _Global.M8JT.children[20].position.x = b.z;
//             // _Global.M8JT.children[22].position.x = b.x;
//             // _Global.M8JT.children[10].position.z = b.x;
//             // _Global.M8JT.children[3].position.z = b.z;
//             // _Global.M8JT.children[17].position.y = b.y;
//             // _Global.M8JT.children[4].position.y = b.y;

//         })
//         s2.start();
//     }



//     _Global.JT = 1;
// }
// }




export { M8_JT, JTSG };