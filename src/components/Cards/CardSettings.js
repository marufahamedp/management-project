import React, { useState } from "react";
import axios from "axios"
import CardProfile from "./CardProfile";
// components

export default function CardSettings() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emailId, setemailId] = useState('')
  const [depertment, setDepertment] = useState('')
  const [semester, setSemester] = useState('')
  const [session, setSession] = useState('')
  const [rollNo, setRollNo] = useState('')
  const [registrationNo, setRegistrationNo] = useState('')
  const [bloodGroup, setBloodGroup] = useState('')
  const [studentImage, setStudentImage] = useState(null)
  const [studentImagepreview, setStudentImagepreview] = useState()
  const [fatherName, setFatherName] = useState('')
  const [motherName, setMotherName] = useState('')
  const [fatherNumber, setFatherNumber] = useState('')
  const [motherNumber, setMotheNumber] = useState('')
  const [studentNumber, setStudentNumber] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [aboutStudent, setAboutStudent] = useState('')


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
    firstName,
    lastName,
    emailId,
    depertment,
    semester,
    session,
    rollNo,
    registrationNo,
    bloodGroup,
    fatherName,
    motherName,
    fatherNumber,
    motherNumber,
    studentNumber,
    address,
    city,
    country,
    postalCode,
    aboutStudent
  }
  const handelStudentInfo = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.set('key', '83086cac66afe6cb44e98530b1eddae6')
    formData.append('image', studentImage)

    axios({
      method: 'post',
      url: 'https://api.imgbb.com/1/upload',
      data: formData
    })
      .then((response) => {
        axios.post(`http://localhost:5000/students`, {
          studenProfileImage: response.data.data.image.url,
          firstName,
          lastName,
          emailId,
          depertment,
          semester,
          session,
          rollNo,
          registrationNo,
          bloodGroup,
          fatherName,
          motherName,
          fatherNumber,
          motherNumber,
          studentNumber,
          address,
          city,
          country,
          postalCode,
          aboutStudent
        })
          .then((res) => {
            setStudentImagepreview(response.data.data.image.url);
            
          })

      })
  }




  return (
    <>
      <>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-8/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mt-14 mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
              {/* <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">My account</h6>
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              Settings
            </button>
          </div>
        </div> */}
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Student Information
                  </h6>
                  <div className="flex flex-wrap">

                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="firstname"
                        >
                          First Name
                        </label>
                        <input
                          id="firstname"
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Enter First Name"
                          onBlur={handelFirstName}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="lastName"
                        >
                          Last Name
                        </label>
                        <input
                          id="lastName"
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Enter Last Name"
                          onBlur={handelLastName}
                        />
                      </div>
                    </div>

                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="emailId"
                        >
                          Email address
                        </label>
                        <input
                          id="emailId"
                          type="email"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Enter Email Address"
                          onBlur={handelEmailId}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">

                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="depertment">Depertment</label>

                        <select id="depertment" onBlur={handelDepertment} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                          <option value="Computer">Computer</option>
                          <option value="Civil">Civil</option>
                          <option value="Electricle">Electricle</option>

                        </select>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="semester">Semester</label>

                        <select id="semester" onBlur={handelSemester} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                          <option value="1st">1st</option>
                          <option value="2nd">2nd</option>
                          <option value="3rd">3rd</option>
                          <option value="4th">4th</option>
                          <option value="5th">5th</option>
                          <option value="6th">6th</option>
                          <option value="7th">7th</option>
                          <option value="8th">8th</option>

                        </select>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="session"
                        >
                          Session
                        </label>
                        <input
                          id="session"
                          onBlur={handelSession}
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Enter Sesson"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="rollno"
                        >
                          Roll No.
                        </label>
                        <input
                          id="rollno"
                          onBlur={handelRollNo}
                          type="number"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Enter  Roll No."
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="regestrationno"
                        >
                          Registration No.
                        </label>
                        <input
                          id="regestrationno"
                          onBlur={handelRegistrationNo}
                          type="number"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Enter  Registration No."
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="bloodgroup">Blood Group</label>

                        <select id="bloodgroup" onBlur={handelBloodGroup} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                          <option value="A+">A+</option>
                          <option value=">A-">A-</option>
                          <option value="B+">B+</option>
                          <option value="B-">B-</option>
                          <option value="O+">O+</option>
                          <option value="O-">O-</option>
                          <option value="AB+">AB+</option>
                          <option value="AB-">AB-</option>

                        </select>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="studentimage"
                        >
                          Student Image (Best 360 x 360)
                        </label>
                        <input
                          id="studentimage"
                          onBlur={handelStudentImage}
                          type="file"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Enter  Registration No."
                        />
                      </div>
                    </div>
                  </div>

                  <hr className="mt-6 border-b-1 border-blueGray-300" />

                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Contact Information
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="fathername"
                        >
                          Father Name
                        </label>
                        <input
                          id="fathername"
                          onBlur={handelFatherName}
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Student Father Name"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="mothername"
                        >
                          Mother Name
                        </label>
                        <input
                          id="mothername"
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Student Mother Name"
                          onBlur={handelMotheName}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="fathernumber"
                        >
                          Father Phone Number
                        </label>
                        <input
                          id="fathernumber"
                          onBlur={handelFatherNumber}
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Student Father Phone Number"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="mothernumber"
                        >
                          Mother Phone Number
                        </label>
                        <input
                          id="mothernumber"
                          onBlur={handelMotheNumber}
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Student Mother Phone Number"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="studentnumber"
                        >
                          Student Phone Numner
                        </label>
                        <input
                          id="studentnumber"
                          onBlur={handelStudentNumber}
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder=" Student Phone Numner"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="address"
                        >
                          Address
                        </label>
                        <input
                          id="address"
                          onBlur={handelAddress}
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="city"
                        >
                          City
                        </label>
                        <input
                          id="city"
                          onBlur={handelCity}
                          type="email"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          defaultValue="New York"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="country"
                        >
                          Country
                        </label>
                        <input
                          id="country"
                          onBlur={handelCountry}
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          defaultValue="United States"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="postalcode"
                        >
                          Postal Code
                        </label>
                        <input
                          id="postalcode"
                          onBlur={handelPostalCode}
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          defaultValue="Postal Code"
                        />
                      </div>
                    </div>

                  </div>

                  <hr className="mt-6 border-b-1 border-blueGray-300" />

                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    About Student
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="aboutstudent"
                        >
                          About Student
                        </label>
                        <textarea
                          id="aboutstudent"
                          onBlur={handelAboutStudent}
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          defaultValue="A beautiful UI Kit and Admin for React & Tailwind CSS. It is Free and Open Source."
                          rows="4"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button onClick={handelStudentInfo} className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 ">Save Changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <CardProfile
            studentInfo={studentInfo}
            studentImagepreview={studentImagepreview}
            />
          </div>
        </div>
      </>

    </>
  );
}
