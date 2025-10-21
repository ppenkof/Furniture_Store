import Furnuture from "../model/Furniture.js";

export default {
    getAll(filter){
        return Furnuture.find(filter).select({
            description: true,
            img: true,
            price: true,    
        });
    },

    getOne(furnitureId){
        return Furnuture.findById(furnitureId);
    },

    create(furnitureData, ownerId){
        return Furnuture.create({
            ...furnitureData,
            _ownerId: ownerId,
        });
    },

    update(furnitureId, furnitureData){
        return Furnuture.findByIdAndUpdate(furnitureId, furnitureData, {runValidators: true, new: true});
    },

    delete(furnitureId, userId){
        // return Furnuture.findByIdAndDelete(furnitureId);
        return Furnuture.deleteOne({_id: furnitureId, _ownerId: userId} );
    }
}