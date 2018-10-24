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


export default class Page2 extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    欢迎来到Page2
                </Text>
                <Button
                    title='Go to Back'
                    onPress={()=>{
                        navigation.goBack();
                    }}
                />
                <Button
                    title='Go Page1'
                    onPress={() => {
                        navigation.navigate('Page1');
                    }}
                />
                <Button
                    title='改变主题'
                    onPress={() => {
                        navigation.setParams({
                            theme:{
                                tintColor:'red',
                                updateTime:new Date().getTime()
                            }
                        });
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
