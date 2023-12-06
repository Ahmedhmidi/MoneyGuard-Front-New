import {Message} from "./message";
import {Dispense} from "./Dispense";


export class User {
  id? : number ;
  name  : string='';
  lastname: string='';
  phone: string='';
  email: string='';
  username: string='';
  password: string='';
  jobTitle: string='';
  grade: string='';
  role: string='';
  roles: string='';
  reclamations? : Dispense[];
  location? : Location


}
