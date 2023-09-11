export default {
  get() {
    return JSON.parse(localStorage.getItem("wishlist"));
  },
  set(data) {
    localStorage.setItem("wishlist", JSON.stringify(data));
  },
};
