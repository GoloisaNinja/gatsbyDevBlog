import React, { useState, useEffect } from "react";
import { FaTimesCircle } from "react-icons/fa";
import { Checkbox } from "../Checkbox";
import { ModalStyle, ButtonDiv, ModalButton2, ModalOverlay } from "./styles";

export function Modal({
  show,
  handleClose,
  filterBadges,
  handleSetFilterBadges,
  content,
  badges,
}) {
  const [selectedBadges, setSelectedBadges] = useState([]);
  const resetBadges = () => {
    setSelectedBadges([]);
  };
  useEffect(() => {
    handleSetFilterBadges(selectedBadges);
  }, [selectedBadges, handleSetFilterBadges]);
  return (
    show && (
      <>
        <ModalStyle>
          <div>
            <FaTimesCircle onClick={e => handleClose(true)} />
          </div>
          <div>
            <p style={{ marginBottom: "2rem" }}>{content.title}</p>
          </div>
          <div>
            {badges.map((badge, index) => {
              let checked = filterBadges.includes(parseInt(badge.id, 10));
              return (
                <Checkbox
                  key={index}
                  isChecked={checked}
                  badge={badge}
                  setSelectedBadges={setSelectedBadges}
                />
              );
            })}
          </div>
          <ButtonDiv>
            {
              <>
                <ModalButton2 onClick={e => resetBadges()}>reset</ModalButton2>
              </>
            }
          </ButtonDiv>
        </ModalStyle>
        <ModalOverlay onClick={e => handleClose(true)}></ModalOverlay>
      </>
    )
  );
}
