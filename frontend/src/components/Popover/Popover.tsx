import { useRef, useEffect } from "react";
import { ClickAway } from "../ClickAway/ClickAway";

export interface PopoverProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Popover = ({
  anchorEl,
  open,
  onClose,
  children,
}: PopoverProps) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (anchorEl && popoverRef.current) {
      const anchorRect = anchorEl.getBoundingClientRect();
      const popoverRect = popoverRef.current.getBoundingClientRect();
      const left = anchorRect.left + (anchorRect.width - popoverRect.width) / 2;
      const top = anchorRect.top + anchorRect.height;
      popoverRef.current.style.top = `${top}px`;
      popoverRef.current.style.left = `${left}px`;
    }
  }, [anchorEl, open]);

  if (!anchorEl || !open) {
    return null;
  }

  return (
    <ClickAway onClick={onClose}>
      <div
        ref={popoverRef}
        style={{
          position: "absolute",
          display: open ? "block" : "none",
          borderRadius: "0.5rem",
          padding: "1rem",
        }}
        className="shadow-2xl bg-gray-800 z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="text-white absolute right-2 top-2 cursor-pointer text-lg rounded-full w-8 h-8 flex items-center justify-center border-blue-500 border-2"
          onClick={onClose}
        >
          &times;
        </div>
        {children}
      </div>
    </ClickAway>
  );
};
