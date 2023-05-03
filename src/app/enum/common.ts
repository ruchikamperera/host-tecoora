export enum Regex {
    emailValidation = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
}

export enum FileType {
    case1 = "PaySlips",
    case2 = "Bachelor certificate",
    case3 = "Passport",
    case4 = "Australian/Home country driving license"
}

export enum UserRole{
    Student = 1,
    Lawyer = 2,
    Staff = 3,
    Manager = 4,
}

export enum UserRoleNumber{
    One = 'Student',
    Two = 'Lawyer',
    Tree = 'Staff',
    Four = 'Manager',
}

export enum FormType {
    one = "Skilled Independent visa (subclass 189)",
    two = "Skilled Nominated visa (subclass 190)",
    tree = "Skilled Regional (Provisional) visa (subclass 489)",
    four = "Skilled Work Regional (Provisional) visa (subclass 491)"
}

export enum VisaType {
    australian = "Australian point system",
    canberra = "Canberra metrics system",
}