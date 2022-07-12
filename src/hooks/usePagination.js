import { useState } from "react";

export const usePagination = (hackerNews, newsPerPage, totalPages) =>  {

  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = totalPages;

  function currentData() {
    const begin = (currentPage - 1) * newsPerPage;
    const end = begin + newsPerPage;
    return hackerNews.slice(begin, end);
  }

  function next() {
    setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
  }

  function prev() {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  }

  function jump(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage(currentPage => Math.min(pageNumber, maxPage));
  }

  return { next, prev, jump, currentData, currentPage, maxPage };
}

