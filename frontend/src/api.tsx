import axios from "axios";
import { CompanyProfile, CompanySearch } from "./company";

interface SearchResponse {
  data: CompanySearch[];
}
const API_KEY = "biUfxW339C0hvRazbhEbASVBmWJdEHsC";
export const searchCompanies = async (query: string) => {
  try {
    // console.log(process.env.API_KEY, "key");
    const data = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${API_KEY}`
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

export const getCompanyProfile = async (query: string) => {
  try {
    const data = await axios.get<CompanyProfile[]>(
      `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${API_KEY}`
    );
    return data;
  } catch (error: any) {
    console.log("error message from API: ", error.message);
  }
};
