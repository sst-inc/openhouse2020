// hax

import {Component} from "react";
import {AppState} from "../App";

export const GLOBAL: {app: Component<{}, AppState> | null} = {
  app: null,
}
