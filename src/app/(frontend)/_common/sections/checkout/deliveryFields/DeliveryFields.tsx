import { useFormikContext } from 'formik';
import FormikInput from '../../../components/input/FormikInput';
import RadioPoints from '../../../components/radioPoints/RadioPoints';
import styles from './DeliveryFields.module.scss';

const DeliveryFields = () => {
  const { values } = useFormikContext<any>();

  if (values.delivery === 'delivery') {
    return (
      <>
        <FormikInput
          name="street"
          label="улица"
          placeholder="улица"
          type="text"
          required
        />
        <div className={styles.address}>
          <FormikInput
            name="house"
            label="номер дома"
            placeholder="номер дома"
            type="text"
            required
          />
          <FormikInput
            name="flat"
            label="квартира"
            placeholder="квартира"
            type="text"
          />
          <FormikInput
            name="entrance"
            label="подъезд"
            placeholder="подъезд"
            type="text"
          />
          <FormikInput
            name="floor"
            label="этаж"
            placeholder="этаж"
            type="text"
          />
        </div>
      </>
    );
  }

  if (values.delivery === 'pickup') {
    return (
      <RadioPoints
        name="pickupPoint"
        options={[
          { value: 'point1', label: 'ТЦ Европа, Киевская 12' },
          { value: 'point2', label: 'ТРЦ Глобус, пл. Независимости 3' },
          { value: 'point3', label: 'ул. Леси Украинки 15' },
        ]}
      />
    );
  }

  return null;
};

export default DeliveryFields;
