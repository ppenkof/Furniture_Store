import Furnuture from "../model/Furniture.js";

export async function getAll(filter){
    return Furnuture.find(filter).select({
        description: true,
        img: true,
        price: true,    
    });
}

export async function  getOne(furnitureId){
    return Furnuture.findById(furnitureId);
}

export async function create(furnitureData, ownerId){
    return Furnuture.create({
        ...furnitureData,
        _ownerId: ownerId,
    });
}

export async function update(furnitureId, furnitureData){
    return Furnuture.findByIdAndUpdate(furnitureId, furnitureData, {runValidators: true, new: true});
};

export async function deleteFurniture(furnitureId, userId){
    // return Furnuture.findByIdAndDelete(furnitureId);
    return Furnuture.deleteOne({_id: furnitureId, _ownerId: userId} );
};
