import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";


class PlanetService{
  async getAll(query = {}){
    return await dbContext.Planets.find(query)
  }
  async getById(id) {
    const planet = await dbContext.Planets.findById(id)
    if (!planet){
      throw new BadRequest("Invalid Planet Id!")
    }
    return planet
  }
  async create(body) {
    const planet = await dbContext.Planets.create(body)
    return planet
  }
  async remove(id){
    const original = await dbContext.Planets.findById(id)
    await original.remove()
    return `deleted ${original.name}`
  }
}

export const planetService = new PlanetService()