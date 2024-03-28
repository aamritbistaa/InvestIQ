import React from "react";

interface Props {
  onSearchSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  search: string | undefined;
}

const Search: React.FC<Props> = ({
  onSearchSubmit,
  handleSearchChange,
  search,
}: Props): JSX.Element => {
  return (
    <>
      <form onSubmit={onSearchSubmit}>
        <input value={search} onChange={(e) => handleSearchChange(e)} />
      </form>
    </>
  );
};

export default Search;
