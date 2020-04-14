
module.exports = {
  webpack: (config, { buildId, dev }) => {
   
    // Perform customizations to webpack config
    // console.log(config.module);
    config.module.rules.push(
      {
        test: /\.(css|less)$/, 
        loader: 'style-loader!css-loader'
      }
    )
    // Important: return the modified config
    return config
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    
    // Important: return the modified config
    return config
  }
}
