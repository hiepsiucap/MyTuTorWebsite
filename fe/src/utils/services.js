/** @format */

export const baseUrl = "http://localhost:4000/api/v1";
export const postRequest = async (url, body) => {
  const response = await fetch(url, {
    method: "POST",
    withCredntials: true,
    credentials: "include",
    headers: {
      Accept: "application/form-data",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  if (!response.ok) {
    let message;
    if (data?.msg) {
      message = data.msg;
    } else {
      message = data;
    }
    return { error: true, message };
  }
  return data;
};
export const getRequest = async (url) => {
  const response = await fetch(url, {
    method: "GET",
    withCredntials: true,
    credentials: "include",
    headers: {
      Accept: "application/form-data",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    let message;
    if (data?.msg) {
      message = data.msg;
    } else {
      message = data;
    }
    return { error: true, message };
  }
  return data;
};
