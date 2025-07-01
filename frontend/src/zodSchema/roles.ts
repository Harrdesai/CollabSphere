// src/zodSchema/roles.ts

import { z } from 'zod';

export const RolesEnum = z.enum([
  'FULLSTACK_DEVELOPER',
  'FRONTEND_DEVELOPER',
  'BACKEND_DEVELOPER',
  'UI_DESIGNER',
  'UX_DESIGNER',
  'PRODUCT_DESIGNER',
  'DATA_SCIENTIST',
  'DATA_ANALYST',
  'DATA_ENGINEER',
  'DATABASE_DESIGNER',
  'TEAM_LEADER',
]);

export type RolesType = z.infer<typeof RolesEnum>;

export const RoleLabels: Record<RolesType, string> = {
  FULLSTACK_DEVELOPER: 'Fullstack Developer',
  FRONTEND_DEVELOPER: 'Frontend Developer',
  BACKEND_DEVELOPER: 'Backend Developer',
  UI_DESIGNER: 'UI Designer',
  UX_DESIGNER: 'UX Designer',
  PRODUCT_DESIGNER: 'Product Designer',
  DATA_SCIENTIST: 'Data Scientist',
  DATA_ANALYST: 'Data Analyst',
  DATA_ENGINEER: 'Data Engineer',
  DATABASE_DESIGNER: 'Database Designer',
  TEAM_LEADER: 'Team Leader',
};
