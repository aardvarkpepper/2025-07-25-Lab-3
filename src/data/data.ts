import type { Task } from '../types/index';

export const dataTaskArray: Task[] = [
  {
    id: 'EatApple01',
    title: 'Eat an apple',
    description: 'Zebras like apples, and you might too!',
    status: 'pending',
    priority: 'low',
    dueDate: "2026-08-11"
  },
    {
    id: 'BalanceCantaloupe01',
    title: 'Balance A Cantaloupe On Your Nose',
    description: "Actually, maybe don't do this.",
    status: 'in-progress',
    priority: 'medium',
    dueDate: "2025-11-11"
  },
    {
    id: 'EatBanana01',
    title: 'Eat a banana',
    description: 'Munch on a yummy banana.',
    status: 'completed',
    priority: 'high',
    dueDate: "2025-07-11"
  },
];

