import IOController from '../../src/io/io-controller.js';
let flvjs = {};
flvjs.createIOController = function(dataSource, config, segmentIndex) {
    return new IOController(dataSource, config, segmentIndex);
};
export default flvjs;
