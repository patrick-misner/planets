import mongoose from 'mongoose'
import { GalaxySchema } from "../models/Galaxy";
import { MoonSchema } from "../models/Moon";
import { PlanetSchema } from "../models/Planet";
import { SpecieSchema } from "../models/Specie";
import { StarSchema } from "../models/Star";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Galaxies = mongoose.model('Galaxy', GalaxySchema)
  Stars = mongoose.model('Stars', StarSchema)
  Planets = mongoose.model('Planets', PlanetSchema)
  Moons = mongoose.model('Moons', MoonSchema)
  Species = mongoose.model('Species', SpecieSchema)
}

export const dbContext = new DbContext()
