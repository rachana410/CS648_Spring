import mongoose from "mongoose";

const EmployeesSchema = new mongoose.Schema({
    name: {
        type:String, 
        required:[true, 'name is required']
    },
    extension: {
        type:Number, 
        required:[true, 'extension is required']
    },
    email: {
        type:String, 
        required:[true, 'email is required']
    },
    title: {
        type:String, 
        required:[true, 'title is required']
    },
    dateHired: { 
        type: Date, 
        default:Date.now
    },
    currentlyEmployed: { 
        type: Boolean, 
        default:true
    }
})
export default mongoose.model('Employee', EmployeesSchema) 