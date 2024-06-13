import { Country } from "./country";

export interface User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    image: string;
    description: string;
    countryId: number;
}
