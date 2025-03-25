import { useState } from "react";
import { DollarSign, Settings, User, Lock, Trash2, ArrowUpDown } from "lucide-react";
import { GrSchedulePlay } from "react-icons/gr";
import { MdOutlineVpnLock } from "react-icons/md";
import SportsSettingsModal from "./Rossan/SportsSettingsModal";
import UserStatusManagement from "./Rossan/UserStatusManagement";
import React, { memo } from "react";
const ICONS = {
  DollarSign,
  Settings,
  User,
  Lock,
  Trash2,
  ArrowUpDown,
  GrSchedulePlay,
  MdOutlineVpnLock,
};

const ActionButtons = memo(({ actions }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGr, setGr] = useState(null);
  const handleIconClick = (icon, onClick) => {
    console.log("Clicked icon:", icon);
  
    if (icon === "MdOutlineVpnLock") {
      setIsModalOpen(true);
    }
    //  else if (icon === "Settings") {
    //   setGr(!isGr);
    //   console.log(isGr);
      
    // }
     else if (onClick) {
      onClick();
    }
  };

  return (
    <>
      <div className="flex gap-2">
        {actions.map(({ icon, onClick, color }, index) => {
          const IconComponent = ICONS[icon];
          return (
            <button
              key={index}
              onClick={() => handleIconClick(icon, onClick)}
              className={`p-2 rounded ${color === "red" ? "text-red-500" : "text-gray-500"} bg-gray-300`}
            >
              {IconComponent && <IconComponent size={18} />}
            </button>
          );
        })}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <SportsSettingsModal onClose={() => setIsModalOpen(false)}/>
      )}
    {isGr && (
        <UserStatusManagement setGr={setGr}/>
      )}
    </>
  );
});

export default ActionButtons;
