import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button, ScrollView } from 'react-native'

export default props => {
    const [livro, setLivro] = useState(props.route.params ? props.route.params : {})
    return (
        <View style={styles.container}>
            <ScrollView>

                <Text style={styles.tituloForm}>Título</Text>
                <TextInput 
                    onChangeText={titulo => setLivro({...livro, titulo})}
                    placeholder='Informe o Título da Obra'
                    value={livro.titulo}
                    style={styles.input}
                />

                <Text style={styles.tituloForm}>Autor(a)</Text>
                <TextInput 
                    onChangeText={autor => setLivro({...livro, autor})}
                    placeholder='Informe o nome do Autor(a)'
                    value={livro.autor}
                    style={styles.input}
                />

                <Text style={styles.tituloForm}>Nº de Páginas</Text>
                <TextInput 
                    onChangeText={paginas => setLivro({...livro, paginas})}
                    placeholder='Informe o número de paginas'
                    value={livro.paginas}
                    keyboardType='numeric'
                    style={styles.input}
                />

                <Text style={styles.tituloForm}>Sinopse</Text>
                <TextInput 
                    style={styles.inputSinopse} 
                    placeholder='Informe a sinopse do Livro' keyboardType='default'
                    onChangeText={sinopse => setLivro({...livro, sinopse})} 
                    value={livro.sinopse} 
                    multiline={true} maxLength={400}
                    numberOfLines={15}
                />

                <Text style={styles.tituloForm}>URL da capa do livro</Text>
                <TextInput 
                    onChangeText={capaUrl => setLivro({...livro, capaUrl})}
                    placeholder='Informe o número de capaUrl'
                    value={livro.capaUrl}
                    type='number'
                    style={styles.input}
                />

                <Button
                    title='Salvar Livro'
                    color='#4682B4'
                    onPress={() => {
                        props.navigation.goBack()
                    }}
                />

            </ScrollView>
        </View>    
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,  
    },
    tituloForm: {
        fontFamily: 'PTSans-Regular',
        fontSize: 16,
        marginLeft: 5,
    },
    input: {
        height: 40,
        borderColor: '#a1a1a1',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 15,
        marginTop: 5,
        paddingHorizontal: 15,
    },
    inputSinopse: {
        borderColor: '#a1a1a1',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 5,
        padding: 15,
        textAlignVertical:'top',

    },
    button: {
        margin: 15,
        padding: 30,
    },
})