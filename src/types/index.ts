export interface Drop { id: string; city: string; date: string; image?: string }
export interface PastDrop extends Drop { name: string }

export interface ProductVariant {
    id: string;
    color: string;
    swatch: string;
    images: string[];
  }
  
  export interface Product {
    id: string;
    slug: string;
    name: string;
    price: number;
    variants: ProductVariant[];
  }
  

export interface MemberForm { email: string; firstName: string; lastName: string; phone: string }
