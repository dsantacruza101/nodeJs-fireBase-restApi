import { Router } from "express";
import { ping } from "../controllers/ping.js";
import { getAllPets } from "../models/pets.models.js";


const router = Router();

router.get('/', ping)
console.log(getAllPets());


export default router