import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LivroList from './Screens/LivroList'
import LivroForm from './Screens/LivroForm'

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <NavigationContainer>

            <Stack.Navigator
                initialRouteName="LivroList">

                <Stack.Screen
                    name="LivroList"
                    component={LivroList}
                />
                <Stack.Screen
                    name="LivroForm"
                    component={LivroForm}
                />

            </Stack.Navigator>

        </NavigationContainer>
    )
}