function useData<T>(params: { fetchData: () => Promise<T> }): {
  getData: () => T | undefined;
};
function useData<T>(params: { fetchData: () => Promise<T>; initialData: T }): {
  getData: () => T;
};
function useData<T>(params: { fetchData: () => Promise<T>; initialData?: T }): {
  getData: () => T | undefined;
} {
  let data = params.initialData;

  params.fetchData().then((d) => {
    data = d;
  });

  return {
    getData: () => data,
  };
}

// const numData = useData({
//   fetchData: () => Promise.resolve(1),
// });

// const data = numData.getData();

const numData = useData({
  fetchData: () => Promise.resolve(1),
  initialData: 2,
});

const data = numData.getData();
