import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification2Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { CiMail } from "react-icons/ci";
import avatar from "../data/avatar.jpg";
// import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";
import { Avatar } from "keep-react";
import { Button, Popover } from "antd";

let contentData = {
  notification: (
    <div>
      <div className=" bg-[#F4F5F7] px-12 py-1 flex flex-wrap  justify-center">
        <p className="mr-2 font-medium">Notification</p>
        <div className="w-[20px] h-[20px] text-center text-white rounded-full bg-[#20C997] overflow-hidden">
          1
        </div>
      </div>
      <div>
        <div className="flex flex-wrap justify-between items-center p-1">
          <Avatar shape="circle" size="md" />
          <div className="ml-2">
            <div className="flex flex-wrap justify-between">
              <p>
                <span className="font-medium">Alex</span> Send You a message
              </p>
              {/* <p className="text-green-400">3 hrs ago</p> */}
            </div>
            <p className="text-green-400">3 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  ),
  mail: (
    <div>
      <div className=" bg-[#F4F5F7] px-12 py-1 flex flex-wrap  justify-center">
        <p className="mr-2 font-medium">Message</p>
        <div className="w-[20px] h-[20px] text-center text-white rounded-full bg-[#20C997] overflow-hidden">
          3
        </div>
      </div>
      <div>
        <div className="flex flex-wrap justify-between items-center p-1">
          <Avatar shape="circle" size="md" />
          <div className="ml-2">
            <div className="flex flex-wrap justify-between">
              <p className="font-medium">Alex</p>
              <p className="text-green-400">3 hrs ago</p>
            </div>
            <p className="text-[#717171]">Lorem ipsum dolor sit amet</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center p-1">
          <Avatar shape="circle" size="md" />
          <div className="ml-2">
            <div className="flex flex-wrap justify-between">
              <p className="font-medium">Himu</p>
              <p className="text-green-400">3 hrs ago</p>
            </div>
            <p className="text-[#717171]">Lorem ipsum dolor sit amet</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center p-1">
          <Avatar shape="circle" size="md" />
          <div className="ml-2">
            <div className="flex flex-wrap justify-between">
              <p className="font-medium">Brox</p>
              <p className="text-green-400">3 hrs ago</p>
            </div>
            <p className="text-[#717171]">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
    </div>
  ),
  menu: (
    <div>
      <p>There is no data </p>
    </div>
  ),
  chat: (
    <div>
      <p>No Chat</p>
    </div>
  ),
};

const NavButton = ({ title, customFunc, icon, color, dotColor, content }) => (
  <Popover placement="bottomLeft" content={content} trigger="click">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2 "
      />

      {icon}
    </button>
  </Popover>
);

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color="blue"
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        <NavButton
          title="Mail"
          customFunc={() => handleClick("cart")}
          color="blue"
          icon={<MdOutlineMail />}
          content={contentData.mail}
        />
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => handleClick("chat")}
          color="blue"
          icon={<BsChatLeft />}
          content={contentData.chat}
        />
        <NavButton
          title="Nofications"
          dotColor="#03C9D7"
          customFunc={() => handleClick("notification")}
          color="blue"
          icon={<RiNotification2Line />}
          content={contentData.notification}
        />
        <TooltipComponent content={"profile"} position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img src={avatar} className="rounded-full w-8 h-8 " />
            <p>
              <span className="text-gray-400 text-14">Hi, </span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Michael{" "}
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14 " />
          </div>
        </TooltipComponent>

        {/* 
     
        {isClicked.chat && <Chat />}
        {isClicked.notification}
        {isClicked.userProfile && <UserProfile />} */}
      </div>
    </div>
  );
};

export default Navbar;
