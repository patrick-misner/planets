import { galaxyService } from "../services/GalaxyService";
import { planetService } from "../services/PlanetService";
import { starService } from "../services/StarService";
import BaseController from "../utils/BaseController";


export class PlanetsController extends BaseController{
  constructor(){
    super('api/planets')
    this.router
    .get('', this.getAll)
    .get('/:id', this.getById)
    .get('/:id/moons', this.getMoons)
    .get('/:id/species', this.getSpecies)
    .post('', this.create)
    .delete('/:id', this.remove)
   }

   async getAll(req, res, next){
     try {
       let planets = await planetService.getAll()
       return res.send(planets)
     } catch (error) {
       next(error)
     }
   }
   async getById(req, res, next){
    try {
      let planet = await planetService.getById(req.params.id)
      return res.send(planet)
    } catch (error) {
      next(error)
    }
  }

   async getMoons(req, res, next){
     try {
       let moons = await moonService.getAll({moonId: req.params.id})
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
       let planet = await planetService.create(req.body)
       return res.send(planet)
     } catch (error) {
       next(error)
     }
   }
   async remove(req, res, next){
     try {
       let message = await planetService.remove(req.params.id)
       return res.send(message)
     } catch (error) {
       next(error)
     }
   }
}