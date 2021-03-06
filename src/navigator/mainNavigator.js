import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Dashboard120179552Navigator from '../features/Dashboard120179552/navigator';
import Camera19179550Navigator from '../features/Camera19179550/navigator';
import BlankScreen31179548Navigator from '../features/BlankScreen31179548/navigator';
import BlankScreen30179547Navigator from '../features/BlankScreen30179547/navigator';
import BlankScreen29179546Navigator from '../features/BlankScreen29179546/navigator';
import BlankScreen28179545Navigator from '../features/BlankScreen28179545/navigator';
import BlankScreen27179544Navigator from '../features/BlankScreen27179544/navigator';
import BlankScreen26179543Navigator from '../features/BlankScreen26179543/navigator';
import BlankScreen25179542Navigator from '../features/BlankScreen25179542/navigator';
import BlankScreen24179541Navigator from '../features/BlankScreen24179541/navigator';
import BlankScreen23179540Navigator from '../features/BlankScreen23179540/navigator';
import BlankScreen22179539Navigator from '../features/BlankScreen22179539/navigator';
import BlankScreen21179538Navigator from '../features/BlankScreen21179538/navigator';
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
Dashboard120179552: { screen: Dashboard120179552Navigator },
Camera19179550: { screen: Camera19179550Navigator },
BlankScreen31179548: { screen: BlankScreen31179548Navigator },
BlankScreen30179547: { screen: BlankScreen30179547Navigator },
BlankScreen29179546: { screen: BlankScreen29179546Navigator },
BlankScreen28179545: { screen: BlankScreen28179545Navigator },
BlankScreen27179544: { screen: BlankScreen27179544Navigator },
BlankScreen26179543: { screen: BlankScreen26179543Navigator },
BlankScreen25179542: { screen: BlankScreen25179542Navigator },
BlankScreen24179541: { screen: BlankScreen24179541Navigator },
BlankScreen23179540: { screen: BlankScreen23179540Navigator },
BlankScreen22179539: { screen: BlankScreen22179539Navigator },
BlankScreen21179538: { screen: BlankScreen21179538Navigator },
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
