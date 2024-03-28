import axios from "axios";
import { CompanySearch } from "./company";

interface SearchResponse {
  data: CompanySearch[];
}
export const searchCompanies = async (query: string) => {
  try {
    // console.log(process.env.API_KEY, "key");
    const data = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${"biUfxW339C0hvRazbhEbASVBmWJdEHsC"}`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Error Message ", error.message);
      return error.message;
    } else {
      console.log("Unexpected error", error);
      return "Unexpected error occured";
    }
  }
};
