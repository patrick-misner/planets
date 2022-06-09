import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";


class MoonService{
  async getAll(query = {}){
    return await dbContext.Moons.find(query)
  }
  async getById(id) {
    const moon = await dbContext.Moons.findById(id)
    if (!moon){
      throw new BadRequest("Invalid Moon Id!")
    }
    return moon
  }
  async create(body) {
    const moon = await dbContext.Moons.create(body)
    return moon
  }
  async remove(id){
    const original = await dbContext.Moons.findById(id)
    await original.remove()
    return `deleted ${original.name}`
  }
}

export const moonService = new MoonService()