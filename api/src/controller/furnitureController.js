import { Router } from "express";
import furnitureService from "../service/furnitureService.js";
import querystring from "querystring";
import { getErrorMessage } from "../utils/errorUtils.js";

const furnitureController = Router();

furnitureController.get('/', async (req, res) => {
    const query = req.query.where?.replaceAll('"', '');

    let filter ={};
    if(query){
        filter = querystring.parse(query); 
    }

    const furnitures = await furnitureService.getAll(filter);
    res.json(furnitures ?? []);
});

furnitureController.post('/', async (req, res) => {
    const furnitureData = req.body;
    const ownerId = req.user.id;
    try {
        const furniture = await furnitureService.create(furnitureData, ownerId);
        res.status(201).json(furniture);
    } catch (error) {
        res.status(400).json({message: getErrorMessage(error)});
    }
    
});

furnitureController.get('/:furnitureId', async (req, res) => {
    const furnitureId = req.params.furnitureId;
    const  furniture = await furnitureService.getOne(furnitureId);
    res.json(furniture);
});

furnitureController.put('/:furnitureId', async (req, res) => {
    const furnitureId = req.params.furnitureId;
    const furnitureData = req.body;
    try {
        const updatedFurniture = await furnitureService.update(furnitureId, furnitureData);
        res.json(updatedFurniture); 
    } catch (error) {
        //Error handling
        // res.status(400).json({message: error.message});
        // return;
        
    }
    
});
    
furnitureController.delete('/:furnitureId', async (req, res) => {
    const furnitureId = req.params.furnitureId;
    const userId = req.user.id;
    
    try {
        const deletedFurniture = await furnitureService.delete(furnitureId, userId);
        res.json(deletedFurniture); 
    } catch (error) {
        //Error handling
        // res.status(400).json({message: error.message});
        // return;
        
    }
    
});

export default furnitureController;