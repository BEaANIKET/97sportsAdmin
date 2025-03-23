import React, { useContext } from 'react';
import { RefreshCw } from 'lucide-react';
import HorizontalBar from './HorizontalBar';
import logoImage from "../assets/logo.png";

import { AccountContext } from '../services/account/account.context';
import { AuthContext } from '../services/auth/auth.context';
import { getUserType } from '../utils/user_type_converter';

const Header = ({isPasswordChanged}) => {

  const { user } = useContext(AuthContext);
  const { IRP  } = useContext(AccountContext);

  return (
    <div className='flex flex-col w-full relative'>
    <div className="w-full font-sans flex-wrap justify-between">
     
     

 
      <div className="block bg-gradient-to-b from-[#315195] to-[#14213D] py-3 px-4 gap-3">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
          <div className="flex items-center">
          <img
            src={logoImage}
            alt="Site Logo"
            className="h-10  sm:h-6 w-auto cursor-pointer"
          />
        
          </div>
          </div>
          <div className="flex items-center space-x-3 flex-wrap">
            <div className="bg-black bg-opacity-70 text-xs text-white px-2 py-1 rounded">
              {user && getUserType(user.parent_id)}
            </div>
            <div className="text-white">{user ? user.user_id : "demo3456"}</div>
            <div className="text-white">{IRP ? IRP.balance : 0}</div>
            <button onClick={() => window.location.reload()} className="text-white p-1 rounded-full hover:bg-black hover:bg-opacity-20">
              <RefreshCw size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
    <HorizontalBar />
    </div>
  );
};

export default Header;