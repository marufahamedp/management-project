import React from 'react';

const StudentProfileData = ({ studentdata }) => {
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
        _id } = studentdata;
    const fullName = firstName + " " + lastName;
    return (
        <div>
            <div className="flex flex-wrap">
            <div className="w-full lg:w-9/12 px-4">
                    <div className="shadow flex items-center justify-between p-3">
                        <h3 className='font-bold '>Profile</h3>
                        <div className="a">
                            <button className='bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 '>Generate ID Card</button>
                        </div>
                    </div>
                    <div className="">
                        <div className="w-full">
                        <div class="flex flex-col">
                            <div class="overflow-x-auto">
                                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                    <div class="overflow-hidden">
                                        <table class="min-w-full">
                                            <thead class="bg-white border-b">
                                                <tr>
                                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                        Name
                                                    </th>
                                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    {firstName} {lastName}
                                                    </th>
                                               
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Email</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {emailId}
                                                    </td>                                  
                                                </tr>
                                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Depertment</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {depertment}
                                                    </td>
                                                </tr>
                                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Semester</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {semester}
                                                    </td>
                                                </tr>
                                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Session</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {session}
                                                    </td>
                                                </tr>
                                              
                                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Roll No.</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {rollNo}
                                                    </td>
                                                </tr>
                                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Registration No.</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {registrationNo}
                                                    </td>
                                                </tr>
                                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Blood Goroup</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {bloodGroup}
                                                    </td>
                                                </tr>
                                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Father Name</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {fatherName}
                                                    </td>
                                                </tr>
                                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Mother Name</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {motherName}
                                                    </td>
                                                </tr>
                                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Father Phone Number</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {fatherNumber}
                                                    </td>
                                                </tr>
                                              
                                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Mother Phone Number</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {motherNumber}
                                                    </td>
                                                </tr>
                                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Student Phone Number</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {studentNumber}
                                                    </td>
                                                </tr>
                                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Address</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {address}
                                                    </td>
                                                </tr>
                                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">City</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {city}
                                                    </td>
                                                </tr>
                                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Postal Code</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {postalCode}
                                                    </td>
                                                </tr>
                                              
                                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Country</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {country}
                                                    </td>
                                                </tr>
                                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">About {firstName}</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {aboutStudent}
                                                    </td>
                                                </tr>
                                              
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>     
                    </div>
                </div>
                <div className="w-full lg:w-3/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full px-4 flex justify-center">
                                    <div className="relative w-full  -top-20" style={{ left: '20%' }}>
                                        <div className="absolute ">
                                            <div className="flex items-center justify-center" style={{ width: '150px', height: "150px", borderRadius: "50%", overflow: 'hidden' }}>
                                                <img
                                                    alt="..."
                                                    src={studenProfileImage}
                                                    className="shadow-xl h-auto align-middle border-none  max-w-150-px"
                                                />
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="w-full px-4 text-center mt-20">
                                    <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                        {fullName}
                                    </h3>
                                    <div className="flex justify-between py-4 lg:pt-4 pt-8">
                                        <div className="mr-4  text-center">
                                            <span className="text-sm font-bold block uppercase tracking-wide text-blueGray-600">
                                                {semester}
                                            </span>
                                            <span className="text-sm text-blueGray-400">Semester</span>
                                        </div>
                                        <div className="lg:mr-4 text-center">
                                            <span className="text-sm font-bold block uppercase tracking-wide text-blueGray-600">
                                                {depertment}
                                            </span>
                                            <span className="text-sm text-blueGray-400">Depertment</span>
                                        </div>
                                    </div>


                                    <div className="flex justify-between py-4 lg:pt-4 pt-8">
                                        <div className="mr-4 text-center">
                                            <span className="text-sm font-bold block uppercase tracking-wide text-blueGray-600">
                                                {session}
                                            </span>
                                            <span className="text-sm text-blueGray-400">Session</span>
                                        </div>
                                        <div className="mr-4  text-center">
                                            <span className="text-sm font-bold block uppercase tracking-wide text-blueGray-600">
                                                {bloodGroup}
                                            </span>
                                            <span className="text-sm text-blueGray-400">Blood Group</span>
                                        </div>

                                    </div>

                                </div>
                                <div className="mt-4">
                                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                        <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                                        {address}
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default StudentProfileData;