import mongoose from "mongoose";

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const MoonSchema = new Schema({
  name: {type: String, required: true},
  galaxyId: {type: ObjectId, ref: 'Galaxies', required: true},
  starId: {type: ObjectId, ref: 'Stars', required: true},
  planetId: {type: ObjectId, ref: 'Planets', required: true}
})