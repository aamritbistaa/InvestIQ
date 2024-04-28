import React from "react";
import { testIncomeStatementData } from "./testData";

const data = testIncomeStatementData;
type Props = {};

const configs = [
  {
    label: "Year",
    render: (company: any) => company.acceptedDate,
  },
  {
    label: "Cost of Revenue",
    render: (company: any) => company.costOfRevenue,
  },
];

const Table = (props: Props) => {
  const renderRows = data.map((company) => {
    return (
      <tr key={company.cik}>
        {configs.map((val: any) => {
          return (
            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
              {val.render(company)}
            </td>
          );
        })}
      </tr>
    );
  });

  const renderHeaders = configs.map((config: any) => {
    return (
      <th
        className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-normal"
        key={config.label}>
        {config.label}
      </th>
    );
  });
  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
      <table>
        <thead className="min-w-full divide-y divide=gray-200 m-5">
          {renderHeaders}
        </thead>
        <tbody>{renderRows}</tbody>
      </table>
    </div>
  );
};

export default Table;
