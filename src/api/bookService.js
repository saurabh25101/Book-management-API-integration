const url = "https://crudcrud.com/api/b87ad2236a4b49afa6a24e1298d7849c/books";

export const getBooks = async () => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
