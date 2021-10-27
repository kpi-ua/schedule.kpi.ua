import {MODES} from "../constants/modes";
import {getModeSize} from "./getModeSize";

export const getCurrentMode = () => {
  const sortedModes = Object.keys(MODES)
      .sort((prev, cur) => parseInt(getModeSize(MODES[prev])) - parseInt(getModeSize(MODES[cur])));

  for (let key of sortedModes) {
    if (window.innerWidth <= parseInt(getModeSize(MODES[key]))) {
      return(MODES[key]);
    }
  }

  return MODES.BIG;
}