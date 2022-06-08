import mongoose from "mongoose";

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const PlanetSchema = new Schema({
  name: {type: String, required: true},
  type: {type: String, enum: ['GasGiant', 'Rocky', 'Dwarf']},
  galaxyId: {type: ObjectId, ref: 'Galaxies', required: true},
  starId: {type: ObjectId, ref: 'Stars', required: true}
})