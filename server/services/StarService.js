import { dbContext } from "../db/DbContext";


class StarService{
  async getAll(query = {}){
    return await dbContext.Stars.find(query)
  }
  async getById(id) {
    const star = await dbContext.Stars.findById(id)
    if (!star){
      throw new BadRequest("Invalid Star Id!")
    }
    return star
  }
  async create(body) {
    const star = await dbContext.Stars.create(body)
    return star
  }
  async remove(id){
    const original = await dbContext.Stars.findById(id)
    await original.remove()
    return `deleted ${original.name}`
  }
}

export const starService = new StarService()