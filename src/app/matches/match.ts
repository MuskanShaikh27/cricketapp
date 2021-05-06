export interface Matches {
    mno: number;
    btw: string,
    venue: string;
    date: string;
    result: string;
    toss: string;
    scores: {
        os: string;
        sc: string;
        highrunone: {name: string,runs:number};
        highruntwo: {name: string,runs:number};
        highwicone: {name: string,wick:number};
        highwictwo: {name: string,wick:number};
    };
}