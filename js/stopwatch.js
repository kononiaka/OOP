const sw = new Stopwatch();

function Stopwatch() {
  let startTimer,
    stopTimer,
    running,
    duration = 0;

  this.start = function() {
    if (running) throw new Error("Stopwatch already started");
    running = true;
    startTimer = new Date().getTime();
  };
  this.stop = function() {
    if (!running) throw new Error("Stopwatch is not started");

    running = false;
    stopTimer = new Date().getTime();

    let seconds = (stopTimer - startTimer) / 1000;
    duration += seconds;
  };
  this.reset = function() {
    startTimer;
    stopTimer;
    running;
    duration = 0;
  };
  Object.defineProperty(this, "duration", {
    get: () => duration
  });
}
