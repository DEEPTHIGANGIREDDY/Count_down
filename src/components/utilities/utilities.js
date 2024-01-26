export function handleTimer(displayTime) {
    const minutes = Math.floor(displayTime / 60);
    const remainingSeconds = displayTime % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  }