import React, { createContext, useReducer } from 'react'
import livros from '../data/livros'

const initialState = {
    livros
}

const LivrosContext = createContext({})

const actions = {
    updateLivro (state, action){
        const atualizado = action.payload
        return {
            ...state,
            livros: state.livros.map(livro => livro.id === atualizado.id ? atualizado : livro)
        }
    },

    createLivro (state, action){
        const livro = action.payload
        livro.id = Math.random()
        return {
            ...state,
            livros: [...state.livros, livro]
        }
    },

    deleteLivro (state, action){
        return {
            ...state,
            livros: state.livros.filter(livro => livro.id !== action.payload)
        }
    }
}

export const LivrosProvider = props => {

    function reducer(state, action){
        const funcao = actions[action.type]
        return funcao ? funcao(state, action) : state
    }  

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <LivrosContext.Provider value={{ state, dispatch }}>
            {props.children}
        </LivrosContext.Provider>
    )
}

export default LivrosContext