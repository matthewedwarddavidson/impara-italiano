#!/bin/sh
# Records every missing clip, restarting the generator after each batch to release GPU memory.
# Runs at low priority with GPU memory capped, so the Mac stays usable during the run.
# Usage: scripts/record_all.sh   (from the repository root)
# Keeps the Mac from idle sleep while this script runs; overnight it otherwise sleeps and records a few clips an hour.
caffeinate -i -w $$ &
export HF_HUB_OFFLINE=1
export OMP_NUM_THREADS=4
export TQDM_DISABLE=1
# Fractions of the GPU's recommended working set; lower values use less memory but may fail with out-of-memory errors.
export PYTORCH_MPS_HIGH_WATERMARK_RATIO="${PYTORCH_MPS_HIGH_WATERMARK_RATIO:-0.25}"
export PYTORCH_MPS_LOW_WATERMARK_RATIO="${PYTORCH_MPS_LOW_WATERMARK_RATIO:-0.2}"
while true; do
  taskpolicy -c utility nice -n 15 .venv-tts/bin/python scripts/generate_speech.py
  status=$?
  [ "$status" -eq 3 ] || exit "$status"
done
