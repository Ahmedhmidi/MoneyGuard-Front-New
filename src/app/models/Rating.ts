import {User} from "./user";

export class Rating{
  id? : number
  description? : string
  rateDate? : Date
  userRating? : String
  client? : User
  provider? : User
}
