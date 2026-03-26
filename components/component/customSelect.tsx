// MySelectComponent.js
import React from 'react';
import Select from 'react-select';
import { useTheme } from "@/components/context/themeContext";
import { colorMap } from './colorMap'; // Adjust import path as needed

const CustomSelect = ({ handleCompanyChange, companyOptions }) => {
  const { color } = useTheme();

  // Get the hex value from the color name and variant
  const hexColor = colorMap[color]?.[950] || '#007fff'; // Fallback color
  const customStyles = {
    control: (provided) => ({
      ...provided,
      fontWeight:'bold',
      backgroundColor: colorMap[color]?.[50],
      borderColor: colorMap[color]?.[950], // Dynamic border color
      boxShadow: `0 0 0 1px ${colorMap[color]?.[100]}`,
      '&:hover': {
        borderColor: colorMap[color]?.[950],
        backgroundColor: colorMap[color]?.[200],
      },
      '&:focus': {
        borderColor: colorMap[color]?.[950],
        backgroundColor: colorMap[color]?.[200],
        boxShadow: `0 0 0 2px ${colorMap[color]?.[500]}`,
      },
      padding: '0.25rem 0.5rem',
      borderRadius: '1.5rem', // rounded-3xl
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: colorMap[color]?.[50],
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? colorMap[color]?.[950] : 'transparent',
      color: state.isSelected ? 'white' : '#4b5563',
      '&:hover': {
        backgroundColor: state.isSelected ? colorMap[color]?.[950] : colorMap[color]?.[100],
      },
    }),
    placeholder: (provided, state) => ({
        ...provided,
        color: state.isFocused ? hexColor : '#4b5563',
      }),
    input: (provided, state) => ({
        ...provided,
        color: '#4b5563',
      }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.isFocused ? '#4b5563' : "",
    }),
  };

  return (
    <div className={`select-width rounded-3xl ml-4 lg:px-4 py-2`}>
      <Select
        onChange={handleCompanyChange}
        styles={customStyles}
        options={companyOptions}
        name="company"
        defaultValue={companyOptions[0]}
      />
    </div>
  );
};

export default CustomSelect;
