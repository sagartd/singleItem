import React from "react";
import styled from "styled-components";

const Searchbar = () => {
  return (
    <Wsearchbar>
        <div>
          <form action="">
            <select name="category" id="category" className="drop">
              <option value="Mobiles">All</option>
              <option value="Mobiles">Mobi</option>
            </select>
          </form>
        </div>
        <div>
          <form action="" className="dropb">
            <input
              type="search"
              name=""
              id=""
              placeholder="Search by product name"
              className="dropb"
            />
          </form>
        </div>
    </Wsearchbar>
  );
};

export default Searchbar;

const Wsearchbar = styled.section`
    display: flex;
    align-items: center;

  .drop {
    height: 40px;
    width: inherit;
    border: none;
    outline: none;
  }

  form.dropb {
    border: none;
    padding: 0;
  }

  input.dropb {
    border: none;
    box-shadow: none;
    outline: none;
    width: 100%;
    padding: 9px 4px 9px 40px;
    text-transform: none;
    background: transparent
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
      no-repeat 13px center;
  }

  @media (max-width: 450px) {
 
    .drop {
      width: inherit;
      border: none;
    }

    input.dropb {
      border: none;
      box-shadow: none;
      outline: none;
      height: inherit;
      width: inherit;
      background: none;
      padding: 0;
    }
  }
`;
