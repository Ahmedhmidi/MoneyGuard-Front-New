import {User} from "./user";
import {Solution} from "./Solution";

export class Image{
  id? : number
  fileName? : string
  fileType? : string
  data? : string
  user? :User
  solution? : Solution
  
}
