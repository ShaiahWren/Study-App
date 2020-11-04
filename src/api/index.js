export async function getAllUsers(apiUrl) {
    return new Promise((resolve, reject) => {
      fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
          resolve(data);
        });
    });
  }