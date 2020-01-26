import React from "react";

export function processTheme(theme: Object): string {
  return Object.values(theme).reduce((a, b) => a + b)
}

export const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});
