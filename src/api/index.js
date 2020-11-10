export async function getAllUsers(apiUrl) {
    return new Promise((resolve, reject) => {
      fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
          resolve(data);
        });
    });
  }



const authKey = "a/tkHYSdRszVgOLaiZYgZ3AxA3TIw6480RxWxWb0O0o=";
const host = "data.usajobs.gov";
const userAgent = "agamble9@student.gsu.edu";

const getJobs = async () => {
  const data = await fetch("https://data.usajobs.gov/api/search", {
    method: "GET",
    headers: {
      Host: host,
      "User-Agent": userAgent,
      "Authorization-Key": authKey
    }
  }).then((response) => response.json());
  console.log(data.SearchResult.SearchResultItems);
};

getJobs();