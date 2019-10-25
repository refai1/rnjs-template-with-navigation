import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Feather as Icon } from "@expo/vector-icons";


class EventsScreen extends React.Component{
    static navigationOptions = {
        title: 'Events',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Events</Text>
            </View>
        );
    }
}

class FightersScreen extends React.Component{
    static navigationOptions = {
        title: 'Fighters',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Fighters</Text>
            </View>
        );
    }
}

class FavoritesScreen extends React.Component{
    static navigationOptions = {
        title: 'Favorites',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Favorites</Text>
            </View>
        );
    }
}

const TabNavigator = createBottomTabNavigator(
    {
      Events: {
        screen: EventsScreen,
        navigationOptions: {
          title: "Events",
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
      Fighters: {
        screen: FightersScreen,
        navigationOptions: {
          title: "Fighters",
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
      Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
          title: "Favorites",
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
      initialRouteName: 'Events',
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
