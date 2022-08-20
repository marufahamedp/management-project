import React, { useEffect } from 'react';
import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";
import StudentsTable from './StudentsTable';
import FilterStudent from './FilterStudent';
const Student = () => {
    const [createStudent, setCreateStudent] = React.useState(false);
    const [studentsinfo, setStudentsinfo] = React.useState([]);
    const [studentd, setStudentd] = React.useState([]);
    const [searchstudents, setSearch] = React.useState();
    const [selectFilter, setSelectFilter] = React.useState();
    const [isloading, setIsloading] = React.useState(false);

    React.useEffect(() => {
        setIsloading(true);
        fetch(`http://localhost:5000/students`)
            .then(res => res.json())
            .then(data => {
                setStudentsinfo(data)
                setIsloading(false);
            })
    }, [studentsinfo])

    const handelselectFilter = (e) => {
        setSelectFilter(e.target.value)
    }
    const handelInputSearch = (e) => {
        setSearch(e.target.value)
    }

    const handelSearch = (e) => {
        e.preventDefault();
        if (selectFilter == 'a') {
            const result = studentsinfo.filter(studentsinfos => studentsinfos.firstName.toLocaleLowerCase().includes(searchstudents));
            setStudentd(result)
        }
        if (selectFilter == 'b') {
            const result = studentsinfo.filter(studentsinfos => studentsinfos.lastName.toLocaleLowerCase().includes(searchstudents));
            setStudentd(result)
        }
        if (selectFilter == 'c') {
            const result = studentsinfo.filter(studentsinfos => studentsinfos.semester.toLocaleLowerCase().includes(searchstudents));
            setStudentd(result)
        }
        if (selectFilter == 'd') {
            const result = studentsinfo.filter(studentsinfos => studentsinfos.depertment.toLocaleLowerCase().includes(searchstudents));
            setStudentd(result)
        }
        if (selectFilter == 'e') {
            const result = studentsinfo.filter(studentsinfos => studentsinfos.rollNo.toLocaleLowerCase().includes(searchstudents));
            setStudentd(result)
        }
        if (selectFilter == 'f') {
            const result = studentsinfo.filter(studentsinfos => studentsinfos.registrationNo.toLocaleLowerCase().includes(searchstudents));
            setStudentd(result)
        }
        if (selectFilter == 'g') {
            const result = studentsinfo.filter(studentsinfos => studentsinfos.session.toLocaleLowerCase().includes(searchstudents));
            setStudentd(result)
        }
        if (selectFilter == 'h') {
            const result = studentsinfo.filter(studentsinfos => studentsinfos.studentNumber.toLocaleLowerCase().includes(searchstudents));
            setStudentd(result)
        }
        if (selectFilter == 'i') {
            const result = studentsinfo.filter(studentsinfos => studentsinfos.emailId.toLocaleLowerCase().includes(searchstudents));
            setStudentd(result)
        }
        if (selectFilter == 'j') {
            const result = studentsinfo.filter(studentsinfos => studentsinfos.bloodGroup.toLocaleLowerCase().includes(searchstudents));
            setStudentd(result)
        }
        if (selectFilter == 'k') {
            const result = studentsinfo.filter(studentsinfos => studentsinfos.fatherName.toLocaleLowerCase().includes(searchstudents));
            setStudentd(result)
        }
        if (selectFilter == 'l') {
            const result = studentsinfo.filter(studentsinfos => studentsinfos.motherName.toLocaleLowerCase().includes(searchstudents));
            setStudentd(result)
        }
        if (selectFilter == 'm') {
            const result = studentsinfo.filter(studentsinfos => studentsinfos.address.toLocaleLowerCase().includes(searchstudents));
            setStudentd(result)
        }
        if (selectFilter == 'n') {
            const result = studentsinfo.filter(studentsinfos => studentsinfos.city.toLocaleLowerCase().includes(searchstudents));
            setStudentd(result)
        }
        if (selectFilter == 'o') {
            const result = studentsinfo.filter(studentsinfos => studentsinfos.postalCode.toLocaleLowerCase().includes(searchstudents));
            setStudentd(result)
        }
        if (selectFilter == 'p') {
            const result = studentsinfo.filter(studentsinfos => studentsinfos.aboutStudent.toLocaleLowerCase().includes(searchstudents));
            setStudentd(result)
        }
        if (selectFilter == 'all') {
            setStudentd(studentsinfo)
        }
    }
    return (
        <div className=''>
            <div className="flex justify-between items-center mt-28">
                <h3 className='text-xl font-bold'>Students</h3>
                {
                    !createStudent ? (
                        <>
                            <button onClick={() => setCreateStudent(true)} className='bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150'>Create New</button>
                        </>
                    ) : <button onClick={() => setCreateStudent(false)} className='bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150'>Cancle</button>
                }

            </div>
            <>
                {
                    createStudent ? (
                        <>
                            <CardSettings />

                        </>
                    ) : <>
                        <div className="flex justify-between items-center mt-12">

                            <div className=" flex items-center lg:w-3/12">
                                <div className="a"> <label for="filter" className='mr-2'>Filter Students</label></div>
                                <div className="lg:w-6/12">
                                    <select onChange={handelselectFilter} className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10 lg:w-12" id="filter">
                                        <option value="all">All</option>
                                        <option value="a">First Name</option>
                                        <option value="b">Last Name</option>
                                        <option value="c">Semister</option>
                                        <option value="d">Depertment</option>
                                        <option value="e">Roll No.</option>
                                        <option value="f">Registration No.</option>
                                        <option value="g">Session</option>
                                        <option value="h">Student Number</option>
                                        <option value="i">Email</option>
                                        <option value="j">Blood Group</option>
                                        <option value="k">Father Name</option>
                                        <option value="l">Mother Name</option>
                                        <option value="m">Address</option>
                                        <option value="n">City</option>
                                        <option value="o">Postal Code</option>
                                        <option value="p">About Student</option>
                                    </select>
                                </div>
                            </div>
                            <div className="relative flex lg:w-3/12 flex-wrap items-stretch mb-3">
                                <input onBlur={handelInputSearch} type="text" placeholder="Search" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10" />
                                <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                                    <button onClick={handelSearch} type="submit" > <i class="fa-solid fa-magnifying-glass"></i></button>
                                </span>
                            </div>

                        </div>
                        <div>
                            <div class="flex flex-col">
                                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                        <div class="overflow-hidden">
                                            {
                                                isloading ? <table class="min-w-full">
                                                    <thead class="border-b">
                                                        <tr className='bg-gray-800'>

                                                            <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                                                                Full Name
                                                            </th>
                                                            <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                                                                Semester
                                                            </th>
                                                            <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                                                                Depertment
                                                            </th>
                                                            <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                                                                Number
                                                            </th>
                                                            <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                                                                Actions
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            searchstudents?.length > 0 ? studentd.map(studentData => <StudentsTable
                                                                key={studentData._id}
                                                                studentData={studentData}
                                                            ></StudentsTable>) : studentsinfo.map(studentData => <StudentsTable
                                                                key={studentData._id}
                                                                studentData={studentData}
                                                            ></StudentsTable>)
                                                        }



                                                    </tbody>
                                                </table> : <button type="button" class="bg-indigo-500 ..." disabled>
                                                    <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                                                      
                                                    </svg>
                                                    Processing...
                                                </button>
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                }
            </>
        </div>
    );
};

export default Student;