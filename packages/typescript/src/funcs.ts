export function doubleSay (str: string): string {
  return `${str} ${str}`
}

export function capitalize (str: string): string {
  return str[0].toUpperCase() + str.substring(1)
}

export function exclaim (str: string): string {
  return str + '!'
}
