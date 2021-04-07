const path = require('path');

const { merge } = require('webpack-merge');
const base = require('./webpack.base');

const resolve = (dir) => {
  return path.resolve(__dirname, dir);
};

module.exports = merge(base, {
  entry: {
    client: resolve('../src/entry-client.js'),
  }
})