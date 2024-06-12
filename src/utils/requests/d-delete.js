// import { remove } from "lodash";
import { api_options } from "../constants";
// import fetch_laptop from "./requests/r-get";

const { BASE_URL, path} = api_options.json_server;

console.log("focus here")
console.log(BASE_URL, path);

function remove_laptop(id) {
    const base_url = `${BASE_URL}${path.laptop}/${id}`;
    const options = {
        method: "DELETE"
    }
    return fetch(base_url, options).then(resp => resp.json())
}

remove_laptop(9);

// fetch_laptop(path.laptop);
