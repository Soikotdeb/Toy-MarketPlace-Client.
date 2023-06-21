
import React, { useContext } from 'react';
import './AddToys.css';
import useTitle from '../../Hooks/UseTitle';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const AddToys = () => {
  useTitle('AddToys');
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { user } = useContext(AuthContext);

  const onSubmit = (data, e) => {
    console.log(data);
    fetch('https://assignment-11-server-olive.vercel.app/postToyZone', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        // Show success toast
        toast.success('Toy added successfully!');

        e.target.reset(); // Reset the form
      })
      .catch((error) => {
        console.error(error);
        // Show error toast
        toast.error('Failed to add toy.');
      });
  };

  // Set default value for sellerName if user.displayName exists
  const defaultSellerName = user?.displayName || '';

  // Set default value for sellerEmail if user.email exists
  const defaultSellerEmail = user?.email || '';

  return (
    <div className='mt-14'>
  <ToastContainer />
  <form className="toy-form" onSubmit={handleSubmit(onSubmit)}>
    <div className="form-group">
      <label htmlFor="pictureUrl" className="font-bold">Picture URL of the toy:</label>
      <input
        type="text"
        id="pictureUrl"
        className="input-field px-4 py-2 mt-1 block w-full rounded border border-gray-300 bg-gray-100 text-gray-800"
        {...register('pictureUrl', {
          required: 'Picture URL is required',
          pattern: {
            value: /^(ftp|http|https):\/\/[^ "]+$/,
            message: 'Invalid URL',
          },
        })}
      />
      {errors.pictureUrl && <span className="error">{errors.pictureUrl.message}</span>}
    </div>

    <div className="mb-4">
      <label htmlFor="name" className="font-bold">Toy Name:</label>
      <input
        type="text"
        id="name"
        className="input-field px-4 py-2 mt-1 block w-full rounded border border-gray-300 bg-gray-100 text-gray-800"
        {...register('name')}
      />
    </div>
    <div className="mb-4">
      <label htmlFor="sellerName" className="font-bold">Seller name:</label>
      <input
        type="text"
        id="sellerName"
        className="input-field px-4 py-2 mt-1 block w-full rounded border border-gray-300 bg-gray-100 text-gray-800"
        {...register('sellerName')}
        defaultValue={defaultSellerName}
        readOnly
      />
    </div>
    <div className="mb-4">
      <label htmlFor="sellerEmail" className="font-bold">Seller email:</label>
      <input
        type="email"
        id="sellerEmail"
        className="input-field px-4 py-2 mt-1 block w-full rounded border border-gray-300 bg-gray-100 text-gray-800"
        {...register('sellerEmail')}
        defaultValue={defaultSellerEmail}
        readOnly
      />
    </div>
    <div className="mb-4">
      <label htmlFor="subCategory" className="font-bold">Sub-category:</label>
      <select
        id="subCategory"
        className="input-field px-4 py-2 mt-1 block w-full rounded border border-gray-300 bg-gray-100 text-gray-800"
        {...register('subCategory')}
      >
        <option value="sports car">sports car</option>
        <option value="truck Speedster">truck Speedster</option>
        <option value="mini police car">mini police car</option>
      </select>
    </div>
    <div className="mb-4">
      <label htmlFor="price" className="font-bold">Price:</label>
      <input
        type="number"
        id="price"
        className="input-field px-4 py-2 mt-1 block w-full rounded border border-gray-300 bg-gray-100 text-gray-800"
        {...register('price')}
      />
    </div>
    <div className="mb-4">
      <label htmlFor="rating" className="font-bold">Rating:</label>
      <input
        type="number"
        id="rating"
        className="input-field px-4 py-2 mt-1 block w-full rounded border border-gray-300 bg-gray-100 text-gray-800"
        {...register('rating')}
      />
    </div>
    <div className="mb-4">
      <label htmlFor="quantity" className="font-bold">Available quantity:</label>
      <input
        type="number"
        id="quantity"
        className="input-field px-4 py-2 mt-1 block w-full rounded border border-gray-300 bg-gray-100 text-gray-800"
        {...register('quantity')}
      />
    </div>
    <div className="mb-4">
      <label htmlFor="description" className="font-bold">Detail description:</label>
      <textarea
        id="description"
        className="input-field px-4 py-2 mt-1 block w-full rounded border border-gray-300 bg-gray-100 text-gray-800"
        {...register('description')}
      />
    </div>
    <button className="text-primary bg-orange-600 font-bold text-2xl px-4 py-2 rounded" type="submit">Submit</button>
  </form>
</div>


     );
 };

 export default AddToys;