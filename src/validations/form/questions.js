import * as Yup from 'yup';

const schema = Yup.object().shape({
   name: Yup.string()
      .min(1, 'Invalid name!')
      .max(200, 'Invalid name!')
      .required('Name required!')
});

export default schema;
