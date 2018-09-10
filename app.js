'use strict';

const path = require('path');

module.exports = app => {
    const utilsPath = app.config.utils.path || 'utils'; //相对app目录的路径
    app.loader.loadToApp(path.join(app.baseDir, 'app', utilsPath), 'utils');
};