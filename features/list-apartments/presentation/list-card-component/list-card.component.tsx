import { baseUrl } from '@/core/domain/constants/constants';
import { AppartmentsListElement } from '../../domain/dtos/appartments-list-element.dto';
import styles from './list-card.module.css'
import { useRouter } from 'next/router';
import { appRoutes } from '@/core/domain/domain.module';

const ListCardComponent = (element: AppartmentsListElement) => {
    const router = useRouter();

    const handleOpenInfo = () => {
        router.push('/' + appRoutes.ViewApartment(element.id).route)
    };

    return(
        <main>
              <div className={styles.card} onClick={handleOpenInfo}>
                <div className={styles.imageContainer}>
                    <img src={baseUrl + element.imgUrl} alt="Apartment Image" className={styles.cardImg} />
                </div>
                <div className={styles.cardContent}>
                    <h2>Apartment Type: {element.appartmentTypeId}</h2>
                    <p>Compound: {element.compoundId}</p>
                    <div className={styles.details}>
                        <div>
                            <p>Beds</p>
                            <p>{element.numberOfBeds}</p>
                        </div>
                        <div>
                            <p>Baths</p>
                            <p>{element.numberOfBaths}</p>
                        </div>
                        <div>
                            <p>Area</p>
                            <p>{element.areaInM2} m²</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default ListCardComponent;