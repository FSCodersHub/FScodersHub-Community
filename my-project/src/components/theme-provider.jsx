import { createContext, useContext, useEffect, useState } from "react";

// Définir les valeurs possibles pour le thème
const Theme = {
  DARK: "dark",
  LIGHT: "light",
  SYSTEM: "system",
};

// Initialiser l'état du thème par défaut
const initialState = {
  theme: Theme.LIGHT, // Changer le thème par défaut en 'light'
  setTheme: () => null,
};

// Créer le contexte pour le thème
const ThemeProviderContext = createContext(initialState);

// Composant ThemeProvider
export function ThemeProvider({
  children,
  defaultTheme = Theme.LIGHT, // Le thème par défaut est 'light'
  storageKey = "vite-ui-theme",
  ...props
}) {
  const [theme, setTheme] = useState(() => {
    // Vérifier si le thème est défini dans le localStorage
    const storedTheme = localStorage.getItem(storageKey);
    return storedTheme || defaultTheme; // Si un thème est trouvé, utiliser celui-ci
  });

  useEffect(() => {
    const root = window.document.documentElement;

    // Retirer les classes existantes
    root.classList.remove("light", "dark");

    // Appliquer le thème en fonction de la valeur actuelle
    if (theme === Theme.SYSTEM) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? Theme.DARK
        : Theme.LIGHT;
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme); // Appliquer le thème clair ou sombre
    }
  }, [theme]);

  // Changer le thème et le stocker dans le localStorage
  const value = {
    theme,
    setTheme: (newTheme) => {
      localStorage.setItem(storageKey, newTheme); // Enregistrer dans localStorage
      setTheme(newTheme); // Mettre à jour le thème
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

// Hook personnalisé pour utiliser le contexte du thème
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
