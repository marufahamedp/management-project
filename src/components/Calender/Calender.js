import React, { useState, useContext, useEffect } from "react";

import { getMonth } from "../../util";


import CalendarHeader from "components/CalendarHeader";
import EventModal from "components/EventModal";
import Sidebar from "components/Sidebar";
import Month from "components/Month";
import GlobalContext from "context/GlobalContext";
function Calender() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}

      <div className="">
        <CalendarHeader />
        <div className="">
          <div className="flex xl:flex-row sm:flex-col">
            <div className="a">
            <Sidebar />
            </div>
            <div className="w-full">
            <Month month={currenMonth} />
            </div>
          </div>  
        </div>
      </div>
    </React.Fragment>
  );
}

export default Calender;