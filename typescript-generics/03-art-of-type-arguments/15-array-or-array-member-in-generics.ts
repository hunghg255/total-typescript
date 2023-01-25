const makeStatus = <TStatus extends string>(statuses: TStatus[]) => {
  return statuses;
};

const statuses = makeStatus(['INFO', 'DEBUG', 'ERROR', 'WARNING']);
