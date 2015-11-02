/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableHighlight
    } = React;

var NavBar = React.createClass({
    selectMenu: function (link) {
        this.props.navigator.push({
            name: link
        });
    },
    render: function () {
        return (
            <View style={{flexDirection:'row'}}>
                <TouchableHighlight

                    underlayColor="#dddddd"
                    onPress={() => this.selectMenu('page1')}>
                    <Text style={styles.welcome}>
                        PAGE1
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight

                    underlayColor="#dddddd"
                    onPress={() => this.selectMenu('page2')}>
                    <Text style={styles.welcome}>
                        PAGE2
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight

                    underlayColor="#dddddd"
                    onPress={() => this.selectMenu('page3')}>
                    <Text style={styles.welcome}>
                        PAGE3
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
})
var Page1 = React.createClass({
    render: function () {
        return (
            <View style={styles.container}>

                <Text style={styles.welcome}>
                    Welcome to PAGE1!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Shake or press menu button for dev menu
                </Text>
            </View>
        );
    }
});
var Page2 = React.createClass({
    render: function () {
        return (
            <View style={styles.container}>

                <Text style={styles.welcome}>
                    Welcome to PAGE2!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Shake or press menu button for dev menu
                </Text>
            </View>
        );
    }
});

var Page3 = React.createClass({
    render: function () {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to PAGE3!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Shake or press menu button for dev menu
                </Text>
            </View>
        );
    }
});
var RouteMapper = function (route, navigationOperations, onComponentRef) {
    var _navigator = navigationOperations;

    switch (route.name) {
        case 'page1':
            return (
                <View>
                    <NavBar navigator={_navigator}/>
                    <Page1 />
                </View>
            );
            break;
        case 'page2':
            return (
                <View>
                    <NavBar navigator={_navigator}/>
                    <Page2 />
                </View>
            );
            break;
        case 'page3':
            return (
                <View>
                    <NavBar navigator={_navigator}/>
                    <Page3/>
                </View>
            );
            break;
    }
    return (<Text>Not Found</Text>);
}

var nav = React.createClass({

    render: function () {
        return (
            <Navigator
                style={{flex:1}}
                initialRoute={{name: 'page1', title: 'PAGE1'}}
                configureScene={(route) => {
                      if (route.sceneConfig) {
                        return route.sceneConfig;
                      }
                      return Navigator.SceneConfigs.FloatFromBottom;
                }}
                renderScene={RouteMapper}/>

        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent :'center',
        alignItems : 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('nav', () => nav);
