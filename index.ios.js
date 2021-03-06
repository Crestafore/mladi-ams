import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import CardLayout from './app/components/Card/CardLayout';
import TabBar from './app/components/TabBar/TabBar';
import MyRouter from './app/components/route';

export default class mladiams extends Component {
    render() {
        return (
            <MyRouter />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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

AppRegistry.registerComponent('mladiams', () => mladiams);
