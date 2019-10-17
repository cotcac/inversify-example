import { myContainer } from "./inversify.config";
import { TYPES } from "./types";
import { Warrior } from "./interfaces";

const ninja = myContainer.get<Warrior>(TYPES.Warrior);
 
const a = ninja.fight();
const b =ninja.sneak();


console.log(a,b);
