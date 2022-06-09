import { galaxyService } from "../services/GalaxyService";
import { moonService } from "../services/MoonService";
import { planetService } from "../services/PlanetService";
import { specieService } from "../services/SpecieService";
import { starService } from "../services/StarService";
import BaseController from "../utils/BaseController";


export class SpeciesController extends BaseController{
  constructor(){
    super('api/species')
    this.router
    .get('', this.getAll)
    .get('/:id', this.getById)
    .post('', this.create)
    .delete('/:id', this.remove)
   }

   async getAll(req, res, next){
     try {
       let species = await specieService.getAll()
       return res.send(species)
     } catch (error) {
       next(error)
     }
   }
   async getById(req, res, next){
    try {
      let specie = await specieService.getById(req.params.id)
      return res.send(specie)
    } catch (error) {
      next(error)
    }
  }
   async create(req, res, next){
     try {
       let species = await specieService.create(req.body)
       return res.send(species)
     } catch (error) {
       next(error)
     }
   }
   async remove(req, res, next){
     try {
       let message = await specieService.remove(req.params.id)
       return res.send(message)
     } catch (error) {
       next(error)
     }
   }
}