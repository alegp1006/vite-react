import type { ChangeEvent } from "react";
import { Star } from "./Icons";

interface FilterRatingProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function FilterByRating({ onChange }: FilterRatingProps) {
  return (
    <>
      <div>
        <label htmlFor="rating-1">
          <Star color={"var(--primary-color)"} width={"15px"} height={"15px"} />
          <input
            hidden
            value={1}
            onChange={onChange}
            name="rating"
            id="rating-1"
            type="radio"
          />
        </label>
        <label htmlFor="rating-2">
          <Star color={"var(--primary-color)"} width={"15px"} height={"15px"} />
          <input
            hidden
            value={2}
            onChange={onChange}
            name="rating"
            id="rating-2"
            type="radio"
          />
        </label>
        <label htmlFor="rating-3">
          <Star color={"var(--primary-color)"} width={"15px"} height={"15px"} />
          <input
            hidden
            value={3}
            onChange={onChange}
            name="rating"
            id="rating-3"
            type="radio"
          />
        </label>
        <label htmlFor="rating-4">
          <Star color={"var(--primary-color)"} width={"15px"} height={"15px"} />
          <input
            hidden
            value={4}
            onChange={onChange}
            name="rating"
            id="rating-4"
            type="radio"
          />
        </label>
        <label htmlFor="rating-5">
          <Star color={"var(--primary-color)"} width={"15px"} height={"15px"} />
          <input
            hidden
            defaultChecked
            value={5}
            onChange={onChange}
            name="rating"
            id="rating-5"
            type="radio"
          />
        </label>
      </div>
    </>
  );
}
