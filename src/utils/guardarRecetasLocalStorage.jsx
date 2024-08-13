const guardarRecetassLocalStorage = (key,elementos) => {
    localStorage.setItem(key, JSON.stringify(elementos));
  };

export default guardarRecetassLocalStorage