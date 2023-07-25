import { deleteAllPets, getAllPets, postAllPets, updateAllPets } from "../models/pets.models.js";

export const getPets = async (req, res) => {
    try {
        const result = await getAllPets()
        res.send(result)
    } catch (error) {
        res.status(500).json({
            message: 'something goes wrong'
        })
    }
}

export const postPets = async (req, res) => {
    try {
        const data = req.body
        const result = await postAllPets(data)
        res.send(result)
    } catch (error) {
        res.status(500).json({
            message: 'something goes wrong'
        })
    }
}

export const deletePets = async ( req, res ) => {
    const data = req.params.id
    const result = await deleteAllPets(data)
    return res.status(200).json({
        message: 'Eliminado exitosamente',
        data: result
    })
}

export const updatePets = async ( req, res ) => {
    const id = req.params.id
    const data = req.body
    const result = await updateAllPets(id, data)
    return res.status(200).json({
        message: 'Actualizado exitosamente',
        data: result
    })
}



