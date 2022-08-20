import React from 'react';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { useParams } from 'react-router';
import StudentProfileData from './StudentProfileData';
const StudentProfile = () => {
    const { studentID } = useParams();
    console.log(studentID);
    const [studentsinfo, setStudentsinfo] = React.useState([]);
    React.useEffect(() => {
        fetch(`http://localhost:5000/students/id/${studentID}`)
            .then(res => res.json())
            .then(data => setStudentsinfo(data))
    }, [studentsinfo])


    return (
        <div>
            <div className="mb-40">
                <IndexNavbar />
            </div>
            <div className="my-4 mb-60">
               {
                studentsinfo.map(studentdata=> <StudentProfileData
                key={studentdata._id}
                studentdata={studentdata}
                ></StudentProfileData>)
               }
            </div>
            <Footer />
        </div>
    );
};

export default StudentProfile;