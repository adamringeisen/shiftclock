export default function segmentsRemaining() {
  // Define shifts
  const shifts = [
    { start: '7:30', end: '19:30' },  // AM to PM shift
    { start: '19:30', end: '7:30' },  // PM to AM shift
  ];

  // Get current time
  const now = new Date();
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();
  const current = currentHours * 60 + currentMinutes;  // Current time in minutes
  // log current time
  console.log(currentHours);
  console.log(currentMinutes);
  // Determine which shift we are in
  let shift;
  if (current >= 7.5 * 60 && current <= 19.5 * 60) {
    shift = shifts[0];  // AM to PM shift
  } else {
    shift = shifts[1];  // PM to AM shift
  }

  // Parse shift start and end times
  const [startHours, startMinutes] = shift.start.split(':').map(Number);
  const [endHours, endMinutes] = shift.end.split(':').map(Number);

  // Convert shift start and end times to minutes
  let start = startHours * 60 + startMinutes;
  let end = endHours * 60 + endMinutes;

  // Adjust for shifts that end on the next day
  if (end < start) {
    end += 24 * 60;
  }

  // Adjust current time for shifts that are in the next day
  let adjustedCurrent = current;
  if (adjustedCurrent < start) {
    adjustedCurrent += 24 * 60;
  }

  // Calculate remaining time in minutes
  let remaining = end - adjustedCurrent;

  // Convert remaining time to 30-minute segments and return
  return Math.floor(remaining / 30) + 1;
}
