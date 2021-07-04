module.exports = (api) => {
	api.cache(true)
	return {
	  presets: ['next/babel'],
	  plugins: [
		['module-resolver', {
		  extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
		  alias: {
			'@': './src',
		  },
		}],
	  ],
	}
  }
  