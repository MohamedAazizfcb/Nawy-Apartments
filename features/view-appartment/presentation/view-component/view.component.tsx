import { useEffect, useMemo, useState } from "react";
import styles from "./view.module.css";
import { ApartmentView } from "../../domain/dtos/apartment-response.dto";
import { useRouter } from "next/router";
import { IGetApartmentService } from "../../application/contracts/get-appartment.interface";
import { GetApartmentService } from "../../application/implementations/get-appartment..service";
import { APIResponse } from "@/core/domain/dtos/api-response.dto";
import { baseUrl } from "@/core/domain/constants/constants";

const ViewComponent = () => {
    const [apartment, setApartment] = useState<ApartmentView | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();
    const { id } = router.query; 
    const getApartmentService: IGetApartmentService = useMemo(() => new GetApartmentService(), []);

    useEffect(() => {
      if (!id) return; // Wait for id to be defined

      const fetchApartment = async () => {
        try {
          const prom: any = (await getApartmentService.getApartmentById(Number(id))).data;
          const res: ApartmentView = prom.data;
          setApartment(res);
        } catch (error: any) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchApartment();
    }, [id]);
  
    const handleGoBack = () => {
        router.back();
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!apartment) return <p>No apartment data found</p>;
  
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={baseUrl + apartment.imgUrl} alt={`Apartment at ${apartment.address}`} className={styles.image} />
            </div>
            <div className={styles.details}>
                <h1 className={styles.title}>{`Apartment ${apartment.address}`}</h1>
                <p className={styles.description}>{apartment.description}</p>
                <ul className={styles.infoList}>
                    <li>{`Beds: ${apartment.numberOfBeds}`}</li>
                    <li>{`Baths: ${apartment.numberOfBaths}`}</li>
                    <li>{`Area: ${apartment.areaInM2} m²`}</li>
                    <li>{`Price: $${apartment.price}`}</li>
                    <li>{`Floor: ${apartment.floor}`}</li>
                </ul>
                <button className={styles.returnButton} onClick={handleGoBack}>Return</button>
            </div>
        </div>
    );
};

export default ViewComponent;
