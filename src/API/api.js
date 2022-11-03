export async function updateMessageStatus(mails) {
  const url =
    "https://mail-box-fe343-default-rtdb.firebaseio.com/allMails.json";
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(mails),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
}

export async function signUp(signupData) {
  const url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB3V_lsKdgoZgZJ5Nvrxc5vxy9k82gxdtE";
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(signupData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
}

export async function login(loginData) {
  const url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB3V_lsKdgoZgZJ5Nvrxc5vxy9k82gxdtE";
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
}
