import React from "react";
import { CheckboxStyle } from "./styles";

export function Checkbox({ badge, isChecked, setSelectedBadges }) {
  const handleCheck = e => {
    const id = e.target.id;
    const check = e.target.checked;
    if (check) {
      setSelectedBadges(badges => [...badges, parseInt(id, 10)]);
    } else {
      setSelectedBadges(badges =>
        badges.filter(badge => badge !== parseInt(id, 10))
      );
    }
  };
  return (
    <CheckboxStyle>
      <input
        type="checkbox"
        checked={isChecked}
        id={badge.id}
        onChange={e => handleCheck(e)}
      />
      <label htmlFor={badge.id}>{badge.name}</label>
    </CheckboxStyle>
  );
}
