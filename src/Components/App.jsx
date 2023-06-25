import { toast, Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";

import { getAll } from "API/api";

import { Container } from "./App.styled";
import { CardList } from "./CardList/CardList";

import { Loader } from "./Loader/Loader";
import { Header } from "./Header/Header";

import { Modal } from "./Modal/Modal";
import { Button } from "./Button/Button";

export const App = () => {
  const [superHeroes, setSuperHeroes] = useState([]);
  const [totalHits, setTotalHits] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setError("");
    setIsLoading(true);

    const FetchData = async () => {
      try {
        const result = await getAll(page, limit);
        const { totalResult } = result;
        if (!totalResult) {
          return;
        }
        setSuperHeroes((prev) => [...prev, ...result.data]);
        setTotalHits(totalResult);
      } catch (error) {
        setError(error.message);
        toast.error("Something gone wrong! Try to reload page.");
      } finally {
        setIsLoading(false);
      }
    };

    FetchData();
  }, [limit, page]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  const toggleModal = (superhero) => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Header toggleModal={toggleModal}></Header>
      <Toaster />
      <Container>
        {superHeroes.length > 0 && (
          <CardList toggleModal={toggleModal} superHeroes={superHeroes} />
        )}

        {totalHits !== superHeroes.length && !isLoading && (
          <Button onClick={loadMore} style={{ alignSelf: "center" }}>
            LoadMore
          </Button>
        )}

        {isLoading && <Loader />}

        {showModal && <Modal toggleModal={toggleModal} />}
      </Container>
    </>
  );
};
