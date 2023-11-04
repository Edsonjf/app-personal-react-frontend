import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { getExercicios } from '../../servicos/exercicio'
import { useEffect } from 'react'
import { postFavorito } from '../../servicos/favoritos'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 470px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    p {
        width: 200px;
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa() {
    const [exerciciosPesquisados, setExerciciosPesquisados] = useState([])
    const [exercicios, setExercicios] = useState([])

    useEffect(() => {
        fetchExercicios()
    }, [])

    async function fetchExercicios() {
        const exerciciosDaAPI = await getExercicios()
        setExercicios(exerciciosDaAPI)
    }

    async function insertFavorito(id){
        await postFavorito(id)
        alert(`Exercicio de id:${id}  inserido!`)
    }

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu exercicio em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = exercicios.filter( exercicio => exercicio.nome.includes(textoDigitado))
                    setExerciciosPesquisados(resultadoPesquisa)
                }}
            />
            { exerciciosPesquisados.map( exercicio => (
                <Resultado onClick={() => insertFavorito(exercicio.id)}>
                    <img src={exercicio.src} alt='foto'/>
                    <p>{exercicio.nome}</p>
                </Resultado>
            ) ) }
        </PesquisaContainer>
    )
}

export default Pesquisa