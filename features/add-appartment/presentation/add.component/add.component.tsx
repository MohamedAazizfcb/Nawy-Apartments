import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import styles from './add.module.css';
import { AddApartmentDTO } from '../../domain/dtos/apartment-add.dto';
import { useMemo, useState, useEffect } from 'react';
import { AddApartmentsService } from '../../application/implementations/add-appartments.service';
import { apartmentsTypes } from '@/core/domain/lookups/aprtment-types.lookup';
import { compounds } from '@/core/domain/lookups/compounds.lookup';
import { useRouter } from 'next/router';
import { appRoutes } from '@/core/domain/domain.module';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAreaChart, faBed, faCity, faFileText, faGopuram, faHouse, faImage, faLocation, faMoneyBill, faPlus, faShower } from '@fortawesome/free-solid-svg-icons';

const AddApartmentComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    control,
  } = useForm<AddApartmentDTO>({
    mode: 'onChange',
  });

  const [imgFile, setImgFile] = useState<File | null>(null);
  const [isImgValid, setIsImgValid] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false); 
  const addApartmentsService = useMemo(() => new AddApartmentsService(), []);
  const router = useRouter();

  useEffect(() => {
    setValue('appartmentTypeId', apartmentsTypes[0]?.id);
  }, [apartmentsTypes, setValue]);

  const onSubmit: SubmitHandler<AddApartmentDTO> = async (data) => {
    setLoading(true); 
    const formData = new FormData();

    Object.keys(data).forEach(key => {
      const value = data[key as keyof AddApartmentDTO];
      if (value !== undefined) {
        formData.append(key, value.toString());
      }
    });

    if (imgFile) {
      formData.append('imgUrl', imgFile);
    }

    try {
      await addApartmentsService.addApartment(formData);

      router.push('/'+ appRoutes.listAllAppartments.route); // Navigate to the apartments list
    } catch (error) {
      console.error('Failed to add apartment:', error);
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setImgFile(file);
      setIsImgValid(true);
    } else {
      setImgFile(null);
      setIsImgValid(false);
      alert('Please select a valid image file (JPEG, PNG, etc.)');
    }
  };

  return (
    <div className={styles.formContainer}>
      <h1>
        <FontAwesomeIcon icon={faPlus}/> &nbsp;
        Add Apartment
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formControl}>
          <label className={styles.formLabel}>
            <FontAwesomeIcon icon={faImage}/> &nbsp;
            Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className={styles.formInput}
          />
          {!isImgValid && imgFile !== null && 
            <span className={styles.error}>Please upload a valid image file (JPEG, PNG, etc.)</span>}
        </div>

        <div className={styles.formControl}>
          <label className={styles.formLabel}>
            <FontAwesomeIcon icon={faHouse}/> &nbsp;
            Apartment Type
          </label>
          <Controller
            control={control}
            name="appartmentTypeId"
            render={({ field }) => (
              <select
                {...field}
                className={styles.formInput}
              >
                {apartmentsTypes.map(a_type => (
                  <option key={a_type.id} value={a_type.id}>
                    {a_type.val}
                  </option>
                ))}
              </select>
            )}
            rules={{ required: 'Please select an apartment type.' }}
          />
          {errors.appartmentTypeId && 
            <span className={styles.error}>{errors.appartmentTypeId.message}</span>}
        </div>

        <div className={styles.formControl}>
          <label className={styles.formLabel}>
            <FontAwesomeIcon icon={faCity}/> &nbsp;
            Compound
          </label>
          <Controller
            control={control}
            name="compoundId"
            render={({ field }) => (
              <select
                {...field}
                className={styles.formInput}
              >
                {compounds.map(cmp => (
                  <option key={cmp.id} value={cmp.id}>
                    {cmp.val}
                  </option>
                ))}
              </select>
            )}
            rules={{ required: 'Please select a compound.' }}
          />
          {errors.compoundId && 
            <span className={styles.error}>{errors.compoundId.message}</span>}
        </div>

        <div className={styles.formControl}>
          <label className={styles.formLabel}>
            <FontAwesomeIcon icon={faBed}/> &nbsp;
            Number of Beds
          </label>
          <input
            type="number"
            placeholder="Enter number of beds"
            {...register('numberOfBeds', {
              required: 'Number of beds is required.',
              min: { value: 1, message: 'Number of beds must be at least 1.' },
              max: { value: 5, message: 'Number of beds cannot exceed 5.' }
            })}
            className={styles.formInput}
          />
          {errors.numberOfBeds && 
            <span className={styles.error}>{errors.numberOfBeds.message}</span>}
        </div>

        <div className={styles.formControl}>
          <label className={styles.formLabel}>
            <FontAwesomeIcon icon={faShower}/> &nbsp;
            Number of Baths
          </label>
          <input
            type="number"
            placeholder="Enter number of baths"
            {...register('numberOfBaths', {
              required: 'Number of baths is required.',
              min: { value: 1, message: 'Number of baths must be at least 1.' },
              max: { value: 5, message: 'Number of baths cannot exceed 5.' }
            })}
            className={styles.formInput}
          />
          {errors.numberOfBaths && 
            <span className={styles.error}>{errors.numberOfBaths.message}</span>}
        </div>

        <div className={styles.formControl}>
          <label className={styles.formLabel}>
            <FontAwesomeIcon icon={faAreaChart}/> &nbsp;
            Area (m²):
          </label>
          <input
            type="number"
            placeholder="Enter area in m²"
            {...register('areaInM2', {
              required: 'Area in m² is required.',
              min: { value: 50, message: 'Area must be at least 50 m².' },
              max: { value: 1000, message: 'Area cannot exceed 1000 m².' }
            })}
            className={styles.formInput}
          />
          {errors.areaInM2 && 
            <span className={styles.error}>{errors.areaInM2.message}</span>}
        </div>

        <div className={styles.formControl}>
          <label className={styles.formLabel}>
            <FontAwesomeIcon icon={faMoneyBill}/> &nbsp;
            Price
          </label>
          <input
            type="number"
            placeholder="Enter price"
            {...register('price', {
              required: 'Price is required.',
              min: { value: 100000, message: 'Price must be at least 100,000.' },
              max: { value: 999999999, message: 'Price cannot exceed 999,999,999.' }
            })}
            className={styles.formInput}
          />
          {errors.price && 
            <span className={styles.error}>{errors.price.message}</span>}
        </div>

        <div className={styles.formControl}>
          <label className={styles.formLabel}>
            <FontAwesomeIcon icon={faLocation}/> &nbsp;
            Address
          </label>
          <input
            placeholder="Enter address"
            {...register('address', { required: 'Address is required.' })}
            className={styles.formInput}
          />
          {errors.address && 
            <span className={styles.error}>{errors.address.message}</span>}
        </div>

        <div className={styles.formControl}>
          <label className={styles.formLabel}>
            <FontAwesomeIcon icon={faGopuram}/> &nbsp;
            Floor
          </label>
          <input
            type="number"
            placeholder="Enter floor number"
            {...register('floor', {
              required: 'Floor number is required.',
              min: { value: 1, message: 'Floor number must be at least 1.' },
              max: { value: 40, message: 'Floor number cannot exceed 40.' }
            })}
            className={styles.formInput}
          />
          {errors.floor && 
            <span className={styles.error}>{errors.floor.message}</span>}
        </div>

        <div className={styles.formControl}>
          <label className={styles.formLabel}>
            <FontAwesomeIcon icon={faFileText}/> &nbsp;
            Description
          </label>
          <textarea
            placeholder="Enter apartment description"
            {...register('description', { required: 'Description is required.' })}
            className={styles.formTextarea}
          />
          {errors.description && 
            <span className={styles.error}>{errors.description.message}</span>}
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={!isValid || !isImgValid || loading} // Disable button when loading
        >
          {loading ? 'Adding...' : 'Add Apartment'}
        </button>
      </form>
    </div>
  );
};

export default AddApartmentComponent;
