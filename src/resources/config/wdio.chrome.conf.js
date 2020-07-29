const wdioConfig = require('../../../wdio.conf.js');

wdioConfig.config.capabilities = [{
    maxInstances: 1,
    browserName: 'chrome',
}];

exports.config = wdioConfig.config;
