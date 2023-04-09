import cn from "classnames";
import { v4 as uuidv4 } from 'uuid';

export default function Toolbar ({ onSelectFilter, filters, selected }) {
  return (
    <div className="toolbar">
      {["All", ...filters].map((filter) => (
        <button
          key={uuidv4()}
          className={cn("filter", { "active": selected === filter })}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};