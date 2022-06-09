import mongoose from "mongoose";

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const SpecieSchema = new Schema({
  name: {type: String, required: true},
})