import { galaxyService } from "../services/GalaxyService";
import { moonService } from "../services/MoonService";
import { planetService } from "../services/PlanetService";
import { specieService } from "../services/SpecieService";
import { starService } from "../services/StarService";
import BaseController from "../utils/BaseController";


export class GalaxiesController extends BaseController{
  constructor(){
    super('api/galaxies')
    this.router
    .get('', this.getAll)
    .get('/:id', this.getById)
    .get('/:id/stars', this.getStars)
    .get('/:id/planets', this.getPlanets)
    .get('/:id/moons', this.getMoons)
    .get('/:id/species', this.getSpecies)
    .post('', this.create)
    .delete('/:id', this.remove)
   }

   async getAll(req, res, next){
     try {
       let galaxies = await galaxyService.getAll()
       return res.send(galaxies)
     } catch (error) {
       next(error)
     }
   }
   async getById(req, res, next){
     try {
       let galaxy = await galaxyService.getById(req.params.id)
       return res.send(galaxy)
     } catch (error) {
       next(error)
     }
   }
   async getStars(req, res, next){
     try {
      let stars = await starService.getAll({galaxyId: req.params.id})
      return res.send(stars)
     } catch (error) {
       next(error)
     }
   }
   async getPlanets(req, res, next){
     try {
       let planets = await planetService.getAll({galaxyId: req.params.id})
       return res.send(planets)
     } catch (error) {
       next(error)
     }
   }
   async getMoons(req, res, next){
     try {
       let moons = await moonService.getAll({galaxyId: req.params.id})
       return res.send(moons)
     } catch (error) {
       next(error)
     }
   }
   async getSpecies(req, res, next){
     try {
       let specie = await specieService.getAll({galaxyId: req.params.id})
       return res.send(specie)
     } catch (error) {
       next(error)
     }
   }
   async create(req, res, next){
     try {
       let galaxy = await galaxyService.create(req.body)
       return res.send(galaxy)
     } catch (error) {
       next(error)
     }
   }
   async remove(req, res, next){
     try {
       let message = await galaxyService.remove(req.params.id)
       return res.send(message)
     } catch (error) {
       next(error)
     }
   }
}