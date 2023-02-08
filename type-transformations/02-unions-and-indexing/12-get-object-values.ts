const frontendToBackendEnumMap = {
  singleModule: 'SINGLE_MODULE',
  multiModule: 'MULTI_MODULE',
  sharedModule: 'SHARED_MODULE',
} as const;

type BackendModuleEnum =
  typeof frontendToBackendEnumMap[keyof typeof frontendToBackendEnumMap];
