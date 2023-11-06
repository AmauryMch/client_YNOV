export class Pokemon {
    name!: string;
    type1!: string;
    type2?: string;
    stats!: Map<string, any>;
    image?: string;
    creationDate!: Date;
    modificationDate!: Date;
    creationUser!: string;
    modificationUser!: string;
    active!: boolean;
}