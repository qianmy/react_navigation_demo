/**
 * Created by qianmaoyin on 2018/10/15.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';


type Props = {};
export default class HomePage extends Component<Props> {
    static navigationOptions = {
        title: 'Home'
    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    欢迎来到HomePage
                </Text>
                <Button
                    title='Go to Page1'
                    onPress={() => {
                        navigation.navigate('Page1',{name:'动态的'})
                    }}
                />
                <Button
                    title='Go to Page2'
                    onPress={() => {
                        navigation.navigate('Page2')
                    }}
                />
            </View>
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
