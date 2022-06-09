import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";


class SpecieService{
  async getAll(query = {}){
    return await dbContext.Species.find(query)
  }
  async getById(id) {
    const specie = await dbContext.Species.findById(id)
    if (!specie){
      throw new BadRequest("Invalid Species Id!")
    }
    return specie
  }
  async create(body) {
    const specie = await dbContext.Species.create(body)
    return specie
  }
  async remove(id){
    const original = await dbContext.Species.findById(id)
    await original.remove()
    return `deleted ${original.name}`
  }
}

export const specieService = new SpecieService()