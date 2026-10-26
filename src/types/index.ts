export interface Drop { id: string; city: string; date: string; image?: string }
export interface PastDrop extends Drop { name: string }
export interface Product { id: string; name: string; price: number; image?: string }
export interface MemberForm { email: string; firstName: string; lastName: string; phone: string }
