import { useEffect, useState } from "react";

interface PaginationProps<T> {
  items: T[];
  itemsPerPage: number;
}

export const usePagination = <T extends object>({ items, itemsPerPage }: PaginationProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setTotalPages(Math.ceil(items.length / itemsPerPage));
  }, [items, itemsPerPage]);

  const paginatedItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const nextPage = () => {
    setCurrentPage(Math.min(currentPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };

  return {
    nextPage,
    prevPage,
    currentPage,
    totalPages,
    paginatedItems,
  };
};
