
import mongoose from 'mongoose'
 
const Schema = mongoose.Schema
 
const StudentSchema = new Schema({
    firstName: {
        type: String,
        required: 'First name required'
    },
    lastName: {
        type: String,
        required: 'Last name is required.'
    }
})
 
export default StudentSchema;