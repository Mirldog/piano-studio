import React,{useEffect,useRef} from 'react';
import {Renderer,Stave,StaveNote,Formatter,Accidental} from 'vexflow';

// A compact VexFlow renderer. It intentionally shows one note at a time in this first release.
export default function Staff({note='C4',clef='treble'}){
 const host=useRef(null);
 useEffect(()=>{
  if(!host.current)return;
  host.current.innerHTML='';
  try{
   const renderer=new Renderer(host.current,Renderer.Backends.SVG);
   renderer.resize(440,150);
   const context=renderer.getContext();
   const stave=new Stave(8,18,420);
   stave.addClef(clef).setContext(context).draw();
   const match=String(note).replace('♯','#').replace('♭','b').match(/^([A-G])([#b]?)(-?\d+)$/i);
   const letter=match?match[1].toLowerCase():'c';
   const accidental=match?.[2]||'';
   const octave=match?.[3]||'4';
   const vfNote=new StaveNote({keys:[`${letter}/${octave}`],duration:'q',clef});
   if(accidental)vfNote.addModifier(new Accidental(accidental),0);
   Formatter.FormatAndDraw(context,stave,[vfNote]);
  }catch(error){host.current.textContent=`${clef==='treble'?'Treble':'Bass'} clef · ${note}`;}
 },[note,clef]);
 return <div ref={host} className="staff-svg" role="img" aria-label={`${clef} clef notation showing ${note}`}/>;
}
