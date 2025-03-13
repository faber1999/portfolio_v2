export const resolveColor = (color: string): string => {
  if (color.startsWith('var(')) {
    const variableName = color.slice(4, -1).trim()
    const computedColor = getComputedStyle(document.documentElement)
      .getPropertyValue(variableName)
      .trim()
    if (computedColor) {
      // Si el valor ya viene en formato rgb, se adapta a rgba
      if (computedColor.startsWith('rgb(')) {
        return computedColor
      }
      // Si viene en formato hsl con función, insertamos el canal alpha.
      if (computedColor.startsWith('hsl(')) {
        return computedColor
      }
      // Si el valor es solo un conjunto de números (ej: "221.97 81.33% 55.88%"),
      // lo envolvemos en la función hsl con la sintaxis moderna.
      return `hsl(${computedColor})`
    }

    return color
  } else {
    let r = 0,
      g = 0,
      b = 0
    if (color.length === 4) {
      r = parseInt(color[1] + color[1], 16)
      g = parseInt(color[2] + color[2], 16)
      b = parseInt(color[3] + color[3], 16)
    } else if (color.length === 7) {
      r = parseInt(color.slice(1, 3), 16)
      g = parseInt(color.slice(3, 5), 16)
      b = parseInt(color.slice(5, 7), 16)
    }
    return `rgb(${r}, ${g}, ${b})`
  }
}
