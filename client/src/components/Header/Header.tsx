import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { useAppSelector } from "../../state/hooks";
import { Avatar, Dropdown, MenuProps } from "antd";
import { useDispatch } from "react-redux";
import {
  logOut,
  setUserInfo,
} from "../../state/reducers/authReducer/authReducer";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector((state: any) => state.auth.isLoggedIn);
  const userInfo = useAppSelector((state) => state.auth.userInfo);
  const initials =
    userInfo &&
    typeof userInfo.name === "string" &&
    typeof userInfo.family_name === "string"
      ? userInfo.name[0] + userInfo.family_name[0]
      : "U";

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div className="flex items-center">
          <UserOutlined />
          <span className="ml-2 font-semibold">Account</span>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="flex items-center">
          <LogoutOutlined />
          <span className="ml-2 font-semibold">Log out</span>
        </div>
      ),
      onClick: () => {
        localStorage.clear();
        dispatch(logOut({}));
        dispatch(setUserInfo(null));
      },
    },
  ];

  return (
    <div className="top-0 sticky z-40 shadow-md">
      <div className="py-2 px-[160px] flex items-center justify-between bg-[#0055A2]">
        <div className="text-white ml-2 text-[32px] flex items-center justify-center">
          {/* <HomeOutlined className="text-[26px] text-white " /> */}
          <div className="ml-2">Accomate</div>{" "}
          <div className="text-green-400 font-bold">.</div>
        </div>
        <div className="flex items-center cursor-pointer">
          {isLoggedIn ? (
            <Dropdown menu={{ items }}>
              <div className="flex items-center text-[16px] text-white font-semibold">
                <div className="flex items-center">
                  <Avatar
                    style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
                  >
                    {initials}
                  </Avatar>
                  <div className="ml-2">{"Hi, " + userInfo.name}</div>
                </div>
              </div>
            </Dropdown>
          ) : (
            <div className="flex items-center text-[16px] text-white font-semibold">
              <div className="flex items-center">
                <Avatar
                  style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
                >
                  U
                </Avatar>
                <div className="ml-2">{"Hi, User"}</div>
                <div
                  className="ml-8"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
