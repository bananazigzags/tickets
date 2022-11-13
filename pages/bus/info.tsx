import { SearchResult, SearchResultLayout } from "../../components/index";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function Info() {
  const searchData = useSelector((state: RootState) => state.search);

  return (
    <SearchResultLayout>
      <SearchResult 
        from={searchData.from}
        to={searchData.to}
        dateStart={searchData.dateStart}
        dateFinish={searchData.dateFinish}
        isLuggageIncluded={true}
        carrier="FlixBus"
      />
    </SearchResultLayout>
  )
}