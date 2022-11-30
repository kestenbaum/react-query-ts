//interface for query;
export interface Todos {
    "userId": number,
    "id": number | string,
    "title": string,
    "completed": boolean
}

export interface Posts {
    "userId": number,
    "id": number | string,
    "title": string,
    "body": string
}

export interface User {
    "id": number | string,
    "name": string,
    "username": string,
    "email": string,
    "address": {
        "street": string,
        "suite": string,
        "city": string,
        "zipcode": string,
        "geo": {
            "lat": string,
            "lng": string
        }
    },
    "phone": string,
    "website": string,
    "company": {
        "name": string,
        "catchPhrase": string,
        "bs": string
    }
}