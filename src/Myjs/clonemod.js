// import { Scene } from "three/build/three.module";

import { _TJS } from "./global.js";



function clonemod(pos, mod, ys = 0, m=null) {
    for (let i = 0; i < pos.length; i++) {
        let mod1 = mod.clone();
        mod1.position.set(pos[i].x, pos[i].y + ys, pos[i].z);
        mod1.rotation.y = pos[i].r;
        _TJS.scene.add(mod1);

        if (m) mod1.name = m + i;
        // Scene.add(mod1)
    }
}



///////////////////////灯光批量创建有Bug/////////////////////////////////
// function GC_lightClone(targetmodel, groupmodel, light) {
//     for (let i = 0; i < groupmodel.children.length; i++) {
//         let spotlights = light.clone();
//         spotlights.position.set(groupmodel.children[i].position.x, groupmodel.children[i].position.y - 0.5, groupmodel.children[i].position.z);
//         spotlights.target = targetmodel.children[i];
//         spotlights.name = "厂房light" + i;
//         _TJS.scene.add(spotlights);
//         // console.log("执行复制" + i + "完成");
//     }
// }

export { clonemod }