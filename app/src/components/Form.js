import React from "react";

const Form = props => {
  const [search, setSearch] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.searchUser(search);
  };

  const handleChange = e => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <form>
        <input type="text" name="search" onChange={handleChange}></input>
        <button onClick={handleSubmit}>Find User</button>
      </form>
    </div>
  );
};

export default Form;
