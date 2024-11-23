import { changeView } from "../../features/jobs/jobs.slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Button } from "../Button/Button";

export const SwitchJobView = () => {
  const dispatch = useAppDispatch();
  const view = useAppSelector((state) => state.jobs.view);

  return (
    <div className="flex gap-2">
      <Button
        className={`${
          view === "list" ? "bg-blue-700 border-blue-900 border-2" : ""
        }`}
        onClick={() => dispatch(changeView("list"))}
        size="small"
      >
        List
      </Button>
      <Button
        className={`${
          view === "grid" ? "bg-blue-700 border-blue-900 border-2" : ""
        }`}
        onClick={() => dispatch(changeView("grid"))}
        size="small"
      >
        Grid
      </Button>
    </div>
  );
};
