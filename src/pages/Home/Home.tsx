import BookSearch from "../../components/Books/BookSearch";
import { PageContainer } from "../../components/shared";
import BooksList from "../../components/Books/BooksList";
import { getNewestBooks } from "../../utils";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams] = useSearchParams();
  const initialSearchValue = searchParams.get("q") ?? undefined;

  return (
    <>
      <BookSearch initialValue={initialSearchValue} />
      <PageContainer>
        <BooksList
          listTitle="Latest Books"
          filter={(books) => getNewestBooks(books)}
        />
      </PageContainer>
    </>
  );
};

export default Home;
