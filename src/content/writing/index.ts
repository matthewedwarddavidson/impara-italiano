import type { WritingTask } from '../types'
import { TASKS_A1 } from './tasks-a1'
import { TASKS_A2 } from './tasks-a2'
import { TASKS_B1 } from './tasks-b1'

export const WRITING_TASKS: WritingTask[] = [...TASKS_A1, ...TASKS_A2, ...TASKS_B1]
