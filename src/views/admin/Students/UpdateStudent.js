import React from 'react';

const UpdateStudent = () => {
    const [firstNamea, setFirstName] = useState('')
  const [lastNamea, setLastName] = useState('')
  const [emailIda, setemailId] = useState('')
  const [depertmenta, setDepertment] = useState('')
  const [semestera, setSemester] = useState('')
  const [sessiona, setSession] = useState('')
  const [rollNoa, setRollNo] = useState('')
  const [registrationNoa, setRegistrationNo] = useState('')
  const [bloodGroupa, setBloodGroup] = useState('')
  const [studentImagea, setStudentImage] = useState(null)
  const [studentImagepreviewa, setStudentImagepreview] = useState()
  const [fatherNamea, setFatherName] = useState('')
  const [motherNamea, setMotherName] = useState('')
  const [fatherNumbera, setFatherNumber] = useState('')
  const [motherNumbera, setMotheNumber] = useState('')
  const [studentNumbera, setStudentNumber] = useState('')
  const [addressa, setAddress] = useState('')
  const [citya, setCity] = useState('')
  const [countrya, setCountry] = useState('')
  const [postalCodea, setPostalCode] = useState('')
  const [aboutStudenta, setAboutStudent] = useState('')


  const handelFirstName = e => {
    setFirstName(e.target.value);
  }
  const handelLastName = e => {
    setLastName(e.target.value);
  }
  const handelEmailId = e => {
    setemailId(e.target.value);
  }
  const handelDepertment = e => {
    setDepertment(e.target.value);
  }
  const handelSemester = e => {
    setSemester(e.target.value);
  }
  const handelSession = e => {
    setSession(e.target.value);
  }
  const handelRollNo = e => {
    setRollNo(e.target.value);
  }
  const handelRegistrationNo = e => {
    setRegistrationNo(e.target.value);
  }
  const handelBloodGroup = e => {
    setBloodGroup(e.target.value);
  }
  const handelStudentImage = e => {
    const file = e.target.files[0];
    setStudentImage(file);
  }
  const handelFatherName = e => {
    setFatherName(e.target.value);
  }
  const handelMotheName = e => {
    setMotherName(e.target.value);
  }
  const handelFatherNumber = e => {
    setFatherNumber(e.target.value);
  }
  const handelMotheNumber = e => {
    setMotheNumber(e.target.value);
  }
  const handelStudentNumber = e => {
    setStudentNumber(e.target.value);
  }
  const handelAddress = e => {
    setAddress(e.target.value);
  }
  const handelCity = e => {
    setCity(e.target.value);
  }
  const handelCountry = e => {
    setCountry(e.target.value);
  }
  const handelPostalCode = e => {
    setPostalCode(e.target.value);
  }
  const handelAboutStudent = e => {
    setAboutStudent(e.target.value);
  }
  const studentInfo = {
    firstName:firstNamea,
    lastName:lastNamea,
    emailId:emailIda,
    depertment:depertmenta,
    semester:semestera,
    session:sessiona,
    rollNo:rollNoa,
    registrationNo:registrationNoa,
    bloodGroup:bloodGroupa,
    fatherName:fatherNamea,
    motherName:motherNamea,
    fatherNumber:fatherNumbera,
    motherNumber:motherNumbera,
    studentNumber:studentNumbera,
    address:addressa,
    city:citya,
    country:countrya,
    postalCode:postalCodea,
    aboutStudent:aboutStudenta
  }
    return (
        <div>
            
        </div>
    );
};

export default UpdateStudent;