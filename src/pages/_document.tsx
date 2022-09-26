import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang={this.props.__NEXT_DATA__.props.initialLanguage}>
				<Head />
				<body>
					<Main />
					<NextScript />
					<div id="modal" />
				</body>
			</Html>
		);
	}
}
