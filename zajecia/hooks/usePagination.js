import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activePage, setActivPage] = useState(searchParams.get("page") || 1);

  useEffect(() => {
    console.log(activePage);
    setSearchParams({
      page: activePage,
    });
  }, [activePage]);

  const handlePrevious = () => {
    setActivPage((prev) => prev - 1);
  };
  const handleNext = () => {
    setActivPage((prev) => prev + 1);
  };

  return [activePage, handlePrevious, handleNext];
};

export default usePagination;
