import { _TJS } from './global.js';





function KBcreate(mod, s) {
    console.log(mod, "ssssssssssssssssssssssssssssssssssssssssssss");
    for (let i = 0; i < s.length; i++) {
        let KB = mod.clone();
        KB.position.x = s.x;
        KB.position.z = s.z;
        _TJS.scene.add(KB);

    }


}
export { KBcreate }