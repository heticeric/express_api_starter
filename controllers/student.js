
import mongoose from 'mongoose'
import studentSchema from '../models/student'
 
const Student = mongoose.model('Student', studentSchema)
 
// add new download to the database
export function addNewStudent(req, res) {
    let newStudent = new Student(req.body)
    newStudent.save((error, download) => {
        if (error) { res.json(error) }
        res.json(download)
    })
}
 
// get all downloads from the database
export function getStudents(req, res) {
    Student.find({}, (error, downloads) => {
        if (error) { res.json(error) }
        res.json(downloads)
    })
}
 
// get single download based on the id
export function getStudent(req, res) {
    Student.findById(req.params.id, (error, download) => {
        if (error) { res.json(error) }
        res.json(download)
    })
}
 
// update the download information based on id
export function updateStudent(req, res) {
    Student.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (error, download) => {
        if (error) { res.json(error) }
        res.json(download)
    })
}
 
// delete the download from the database.
export function deleteStudent(req, res) {
    Student.remove({ _id: req.params.id }, (error, download) => {
        if (error) { res.json(error) }
        res.json(download)
    })
}