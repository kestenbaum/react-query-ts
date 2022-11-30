//interface for query;

export interface Todos {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean
}

export interface Posts {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
}