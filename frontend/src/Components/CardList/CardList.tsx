import React, { SyntheticEvent } from "react";
import Card from "../Card/Card";
import { CompanySearch } from "../../company";

interface Props {
  searchResult: CompanySearch[];
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({
  searchResult,
  onPortfolioCreate,
}: Props): JSX.Element => {
  return (
    <>
      {searchResult.length > 0 ? (
        searchResult?.map((item, id) => {
          {
            console.log(item);
          }
          return (
            <Card data={item} key={id} onPortfolioCreate={onPortfolioCreate} />
          );
        })
      ) : (
        <>
          <h1>No results!</h1>
          <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
            No results!
          </p>
        </>
      )}
      {}
    </>
  );
  // <div>
  //   <Card companyName="Apple Inc" ticker="AAPL" price={169} />
  //   <Card companyName="Microsoft Corp" ticker="MSFT" price={427} />
  //   <Card companyName="Amazon.com Inc" ticker="AMZN" price={178} />
  //   <Card companyName="Uber Technologies Inc" ticker="UBER" price={730} />
  // </div>
};

export default CardList;
