import styles from './list.module.css';
import ListCardComponent from "../list-card-component/list-card.component";
import { useEffect, useState, useMemo } from 'react';
import { IListApartmentsService } from '../../application/contracts/list-appartments.interface';
import { AppartmentsListElement } from '../../domain/dtos/appartments-list-element.dto';
import { ListApartmentsService } from '../../application/implementations/list-appartments.service';
import { PageSize } from '@/core/domain/constants/constants';
import { APIResponse } from '@/core/domain/dtos/api-response.dto';

const ListComponent = () => {
    const [apartments, setApartments] = useState<AppartmentsListElement[]>([]);
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);
    const pageSize: number = PageSize;

    const listApartmentsService: IListApartmentsService = useMemo(() => new ListApartmentsService(), []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res: APIResponse<AppartmentsListElement[]> = await listApartmentsService.getApartmentsByPage(page, pageSize);
                setApartments(res.data);
                setPage(res.pageNumber);
                setCount(res.numberOfPages);
            } catch (error) {
                console.error('Error fetching apartments:', error);
            }
        };
        fetchData();
        window.scrollTo(0, 0); // Scroll to top on page change
    }, [page, listApartmentsService, pageSize]);

    const handleNextPage = () => {
        if (page < count) {
            setPage(prevPage => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(prevPage => prevPage - 1);
        }
    };

    return (
        <main>
            <div className={styles.cardList}>
                {apartments.map((apartment, index) => (
                    <div 
                        className={`${styles.cardWrapper} ${index % 2 === 0 ? styles.fromLeft : styles.fromRight}`} 
                        key={apartment.id}
                    >
                        <ListCardComponent {...apartment} />
                    </div>
                ))}
            </div>
            <div className={styles.paginationControls}>
                <button onClick={handlePrevPage} disabled={page === 1}>Previous</button>
                <span>Page {page}</span>
                <button onClick={handleNextPage} disabled={page >= count}>Next</button>
            </div>
        </main>
    );
};

export default ListComponent;
