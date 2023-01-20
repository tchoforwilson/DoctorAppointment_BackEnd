import mongoose from "mongoose";
import validator from 'validator';

const appointmentSchema = mongoose.Schema({
  code: {
    type: String,
    unique: [true,"Appointment already exists"],
    required: [true, "Please provide appointment code"],
  },
  time:String,
  date: {
    type: Date,
    default: Date.now(),
  },
  firstTime: {
    type: String,
    enum: ["No", "Yes"],
    default: "No",
  },
  requestDate: Date,
  status: {
    type: String,
    required: [true, "Patient must must have an appointment status"],
    enum: ["Passed", "Missed", "Reschedule", "Pending"],
    default: "Pending"
  },
  notes: {
    before: {
      type: String,
    },
    after: {
      type: String,
    }
  },
  patient: {
    type: mongoose.Schema.ObjectId,
    ref: "Patient",
    required: [true, "An appointment must belong to a patient"],
   
  },
},  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
  
appointmentSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'patient',
    select: '-_id -__v'
  });
  next();
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
