"""
Cuts a reference clip for voice cloning from a LibriVox chapter.

Usage: .venv-tts/bin/python scripts/cut_voice.py <mp3 url or file> <start seconds> <length seconds> <voice name>
Example: .venv-tts/bin/python scripts/cut_voice.py https://www.archive.org/download/.../chapter_64kb.mp3 95 12 giulia

Writes scripts/voices/<voice name>.wav: mono, 24 kHz, peak-normalised. Aim for 10 to 15 seconds of even reading.
"""
import os
import sys
import tempfile
import urllib.request

import librosa
import numpy as np
import soundfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
VOICES = os.path.join(ROOT, 'scripts', 'voices')
RATE = 24000


def local_copy(source):
    """The source as a local file, downloading it first if it is a URL."""
    if not source.startswith('http'):
        return source
    handle = tempfile.NamedTemporaryFile(suffix='.mp3', delete=False)
    with urllib.request.urlopen(source) as response:
        handle.write(response.read())
    handle.close()
    return handle.name


def main():
    if len(sys.argv) != 5:
        sys.exit(__doc__)
    source, start, length, name = sys.argv[1], float(sys.argv[2]), float(sys.argv[3]), sys.argv[4]
    samples, _ = librosa.load(local_copy(source), sr=RATE, mono=True, offset=start, duration=length)
    samples = samples / max(np.max(np.abs(samples)), 1e-6) * 0.9
    os.makedirs(VOICES, exist_ok=True)
    path = os.path.join(VOICES, f'{name}.wav')
    soundfile.write(path, samples, RATE)
    print(f'Wrote {path} ({len(samples) / RATE:.1f} s)')


if __name__ == '__main__':
    main()
