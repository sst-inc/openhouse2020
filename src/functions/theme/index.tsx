import {GLOBAL} from "../../../database/global";

export function updateAppTheme(theme: 'dark' | 'light') {
  if (GLOBAL.app) {
    GLOBAL.app.setState({dark: theme === 'dark'})
  }
}
