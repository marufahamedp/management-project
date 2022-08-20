import React from 'react';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

const PageNotFound = () => {
    return (
        <div>
           <div> <IndexNavbar fixed /></div>
            <div className="flex justify-center items-center" style={{ height: '600px' }}>
                <img className="mt-32" src="https://i.ibb.co/HC2QwPf/pagenot-found.png" alt="" />
            </div>
           <div> <Footer /></div>
        </div>
    );
};

export default PageNotFound;