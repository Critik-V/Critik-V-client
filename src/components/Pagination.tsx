import { useEffect, useState } from "react";
import "./styles/Pagination.scss";
import AwesomeIcons from "./AwesomeIcons";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const lastPage = totalPages;
  const division = 4;
  const plusInterval = 3;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [firstPartArray, setFirstPartArray] = useState<number[]>([]);
  const [secondPartArray, setSecondPartArray] = useState<number[]>([]);
  const [lastPartArray, setLastPartArray] = useState<number[]>([]);

  useEffect(() => {
    if (lastPage <= division + plusInterval) {
      setFirstPartArray(Array.from({ length: lastPage }, (_, i) => i + 1));
      setSecondPartArray([]);
      setLastPartArray([]);
    }
    if (lastPage > division + plusInterval) {
      if (currentPage <= division) {
        setFirstPartArray(Array.from({ length: division + 1 }, (_, i) => i + 1));
        setSecondPartArray([]);
        setLastPartArray([lastPage]);
      }
      if (currentPage <= lastPage - division && currentPage > division) {
        setFirstPartArray([1]);
        setSecondPartArray([currentPage - 1, currentPage, currentPage + 1]);
        setLastPartArray([lastPage]);
      }
      if (currentPage > lastPage - division) {
        setFirstPartArray([1]);
        setSecondPartArray([]);
        setLastPartArray(Array.from({ length: division + 1 }, (_, i) => i + lastPage - division));
      }
    }
  }, [currentPage, lastPage]);

  return (
    <div className="pagination">
      <button onClick={() => setCurrentPage(prev => --prev)} disabled={currentPage == 1}>
        <AwesomeIcons type="solid" name="chevron-left" />
      </button>
      {firstPartArray.map(page => (
        <button
          key={page}
          className={currentPage === page ? "active" : ""}
          onClick={() => setCurrentPage(page)}>
          {page}
        </button>
      ))}
      {secondPartArray.length > 0 && <span>...</span>}
      {secondPartArray.map(page => (
        <button
          key={page}
          className={currentPage === page ? "active" : ""}
          onClick={() => setCurrentPage(page)}>
          {page}
        </button>
      ))}
      {lastPartArray.length > 0 && <span>...</span>}
      {lastPartArray.map(page => (
        <button
          key={page}
          className={currentPage === page ? "active" : ""}
          onClick={() => setCurrentPage(page)}>
          {page}
        </button>
      ))}
      <button onClick={() => setCurrentPage(prev => ++prev)} disabled={currentPage == lastPage}>
        <AwesomeIcons type="solid" name="chevron-right" />
      </button>
    </div>
  );
}
