import {createDefaultConfig} from '../../src/config.js';
import IOController from '../../src/io/io-controller.js';
let flvjs = {};
flvjs.createIOController = function(url) {
    let config = createDefaultConfig();
    config.isLive = true;
    return new IOController({ url: url }, config, 0);
};
export default flvjs;
