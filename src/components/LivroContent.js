import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import ModalExibirLivro from './ModalExibirLivro'

export default props => {

    const [modalLivro, setModalLivro] = useState(false)

    function excluir() {
        Alert.alert('Excluir Livro', `Deseja realmene apagar este livro? Título: ${props.titulo}`,
            [
                {text: 'Sim', 
                    onPress(){
                        props.dispatch({
                            type:'deleteLivro',
                            payload: props.id
                        })
                }},
                {text: 'Não'}

            ])
    }

    return (
        <View style={styles.container}>

            <ModalExibirLivro isVisible={modalLivro} onCancel={() => setModalLivro(false)}
                livroCapa={props.capaUrl} livroTitulo={props.titulo} livroSinopse={props.sinopse}
                livroAutor={props.autor} livroPaginas={props.paginas}/>
            
            <TouchableOpacity style={styles.touchable}
                onPress={() => setModalLivro(true)}>

            <Image source={{uri:props.capaUrl}} style={styles.image} />

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
        backgroundColor: '#e7e6e6',
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
        borderRadius: 10,
        
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