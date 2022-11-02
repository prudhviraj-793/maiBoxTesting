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
