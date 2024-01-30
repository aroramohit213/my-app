import React from "react";
import classNames from "classnames";
import { atom, useAtom } from "jotai";
import { dropdownData } from "./dropdownData";

export const valueAtom = atom<string>("");

export const CustomDropdown = () => {
  const [value, setValue] = useAtom(valueAtom);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.toUpperCase());
  };

  const renderLabelWithHighlight = (label: string) => {
    if (!value) {
      return label;
    }

    const regex = new RegExp(`(${value})`, "gi");
    const parts = label.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} style={{ color: "red" }}>
          {part}
        </span>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  const filteredData = dropdownData.filter((item) =>
    item?.label.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div className={classNames("custom-dropdown-wrapper")}>
      <div className={classNames("input-box-wrapper")}>
        <input
          className={classNames("input-control")}
          type="text"
          value={value}
          onChange={(e) => onChange(e)}
        />
      </div>
      {value !== "" && (
        <ul className={classNames("dropdown-ul")}>
          {filteredData.map((item, index) => (
            <li key={index} className={classNames("dropdown-li")}>
              {renderLabelWithHighlight(item?.label)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
