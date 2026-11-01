"use client";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, ArrowRight } from "lucide-react";
import DualMangekyo from "./DualMangekyo";
import CrowFlock from "./CrowFlock";

type Phase = "closed" | "opening" | "awakened" | "gathering" | "departing";
export default function SharinganIntro() {
  const [phase,setPhase]=useState<Phase>("closed");
  const [sound,setSound]=useState(false);
  const [hidden,setHidden]=useState(false);
  const audio=useRef<HTMLAudioElement|null>(null);
  useEffect(()=>{
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){setPhase("awakened");return;}
    const a=window.setTimeout(()=>setPhase("opening"),450);
    const b=window.setTimeout(()=>setPhase("awakened"),1700);
    const c=window.setTimeout(()=>setPhase("gathering"),2900);
    return ()=>[a,b,c].forEach(window.clearTimeout);
  },[]);
  useEffect(()=>()=>{audio.current?.pause();},[]);
  async function toggleSound(){
    try{
      if(!audio.current){audio.current=new Audio("/audio/sharingan-awakening.wav");audio.current.loop=true;audio.current.volume=.22;}
      if(sound){audio.current.pause();setSound(false);}else{await audio.current.play();setSound(true);}
    }catch{setSound(false);}
  }
  function enter(){
    setPhase("departing");
    audio.current?.pause();
    window.setTimeout(()=>setHidden(true),1250);
  }
  if(hidden)return null;
  return <section className={`sharingan-intro intro-${phase}`} aria-label="Mangekyo Sharingan intro">
    <div className="intro-sky"/><div className="intro-grain"/><div className="intro-vignette"/>
    <header className="intro-topline"><div className="intro-brand-mark">卍</div><div className="intro-brand"><b>KARUN.<span>DEV</span></b><small>THE SHINOBI DEVELOPER</small></div>
      <button className="sound-toggle" onClick={toggleSound}>{sound?<Volume2 size={15}/>:<VolumeX size={15}/>} SOUND {sound?"ON":"OFF"}</button></header>
    <div className="eye-stage"><div className="hair-shadow hair-left"/><div className="hair-shadow hair-right"/><div className="eye-aura eye-aura-left"/><div className="eye-aura eye-aura-right"/><DualMangekyo/><div className="brow brow-left"/><div className="brow brow-right"/><div className="bridge-shadow"/></div>
    <div className="intro-center"><div className="moon-kanji">月</div><p className="intro-kicker">KARUN.DEV&nbsp; // &nbsp;THE SHINOBI DEVELOPER</p><div className="intro-rule"/>
      <h1>AWAKEN THE<br/><em>MANGEKYŌ SHARINGAN</em></h1><p className="intro-subtitle">Enter the Tsukuyomi.</p>
      <button className="enter-tsukuyomi" onClick={enter}>ENTER THE TSUKUYOMI <ArrowRight size={17}/></button><button className="skip-intro" onClick={enter}>SKIP INTRO</button></div>
    <CrowFlock gathering={phase==="gathering"} dispersing={phase==="departing"}/>
    <div className="red-moon"/><div className="torii-silhouette"><i/><i/><i/></div>
    <div className="intro-progress"><span className={phase==="closed"||phase==="opening"?"active":"done"}/><b>AWAKEN</b><span className={phase==="gathering"||phase==="departing"?"done":""}/><b>MANIFEST</b><span className={phase==="departing"?"done":""}/><b>TSUKUYOMI</b></div>
  </section>;
}
