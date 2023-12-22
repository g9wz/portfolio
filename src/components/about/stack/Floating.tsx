"use client";

import {
  useReducer,
  useRef,
  useEffect,
  useCallback,
  ReactElement,
  RefObject
} from "react";

import icons from "./icons";

interface State {
  iconsList: ReactElement[];
  currentIndex: number;
}

type Action =
  | { type: "add_icon"; payload: ReactElement }
  | { type: "remove_icon"; payload: string }
  | { type: "increment_index" };

const initialState: State = {
  iconsList: [],
  currentIndex: 0
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "add_icon":
      return {
        ...state,
        iconsList: [...state.iconsList, action.payload]
      };
    case "remove_icon":
      return {
        ...state,
        iconsList: state.iconsList.filter((icon) => icon.key !== action.payload)
      };
    case "increment_index":
      return {
        ...state,
        currentIndex: (state.currentIndex + 1) % icons.length
      };
    default:
      return state;
  }
};

const Floating = ({ scope }: { scope: RefObject<HTMLElement> }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const iconRefs = useRef<{ [key: string]: HTMLSpanElement | null }>({});

  const handleClick = useCallback(
    (event: MouseEvent) => {
      if ((event.target as HTMLElement).closest("div, img")) {
        return;
      }

      const Icon = icons[state.currentIndex];
      const id = `icon-${Date.now()}-${Math.random()}`;

      const iconElement = (
        <span
          key={id}
          ref={(el) => (iconRefs.current[id] = el)}
          style={{
            position: "absolute",
            left: event.pageX - (window.innerWidth >= 768 ? 40 : 28),
            top: event.pageY - (window.innerWidth >= 768 ? 40 : 28)
          }}
          className="opacity-0 transition-opacity duration-500 ease-in-out"
        >
          <Icon className="h-14 w-14 md:h-20 md:w-20" />
        </span>
      );

      dispatch({ type: "add_icon", payload: iconElement });

      setTimeout(() => {
        const icon = iconRefs.current[id];
        if (icon) {
          icon.classList.replace("opacity-0", "opacity-100");
          setTimeout(() => {
            icon.classList.replace("opacity-100", "opacity-0");
            setTimeout(() => {
              dispatch({ type: "remove_icon", payload: id });
            }, 500);
          }, 3500);
        }
      }, 50);

      dispatch({ type: "increment_index" });
    },
    [state.currentIndex]
  );

  useEffect(() => {
    const currentScope = scope.current;

    if (currentScope) {
      currentScope.addEventListener("click", handleClick);

      return () => {
        currentScope.removeEventListener("click", handleClick);
      };
    }
  }, [handleClick, scope]);

  return <>{state.iconsList}</>;
};

export default Floating;
