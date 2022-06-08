import DbConnection from "../db/DbConfig"
import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"


class GalaxyService{

  async getAll(){
    const galaxies = await dbContext.Galaxies.find()
    return galaxies
  }
  async getById(id) {
    const galaxy = await dbContext.Galaxies.findById(id)
    if (!galaxy){
      throw new BadRequest("Invalid Galxy Id!")
    }
    return galaxy
  }
  async create(body) {
    const galaxy = await dbContext.Galaxies.create(body)
    return galaxy
  }
  async remove(id){
    const original = await dbContext.Galaxies.findById(id)
    await original.remove()
    return `deleted ${original.name}`
  }
}

export const galaxyService = new GalaxyService()