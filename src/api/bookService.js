const url = "https://crudcrud.com/api/aa2ac55fc2bd4d228e4cc10bf6a9d270/books";

export const getBooks = async () => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const postBook = async (payload) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  return data;
};

// get book details

export const getBookById = async (id) => {
  const res = await fetch(`${url}/${id}`);
  return res.json();
};


 



export const putBook = async (id, form) => {
  const { _id, id: _remove, ...rest } = form;
  const res = await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rest),
  });

  const data = res;
  return data;
};

 

 export const deleteBook = async (id) => {
  return fetch(`${url}/${id}`, {
    method: "DELETE",
  });
};


 