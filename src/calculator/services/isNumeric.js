export default function isNumeric(char) {
  const notNumeric = [true, false, '', ' ', null, undefined, Infinity]
  if (notNumeric.includes(char)) return false
  return !isNaN(char)
}
