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
      {searchResult?.map((item, id) => {
        {
          console.log(item);
        }
        return (
          <Card data={item} key={id} onPortfolioCreate={onPortfolioCreate} />
        );
      })}
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
