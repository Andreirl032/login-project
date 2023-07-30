export type Role = "user" | "admin";

export interface Profile{
    id: string,
    name: string,
    email: string,
    role: Role,
    photo?: string,
    aboutMe?: string
}