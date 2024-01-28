import { Schema, model, models } from "mongoose";
import { IService } from "../interface/IService";

const ServiceSchema = new Schema<IService>({
  // Write your Schema properties here
},{timestamps:true})

const Service = model<IService>("Service", ServiceSchema) || models.Service;

export default Service;