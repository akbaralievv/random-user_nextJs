import { useRouter } from 'next/navigation';

import styles from '@/styles/Pagination.module.css';

interface PaginationProps {
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage }) => {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    router.push(`/?page=${page}`);
  };

  return (
    <div className={styles.pagination}>
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
