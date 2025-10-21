import Furnuture from "../model/Furniture.js";

export default {
    getAll(){
        return Furnuture.find().select({
            description: true,
            img: true,
            price: true,    
        });
    },
    create(furnitureData){
        return Furnuture.create(furnitureData);
    }
}