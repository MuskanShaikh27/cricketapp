import { Players, Teams } from  './teamsPlayers';

export const PLAYERS: Players[] = [
    {tid:1,pid:1,name:'Richards',team:'A',runs:'12,300',wickets:0,avg:'49.2',highestScore:120,text:'Right-Handed Batsman',type:'Bat',image:'',matches:285},
    {tid:1,pid:2,name:'Lloyd',team:'A',runs:'8,500',avg:'38.4',wickets:0,highestScore:100,text:'Right-Handed Batsman',type:'Bat',image:'',matches:300},
    {tid:1,pid:3,name:'Kapil',team:'A',runs:'9,500',wickets:250,avg:'39.0',highestScore:180,text:'Right-Handed Batsman',type:'Bat',image:'',matches:315},
    {tid:1,pid:4,name:'Murali',team:'A',runs:'3,500',wickets:900,avg:'24.3',highestScore:47,text:'Right-Arm Off-Spin',type:'Bowl',image:'',matches:411},
    {tid:1,pid:5,name:'Warne',team:'A',runs:'4,500',wickets:800,avg:'25.2',highestScore:56,text:'Right-Arm leg-Spin',type:'Bowl',image:'',matches:398},
    {tid:1,pid:6,name:'Virat',team:'A',runs:'18,500',avg:'54.9',wickets:3,highestScore:256,text:'Right-Handed Batsman',type:'Bat',image:'',matches:296},
    {tid:1,pid:7,name:'Sachin',team:'A',runs:'34,500',wickets:50,avg:'49.8',highestScore:251,text:'Right-Handed Batsman',type:'Bat',image:'',matches:435},
    {tid:2,pid:8,name:'Akram',team:'B',runs:'2,500',wickets:650,avg:'29.2',highestScore:42,text:'Left-Arm Fast Bowler',type:'Bowl',image:'',matches:352},
    {tid:2,pid:9,name:'Waqar',team:'B',runs:'3,000',wickets:550,avg:'30.8',highestScore:36,text:'Right-Arm Fast Bowler',type:'Bowl',image:'',matches:312},
    {tid:2,pid:10,name:'Saurav',team:'B',runs:'16,000',avg:'46.0',wickets:0,highestScore:200,text:'Left-Handed Batsman',type:'Bat',image:'',matches:324},
    {tid:2,pid:11,name:'Dravid',team:'B',runs:'18,790',avg:'48.2',wickets:5,highestScore:278,text:'Right-Handed Batsman',type:'Bat',image:'',matches:384},
    {tid:2,pid:12,name:'Kumar',team:'B',runs:'18,200',avg:'47.3',wickets:0,highestScore:232,text:'Left-Handed Batsman',type:'Bat',image:'',matches:346},
    {tid:2,pid:13,name:'Zaheer',team:'B',runs:'4,900',wickets:520,avg:'30.1',highestScore:89,text:'Left-Arm Fast Bowler',type:'Bowl',image:'',matches:316},
    {tid:2,pid:14,name:'MSD',team:'B',runs:'19,000',avg:'51.5',wickets:1,highestScore:248,text:'Right-Handed Batsman',type:'Bat',image:'',matches:398},
    {tid:3,pid:15,name:'Ricky',team:'C',runs:'21,200',avg:'49.7',wickets:0,highestScore:212,text:'Right-Handed Batsman',type:'Bat',image:'',matches:358},
    {tid:3,pid:16,name:'Sobers',team:'C',runs:'3,600',wickets:450,avg:'35.2',highestScore:89,text:'Right-Arm Fast Bowler',type:'Bowl',image:'',matches:245},
    {tid:3,pid:17,name:'Lara',team:'C',runs:'23,500',avg:'48.9',wickets:0,highestScore:400,text:'Left-Handed Batsman',type:'Bat',image:'',matches:310},
    {tid:3,pid:18,name:'Mcgrath',team:'C',runs:'3,802',wickets:660,avg:'26.2',highestScore:79,text:'Right-Arm Fast Bowler',type:'Bowl',image:'',matches:285},
    {tid:3,pid:19,name:'Boucher',team:'C',runs:'13,500',avg:'36.2',wickets:0,highestScore:123,text:'Right-Handed Batsman',type:'Bat',image:'',matches:246},
    {tid:3,pid:20,name:'Steyn',team:'C',runs:'3,210',wickets:430,avg:'32.5',highestScore:56,text:'Right-Arm Fast Bowler',type:'Bowl',image:'',matches:316},
    {tid:3,pid:21,name:'Kallis',team:'C',runs:'20,306',avg:'46.13',wickets:302,highestScore:235,text:'Right-Handed Batsman',type:'Bat',image:'',matches:374},
    {tid:4,pid:22,name:'Shewag',team:'D',runs:'19,203',wickets:156,avg:'42.6',highestScore:345,text:'Right-Handed Batsman',type:'Bat',image:'',matches:365},
    {tid:4,pid:23,name:'Laxman',team:'D',runs:'18,952',wickets:0,avg:'44.17',highestScore:291,text:'Right-Handed Batsman',type:'Bat',image:'',matches:329},
    {tid:4,pid:24,name:'Rohit',team:'D',runs:'16,523',wickets:0,avg:'45.17',highestScore:321,text:'Right-Handed Batsman',type:'Bat',image:'',matches:326},
    {tid:4,pid:25,name:'Bumrah',team:'D',runs:'2,000',wickets:355,avg:'27.4',highestScore:24,text:'Right-Arm Fast Bowler',type:'Bowl',image:'',matches:198},
    {tid:4,pid:26,name:'Aamir',team:'D',runs:'956',wickets:378,avg:'27.6',highestScore:42,text:'Left-Arm Fast Bowler',type:'Bowl',image:'',matches:256},
    {tid:4,pid:27,name:'Cummins',team:'D',runs:'945',wickets:298,avg:'31.2',highestScore:94,text:'Right-Arm Fast Bowler',type:'Bowl',image:'',matches:146},
    {tid:4,pid:28,name:'Rahane',team:'D',runs:'7,897',wickets:0,avg:'39.5',highestScore:145,text:'Right-Handed Batsman',type:'Bat',image:'',matches:126}
];

export const TEAMS: Teams[] = [
    {tid:1,cid:1,name:'A',country:'India',image:'assets/images/india.png'},
    {tid:2,cid:2,name:'B',country:'Australia',image:'assets/images/australia.png'},
    {tid:3,cid:3,name:'C',country:'South Africa',image:'assets/images/southafrica.png'},
    {tid:4,cid:4,name:'D',country:'England',image:'assets/images/england.png'}
];