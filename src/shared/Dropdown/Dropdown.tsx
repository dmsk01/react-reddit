import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./dropdown.scss";

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};

export function Dropdown({
  button,
  children,
  isOpen,
  onOpen = NOOP,
  onClose = NOOP,
}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);

  const btnRef = useRef<HTMLDivElement>(null);
  const btnRefRect = btnRef.current?.getBoundingClientRect();
  const dropdownContentRef = useRef<HTMLDivElement>(null);
  const node = document.getElementById("dropdown_root");
  if (!node) return null;

  useEffect(() => {
    setIsDropdownOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    isDropdownOpen ? onOpen() : onClose();
  }, [isDropdownOpen]);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !dropdownContentRef.current?.contains(event.target) &&
        !btnRef.current?.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("click", (e) => handleOutsideClick(e));

    return () => {
      document.removeEventListener("click", (e) => handleOutsideClick(e));
    };
  }, []);

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  return (
    <div className={styles.container} ref={btnRef}>
      <div onClick={handleOpen}>{button}</div>
      {isDropdownOpen &&
        ReactDOM.createPortal(
          <div
            ref={dropdownContentRef}
            className={styles.listContainer}
            style={{
              top:
                Math.round(
                  btnRefRect
                    ? btnRefRect.top + btnRefRect?.height + window.scrollY
                    : 0
                ) + "px",
              left:
                Math.round(
                  btnRefRect
                    ? btnRefRect.left + btnRefRect?.width / 2 + window.scrollX
                    : 0
                ) + "px",
            }}
          >
            <div
              className={styles.list}
              onClick={() => setIsDropdownOpen(false)}
            >
              {children}
            </div>
          </div>,
          node
        )}
    </div>
  );
}
