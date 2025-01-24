let milliseconds = 60000;

function trackMinimum({ track }, minimum) {
  let minutes = Math.floor(track.duration_ms / milliseconds);

  return minutes >= minimum;
}

function trackMaximum({ track }, maximum) {
  let minutes = Math.ceil(track.duration_ms / milliseconds);

  return minutes <= maximum;
}

export default { trackMinimum, trackMaximum };
