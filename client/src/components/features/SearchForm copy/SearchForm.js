import { Form, Button } from "react-bootstrap";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";

const SearchForm = () => {

  const [searchPhase, setSearchPhase] = useState('');
 
  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const handleSubmit = notice => {
    <Navigate to={`/searchedNotice/${searchPhase}`} />
  };
  
  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Form.Group className="mb-3" controlId="formSearchPhase">
        <Form.Control
          {...register("searchPhase", { required: true })}
          value={searchPhase}
          onChange={e => setSearchPhase(e.target.value)}
          type='text' placeholder='Search notice'
        />
        {errors.searchPhase && <small className="d-block form-text text-danger mt-2">Search phase can't be empty</small>}
      </Form.Group>

      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default SearchForm;