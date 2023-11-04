import axios from "axios"

const exerciciosAPI = axios.create({baseURL: "http://localhost:8000/exercicios"})

async function getExercicios(){
    const response = await exerciciosAPI.get('/')

    return response.data
}

export {
    getExercicios
}