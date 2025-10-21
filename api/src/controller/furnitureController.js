import { Router } from "express";
import furnitureService from "../service/furnitureService.js";

const furnitureController = Router();

furnitureController.get('/', async (req, res) => {
    const furnitures = await furnitureService.getAll();
    res.json(furnitures ?? []);
});

furnitureController.post('/', async (req, res) => {
    const furnitureData = req.body;
    const furniture = await furnitureService.create(furnitureData);
    res.status(201).json(furniture);
});

furnitureController.get('/:furnitureId', async (req, res) => {
    const furnitureId = req.params.furnitureId;
    const  furniture = await furnitureService.getOne(furnitureId);
    res.json(furniture);
});
    

export default furnitureController;