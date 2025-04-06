
// Agriculture-themed color palette
export const themeColors = {
  // Primary colors
  soil: "#5E4B36", // Rich brown color like soil
  leaf: "#4CAF50", // Vibrant green for growth
  leafDark: "#2E7D32", // Darker shade of green
  wheat: "#F9C74F", // Golden wheat color
  sky: "#64B5F6", // Clear blue sky
  
  // Secondary colors
  wood: "#8D6E63", // Wood-like brown
  stone: "#9E9E9E", // Stone-like gray
  water: "#29B6F6", // Water blue
  
  // Background and accent colors
  lightSoil: "#E8D8C9", // Light soil color for backgrounds
  ivory: "#FFFFF0", // Ivory/eggshell color
};

export const themeShadows = {
  small: "0 2px 4px rgba(0, 0, 0, 0.1)",
  medium: "0 4px 8px rgba(0, 0, 0, 0.12)",
  large: "0 8px 16px rgba(0, 0, 0, 0.14)",
};

export const themeGradients = {
  sunrise: `linear-gradient(180deg, ${themeColors.sky} 0%, ${themeColors.wheat} 100%)`,
  field: `linear-gradient(180deg, ${themeColors.leaf} 0%, ${themeColors.soil} 100%)`,
  wheat: `linear-gradient(90deg, ${themeColors.wheat} 0%, #F8D58C 100%)`,
};
