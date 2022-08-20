import React, { useContext } from "react";

import GlobalContext from "../context/GlobalContext";
export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
    >
  <i class="fa-solid fa-plus"></i>
      <span className="pl-1 pr-2"> Create</span> 
    </button>
  );
}
