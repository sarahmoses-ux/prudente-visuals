export type Category = 'Branding' | 'Film' | 'Photography' | 'Architecture' | 'Digital' | 'Campaigns';
export interface Project {slug:string;title:string;category:Category;year:string;image:string;description:string;}
export interface Inquiry {name:string;email:string;phone:string;company:string;service:string;budget:string;timeline:string;description:string;}
