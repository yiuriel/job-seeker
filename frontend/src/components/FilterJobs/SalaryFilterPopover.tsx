import { FC, useState } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Popover, PopoverProps } from "../Popover/Popover";

export const SalaryFilterPopover: FC<
  Omit<PopoverProps, "children"> & {
    minSalary: number;
    maxSalary: number;
    onApply: (minSalary: number, maxSalary: number) => void;
  }
> = ({
  anchorEl,
  open,
  onClose: handleClose,
  minSalary,
  maxSalary,
  onApply,
}) => {
  const [_minSalary, _setMinSalary] = useState(minSalary);
  const [_maxSalary, _setMaxSalary] = useState(maxSalary);

  return (
    <Popover anchorEl={anchorEl} open={open} onClose={handleClose}>
      <div className="p-2">
        <div className="space-y-4">
          <h6 className="text-lg text-white">Salary Filter</h6>
          <Input
            label="Min Salary"
            type="number"
            value={_minSalary}
            onChange={(e) => _setMinSalary(Number(e.target.value))}
          />
          <Input
            label="Max Salary"
            type="number"
            value={_maxSalary}
            onChange={(e) => _setMaxSalary(Number(e.target.value))}
          />
          <Button
            onClick={() => {
              onApply(_minSalary, _maxSalary);
            }}
          >
            Apply Filter
          </Button>
        </div>
      </div>
    </Popover>
  );
};
