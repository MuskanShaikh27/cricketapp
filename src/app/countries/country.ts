export interface Country {
    cid: number;
    name: string;
    image: string;
  }

export interface Teams {
  cid: number;
  tid: number;
  name: string;
  country: string;
  image: string;
}