export interface Album {
    id: number;
    title: string;
    userId: number;
}

export interface Photo {
    albumId: number;
    id: number;
    thumbnailUrl: string;
    title: string;
    url: string;
}

export interface User {
    address: Address;
    company: Company
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
}

export interface Company {
    bs: string;
    catchPhrase: string;
    name: string;
}

export interface Address {
    city: string;
    geo: {
        lat: string, 
        lng: string;
    }
    street: string;
    suite: string;
    zipcode: string;
}