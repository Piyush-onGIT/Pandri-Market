"use client";

import { useState, useEffect } from "react";
import { useShopStore } from "../store/useStore";

type Option = {
  value: string;
  label: string;
};

const DynamicDropdown = () => {
  const { uploadPostsData, setUploadPostsData } = useShopStore();
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    fetchOptionsFromAPI();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const selectedOption = options.find(
      (option) => option.value === selectedValue
    );
    if (selectedOption) {
      setUploadPostsData({
        ...uploadPostsData,
        category: [selectedOption.label],
      });
    }
  };

  const fetchOptionsFromAPI = async () => {
    try {
      // Simulated API call (replace with your actual API call)
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();

      const newOptions: Option[] = data.map((item: any) => ({
        value: item.id.toString(),
        label: item.title,
      }));

      setOptions(newOptions);
    } catch (error) {
      console.error("Error fetching options:", error);
    }
  };

  return (
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="dropdown"
      >
        Select Category:
      </label>
      <select
        onChange={handleChange}
        id="dropdown"
        className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:outline-[#f9683c]"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DynamicDropdown;
