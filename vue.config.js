module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/hello-vue3/'
    : '/'
}