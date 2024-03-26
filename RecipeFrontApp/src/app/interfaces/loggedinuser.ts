import { User } from "./user";

export interface Loggedinuser {
   user: User | undefined;
   loginState: boolean;
}
