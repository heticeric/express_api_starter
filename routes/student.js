
import { addNewStudent, getStudents, getStudent, updateStudent, deleteStudent } from '../controllers/student'
 
const routes = ( app ) =>
{
    app.route( '/student' )
        .get( getStudents )
        .post( addNewStudent )
 
    app.route( '/student/:id' )
        .get( getStudent)
        .put( updateStudent )
        .delete( deleteStudent )
}
 
export default routes;
