// import
const path = require('path'); 
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// export
module.exports = {
	// 파일을 읽어들이기 시작하는 진입점 설정
	// parcel index.html (parcel은 이렇게 진입점을 설정했었지만, webpack은 cli가 아니라 config파일에 설정한다.)
	entry: './js/main.js',
	
	// 결과물(번들)을 반환하는 설정
	output: {
		// path: path.resolve(__dirname, 'dist'),
		// // path에 절대경로 지정해주어야 함
		// // resolve 메소드: __dirname(현재 파일이 있는 그 경로. nodeJS의 전역변수)와 dist 경로를 합친다.
		// filename: 'main.js',
		clean: true // 다시 build할 때 기존 결과물 clean
	},
	module: {
		rules: [
			{
				test: /\.s?css$/, // .scss, .css 확장자를 갖고 있는 것들에 대해 아래 use를 적용한다.
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.js$/,
				use: [
					'babel-loader'
				]
			}
		]
	},
	// 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
	plugins: [
		new HtmlPlugin({
			template: './index.html'
		}),
		new CopyPlugin({
			patterns: [
				{ from: 'static' } // 'static' 폴더 안의 파일들을 'dist' 폴더로 복붙하세요
			]
		})
	],

	devServer: {
		host: 'localhost'
	}
}
