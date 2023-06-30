import { toast, Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";

import { Loader } from "./Loader/Loader";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal";
import { CardList } from "./CardList/CardList";
import { ButtonContainer } from "./CardItem/CardItem.styled";
import { CreateForm } from "./CreateForm/CreateForm";

import { Header } from "./Header/Header";
import { Container } from "./Container/Container";

import { fetchData } from "../utils/fetchData";
import { resetData } from "../utils/resetData";

export const App = () => {
  const [superHeroes, setSuperHeroes] = useState([]);
  const [totalHits, setTotalHits] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    resetData(setError, setIsLoading);
    fetchData(
      page,
      limit,
      setSuperHeroes,
      setTotalHits,
      setError,
      setIsLoading,
      toast
    );
  }, [limit, page]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Header toggleModal={toggleModal}></Header>

      <Container>
        <Toaster />
        {superHeroes.length > 0 && <CardList superHeroes={superHeroes} />}
        {totalHits !== superHeroes.length && !isLoading && (
          <ButtonContainer>
            <Button onClick={loadMore} style={{ alignSelf: "center" }}>
              LoadMore
            </Button>
          </ButtonContainer>
        )}
        {isLoading && <Loader />}
        {showModal && (
          <Modal>
            <CreateForm toggleModal={toggleModal} />
          </Modal>
        )}
      </Container>
    </>
  );
};
