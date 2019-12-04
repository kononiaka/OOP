// function Stopwatch() {
//   let startTime,
//     stopTime,
//     running,
//     duration = 0;
//
//   console.log(startTime, stopTime, running, duration);
//
//   this.start = function() {
//     if (running) throw new Error("Stopwatch already been started");
//     running = true;
//     startTime = new Date().getTime();
//     console.log(startTime);
//     console.log(running);
//   };
//   this.stop = function() {
//     if (!running) throw new Error("Stopwatch not started yet");
//     running = false;
//
//     stopTime = new Date().getTime();
//     let seconds = (stopTime - startTime) / 1000;
//     duration += seconds;
//     console.log(seconds);
//   };
//   this.reset = function() {
//     (startTime = null), (stopTime = null), running, (duration = 0);
//     console.log(startTime, stopTime, running, duration);
//   };
//   Object.defineProperty(this, "duration", {
//     get: () => duration
//   });
// }
//
// let sw = new Stopwatch();

// let sw = new Stopwatch();
//
// function Stopwatch() {
//   this.duration = 0;
// }
//
// Stopwatch.prototype.start = function() {
//   if (this.running) throw new Error("Stopwatch already been started");
//
//   this.running = true;
//   startTime = new Date().getTime();
// };
// Stopwatch.prototype.stop = function() {
//   if (!this.running) throw new Error(`Stopwatch haven't been started yet`);
//
//   this.running = false;
//   stopTime = new Date().getTime();
//   let seconds = (stopTime - startTime) / 1000;
//   this.duration += seconds;
// };
//
// Stopwatch.prototype.reset = function() {
//   startTime = null;
//   stopTime = null;
//   this.running = false;
//   this.duration = 0;
// };
// Object.defineProperty(this, "running", {
//   get: () => running
// });
// Object.defineProperty(this, "duration", {
//   get: () => duration
// });
