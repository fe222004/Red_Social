import { Time } from "@angular/common";

export interface Complaint{
    infractor: string;
    problem: string;
    date_complaint: Date,
    time: Time,
    severity: boolean,
}