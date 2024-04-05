import React from "react";

interface DropdownProps {
  list: string[];
  addItem: (item: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ list, addItem }) => {
  return (
    <div
      id="dropdown"
      className="shadow bg-white z-40 rounded max-h-select overflow-y-visible"
    >
      <div className="flex flex-col w-full">
        {list.map((item: string, key: number) => {
          return (
            <div
              key={key}
              className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-orange-100"
              onClick={() => addItem(item)}
            >
              <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-orange-100">
                <div className="w-full items-center flex">
                  <div className="mx-2 leading-6  ">{item}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
