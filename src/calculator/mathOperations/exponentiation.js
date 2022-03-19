export default function exponentiation(a, b) {
  return (Math.pow(Number(Math.trunc(b*1000)), Number(a))/Math.pow(1000, a))
}