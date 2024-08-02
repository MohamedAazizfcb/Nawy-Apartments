// components/ApartmentForm.tsx
import { useForm } from 'react-hook-form';
import styles from './add.module.css';
import { AddApartmentDTO } from '../../domain/dtos/apartment-add.dto';
import { useMemo, useState } from 'react';
import { AddApartmentsService } from '../../application/implementations/add-appartments.service';
import { IAddApartmentService } from '../../application/contracts/add-appartments.interface';



const AddApartmentComponent = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<AddApartmentDTO>();
  const [imgFile, setImgFile] = useState<File | null>(null);
  const addApartmentsService: any = useMemo(() => new AddApartmentsService(), []);

  const onSubmit = async (data: AddApartmentDTO) => {
    const formData = new FormData();
  
    // Append form fields
    Object.keys(data).forEach(key => {
      const value = data[key as keyof AddApartmentDTO];
      if (value !== undefined) {
        formData.append(key, value.toString());
      }
    });
  
    // Append the image file
    if (imgFile) {
      formData.append('imgUrl', imgFile);
    }
  
    // Call the service with FormData
    await addApartmentsService.addApartment(formData);
  };
  

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setImgFile(file);
    } else {
      alert('Please select a valid image file');
    }
  };

  return (
    <div className={styles.formContainer}>
      <h1>Add Apartment</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label className={styles.formLabel}>
          Image:
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className={styles.formInput}
          />
          {imgFile && !imgFile.type.startsWith('image/') && <span className={styles.error}>Please upload a valid image file</span>}
        </label>
        <label className={styles.formLabel}>
          Apartment Type ID:
          <input type="number" {...register('appartmentTypeId', { required: true })} className={styles.formInput} />
          {errors.appartmentTypeId && <span className={styles.error}>This field is required</span>}
        </label>
        <label className={styles.formLabel}>
          Compound ID:
          <input type="number" {...register('compoundId', { required: true })} className={styles.formInput} />
          {errors.compoundId && <span className={styles.error}>This field is required</span>}
        </label>
        <label className={styles.formLabel}>
          Number of Beds:
          <input type="number" {...register('numberOfBeds', { required: true })} className={styles.formInput} />
          {errors.numberOfBeds && <span className={styles.error}>This field is required</span>}
        </label>
        <label className={styles.formLabel}>
          Number of Baths:
          <input type="number" {...register('numberOfBaths', { required: true })} className={styles.formInput} />
          {errors.numberOfBaths && <span className={styles.error}>This field is required</span>}
        </label>
        <label className={styles.formLabel}>
          Area (m²):
          <input type="number" {...register('areaInM2', { required: true })} className={styles.formInput} />
          {errors.areaInM2 && <span className={styles.error}>This field is required</span>}
        </label>
        <label className={styles.formLabel}>
          Price:
          <input type="number" {...register('price', { required: true })} className={styles.formInput} />
          {errors.price && <span className={styles.error}>This field is required</span>}
        </label>
        <label className={styles.formLabel}>
          Address:
          <input {...register('address', { required: true })} className={styles.formInput} />
          {errors.address && <span className={styles.error}>This field is required</span>}
        </label>
        <label className={styles.formLabel}>
          Floor:
          <input type="number" {...register('floor', { required: true })} className={styles.formInput} />
          {errors.floor && <span className={styles.error}>This field is required</span>}
        </label>
        <label className={styles.formLabel}>
          Description:
          <textarea {...register('description', { required: true })} className={styles.formTextarea} />
          {errors.description && <span className={styles.error}>This field is required</span>}
        </label>
        <button type="submit" className={styles.submitButton}>Add Apartment</button>
      </form>
    </div>
  );
};



export default AddApartmentComponent;
