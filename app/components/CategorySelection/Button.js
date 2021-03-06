/**
 * Created by student on 1/31/17.
 */
import React, {Component} from 'react';
import {View, TouchableHighlight, Text} from 'react-native';

import styles from './styles';
class Button extends Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.touchable}
                onPress={this.props.onPress}>
                <View>
                    <Text style={styles.saveButton}>ЗАЧУВАЈ</Text>
                </View>
            </TouchableHighlight>
        );
    }
}
export default  Button;