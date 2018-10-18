/**
 * Created by qianmaoyin on 2018/10/15.
 */
import {StackNavigator, TabNavigator} from 'react-navigation'
import HomePage from '../pages/HomePage'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import Page3 from '../pages/Page3'
import React from 'react'
import {Button} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

//创建一个常量AppTabNavigator
export const AppTabNavigator = TabNavigator({
    Page1: {
        screen: Page1,
        navigationOptions: {
            tabBarLabel: 'Page1',
            tabBarIcon: ({tintColor, focused}) => (
                <MaterialCommunityIcons
                    name={focused ? 'home' : 'home-outline'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
    Page2: {
        screen: Page2,
        navigationOptions: {
            tabBarLabel: 'Page2',
            tabBarIcon: ({tintColor, focused}) => (
                <MaterialIcons
                        name={focused ? 'people' : 'people-outline'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
    Page3: {
        screen: Page3,
        navigationOptions: {
            tabBarLabel: 'Page3',
            tabBarIcon: ({tintColor, focused}) => (
                <MaterialIcons
                    name={focused ? 'chat-bubble' : 'chat-bubble-outline'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },

})

//创建一个常量AppStackNavigator
export const AppStackNavigator = StackNavigator({
    HomePage: {
        screen: HomePage
    },
    Page1: {
        screen: Page1,
        // navigationOptions:{//写在这里只影响Page1页面，可以覆盖全局navigationOptions的配置
        //     title:'Page1'
        // }
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.name}页面名`
        })
    },
    Page2: {
        screen: Page2,
        navigationOptions: {//写在这里只影响Page2页面，可以覆盖全局navigationOptions的配置
            title: 'Page2'
        }
    },
    Page3: {
        screen: Page3,
        navigationOptions: (props) => {
            const {navigation} = props,
                {state, setParams} = navigation,
                {params} = state;
            return {
                title: params.title ? params.title : 'This is Page3',
                headerRight: (
                    //这个Button是动态的，正在编辑的时候显示保存，不编辑的时候显示编辑
                    <Button
                        title={params.mode === 'edit' ? '保存' : '编辑'}
                        onPress={() => {
                            setParams({mode: params.mode === 'edit' ? '' : 'edit'})
                        }}
                    />
                )
            }
        }
    },
    TabNav:{//把TabNavigator作为StackNavigator的一个页面
        screen:AppTabNavigator,
        navigationOptions:{
            title:'This is TabNavigator'
        }
    }
}, {
    navigationOptions: {//去掉头部导航，写在这里是全局的，影响所有的页面
        //header:null
    }
});