const rewireLess = require('react-app-rewire-less');
const { injectBabelPlugin } = require('react-app-rewired');

/* config-overrides.js */
module.exports = function override(config, env) {
    //按需加载所要的组件
    config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
    config = rewireLess(config, env);
    return config;
};