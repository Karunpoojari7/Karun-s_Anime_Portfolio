"use client";
import React from "react";
function Crow({name,delay=0,scale=1}:{name:string;delay?:number;scale?:number}){
 return <svg className={`intro-crow ${name}`} style={{animationDelay:`${delay}s`,width:`calc(clamp(68px, 9vw, 150px) * ${scale})`}} viewBox="0 0 180 112" aria-hidden="true">
 <g className="crow-flight"><path d="M20 67Q39 47 67 51Q83 39 105 49L151 35L129 57Q116 69 99 68Q77 83 49 74L18 83L35 67Z" fill="#020103"/>
 <path className="crow-wing" d="M80 54Q49 14 8 11Q35 33 34 59Q53 39 82 67Q105 27 151 36Q117 19 91 40Z" fill="#030204"/>
 <path className="crow-wing crow-wing-two" d="M84 55Q66 17 49 2Q88 18 101 49Q126 23 166 31Q128 43 105 68Z" fill="#080509"/>
 <path d="M130 55L178 43L139 65Z" fill="#020103"/><path d="M62 76L53 103M82 76L84 102" stroke="#030204" strokeWidth="4"/><circle cx="126" cy="53" r="2" fill="#e91b35"/></g></svg>
}
export default function CrowFlock({gathering=false,dispersing=false}:{gathering?:boolean;dispersing?:boolean}){
 return <div className={`crow-field ${gathering?"is-gathering":""} ${dispersing?"is-dispersing":""}`} aria-hidden="true">
  <Crow name="crow-a" delay={0} scale={1.1}/><Crow name="crow-b" delay={-.8} scale={.7}/><Crow name="crow-c" delay={-1.7} scale={.85}/><Crow name="crow-d" delay={-.4} scale={.6}/><Crow name="crow-e" delay={-2.5} scale={.95}/><Crow name="crow-f" delay={-3.1} scale={.75}/>
  {Array.from({length:18},(_,i)=><i key={i} className={`feather feather-${i+1}`}/>)}
 </div>
}
