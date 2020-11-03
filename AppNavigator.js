import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginContainer from './kawanLama/containers/Login/LoginContainers';
import MainMenuContainer from './kawanLama/containers/Menu/MainMenuContainer';
import DetailEventContainer from './kawanLama/containers/Event/DetailEventContainer';

const MainNavigator = createStackNavigator({
    LoginContainer                    :   { screen : LoginContainer },
    MainMenuContainer                 :   { screen : MainMenuContainer },
    DetailEventContainer              :   { screen : DetailEventContainer },

},
{
    initialRouteName: 'LoginContainer',
    headerMode:'none',
  }
)
const AppNavigator = createAppContainer(MainNavigator);
export default AppNavigator