import { useState } from "react";
import PasswordToggle from "../components/PasswordToggle";


export const  ChangePassword = () => {
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    console.log("Password Change Data:", passwords);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center">
        <div className="w-full max-w-2xl bg-white shadow-md rounded-lg">
          {/* Title Header */}
          <div className="font-bold text-[15px] bg-[linear-gradient(-180deg,#2E4B5E_0%,#243A48_82%)] text-white px-2.5 py-1 rounded-t">
            Change Password
          </div>

          {/* Card Body */}
          <div className="flex-auto p-5">
            <form onSubmit={handleChangePassword} className="space-y-6">
              <div className="flex flex-wrap mx-3 mt-0  ">
                {/* Old Password */}
                <div className="w-full max-w-full flex-shrink-0 px-3 mt-0 md:w-1/2 mb-3">
                  <label className="mb-[0.5rem] inline-block">
                    Old Password <span className="text-red-500">*</span>
                  </label>
                  <PasswordToggle
                    name="oldPassword"
                    value={passwords.oldPassword}
                    onChange={handleChange}
                    placeholder="Enter old password"
                  />
                </div>

                {/* New Password */}
                <div className="w-full max-w-full flex-shrink-0 px-3 mt-0 md:w-1/2 mb-3">
                  <label className="mb-[0.5rem] inline-block">
                    New Password <span className="text-red-500">*</span>
                  </label>
                  <PasswordToggle
                    name="newPassword"
                    value={passwords.newPassword}
                    onChange={handleChange}
                    placeholder="Enter new password"
                  />
                </div>

                {/* Confirm Password */}
                <div className="w-full max-w-full flex-shrink-0 px-3 mt-0 md:w-1/2 mb-3">
                  <label className="mb-[0.5rem] inline-block">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <PasswordToggle
                    name="confirmPassword"
                    value={passwords.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm new password"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-wrap -mx-2">
                
                <button
                  type="submit"
                  className="w-1/2 text-white py-2 rounded-lg hover:opacity-90 flex items-center justify-center gap-2 bg-[linear-gradient(-180deg,#2E4B5E_0%,#243A48_82%)] text-center "
                >
                  <i className="fa fa-check-circle-o" aria-hidden="true"></i> Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChangePassword;
