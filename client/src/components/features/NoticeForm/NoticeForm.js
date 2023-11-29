import { Form, Button } from "react-bootstrap";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NoticeForm = ({ action, actionText, ...props }) => {

  const [title, setTitle] = useState(props.title || '');
  const [content, setContent] = useState(props.content || '');
  const [date, setDate] = useState(props.date || '');
  const [picture, setPicture] = useState(props.picture || '');
  const [price, setPrice] = useState(props.price || '');
  const [location, setLocation] = useState(props.location || '');
  const [seller, setSeller] = useState(props.seller || '');

  const { register, handleSubmit: validate, formState: { errors } } = useForm();
  const [dateError, setDateError] = useState(false);

  const handleSubmit = () => {
    setDateError(!date)
    if(content && date) {
      action({ title, content, date, picture, price, location, seller });
    }
  };
  
  return (
    <Form onSubmit={validate(handleSubmit)}>
    
      <Form.Group className="mb-3" controlId="formtitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          {...register("title", { required: true, minLength: 10, maxLength: 50 })}
          value={title}
          onChange={e => setTitle(e.target.value)}
          type='text' placeholder='Enter title'
        />
        {errors.title && <small className="d-block form-text text-danger mt-2">Title length is incorrect (min is 10, max is 50)</small>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContent">
        <Form.Label>Content</Form.Label>
        <Form.Control 
          {...register("content", { required: true, minLength: 20, maxLength: 1000 })}
          as="textarea" placeholder="Enter content" rows={3} 
          value={content} 
          onChange={e => setContent(e.target.value)} />
          {errors.content && <small className="d-block form-text text-danger mt-2">Content length is incorrect (min is 20, max is 1000)</small>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPublished">
        <Form.Label>Date</Form.Label><br/>
        <DatePicker selected={date} onChange={(date) => setDate(date)} placeholder="Enter date" value={date}/>
        {dateError && <small className="d-block form-text text-danger mt-2">Date can't be empty</small>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formpicture">
        <Form.Label>Picture</Form.Label>
        <Form.Control
          {...register("picture", { required: true })}
          value={picture}
          onChange={e => setPicture(e.target.value)}
          type='text' placeholder='Chose picture'
        />
        {errors.picture && <small className="d-block form-text text-danger mt-2">Picture can't be empty</small>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formprice">
        <Form.Label>Price</Form.Label>
        <Form.Control
          {...register("price", { required: true })}
          value={price}
          onChange={e => setPrice(e.target.value)}
          type='text' placeholder='Enter price'
        />
        {errors.price && <small className="d-block form-text text-danger mt-2">Price can't be empty</small>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formlocation">
        <Form.Label>Location</Form.Label>
        <Form.Control
          {...register("location", { required: true })}
          value={location}
          onChange={e => setLocation(e.target.value)}
          type='text' placeholder='Enter location'
        />
        {errors.location && <small className="d-block form-text text-danger mt-2">Location can't be empty</small>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formSeller">
        <Form.Label>Seller</Form.Label>
        <Form.Control 
          {...register("seller", { required: true })}
          type="text" placeholder="Enter seller" 
          value={seller} 
          onChange={e => setSeller(e.target.value)} />
          {errors.seller && <small className="d-block form-text text-danger mt-2">Seller can't be empty</small>}
      </Form.Group>

      <Button variant="primary" type="submit">
      {actionText}
      </Button>
    </Form>
  );
};

export default NoticeForm;