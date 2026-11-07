export const NOTE_NAMES=['C','C♯','D','D♯','E','F','F♯','G','G♯','A','A♯','B'];
export function noteToMidi(note){const m=String(note).replace('♯','#').replace('♭','b').match(/^([A-G])([#b]?)(-?\d+)$/);if(!m)return 60;const base={C:0,D:2,E:4,F:5,G:7,A:9,B:11}[m[1]];let n=base+(m[2]==='#'?1:m[2]==='b'?-1:0);return (Number(m[3])+1)*12+n;}
export function midiToNote(midi){const n=((midi%12)+12)%12,oct=Math.floor(midi/12)-1;return `${NOTE_NAMES[n]}${oct}`;}
export function frequency(midi){return 440*Math.pow(2,(midi-69)/12);}
export function isBlack(midi){return [1,3,6,8,10].includes(((midi%12)+12)%12);}
export function scaleNotes(root=60,steps=[0,2,4,5,7,9,11,12]){return steps.map(s=>root+s);}
