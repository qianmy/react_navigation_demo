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
        screen:Page1,
        // navigationOptions:{//写在这里只影响Page1页面，可以覆盖全局navigationOptions的配置
        //     title:'Page1'
        // }
        navigationOptions:({navigation})=>({
            title:`${navigation.state.params.name}页面名`
        })
    },
    Page2:{
        screen:Page2,
        navigationOptions:{//写在这里只影响Page2页面，可以覆盖全局navigationOptions的配置
            title:'Page2'
        }
    }
},{
    navigationOptions:{//去掉头部导航，写在这里是全局的，影响所有的页面
        //header:null
    }
});