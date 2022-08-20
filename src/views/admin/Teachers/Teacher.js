import React from 'react';
import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";
import CardSettingsForTeachers from './CardSettingsForTeachers';
const Teacher = () => {
    const [createTeacher, setcreateTeacher] = React.useState(false);
    return (
        <div>
        <div className="flex justify-between items-center mt-28">
            <h3 className='text-xl font-bold'>Teachers</h3>
            {
                !createTeacher ? (
                    <>
                        <button onClick={() => setcreateTeacher(true)} className='bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150'>Create New</button>
                    </>
                ) : <button onClick={() => setcreateTeacher(false)} className='bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150'>Cancle</button>
            }

        </div>
        <>
            {
                createTeacher ? (
                    <>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-8/12 px-4">
                                <CardSettingsForTeachers />
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <CardProfile />
                            </div>
                        </div>
                    </>
                ) : null
            }
        </>
    </div>
    );
};

export default Teacher;