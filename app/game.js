import { Snake } from "./snake.js";
import { Apple } from "./apple.js";

const displayScore = document.querySelector(".score");

// Setup the game board
const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake;
let apple;