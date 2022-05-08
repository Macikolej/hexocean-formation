import ky from "ky";

const apiClient = ky.create({
  prefixUrl: "https://frosty-wood-6558.getsandbox.com:443/",
});

export const createDish = (dish) => (
  apiClient.post("dishes", {
    json: dish
  }).json()
);