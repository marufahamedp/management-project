import axios from 'axios';
import React, { useState } from 'react';
import { Simulate } from 'react-dom/test-utils';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const StudentsTable = ({ studentData }) => {
    const [deleteStudent, setDeleteStudent] = useState(false)
    const [showModal, setShowModal] = React.useState(false);
    const [alertset, setAlert] = React.useState(false);
    const handelopenModal = e => {
        e.preventDefault();
        setDeleteStudent(true)
    }
    const handelcloseModal = e => {
        e.preventDefault();
        setDeleteStudent(false)
    }
    const { studenProfileImage,
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
        aboutStudent,
        _id } = studentData;
    const { studentID } = useParams()

    const handelDelete = id => {
        const url = `http://localhost:5000/students/${id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log('student deleted');
                }
            })
    }



    const handelFirstName = e => {
        fetch(`http://localhost:5000/students/${_id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    firstName: e.target.value,
                }
            )
        })
            .then(data => {
                setAlert(true);
                setTimeout(() => { setAlert(false); }, 2000)
            })
            ;

    }
    const handelLastName = e => {
        fetch(`http://localhost:5000/students/${_id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    lastName: e.target.value,
                }
            )
        })
        .then(data => {
            setAlert(true);
            setTimeout(() => { setAlert(false); }, 2000)
        });
    }
    const handelEmailId = e => {
        fetch(`http://localhost:5000/students/${_id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    emailId: e.target.value,
                }
            )
        })
        .then(data => {
            setAlert(true);
            setTimeout(() => { setAlert(false); }, 2000)
        });
    }
    const handelDepertment = e => {
        fetch(`http://localhost:5000/students/${_id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    depertment: e.target.value,
                }
            )
        })
        .then(data => {
            setAlert(true);
            setTimeout(() => { setAlert(false); }, 2000)
        });
    }
    const handelSemester = e => {
        fetch(`http://localhost:5000/students/${_id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    semester: e.target.value,
                }
            )
        })
        .then(data => {
            setAlert(true);
            setTimeout(() => { setAlert(false); }, 2000)
        });
    }
    const handelSession = e => {
        fetch(`http://localhost:5000/students/${_id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    session: e.target.value,
                }
            )
        })
        .then(data => {
            setAlert(true);
            setTimeout(() => { setAlert(false); }, 2000)
        });
    }
    const handelRollNo = e => {
        fetch(`http://localhost:5000/students/${_id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    rollNo: e.target.value,
                }
            )
        })
        .then(data => {
            setAlert(true);
            setTimeout(() => { setAlert(false); }, 2000)
        });
    }
    const handelRegistrationNo = e => {
        fetch(`http://localhost:5000/students/${_id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    registrationNo: e.target.value,
                }
            )
        })
        .then(data => {
            setAlert(true);
            setTimeout(() => { setAlert(false); }, 2000)
        });
    }
    const handelBloodGroup = e => {
        fetch(`http://localhost:5000/students/${_id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    bloodGroup: e.target.value,
                }
            )
        })
        .then(data => {
            setAlert(true);
            setTimeout(() => { setAlert(false); }, 2000)
        });
    }
    const handelStudentImage = e => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.set('key', '83086cac66afe6cb44e98530b1eddae6')
        formData.append('image', file)

        axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload',
            data: formData
        })
            .then((response) => {
                axios({
                    method: 'put',
                    url: `http://localhost:5000/students/${_id}`,
                    data: {
                        studenProfileImage: response.data.data.image.url,
                    }
                })
                .then(res => {
                    setAlert(true);
                    setTimeout(() => { setAlert(false); }, 2000)
                })

            })
    }
    const handelFatherName = e => {
        fetch(`http://localhost:5000/students/${_id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    fatherName: e.target.value,
                }
            )
        })
        .then(data => {
            setAlert(true);
            setTimeout(() => { setAlert(false); }, 2000)
        });
    }
    const handelMotheName = e => {
        fetch(`http://localhost:5000/students/${_id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    motherName: e.target.value,
                }
            )
        })
        .then(data => {
            setAlert(true);
            setTimeout(() => { setAlert(false); }, 2000)
        });
    }
    const handelFatherNumber = e => {
        fetch(`http://localhost:5000/students/${_id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    fatherNumber: e.target.value,
                }
            )
        })
        .then(data => {
            setAlert(true);
            setTimeout(() => { setAlert(false); }, 2000)
        });
    }
    const handelMotheNumber = e => {
        fetch(`http://localhost:5000/students/${_id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    motherNumber: e.target.value,
                }
            )
        })
        .then(data => {
            setAlert(true);
            setTimeout(() => { setAlert(false); }, 2000)
        });
    }
    const handelStudentNumber = e => {
        fetch(`http://localhost:5000/students/${_id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    studentNumber: e.target.value,
                }
            )
        })
        .then(data => {
            setAlert(true);
            setTimeout(() => { setAlert(false); }, 2000)
        });
    }
    const handelAddress = e => {
        fetch(`http://localhost:5000/students/${_id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    address: e.target.value,
                }
            )
        })
        .then(data => {
            setAlert(true);
            setTimeout(() => { setAlert(false); }, 2000)
        });
    }
    const handelCity = e => {
        fetch(`http://localhost:5000/students/${_id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    city: e.target.value,
                }
            )
        })
        .then(data => {
            setAlert(true);
            setTimeout(() => { setAlert(false); }, 2000)
        });
    }
    const handelCountry = e => {
        fetch(`http://localhost:5000/students/${_id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    country: e.target.value,
                }
            )
        })
        .then(data => {
            setAlert(true);
            setTimeout(() => { setAlert(false); }, 2000)
        });
    }
    const handelPostalCode = e => {
        fetch(`http://localhost:5000/students/${_id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    postalCode: e.target.value,
                }
            )
        })
        .then(data => {
            setAlert(true);
            setTimeout(() => { setAlert(false); }, 2000)
        });
    }
    const handelAboutStudent = e => {
        fetch(`http://localhost:5000/students/${_id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    aboutStudent: e.target.value,
                }
            )
        })
        .then(data => {
            setAlert(true);
            setTimeout(() => { setAlert(false); }, 2000)
        });
    }





    return (
        <tr class="border-b">

            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {firstName} {lastName}
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {semester}
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {depertment}
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {studentNumber}
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <Link to={`/studentprofile/${_id}`}><button className='mr-3'><i class="fa-solid fa-eye"></i></button></Link>

                <button className='mr-3' onClick={() => setShowModal(true)}><i class="fa-solid fa-pencil"></i></button>
                <button onClick={handelopenModal} className=''><i class="fa-solid fa-trash"></i></button>



                {/* <button onClick={() => handelDelete(_id)} className=''><i class="fa-solid fa-trash"></i></button> */}

                {
                    deleteStudent ? <>
                        <>
                            <div
                                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                            >
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}

                                        {/*body*/}
                                        <div className="relative p-1 px-20 flex-auto text-center">
                                            <p className="my-4 text-slate-500 text-3xl font-bold leading-relaxed">
                                                Are you sure ?
                                            </p>
                                            <p className="my-4 text-slate-500 text-xl  leading-relaxed">
                                                you want to remove this student
                                            </p>
                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-center p-6  rounded-b">
                                            <button
                                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-3 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={handelcloseModal}
                                            >
                                                Cancle
                                            </button>
                                            <button
                                                className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => handelDelete(_id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    </> : null
                }


                {showModal ? (
                    <>
                        <div
                            className="justify-center items-center px-4 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto w-full">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            Make Change For Update
                                        </h3>
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                    </div>
                                    {
                                        alertset && <div class="bg-green-600 fixed bottom-2 lg:w-60  text-white px-4 py-3 rounded-md animate-bounce		" role="alert">
                                            <div className="flex items-center">
                                            <i class="fa-solid fa-circle-check mr-2"></i>
                                            <p class="text-sm font-bold">This fild has been updated.</p>
                                            </div>
                                        </div>
                                    }

                                    {/*body*/}
                                    <div className="relative overflow-x-hidden overflow-y-auto p-6 flex-auto " style={{ height: '450px' }} >
                                        <>
                                            <div className="flex flex-wrap " >
                                                <div className="w-full " >
                                                    <div className="relative flex flex-col min-w-0 break-words w-full  mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">

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
                                                                                defaultValue={firstName}
                                                                                onBlur={handelFirstName}
                                                                                autofocus
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
                                                                                defaultValue={lastName}
                                                                                onBlur={handelLastName}
                                                                                autofocus
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
                                                                                defaultValue={emailId}
                                                                                onBlur={handelEmailId}
                                                                                autofocus
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-full lg:w-6/12 px-4">
                                                                        <div className="relative w-full mb-3">

                                                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                                                htmlFor="depertment">Depertment</label>

                                                                            <select id="depertment" onBlur={handelDepertment} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue={depertment}>
                                                                                <option value="Computer" selected>{depertment}</option>
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
                                                                                <option value="Computer" selected>{semester}</option>
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
                                                                                defaultValue={session}
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
                                                                                defaultValue={rollNo}
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
                                                                                defaultValue={registrationNo}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="w-full lg:w-6/12 px-4">
                                                                        <div className="relative w-full mb-3">
                                                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                                                htmlFor="bloodgroup">Blood Group</label>

                                                                            <select id="bloodgroup" onBlur={handelBloodGroup} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                                                                                <option selected>{bloodGroup}</option>
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
                                                                                defaultValue={fatherName}
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
                                                                                defaultValue={motherName}
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
                                                                                defaultValue={fatherNumber}
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
                                                                                defaultValue={motherNumber}
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
                                                                                defaultValue={studentNumber}
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

                                                                                defaultValue={address}
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
                                                                                defaultValue={city}
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
                                                                                defaultValue={country}
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
                                                                                defaultValue={postalCode}
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
                                                                                defaultValue={aboutStudent}
                                                                                rows="4"
                                                                            ></textarea>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </>
                ) : null}











            </td>
        </tr>
    );
};

export default StudentsTable;