
export interface IMember{
    _id: string,
    Name: string,
    DateOfCreation: string,
    Phone: string,
    Age: number,
    DateOfBirth: string,
    Email: string,
}

export interface IQueryMembers {
    members: IMember[]
}

