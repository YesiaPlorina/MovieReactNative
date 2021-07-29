import { Text, View } from 'react-native'

import { NavigationContainer } from "@react-navigation/native";
import React from 'react'
import TopRattingMovie from '../src/page/TopRattingMovie'
import {createStackNavigator} from '@react-navigation/stack';

const Router = () => {
    const MovieStack = createStackNavigator();
    return (
    //     <MovieStack.Navigator >
    //         <MovieStack.Screen
    //     name="TopRatting"
    //     component={TopRattingMovie}
    //     options={{ headerShown: false }}
    //   />
    //     </MovieStack.Navigator>
    <View>
        <Text>Splash</Text>
    </View>
    )
}
export default Router
