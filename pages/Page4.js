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


export default class Page4 extends Component {

    render() {
        const {navigation} = this.props;
        return (
            <View style={{flex:1,backgroundColor:'gray'}}>
                <Text style={styles.welcome}>
                    欢迎来到Page4
                </Text>
                <Button
                    title='Open Drawer'
                    onPress={() => {
                        //navigation.navigate('DrawerOpen');//DrawerOpen，这个路由名代表抽屉导航打开，此方法已弃用
                        navigation.openDrawer();
                    }}
                />
                <Button
                    title='Toggle Drawer'
                    onPress={() => {
                        //navigation.navigate('DrawerToggle');//DrawerToggle，这个路由名代表抽屉导航打开/关闭状态切换
                        navigation.toggleDrawer();
                    }}
                />
                <Button
                    title='Close Drawer'
                    onPress={() => {
                        navigation.closeDrawer();
                    }}
                />
                <Button
                    title='Go to Page5'
                    onPress={() => {
                        navigation.navigate('Page5');
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
