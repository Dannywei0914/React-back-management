const { override, fixBabelImports, addBabelPlugins, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style:true
  }),
  
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@btn-primary-bg': '#68AEB3', // Aqua Green
    },
  }),
  addBabelPlugins(
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        style: true,
      },
    ],
    [
      'babel-plugin-styled-components',
      {
        pure: true,
      },
    ]
  )
);
