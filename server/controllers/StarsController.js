import { galaxyService } from "../services/GalaxyService";
import { starService } from "../services/StarService";
import BaseController from "../utils/BaseController";


export class StarsController extends BaseController{
  constructor(){
    super('api/stars')
    this.router
    .get('', this.getAll)
    .get('/:id', this.getById)
    .get('/:id/planets', this.getPlanets)
    .get('/:id/moons', this.getMoons)
    .get('/:id/species', this.getSpecies)
    .post('', this.create)
    .delete('/:id', this.remove)
   }

   async getAll(req, res, next){
     try {
       let stars = await starService.getAll()
       return res.send(stars)
     } catch (error) {
       next(error)
     }
   }
   async getById(req, res, next){
    try {
      let star = await starService.getById(req.params.id)
      return res.send(star)
    } catch (error) {
      next(error)
    }
  }

   async getPlanets(req, res, next){
     try {
       let planets = await planetService.getAll({galaxiesId: req.params.id})
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
       let star = await starService.create(req.body)
       return res.send(star)
     } catch (error) {
       next(error)
     }
   }
   async remove(req, res, next){
     try {
       let message = await starService.remove(req.params.id)
       return res.send(message)
     } catch (error) {
       next(error)
     }
   }
}