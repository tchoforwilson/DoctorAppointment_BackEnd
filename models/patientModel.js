import mongoose from "mongoose";
import validator from "validator";

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Patient must have a name"],
    trim: true,
    maxLength: [30, "Patient name too long"],
    minLength: [5, "Patient name to short"],
  },
  age: {
    type: Number,
    required: [true, "Patient must have an age"],
  },
  gender: {
    type: String,
    required: [true, "Patient must have a gender"],
    enum: ["Male", "Female"],
  },
  phone: {
    type: String,
    required: [true, "Patient must have a phone number"],
    validate: [validator.isMobilePhone, "Please provide a valid phone number"]
  },
  email: {
    type: String,
    required: [true, "Please provide patient email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  address: {
    address: String,
    city: String
  }
});

const Patient = mongoose.model("Patient", patientSchema);
export default Patient;
