import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Feather as Icon } from "@expo/vector-icons";


class Page1Screen extends React.Component{
    static navigationOptions = {
        title: 'Page 1',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Page 1</Text>
            </View>
        );
    }
}

class Page2Screen extends React.Component{
    static navigationOptions = {
        title: 'Page 2',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Page 2</Text>
            </View>
        );
    }
}

class Page3Screen extends React.Component{
    static navigationOptions = {
        title: 'Page 3',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Page 3</Text>
            </View>
        );
    }
}

const TabNavigator = createBottomTabNavigator(
    {
      Page1: {
        screen: Page1Screen,
        navigationOptions: {
          title: "Page 1",
          tabBarIcon: 
          ( ({tintColor}) =>
            <Icon
                name="calendar"
                color={tintColor}
                size={32}
            />
          ),
        },
      },
      Page2: {
        screen: Page2Screen,
        navigationOptions: {
          title: "Page 2",
          tabBarIcon: 
          ( ({tintColor}) =>
            <Icon
                name="users"
                color={tintColor}
                size={32}
            />
          ),
        },
      },
      Page3: {
        screen: Page3Screen,
        navigationOptions: {
          title: "Page 3",
          tabBarIcon: 
          ( ({tintColor}) =>
            <Icon
                name="star"
                color={tintColor}
                size={32}
            />
          ),
        },
      },
    },
  
  
    {
      initialRouteName: 'Page1',
      tabBarOptions: {
        showLabel: true,
        showIcon: true,
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
      }
  
    }
);

const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component{

    render(){
        return (
            <AppContainer />
        );
    }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
