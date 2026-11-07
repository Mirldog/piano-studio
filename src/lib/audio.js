import * as Tone from 'tone';
let synth;
export async function playMidi(midi,duration='8n'){await Tone.start();if(!synth)synth=new Tone.PolySynth(Tone.Synth,{oscillator:{type:'triangle'},envelope:{attack:0.01,decay:0.15,sustain:0.35,release:0.8}}).toDestination();synth.triggerAttackRelease(Tone.Frequency(midi,'midi'),duration);}
export async function playChord(midis,duration='1n'){await Tone.start();if(!synth)synth=new Tone.PolySynth(Tone.Synth).toDestination();synth.triggerAttackRelease(midis.map(n=>Tone.Frequency(n,'midi')),duration);}
