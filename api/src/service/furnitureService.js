import Furnuture from "../model/Furniture.js";

export default {
    getAll(){
        return Furnuture.find({});
    },
    create(furnitureData){
        return Furnuture.create(furnitureData);
    }
}