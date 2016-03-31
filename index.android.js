import React, {
	AppRegistry,
	Component,
	StyleSheet,
	WebView
} from 'react-native';
import globalConfig from './config';

var GLOBAL_CONF_WEBVIEW_URL = globalConfig.webviewUrl;

class RNWebviewExample extends Component {
	render() {
		return (
			<WebView
				automaticallyAdjustContentInsets={false}
				style={styles.webView}
				source={{uri: GLOBAL_CONF_WEBVIEW_URL}}
				javaScriptEnabled={true}
				domStorageEnabled={true}
				decelerationRate="normal"
				startInLoadingState={true}
				scalesPageToFit={true}
			/>
		);
	}
}

const styles = StyleSheet.create({
	webView: {
	}
});

AppRegistry.registerComponent('RNWebviewExample', () => RNWebviewExample);
