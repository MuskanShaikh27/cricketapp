export interface Players {
    tid: number;
    pid: number;
    name: string;
    team: string;
    runs: string;
    wickets: number;
    avg: string;
    highestScore: number;
    text: string;
    type: string;
    image: string;
    matches: number;
}

export interface Teams {
    cid: number;
    tid: number;
    name: string;
    country: string;
    image: string;
}