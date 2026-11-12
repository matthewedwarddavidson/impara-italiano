import { CHECKPOINT_A1 } from './a1'
import { CHECKPOINT_A2 } from './a2'
import { CHECKPOINT_B1 } from './b1'
import type { Checkpoint } from './types'

export type { Checkpoint, CheckpointModule, ExamItem, ExamScript, ExamText, ListeningPart, ReadingPart } from './types'

/** One checkpoint per level; B2's comes with the B2 content. */
export const CHECKPOINTS: Checkpoint[] = [CHECKPOINT_A1, CHECKPOINT_A2, CHECKPOINT_B1]

/** The pass mark out of 100, the app's own choice. */
export const PASS_MARK = 60
