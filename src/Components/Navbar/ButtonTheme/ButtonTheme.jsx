import { useSelector, useDispatch } from "react-redux";
import { selectThemeMode, toggleTheme } from "../../../Reducer/themeSlice";
import "./ButtonTheme.css";
const ButtonTheme = () => {
  const themeMode = useSelector(selectThemeMode);
  const dispatch = useDispatch();

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());

    document.body.className =
      themeMode === "light" ? "dark-theme" : "light-theme";
  };

  return <button className="button-theme" onClick={toggleThemeHandler}>Toggle Theme</button>;
};

export default ButtonTheme;
