import React, { SyntheticEvent } from "react";
import "./Card.css";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";
import { Link } from "react-router-dom";

interface Props {
  data: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({
  data,
  onPortfolioCreate,
}: Props): JSX.Element => {
  return (
    <>
      <div className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row">
        <Link
          to={`/company/${data.symbol}`}
          className="font-bold text-center text-black md:text-left">
          {data.name}({data.symbol})
        </Link>
        <p className="text-black">${data.currency}</p>

        <p className="font-bold text-black">
          {data.exchangeShortName} - {data.stockExchange}
        </p>
        <AddPortfolio
          onPortfolioCreate={onPortfolioCreate}
          symbol={data.symbol}
        />
      </div>
    </>
  );
};
export default Card;
