const wdioConfig = require('../../../wdio.conf.js');

//const chromeDriverVersion = process.env.CHROME_DRIVER_VERSION;

wdioConfig.config.capabilities = [{
    maxInstances: 1,
    browserName: 'chrome',
    'goog:chromeOptions': {
        // to run chrome headless the following flags are required
        // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
        args: ['--headless', '--disable-gpu', '--no-sandbox', '--window-size=1920,1080'],
    },
}];

wdioConfig.config.seleniumInstallArgs = {
    drivers: { chrome: { version: process.env.CHROME_DRIVER_VERSION } }
};

wdioConfig.config.seleniumArgs = {
    drivers: { chrome: { version: process.env.CHROME_DRIVER_VERSION } }
};

exports.config = wdioConfig.config;
