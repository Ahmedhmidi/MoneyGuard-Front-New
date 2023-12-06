import {SousCategorie} from "./SousCategorie";
import {User} from "./user";

export class Favorite {
  id? : number
  addDate? : Date
  note? : number
  notice? : string
  sousCategorie? : SousCategorie
  client? : User

}
