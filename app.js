import { EmitterClass } from "./emmiter.js";

const emitter = new EmitterClass();

emitter.on("greet", function () {
  console.log("Somewhere, someone said hello.");
});

emitter.on("greet", function () {
  console.log("A greeting occurred!");
});

console.log("hello!");
emitter.emit("greet");
