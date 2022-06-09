import mongoose from "mongoose";
import { SpeciesController } from "../controllers/SpeciesController";

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const SpaceshipSchema = new Schema({
  speciesId ...ObjectId. objectId ref Species,
  planetId ... Object ref Planet
})

SpaceshipSchema.virtual('species')
{
  localfield: speciesId
  ref: Species
  foreignfield: _id
}