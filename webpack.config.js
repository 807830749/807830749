// 生成两份代码，一份压缩，一份未压缩
const path = require("path")
const terserPlugin = require("terser-webpack-plugin") // 对js进行压缩
module.exports = {
  entry: {
		"add-number": "./src/index.js",
		"add-number.min": "./src/index.js"
	},
	output: {
		filename: "[name].js",
		library: "addNumber",
		path: path.resolve(__dirname, "./umd"),
		libraryTarget: "umd",
		libraryExport: "default" // 库的导出格式。默认是导出库的名字+default，使用方式是addNumber.default()。使用default参数后，导出是库的名字，使用方式是addNumber()
	},
	mode: "none",
	optimization: { // 专门对js进行压缩的配置
		minimize: true, // 是否开启压缩
		minimizer: [ // 压缩使用的工具
			new terserPlugin({
				test: /\.min.js$/ // 检测需要压缩的文件
			})
		]
	}
}