import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LivroList from './Screens/LivroList'
import LivroForm from './Screens/LivroForm'
import { Button, Icon } from 'react-native-elements'
import { LivrosProvider } from './context/LivrosContext'

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <LivrosProvider>
            <NavigationContainer>

                <Stack.Navigator
                    initialRouteName="LivroList"
                    screenOptions={screenOptions}>

                    <Stack.Screen
                        name="LivroList"
                        component={LivroList}
                        options={({ navigation }) => {
                            return {
                                title: 'Acervo',
                                headerRight: () => (
                                    <Button
                                        onPress={() => navigation.navigate('LivroForm')}
                                        type='clear'
                                        icon={<Icon name='add' size={25} color='#fff'/>}
                                    />
                                )
                            }
                        }}
                    />
                    <Stack.Screen
                        name="LivroForm"
                        component={LivroForm}
                        options={{
                            title: 'Formulário do Livro'
                        }}
                    />

                </Stack.Navigator>

            </NavigationContainer>

        </LivrosProvider>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#4682B4'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}