import warehouseImage from '@/assets/images/warehouse-search.png';
import axios from 'axios';
import React, { useState } from 'react';
import styles from './ProductSearch.module.scss';

// 상품 정보
interface Product {
  id: number;
  name: string;
  price: number;
  // ... 기타 상품 정보
}

// 페이지 응답 정보
interface PageResponse {
  content: Product[];
  totalElements: number;
  totalPages: number;
  pageable: {
    pageNumber: number;
    pageSize: number;
  };
}

const ProductSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const handleSearch = async (page: number = 0) => {
    if (!searchTerm.trim()) {
      setError('검색어를 입력해주세요');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get<PageResponse>(`http://localhost:8080/productList`, {
        params: {
          search: searchTerm,
          page: page,
          size: 10,
          sort: 'price,asc'
        }
      });
      
      setProducts(response.data.content);
      setTotalPages(response.data.totalPages);
      setCurrentPage(response.data.pageable.pageNumber);
      
    } catch (error) {
      console.error('검색 중 오류 발생:', error);
      setError('검색 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(0); // 검색 시 첫 페이지부터 시작
    }
  };

  const handlePageChange = (newPage: number) => {
    handleSearch(newPage);
  };
  
  return (
    // <Layout>
      <div className={styles.pageContents}>
        <div className={styles.pageContentsIntrobox}>
          <img src={warehouseImage} alt="warehouse" className={styles.pageContentsImage} />
          <div className={styles.pageContentsWrapper}>
            <span className={styles.wrapperTitle}>상품 검색</span>
            <span className={styles.wrapperDesc}>
              상품명을 검색하세요.
              <br />
              상품의 정보와 위치를 보여줍니다.
            </span>
            {/* <CommonSearchBar /> */}

            <input
              type="text"
              placeholder="찾으실 상품을 검색하세요"
              className={styles.searchBarInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />

            {error && <div className={styles.errorMessage}>{error}</div>}

            <button 
              onClick={() => handleSearch(0)} 
              className={styles.wrapperSearchButton}
              disabled={isLoading}
            >
              {isLoading ? '검색 중...' : '검색'}
            </button>

            {/* 검색 결과 표시 */}
            <div className={styles.searchResults}>
              {products.map(product => (
                <div key={product.id} className={styles.productItem}>
                  <h3>{product.name}</h3>
                  <p>가격: {product.price}원</p>
                </div>
              ))}
            </div>

            {/* 페이지네이션 */}
            {totalPages > 0 && (
              <div className={styles.pagination}>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`${styles.pageButton} ${currentPage === i ? styles.active : ''}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    // </Layout>
  );
};

export default ProductSearch;