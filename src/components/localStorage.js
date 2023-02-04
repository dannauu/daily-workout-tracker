const setLocalStorage = (key, value) => {
  let values = JSON.parse(localStorage.getItem("done")) || [];
  values.push(value);
    try {
      localStorage.setItem(key, JSON.stringify(values));
    } catch (e) {
      console.error(e);
    }
  };

  export default setLocalStorage