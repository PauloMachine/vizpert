import * as Yup from 'yup';

const schema = Yup.object().shape({
   name: Yup.string()
      .min(1, 'Invalid name!')
      .max(200, 'Invalid name!')
      .required('Name required!'),
   date: Yup.string()
      .min(10, 'Invalid date!')
      .max(10, 'Invalid date!')
      .required('Date required!'),
});

export default schema;
