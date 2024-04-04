import React, { useState } from "react";
import Dropdown from "./Dropdown";

const Multiselect = ({ onSelect }: { onSelect: (selectedItems: string[]) => void }) => {

  // state showing if dropdown is open or closed
  const [dropdown, setDropdown] = useState(false);
  // managing dropdown items (list of dropdown items)

  const [items, setItems] = useState<string[]>([
    "john",
    "milos",
    "steph",
    "kathreine",
  ]);

  // contains selected items
  type SelectedItemType = string; // Change this to match the actual type of items in selectedItems if it's not string

  // Initialize selectedItems with an empty array
  const [selectedItems, setSelectedItems] = useState<SelectedItemType[]>([]);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  // adds new item to multiselect
  const addTag = (item: SelectedItemType) => {
    const updatedItems = [...selectedItems, item];
    setSelectedItems(updatedItems);
    onSelect(updatedItems); // Call onSelect callback
    setDropdown(false);
  };

  // Modify removeTag function to update parent component
  const removeTag = (item: string) => {
    const filtered = selectedItems.filter((e) => e !== item);
    setSelectedItems(filtered);
    onSelect(filtered); // Call onSelect callback
  };

  return (
    <div className="">
      <div className="">
        <div className="w-full flex flex-col items-center mx-auto">
          <div className="w-full">
            <div className="flex flex-col items-center relative">
              <div className="w-full ">
                <div className="shadow my-2 flex border border-gray-200 bg-white rounded ">
                  <div className="flex flex-auto flex-wrap">
                    {selectedItems.map((tag, index) => {
                      return (
                        <div
                          key={index}
                          className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full bg-orange-100 border border-gray-300 "
                        >
                          <div className="text-xs font-normal leading-none max-w-full flex-initial">
                            {tag}
                          </div>
                          <div className="flex flex-auto flex-row-reverse">
                            <div onClick={() => removeTag(tag)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                height="100%"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-x cursor-pointer hover:text-red-400 rounded-full w-4 h-4 ml-2 transition-colors"
                              >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <div className="flex-1">
                      <input
                        placeholder=""
                        className="appearance-none w-full rounded p-3 text-gray-700 leading-tight focus:outline-none focus:outline-[#f9683c]"
                      />
                    </div>
                  </div>
                  <div
                    className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200"
                    onClick={toggleDropdown}
                  >
                    <div className="flex items-center justify-center cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-chevron-up w-4 h-4"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {dropdown ? (
              <Dropdown list={items} addItem={addTag}></Dropdown>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Multiselect;
