import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen20179537Navigator from '../features/BlankScreen20179537/navigator';
import BlankScreen19179536Navigator from '../features/BlankScreen19179536/navigator';
import BlankScreen18179535Navigator from '../features/BlankScreen18179535/navigator';
import BlankScreen17179534Navigator from '../features/BlankScreen17179534/navigator';
import Settings179519Navigator from '../features/Settings179519/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen20179537: { screen: BlankScreen20179537Navigator },
BlankScreen19179536: { screen: BlankScreen19179536Navigator },
BlankScreen18179535: { screen: BlankScreen18179535Navigator },
BlankScreen17179534: { screen: BlankScreen17179534Navigator },
Settings179519: { screen: Settings179519Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
