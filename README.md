# Piano Studio

A personal, beginner-friendly piano and game-music learning app. It runs locally in your browser and stores progress in `localStorage`; there is no account, server, or backend.

## 1. Install the tools

1. Install **Node.js LTS** from https://nodejs.org/ (choose the LTS download).
2. Install **Visual Studio Code** from https://code.visualstudio.com/ (recommended, but not required).
3. Unzip this project somewhere easy to find, such as your Desktop.

## 2. Start the app

1. Open the `piano-studio` folder in Visual Studio Code.
2. Open **Terminal → New Terminal**.
3. Run:

   ```bash
   npm install
   ```

4. When that finishes, run:

   ```bash
   npm run dev
   ```

5. Open the local address printed in the terminal (usually http://localhost:5173).
6. Leave the terminal running while you use the app. Press `Ctrl+C` in the terminal to stop it.

On a phone connected to the same Wi-Fi, Vite can be started with `npm run dev -- --host 0.0.0.0`; open the network URL Vite prints. MIDI is primarily intended for desktop Chrome/Edge; mobile touch keyboard remains available.

## 3. Connect your MIDI keyboard

1. Connect the keyboard to your computer with USB.
2. Open the app in desktop Chrome or Edge at `http://localhost:5173`.
3. Open **Settings → Connect MIDI keyboard** and approve the browser permission.
4. If it is not detected, check the USB cable, keyboard's USB/MIDI mode, and whether another app is using it.

The app also has a touch keyboard. Computer keys A/W/S/E/D/F/T/G/Y/H/U/J/K play a chromatic run starting at the configured first key.

## 4. Customize and back up

In Settings, choose the on-screen keyboard size and its lowest MIDI note. Progress is saved in the current browser on the current device. Use **Export progress JSON** to save a backup. Clearing browser site data can erase local progress, so export occasionally.

## 5. Build a production version

Run `npm run build`. The finished static site is written to `dist/`. It can be hosted on any static web host; MIDI access requires a secure context (localhost or HTTPS).

## Project map

- `src/App.jsx` — pages, navigation, practice state, and MIDI handling.
- `src/data/curriculum.js` — lesson text and quizzes; add lessons here.
- `src/data/songs.js` — simplified public-domain song note data.
- `src/components/Keyboard.jsx` — responsive on-screen keyboard.
- `src/components/Staff.jsx` — lightweight staff illustration.
- `src/lib/audio.js` — Tone.js sound engine.
- `src/lib/music.js` — note/MIDI conversion helpers.
- `src/styles.css` — all visual styling and responsive breakpoints.

## Notes and current limitations

- This is a working first release with local progress, lessons, quizzes, keyboard audio, Web MIDI input, metronome, song playback, and a simple step-pattern interface.
- The current staff view uses VexFlow to render a clef and highlighted teaching note; it is not yet a complete engraved score with full rhythms, measures, or multi-note passages.
- The current song arrangements are short simplified teaching melodies, not complete editions. Check licensing before adding third-party arrangements.
- The sequencer is a first prototype with a looping 16-step pulse pattern; it does not yet export MIDI/audio or implement multi-track arrangement. The game-audio lessons explain loop and adaptive-stem concepts, but engine integration is a workflow guide rather than a live Unity/Godot plugin.
- Web MIDI support varies by browser and operating system. Audio starts after a user gesture because browsers restrict autoplay.

## Good next improvements

1. Full VexFlow notation with treble/bass clefs, rests, time signatures, and note highlighting.
2. A timed sight-reading trainer with adaptive difficulty and answer feedback.
3. A true multi-track step sequencer with drum samples, bass, chords, MIDI export, and WAV rendering.
4. MIDI and MusicXML import for personal song sheets.
5. Falling-note playback synchronized to notation and MIDI input.
6. Game-audio templates: exploration/combat/victory stems, seamless loop checks, and Unity/Godot export recipes.
7. Better streak handling across time zones and a dedicated practice timer.
