import { galaxyService } from "../services/GalaxyService";
import { moonService } from "../services/MoonService";
import { planetService } from "../services/PlanetService";
import { starService } from "../services/StarService";
import BaseController from "../utils/BaseController";


export class MoonsController extends BaseController{
  constructor(){
    super('api/moons')
    this.router
    .get('', this.getAll)
    .get('/:id', this.getById)
    .get('/:id/species', this.getSpecies)
    .post('', this.create)
    .delete('/:id', this.remove)
   }

   async getAll(req, res, next){
     try {
       let moons = await moonService.getAll()
       return res.send(moons)
     } catch (error) {
       next(error)
     }
   }
   async getById(req, res, next){
    try {
      let moon = await moonService.getById(req.params.id)
      return res.send(moon)
    } catch (error) {
      next(error)
    }
  }
   async getSpecies(req, res, next){
     try {
       let specie = await specieService.getAll({specieId: req.params.id})
     } catch (error) {
       next(error)
     }
   }
   async create(req, res, next){
     try {
       let moon = await moonService.create(req.body)
       return res.send(moon)
     } catch (error) {
       next(error)
     }
   }
   async remove(req, res, next){
     try {
       let message = await moonService.remove(req.params.id)
       return res.send(message)
     } catch (error) {
       next(error)
     }
   }
}