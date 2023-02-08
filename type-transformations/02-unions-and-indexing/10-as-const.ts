export const programModeEnumMap = {
  GROUP: 'group',
  ANNOUNCEMENT: 'announcement',
  ONE_ON_ONE: '1on1',
  SELF_DIRECTED: 'selfDirected',
  PLANNED_ONE_ON_ONE: 'planned1on1',
  PLANNED_SELF_DIRECTED: 'plannedSelfDirected',
} as const;

export type GroupProgram = typeof programModeEnumMap['GROUP'];
export type AnnouncementProgram = typeof programModeEnumMap['ANNOUNCEMENT'];
export type OneOnOneProgram = typeof programModeEnumMap['ONE_ON_ONE'];
export type SelfDirectedProgram = typeof programModeEnumMap['SELF_DIRECTED'];
export type PlannedOneOnOneProgram =
  typeof programModeEnumMap['PLANNED_ONE_ON_ONE'];
export type PlannedSelfDirectedProgram =
  typeof programModeEnumMap['PLANNED_SELF_DIRECTED'];
