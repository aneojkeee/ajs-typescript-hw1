"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cart_1 = __importDefault(require("./Cart"));
const Movie_1 = __importDefault(require("./Movie"));
const movie = new Movie_1.default(1, 'The Avengers', true, 'Мстители', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 1000, 'avengers.png');
const cart = new Cart_1.default();
cart.add(movie);
cart.getAll();
