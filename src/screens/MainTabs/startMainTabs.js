import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource(Platform.OS === 'android' ? "md-map" : "ios-map", 30),
        Icon.getImageSource(Platform.OS === 'android' ? "md-search" : "ios-search", 30),
        Icon.getImageSource(Platform.OS === 'android' ? "md-menu" : "ios-menu", 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    label: 'Find', // tab label as appears under the icon in iOS (optional)
                    screen: 'awesome-project.FindPlaceScreen', // unique ID registered with Navigation.registerScreen
                    title: 'Find Place',
                    icon: sources[1],
                    navigatorButtons: {
                        leftButtons: [{
                            icon: sources[2],
                            title: "Menu",
                            id: "sideDrawerToggle"
                        }]
                    }
                },
                {
                    label: 'Share', // tab label as appears under the icon in iOS (optional)
                    screen: 'awesome-project.SharePlaceScreen', // unique ID registered with Navigation.registerScreen
                    title: 'Share Place',
                    icon: sources[0],
                    navigatorButtons: {
                        leftButtons: [{
                            icon: sources[2],
                            title: "Menu",
                            id: "sideDrawerToggle"
                        }]
                    }
                }
            ],
            tabsStyle: {
                tabBarSelectedButtonColor: "orange"
            },
            appStyle: {
                tabBarSelectedButtonColor: "orange"
            },
            drawer: {
                left: {
                    screen: "awesome-project.SideDrawerScreen"
                }
            }
        })
    })




}

export default startTabs;