export interface IGetMobiles {
  id: number;
  logo: string;
  name: string;
  storage: number;
  color: string;
  title:string;
  price:number;
  brand:string
}

export interface IDeleteMobiles {
  id: number;
}

export interface ICreateMobiles {
  logo: string;
  name: string;
  storage: number;
  color: string;
  title: string;
  price: number;
  brand: string;
}

export interface IUpdateMobiles {
  id: number;
  logo: string;
  name: string;
  storage: number;
  color: string;
  title: string;
  price: number;
  brand: string;
}

