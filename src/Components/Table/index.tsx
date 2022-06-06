// Components
import { Modal } from "../Modal";

// Hooks
import { useMemo } from "react";
import { usePagination, useForm, useModal } from "../../Hooks";

// Styles
import { Wrapper } from "./styles";

interface Props<T> {
  dataHeader: string[];
  dataBody: T[];
}

export const Table = <T extends object>({ dataBody, dataHeader }: Props<T>) => {
  const { state, closeModal, openModal, removeModal } = useModal();
  const { isOpen, isRemoved } = state;
  const { handleChange, values } = useForm();

  const dataFiltered = useMemo(() => {
    return dataBody.filter((item) =>
      Object.keys(values).every((key) =>
        item[key].toLowerCase().includes(values[key].toLowerCase())
      )
    );
  }, [values, dataBody]);

  const { currentPage, totalPages, paginatedItems, nextPage, prevPage } = usePagination({
    items: dataFiltered,
    itemsPerPage: 6,
  });

  const renderHeader = () => {
    return (
      <tr>
        {dataHeader.map((header) => (
          <th key={header}>
            <input
              type="text"
              autoComplete="off"
              name={header.toLocaleLowerCase()}
              onChange={handleChange}
              placeholder={header}
            />
          </th>
        ))}
      </tr>
    );
  };

  const renderBody = () => {
    return paginatedItems.map((body: T, index) => {
      return (
        <tr key={index}>
          {Object.keys(body).map((key) => (
            <td key={key}>{body[key]}</td>
          ))}
          <td>
            <button onClick={openModal}>Edit</button>
          </td>
        </tr>
      );
    });
  };

  const renderPagination = () => {
    return (
      <tr>
        <td colSpan={dataHeader.length}>
          <span>
            Page: {currentPage} of {totalPages}
          </span>
          <div className="pagination-buttons">
            <button onClick={prevPage}>Prev</button>
            <button onClick={nextPage}>Next</button>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <>
      <Wrapper>
        <thead>{renderHeader()}</thead>
        <tbody>{renderBody()}</tbody>
        <tfoot>{renderPagination()}</tfoot>
      </Wrapper>
      {!isRemoved && <Modal isOpen={isOpen} closeModal={closeModal} removeModal={removeModal} />}
    </>
  );
};
