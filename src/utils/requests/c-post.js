import { api_options } from "../constants";
const { BASE_URL, path } = api_options.json_server;

function addLaptop(laptop) {
  const base_url = `${BASE_URL}${path.laptop}`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(laptop),
  };
  return fetch(base_url, options).then(res => res.json())
}

addLaptop({
    name: "Новий",
    img: "https://mashtrelo.com/wp-content/uploads/2017/11/laptop-notebook-png-image-image-with-transparent-background.png",
    brand: "Google",
    price: 999.99,
    screenSize: 13.3,
    processor: "Intel Core i5",
    ram: 8,
    storage: "128GB SSD",
    category: "Ноутбуки",
  });
addLaptop({
    name: "Новий2p",
    img: "https://mashtrelo.com/wp-content/uploads/2017/11/laptop-notebook-png-image-image-with-transparent-background.png",
    brand: "Google",
    price: 999.99,
    screenSize: 13.3,
    processor: "Intel Core i5",
    ram: 8,
    storage: "128GB SSD",
    category: "Ноутбуки",
  });