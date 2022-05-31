import { Menu } from "@headlessui/react";
import { Icon } from "@iconify/react";
import React from "react";

function Notification() {
  return (
    <Menu className="relative" as="div">
      <Menu.Button className="flex hover:scale-105 transition-all ease-out duration-100 items-center cursor-pointer w-full">
        {/* <img src={img} className="w-8 rounded-full" alt="profile img" /> */}
        <Icon
          icon="clarity:notification-outline-badged"
          width="22"
          className="text-purple-600 hover:scale-105 transition-all duration-100 ease-out cursor-pointer"
        />
      </Menu.Button>
      <Menu.Items className="absolute right-0 flex flex-col py-2 rounded bg-white gap-[2px] mt-1 w-64 shadowProfile text-[13px] z-10">
        <div className="px-3 py-2">
          <h5 className="font-semibold">Notifikasi</h5>
        </div>
        <Menu.Item>
          {({ active }) => (
            <div
              className={`px-3 py-2 flex gap-2 items-center border-y-[1px] border-gray-200 ${active && "bg-gray-100"}`}
              // onClick={logoutHandler}
            >
              <div className="bg-purple-100 rounded-full p-2 text-purple-600">
                <Icon
                  icon="carbon:shopping-cart"
                  width="18"
                //   className=""
                />
              </div>
              <p>Ada 1 orderan baru</p>
            </div>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

export default Notification;
