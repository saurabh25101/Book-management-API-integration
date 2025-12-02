const url = "https://crudcrud.com/api/b87ad2236a4b49afa6a24e1298d7849c/books";

export const getBooks = async () => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
 
export const postBook = async (payload) => {
  const res = await fetch(url,{
    method: "POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(payload),
  });
  const data = await res.json();
  return data;
};

 export const getBookById = async (id) => {
  const res = await fetch(`${url}/${id}`);
  return res.json();
};