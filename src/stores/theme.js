import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => {
    const saved = localStorage.getItem("theme");
    if (saved) return { isDark: saved === "dark" };

    // Default to light mode (white)
    return {
      isDark: false,
    };
  },

  actions: {
    toggleTheme() {
      this.isDark = !this.isDark;
      this.applyTheme();
    },
    applyTheme() {
      if (this.isDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    },
  },
});
