
export default {
  
  get(k) {
    try {
      return JSON.parse(localStorage.getItem(k));
    } catch(e) {
      return null;
    }
  },

  set(k, val) {
    localStorage.setItem(k, JSON.stringify(val));
  }

}