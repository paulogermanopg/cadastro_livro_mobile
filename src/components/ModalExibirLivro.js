import React, { Component } from 'react'
import { Text, View, Modal, StyleSheet, Image, TouchableWithoutFeedback, TouchableOpacity, TextInput, Dimensions } from 'react-native'

export default function ModalExibirLivro(props){
        return (
            <Modal transparent={true} visible={props.isVisible} onRequestClose={props.onCancel}
                animationType='fade'>
                <View style={styles.container}>

                    <Text style={styles.titulo}>{props.livroTitulo}</Text>
                    <Text style={styles.autor}>{props.livroAutor}</Text>
                    <Image source={{uri:props.livroCapa}} style={styles.image} />
                    <Text style={styles.autor}>Nº de Páginas: {props.livroPaginas}</Text>
                    <Text style={styles.sinopse}>Sinopse: {props.livroSinopse}</Text>

                </View>
            </Modal>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.85)',
      //  borderRadius: 10,

    },
    image: {
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').width * 0.4,
        resizeMode: 'contain',
        marginLeft: 5,
        marginVertical: 10,
        borderRadius: 10,
        
    },
    titulo: {
        fontFamily: 'PTSans-Bold',
        fontSize: 18,
        marginTop: 10,
        marginLeft: 5,
        color: '#fff'
    },
    autor: {
        fontFamily: 'PTSans-Regular',
        fontSize: 14,
        marginLeft: 5,
        color: '#fff'
    },
    sinopse: {
        fontFamily: 'PTSans-Regular',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 10,
        marginHorizontal: 15,
        padding: 15,
        color: '#fff'
    },
    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    header: {
        fontFamily: 'Oswald-VariableFont_wght',
        backgroundColor: 'rgba(0,0,0,1)',
        borderWidth: 0.5,
        borderColor: '#BBB',
        color: '#DAA520',
        textAlign: 'center',
        padding: 15,
        fontSize: 30,
        borderRadius: 10,
        width: Dimensions.get('window').width * 0.9,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    input: {
        fontFamily: 'Oswald-VariableFont_wght',
        fontSize: 17,
        textAlign: 'center',
        height: 40,
        margin: 10,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 6,
        width: Dimensions.get('window').width * 0.8,

    },
    
    button: {
        backgroundColor: '#DAA520',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        width: Dimensions.get('window').width / 3,
    },
})