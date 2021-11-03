import React from 'react'
import { View, FlatList } from 'react-native'
import livros from '../data/livros'
import LivroContent from '../components/LivroContent'

export default props => {

    return (
        <View>
            <FlatList
                keyExtractor={livro => livro.id.toString()}
                data={livros}
                renderItem={( { item } ) =>
                    <LivroContent key={item.id} {...item} />}
            />
        </View>
    )
}