const path = require('path');

module.exports = {
  // Puedes agregar otras configuraciones aquí si lo necesitas
  module: {
    rules: [
      {
        test: /\.mjs$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: [
          /node_modules\/@mediapipe\/tasks-vision/
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.mjs'],
  },
};
