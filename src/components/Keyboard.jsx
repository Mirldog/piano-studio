import React from 'react';
import {isBlack,midiToNote} from '../lib/music';
export default function Keyboard({start=48,count=24,active=[],onPlay,highlight=[]}){
 const keys=Array.from({length:count},(_,i)=>start+i),white=keys.filter(k=>!isBlack(k));
 return <div className="keyboard-wrap"><div className="keyboard" style={{'--white-count':white.length}}>{keys.filter(k=>!isBlack(k)).map(k=><button key={k} className={`white-key ${active.includes(k)||highlight.includes(k)?'key-active':''}`} onPointerDown={()=>onPlay?.(k)} aria-label={midiToNote(k)}><span>{midiToNote(k)}</span></button>)}{keys.filter(isBlack).map(k=>{const left=white.filter(w=>w<k).length;return <button key={k} className={`black-key ${active.includes(k)||highlight.includes(k)?'key-active':''}`} style={{left:`calc(${left} * (100% / var(--white-count)) - 3.1%)`}} onPointerDown={()=>onPlay?.(k)} aria-label={midiToNote(k)}><span>{midiToNote(k)}</span></button>})}</div></div>
}
