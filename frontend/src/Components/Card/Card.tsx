import React, { SyntheticEvent } from "react";
import "./Card.css";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";

interface Props {
  data: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({
  data,
  onPortfolioCreate,
}: Props): JSX.Element => {
  return (
    <div className="card">
      <img src="" alt="Company-Logo" />
      <div className="details">
        <h2>
          {data.name}({data.symbol})
        </h2>
        <p>${data.currency}</p>
      </div>
      <p className="infor">
        {data.exchangeShortName} - {data.stockExchange}
      </p>
      <AddPortfolio
        onPortfolioCreate={onPortfolioCreate}
        symbol={data.symbol}
      />
    </div>
  );
};
export default Card;
