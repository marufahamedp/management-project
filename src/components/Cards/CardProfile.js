import React, { useEffect, useState } from "react";

// components

export default function CardProfile({ studentInfo, studentImagepreview }) {

  console.log(studentInfo.firstName);
  const fullName = studentInfo.firstName + " " + studentInfo.lastName;

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative w-full left-9 -top-20">
                <div className="absolute ">
                  <div className="flex items-center justify-center" style={{ width: '150px', height: "150px", borderRadius: "50%", overflow: 'hidden' }}>
                  <img
                    alt="..."
                    src={studentImagepreview}
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
                    {studentInfo.semester}
                  </span>
                  <span className="text-sm text-blueGray-400">Semester</span>
                </div>
                <div className="lg:mr-4 text-center">
                  <span className="text-sm font-bold block uppercase tracking-wide text-blueGray-600">
                    {studentInfo.depertment}
                  </span>
                  <span className="text-sm text-blueGray-400">Depertment</span>
                </div>
              </div>


              <div className="flex justify-between py-4 lg:pt-4 pt-8">
                <div className="mr-4 text-center">
                  <span className="text-sm font-bold block uppercase tracking-wide text-blueGray-600">
                    {studentInfo.session}
                  </span>
                  <span className="text-sm text-blueGray-400">Session</span>
                </div>
                <div className="mr-4  text-center">
                  <span className="text-sm font-bold block uppercase tracking-wide text-blueGray-600">
                    {studentInfo.bloodGroup}
                  </span>
                  <span className="text-sm text-blueGray-400">Blood Group</span>
                </div>

              </div>

            </div>
            <div className="mt-20">
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                {studentInfo.address}
              </div>
          
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
