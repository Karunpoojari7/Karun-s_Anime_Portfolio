"use client";
import React from "react";
function Eye({side}:{side:"left"|"right"}){
 const id=`m-${side}`;
 return <svg className={`mangekyo-eye eye-${side}`} viewBox="0 0 620 310" aria-hidden="true">
 <defs>
  <radialGradient id={`${id}-iris`}><stop stopColor="#ff9a9d"/><stop offset=".32" stopColor="#f01832"/><stop offset=".78" stopColor="#8b0016"/><stop offset="1" stopColor="#270008"/></radialGradient>
  <linearGradient id={`${id}-sclera`} x2="0" y2="1"><stop stopColor="#f9d9d7"/><stop offset=".6" stopColor="#b77c82"/><stop offset="1" stopColor="#39131b"/></linearGradient>
  <filter id={`${id}-glow`}><feGaussianBlur stdDeviation="13" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <clipPath id={`${id}-clip`}><path d="M12 155Q310 -35 608 155Q310 345 12 155Z"/></clipPath>
 </defs>
 <g transform={side==="right"?"translate(620 0) scale(-1 1)":undefined}>
  <path d="M12 155Q310 -35 608 155Q310 345 12 155Z" fill="#030204" stroke="#050204" strokeWidth="18"/>
  <g clipPath={`url(#${id}-clip)`}><rect width="620" height="310" fill={`url(#${id}-sclera)`}/>
   <circle cx="310" cy="155" r="123" fill="#a0001b" opacity=".45" filter={`url(#${id}-glow)`}/>
   <circle cx="310" cy="155" r="104" fill={`url(#${id}-iris)`} stroke="#ff4354" strokeWidth="3"/>
   {Array.from({length:72},(_,i)=><path key={i} d="M310 58V78" transform={`rotate(${i*5} 310 155)`} stroke="#ffb0b5" strokeOpacity={i%3===0?".6":".2"} strokeWidth="1.8"/>)}
   <g className="mangekyo-blades">{[0,120,240].map(r=><g key={r} transform={`rotate(${r} 310 155)`}><path d="M310 155C285 135 265 111 274 82C282 55 308 43 331 51C355 59 365 83 351 102C342 115 324 119 307 111C325 132 338 150 334 170C330 194 307 208 285 198C263 188 259 163 273 147C284 134 298 143 310 155Z" fill="#030204" stroke="#3d000d" strokeWidth="3"/></g>)}<circle cx="310" cy="155" r="17" fill="#030204"/></g>
   <path d="M75 148Q310 69 545 148" fill="none" stroke="white" strokeOpacity=".12" strokeWidth="6"/>
  </g>
  <path d="M12 155Q310 -40 608 155" fill="none" stroke="#050204" strokeWidth="24" strokeLinecap="round"/><path d="M20 161Q310 350 600 161" fill="none" stroke="#080306" strokeWidth="13"/>
  <path d="M30 140Q310 -28 590 140" fill="none" stroke="#9b1c2b" strokeOpacity=".7" strokeWidth="3"/>
 </g></svg>;
}
export default function DualMangekyo(){return <div className="dual-mangekyo"><Eye side="left"/><Eye side="right"/></div>}
