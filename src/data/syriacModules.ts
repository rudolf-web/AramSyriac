import { Module } from "../types";
import { modulesA1 } from "./modulesA1";
import { modulesA2 } from "./modulesA2";
import { modulesB1 } from "./modulesB1";

export const syriacModules: Module[] = [
  ...modulesA1,
  ...modulesA2,
  ...modulesB1
];
