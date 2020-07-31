const proxy = require('http-proxy-middleware')

module.exports = function(app) {
	app.use(
		proxy('/api', {
			target: 'http://httpbin.org/',
			pathRewrite: {
				"^/api": ""
			},
		})
  )
  app.use(
    proxy('/abc', {
      target: 'http://httpbin.org/',
      pathRewrite: {
        "^/abc": ""
      }
    })
  )
}
