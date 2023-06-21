
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const Update = () => {
  const { register, handleSubmit } = useForm();
  const loader = useLoaderData();
  const { description, quantity, price, _id } = loader;

  const onSubmit = (data, e) => {
    fetch(`https://assignment-11-server-olive.vercel.app/allProducts/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        // Show success toast
        toast.success('Toy updated successfully!');
    
        e.target.reset(); // Reset the form
      })
      .catch((error) => {
        console.error(error);
        // Show error toast
        toast.error('Failed to update toy.');
      });
  };

  
  return (
    <div className="mt-14">
  <div>
    <form className="toy-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label htmlFor="price" className="font-bold">Price:</label>
        <input
          type="number"
          id="price"
          className="input-field px-4 py-2 mt-1 block w-full rounded border border-gray-300 bg-gray-100 text-gray-800"
          defaultValue={price}
          {...register('price')}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="quantity" className="font-bold">Available quantity:</label>
        <input
          type="number"
          id="quantity"
          className="input-field px-4 py-2 mt-1 block w-full rounded border border-gray-300 bg-gray-100 text-gray-800"
          defaultValue={quantity}
          {...register('quantity')}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="font-bold">Detail description:</label>
        <textarea
          id="description"
          className="input-field px-4 py-2 mt-1 block w-full rounded border border-gray-300 bg-gray-100 text-gray-800"
          defaultValue={description}
          {...register('description')}
        />
      </div>
      <button className="text-primary bg-orange-600 font-bold text-2xl px-4 py-2 rounded" type="submit">Update!</button>
    </form>
  </div>
</div>

  );
};

export default Update;




