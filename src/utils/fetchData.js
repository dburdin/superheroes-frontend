import { getAll } from "API/api";

export const fetchData = async (
  page,
  limit,
  setSuperHeroes,
  setTotalHits,
  setError,
  setIsLoading,
  toast
) => {
  try {
    const result = await getAll(page, limit);
    const { totalResult } = result;
    if (!totalResult) {
      return;
    }
    setSuperHeroes((prev) => [...prev, ...result.data]);
    setTotalHits(totalResult);
  } catch (error) {
    setError("Something went wrong! Try to reload the page.");
    toast.error("Something went wrong! Try to reload the page.");
  } finally {
    setIsLoading(false);
  }
};
