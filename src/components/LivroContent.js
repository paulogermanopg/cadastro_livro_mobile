import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert } from 'react-native'
import capa from '../../assets/images/o_paradoxo_do_caos.jpg'
import { Button, Icon } from 'react-native-elements'

export default props => {

    function excluir() {
        Alert.alert('Excluir Livro', `Realmene você quer apagar este livro?! id: ${props.id}`,
            [
                {text: 'Sim', onPress(){
                    console.warn('ok')
                }},
                {text: 'Não'}

            ])
    }

    function exibir() {
        Alert.alert('Exibir Livro', `Realmene você quer exibir este livro?! id: ${props.id}`)
    }

    return (
        <View style={styles.container}>
            
            <TouchableOpacity style={styles.touchable}
                onPress={exibir}>

            <Image source={capa} style={styles.image} />

            <View style={styles.descricao}>

                <Text style={styles.titulo}>
                    {props.titulo}
                </Text>
                <Text style={styles.autor}>
                    {props.autor}
                </Text>

            </View>

            </TouchableOpacity>
            

            <View style={styles.botoes}>
                <Button
                    onPress={() => props.navigation.navigate('LivroForm', props)}
                    type='clear'
                    icon={<Icon name='edit' size={25} color='#2d5373'/>}
                />

                <Button
                    onPress={excluir}
                    type='clear'
                    icon={<Icon name='delete' size={25} color='rgba(0,0,0,0.8)'/>}
                />
            </View>
            
            

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#eee',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginVertical: 10,
    },
    touchable: {
        display: 'flex',
        flexDirection: 'row'
    },
    image: {
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').width * 0.2,
        resizeMode: 'contain',
        marginLeft: 5,
        marginVertical: 10,
        
    },
    descricao: {
        
    },
    titulo: {
        fontFamily: 'PTSans-Bold',
        fontSize: 16,
        marginTop: 10,
        marginLeft: 5,
    },
    autor: {
        fontFamily: 'PTSans-Regular',
        fontSize: 14,
        marginTop: 10,
        marginLeft: 5,
    },
    botoes: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
})