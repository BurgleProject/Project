import { createContext } from "react";

const ButtonContext = createContext({
  buttons: [],
  setButtons: () => {}
});

export default ButtonContext