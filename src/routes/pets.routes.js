import Router from 'express';
import { getPets, postPets, deletePets, updatePets } from '../controllers/pets.controllers.js';

const router  = Router();

router.get('/pets', getPets)
router.post('/pets', postPets)
router.delete('/pets/:id', deletePets)
router.put('/pets/:id', updatePets)


export default router