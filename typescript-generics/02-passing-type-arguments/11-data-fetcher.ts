const fetchData = async <TData>(url: string) => {
  let data: TData = await fetch(url).then((response) => response.json());

  return data;
};

// const data = await fetchData<{ name: string }>(
//   'https://swapi.dev/api/people/1'
// );
