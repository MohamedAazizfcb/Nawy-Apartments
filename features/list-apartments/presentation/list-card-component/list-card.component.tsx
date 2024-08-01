import { AppartmentsListElement } from '../../domain/dtos/appartments-list-element.dto';
import styles from './list-card.module.css'

const ListCardComponent = (element: AppartmentsListElement) => {
    return(
        <main>
              <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <img src={element.imgUrl} alt="Apartment Image" className={styles.cardImg} />
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