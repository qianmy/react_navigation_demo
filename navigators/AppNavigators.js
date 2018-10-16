/**
 * Created by qianmaoyin on 2018/10/15.
 */
import {StackNavigator} from 'react-navigation'
import HomePage from '../pages/HomePage'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'


//创建一个常量AppStackNavigation
export const AppStackNavigation = StackNavigator({
    HomePage: {
        screen: HomePage
    },
    Page1:{
        screen:Page1
    },
    Page2:{
        screen:Page2
    }
});