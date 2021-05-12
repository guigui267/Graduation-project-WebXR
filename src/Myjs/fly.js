import { _Global } from './global.js';
import *as THREE from '../../node_modules/three/build/three.module.js';

function fly() {

    _Global.clips.forEach(function (clip) {
        // _Global.action.play();
        if (_Global.flyyer == false) {

            _Global.mixer.clipAction(clip).play();

            _Global.flyyer = true;
        }
        else if (_Global.flyyer == true) {
            _Global.mixer.clipAction(clip).stop();
            _Global.flyyer = false;
        }
    })
}
export { fly }