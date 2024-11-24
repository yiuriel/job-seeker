import { useState } from "react";
import {
  setSalaryMax,
  setSalaryMin,
} from "../../features/search/job.search.slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Button } from "../Button/Button";
import { SalaryFilterPopover } from "./SalaryFilterPopover";

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);

export const SalaryFilter = () => {
  const dispatch = useAppDispatch();
  const minSalary = useAppSelector((state) => state.jobSearch.salaryMin);
  const maxSalary = useAppSelector((state) => state.jobSearch.salaryMax);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Button aria-describedby="simple-popover" onClick={handleClick}>
        {(minSalary || maxSalary) && (
          <>
            {minSalary && <span>Min: {formatCurrency(minSalary)}</span>}
            {minSalary && maxSalary && <span> - </span>}
            {maxSalary && <span>Max: {formatCurrency(maxSalary)}</span>}
          </>
        )}
        {!minSalary && !maxSalary ? <span>Salary Filter</span> : null}
      </Button>
      <SalaryFilterPopover
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        minSalary={minSalary || 0}
        maxSalary={maxSalary || 0}
        onApply={(min, max) => {
          dispatch(setSalaryMin(min));
          dispatch(setSalaryMax(max));
          handleClose();
        }}
      />
    </div>
  );
};
