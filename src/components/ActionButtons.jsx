import { DollarSign, Settings, User, Lock, Trash2 ,ArrowUpDown } from "lucide-react";
import { GrSchedulePlay } from "react-icons/gr"
import { MdOutlineVpnLock } from "react-icons/md"


const ICONS = {
  DollarSign: DollarSign,
  Settings: Settings,
  User: User,
  Lock: Lock,
  Trash2: Trash2,
  ArrowUpDown: ArrowUpDown,
  GrSchedulePlay: GrSchedulePlay,
  MdOutlineVpnLock: MdOutlineVpnLock
 
};

const ActionButtons = ({ actions }) => {

  
  return (
    <div className="flex gap-2">
      {actions.map(({ icon, onClick, color }, index) => {
        const IconComponent = ICONS[icon];
        return (
          <button key={index} onClick={onClick} className={`p-2 rounded ${color === "red" ? "text-red-500" : "text-gray-500"}`}>
            {IconComponent && <IconComponent size={18} />}
          </button>
        );
      })}
    </div>
  );
};

export default ActionButtons;
