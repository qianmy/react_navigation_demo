/**
 * Created by qianmaoyin on 2018/10/15.
 */
import {StackNavigator} from 'react-navigation'
import HomePage from '../pages/HomePage'


//创建一个常量AppStackNavigation
export const AppStackNavigation = StackNavigator({
    HomePage: {
        screen: HomePage
    }
});