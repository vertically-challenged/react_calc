export default function division(a, b) {
  return (Number(Math.trunc(b*1000)) / Number(Math.trunc(a*1000))) / 1000
}