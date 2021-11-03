import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import capa from '../../assets/images/o_paradoxo_do_caos.jpg'
import { Button, Icon } from 'react-native-elements'

export default props => {

    function excluir(livro) {

    }

    function alterar(livro) {

    }

    return (
        <View style={styles.container}>

            <Image source={capa} style={styles.image} />

            <View style={styles.descricao}>

                <Text style={styles.titulo}>
                    {props.titulo}
                </Text>
                <Text style={styles.autor}>
                    {props.autor}
                </Text>

            </View>

            <View style={styles.botoes}>
                <Button
                    onPress={alterar}
                    type='clear'
                    icon={<Icon name='edit' size={25} color='rgba(0,0,0,0.8)'/>}
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
        justifyContent: 'flex-start',
        backgroundColor: '#eee',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginVertical: 10,
    },
    image: {
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').width * 0.2,
        resizeMode: 'contain',
        marginLeft: 5,
        marginVertical: 10,
        
    },
    descricao: {
        flex: 1
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