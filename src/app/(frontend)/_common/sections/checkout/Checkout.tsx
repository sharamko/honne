'use client';
import styles from './Checkout.module.scss';
import Container from '../../container/container';
import CheckoutSection from './checkout-section/CheckoutSection';
import FormikInput from '../../components/input/FormikInput';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikCheckbox from '../../components/сheckbox/FormikCheckbox';
import Button from '../../components/btn/Button';
import CheckoutInfo from './checkout-info/CheckoutInfo';
import RadioButtons from '../../components/radioButtons/RadioButtons';
import DeliveryFields from './deliveryFields/DeliveryFields';
import { useRouter } from 'next/navigation';
import CustomSelect from '../../components/select/CustomSelect';

const validationSchema = Yup.object({
  name: Yup.string().required('Введите имя'),
  phone: Yup.string()
    .matches(/^\+?\d[\d\s]{8,16}$/, 'Неверный формат телефона')
    .required('Введите телефон'),
  noCall: Yup.boolean(),
  qtyPpl: Yup.number().required('Введите количество людей'),
  comment: Yup.string(),
  street: Yup.string().when('delivery', {
    is: 'delivery',
    then: (schema) => schema.required('Введите название улицы'),
    otherwise: (schema) => schema.notRequired(),
  }),
  house: Yup.string().when('delivery', {
    is: 'delivery',
    then: (schema) => schema.required('Введите номер дома'),
    otherwise: (schema) => schema.notRequired(),
  }),
  flat: Yup.string(),
  floor: Yup.string(),
  entrance: Yup.string(),
  delivery: Yup.string().required('Выберите способ доставки'),
  pickupPoint: Yup.string().when('delivery', {
    is: 'pickup',
    then: (schema) => schema.required('Выберите точку выдачи'),
    otherwise: (schema) => schema.notRequired(),
  }),
  amount: Yup.string(),
  payment: Yup.string().required('Выберите способ оплаты'),
  promocode: Yup.string(),
  day: Yup.string(),
  time: Yup.string(),
});

const Checkout = () => {
  const router = useRouter();
  const optionsDays = [
    { value: 'today', label: 'Сегодня' },
    { value: 'tomorrow', label: 'Завтра' },
    { value: 'afterTomorrow', label: 'Послезавтра' },
    { value: '15.12.2025', label: '15.12.2025' },
  ];
  const optionsTime = [
    { value: 'soon', label: 'ближайшее время' },
    { value: '13:00', label: '13:00' },
    { value: '14:00', label: '14:00' },
    { value: '15:00', label: '15:00' },
    { value: '16:00', label: '16:00' },
    { value: '17:00', label: '17:00' },
    { value: '18:00', label: '18:00' },
    { value: '19:00', label: '19:00' },
    { value: '20:00', label: '20:00' },
  ];
  return (
    <section id="checkout" className={styles.root}>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          noCall: false,
          qtyPpl: 1,
          comment: '',
          street: '',
          house: '',
          flat: '',
          floor: '',
          entrance: '',
          delivery: 'delivery',
          pickupPoint: 'point1',
          amount: '',
          payment: 'cash',
          day: 'today',
          time: 'soon',
          promocode: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log('Форма отправлена', values);
          resetForm();
          router.push('/success');
        }}
      >
        {({ isValid, dirty }) => (
          <Form noValidate>
            <Container className={styles.container}>
              <div className={styles.content}>
                <CheckoutSection title="контактные данные">
                  <FormikInput
                    name="name"
                    label="ваше имя"
                    placeholder="имя"
                    type="text"
                    required
                  />
                  <FormikInput
                    name="phone"
                    label="ваш мобильный телефон"
                    type="tel"
                    placeholder="+48 844 563 32 45"
                    required
                    description="например: +48 844 563 32 45"
                    descriptionPosition="top-right"
                  />
                  <FormikCheckbox
                    name="noCall"
                    label="Не звонить для подтверждения"
                  />
                </CheckoutSection>
                <CheckoutSection title="доставка">
                  <RadioButtons
                    name="delivery"
                    options={[
                      { value: 'delivery', label: 'доставка' },
                      { value: 'pickup', label: 'самовывоз' },
                    ]}
                  />
                  <DeliveryFields />
                </CheckoutSection>
                <CheckoutSection title="время доставки">
                  <div className={styles.dateRow}>
                    <CustomSelect
                      name="day"
                      label="день"
                      options={optionsDays}
                    />
                    <CustomSelect
                      name="time"
                      label="время"
                      options={optionsTime}
                    />
                  </div>
                </CheckoutSection>
                <CheckoutSection title="способ оплаты">
                  <RadioButtons
                    name="payment"
                    options={[
                      { value: 'cash', label: 'наличными' },
                      { value: 'terminal', label: 'платежный терминал' },
                      { value: 'online', label: 'онлайн' },
                    ]}
                  />
                  <FormikInput
                    name="amount"
                    label="с какой суммы подготовить сдачу?"
                    placeholder="сумма"
                    type="text"
                  />
                </CheckoutSection>
                <CheckoutSection title="комментарий к заказу">
                  <FormikInput
                    name="qtyPpl"
                    label="количество людей"
                    placeholder="количество людей"
                    required
                  />
                  <FormikInput
                    name="comment"
                    label="ваш комментарий"
                    placeholder="ваш комментарий"
                    as="textarea"
                  />
                </CheckoutSection>
                <CheckoutSection title="промокод">
                  <FormikInput
                    name="promocode"
                    placeholder="промокод"
                    description="Скидки по акциям не суммируются. Воспользоваться можно только 1 предложением в 1 заказе."
                    descriptionPosition="bottom"
                    promo="ok" // 'ok' | 'error'
                  />
                </CheckoutSection>
              </div>
            </Container>
            <Container className={styles.container__bottom}>
              <CheckoutInfo total={139.85} discount={15} />
              <Button
                disabled={!(isValid && dirty)}
                variant="tertiary"
                type="submit"
                className={styles.submitBtn}
              >
                оформить
              </Button>
            </Container>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default Checkout;
