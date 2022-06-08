import mongoose from 'mongoose'
import { GalaxySchema } from "../models/Galaxy";
import { StarSchema } from "../models/Star";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Galaxies = mongoose.model('Galaxy', GalaxySchema)
  Stars = mongoose.model('Stars', StarSchema)
  // Planets = mongoose.model('Planets', PlanetsSchema)
  // Moons = mongoose.model('Moons', MoonsSchema)
  // Species = mongoose.model('Species', SpeciesSchema)
}

export const dbContext = new DbContext()
