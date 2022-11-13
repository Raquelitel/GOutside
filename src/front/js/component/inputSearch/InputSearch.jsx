import React from "react";

const InputSearch = () => {
  const searchUser = (name) => {
    console.log(name);
  };

  return (
    <form>
      <input
        placeholder="Buscar..."
        onChange={(e) => searchUser(e.target.value)}
      />
    </form>
  );
};

export default InputSearch;
