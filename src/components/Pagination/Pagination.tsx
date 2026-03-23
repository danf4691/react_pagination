type Props = {
  pages: number[];
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<Props> = ({
  pages,
  currentPage,
  onPageChange,
}) => (
  <ul className="pagination">
    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
      <a
        data-cy="prevLink"
        className="page-link"
        href="#prev"
        aria-disabled={currentPage === 1}
        onClick={
          currentPage === 1 ? undefined : () => onPageChange(currentPage - 1)
        }
      >
        «
      </a>
    </li>
    {pages.map(page => (
      <li
        key={page}
        className={`page-item ${page === currentPage ? 'active' : ''}`}
      >
        <a
          data-cy="pageLink"
          className="page-link"
          href={`#${page}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </a>
      </li>
    ))}
    <li
      className={`page-item ${currentPage === pages.length ? 'disabled' : ''}`}
    >
      <a
        data-cy="nextLink"
        className="page-link"
        href="#next"
        aria-disabled={currentPage === pages.length}
        onClick={
          currentPage === pages.length
            ? undefined
            : () => onPageChange(currentPage + 1)
        }
      >
        »
      </a>
    </li>
  </ul>
);
