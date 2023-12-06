import {Availability} from "./Availability";
import { Categorie } from "./Categorie";
import { Image } from "./Image";
import {User} from "./user";

export class Solution {
  id_solution? : number
  titleSolution? : string
  description? : string
  providerUsername? : string
  price? : number
  availabilities? : Availability[]
  categorie? : Categorie
  provider? : User
  images?:Image[]
  
}
