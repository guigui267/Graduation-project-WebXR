import { _Global } from "./global.js";
import { TWEEN } from '../../node_modules/three/examples/jsm/libs/tween.module.min.js';


function cs(d) {
    let a = { x: 0, y: 0, z: 0 };
    let n1 = new TWEEN.Tween(a);
    n1.to({ z: 55 }, 4000);
    n1.onUpdate(function () {
        _Global.dollyMod.position.z = a.z;
    })
}