export default function getShift(n: number): string {
  if (n > 16) { return "Pre-Shift" } else if (n <= 16 && n > 8) { return "Shift" } else return "Post-Shift"
}
