import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-12 pb-12 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Student"
                  statTitle="350,897"
        
                  statPercentColor="text-emerald-500"
           
                  statIconName="fa-solid fa-users"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Teachers"
                  statTitle="2,356"
   
                  statPercentColor="text-red-500"
                  
                  statIconName="fa-solid fa-person-chalkboard"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Subjects"
                  statTitle="924"
   
                  statPercentColor="text-orange-500"
              
                  statIconName="fa-solid fa-s"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Depertments"
                  statTitle="3"
                  statPercentColor="text-emerald-500"
                
                  statIconName="fa-solid fa-book"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
