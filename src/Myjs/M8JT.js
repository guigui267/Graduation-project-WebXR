import { _TJS, _Global } from "./global.js";
import { TWEEN } from '../../node_modules/three/examples/jsm/libs/tween.module.min.js';
import { group } from "./VRGUI.js";

/////////////////////////解体////////////////////











function JTSG() {
    _Global.JT = 1;
}



function M8_JT() {
    // console.log(_Global.M8JT, "你好");

    if (_Global.JT == 1) {
        _Global.JT = 0;
        group.traverse(function (b) {
            if (b.catch == true) {
                // console.log(b, "moxing");



                let d = { x: 0, y: 0, z: 0, c: 0, v: 0, b: 0, n: 0, m: 0, a: 0, s: 0, f: 0, g: 0, h: 0, j: 0, k: 0, l: 0, q: 0, w: 0, e: 0, r: 0 };
                let s1 = new TWEEN.Tween(d);
                s1.to({ x: -4.891, y: 9.001, z: 5.889, c: -6.21, v: 12.867, b: -11.492, n: -1.904, m: 6.04, a: -5.752, s: -4.128, f: -2.754, g: 3.445, h: 2.248, j: 4.797, k: -3.26, l: -2.256, q: 6.374, w: 1.323, e: -1.821, r: -0.543 }, 5000);
                s1.onUpdate(function () {
                    if (b.name == "eye") {
                        b.position.x = d.x;
                    }
                    else if (b.name == "eye1") {
                        b.position.z = d.y;
                    }
                    else if (b.name == "eye2") {
                        b.position.z = d.z;
                    }
                    else if (b.name == "eye3") {
                        b.position.z = d.c;
                    }
                    else if (b.name == "eye4") {
                        b.position.z = d.v;
                    }
                    else if (b.name == "toe") {
                        b.position.z = d.b;
                    }
                    else if (b.name == "leg1") {
                        b.position.x = d.n;
                    }
                    else if (b.name == "arm1") {
                        b.position.x = d.m;
                    }
                    else if (b.name == "arm") {
                        b.position.x = d.a;
                    }
                    else if (b.name == "arm2") {
                        b.position.x = d.s;
                    }
                    else if (b.name == "arm3") {
                        b.position.x = d.f;
                    }
                    else if (b.name == "arm4") {
                        b.position.x = d.g;
                    }
                    else if (b.name == "arm5") {
                        b.position.x = d.h;
                    }
                    else if (b.name == "leg2") {
                        b.position.x = d.j;
                    }
                    else if (b.name == "hand") {
                        b.position.x = d.k;
                    }
                    else if (b.name == "arm6") {
                        b.position.x = d.l;
                    }
                    else if (b.name == "arm7") {
                        b.position.x = d.q;
                    }
                    // else if (b.name == "leg3") {
                    //     b.position
                    // }
                    else if (b.name == "leg4") {
                        b.position.x = d.w;
                    }
                    else if (b.name == "leg5") {
                        b.position.x = d.e;
                    }
                    else if (b.name == "leg6") {
                        b.position.x = d.r;
                    }
                    // else if (b.name == "foot") {
                    //     b.position.
                    // }

                });
                s1.start();
            }
        })



    }
    else if (_Global.JT == 0) {
        _Global.JT = 1;

        group.traverse(function (b) {
            if (b.catch == true) {
                // console.log(b, "xingming");            // for (let i = 0; i < group.children.length; i++) {
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