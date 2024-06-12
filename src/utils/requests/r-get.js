const BASE_URL = "http://localhost:9999/";

// import {apiOptions} from "../../utils/constants"

export default function fetch_laptop(path) {
  return fetch(`${BASE_URL}${path}`)
    .then((resp) => resp.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}
// function fetch_laptop_by_id(path, laptop_id) {
//   return fetch(`${BASE_URL}/${path}/${laptop_id}`)
//     .then((resp) => resp.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
// }

// fetch_laptop();
// fetch_laptop_by_id(path.laptop, 5);

const path = {
    laptop: "laptop",
    users: "users"
}

fetch_laptop(path.laptop)
