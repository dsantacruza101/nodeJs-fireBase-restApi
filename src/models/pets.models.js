import { db } from "../configurations/firebase.connection.js";

export const getAllPets = async () => {
    let pets = []
    const querySnapshot = await db.collection('pets').get() 
    querySnapshot.forEach((doc) => {
        pets.push({
            id: doc.id,
            data: doc.data()
        })
    })
    return pets;
}

export const postAllPets = async ( data ) => {
    
    const res = await db.collection('pets').add(data);
      
      console.log('Added document with ID: ', res.id); 
}

export const deleteAllPets = async ( id ) => {
    const delPet = await db.collection('pets').doc(id).delete()

    console.log('Eliminado exitosamente');
    return delPet
}

export const updateAllPets = async ( id, data ) => {
    const updPet = await db.collection('pets').doc(id).update(data)

    console.log('Actualizado exitosamente');
    return updPet
}