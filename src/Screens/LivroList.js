import React, { useContext } from 'react'
import { View, FlatList } from 'react-native'
import LivroContent from '../components/LivroContent'
import LivrosContext from '../context/LivrosContext'

export default props => {

    const { state, dispatch } = useContext(LivrosContext)

    return (
        <View>
            <FlatList
                keyExtractor={livro => livro.id.toString()}
                data={state.livros}
                renderItem={( { item } ) =>
                    <LivroContent 
                        key={item.id} {...item} navigation={props.navigation}
                        dispatch={dispatch}
                    />}
            />
        </View>
    )
}