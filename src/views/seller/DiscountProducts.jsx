import React, { useState, useEffect } from 'react'; 
import Search from '../components/Search';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination'; 
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa'; 

const DiscountProducts = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [parPage, setParPage] = useState(5);
    const [products, setProducts] = useState([]);

    // Function to generate sample products
    const generateSampleProducts = () => {
        const sampleProducts = [];
        for (let i = 1; i <= 2; i++) {
            sampleProducts.push({
                id: i,
                name: `Product ${i}`,
                category: 'Common',
                brand: 'Veirdo',
                price: Math.floor(Math.random() * 100) + 100, // Random price between 100 and 199
                discount: Math.floor(Math.random() * 20), // Random discount between 0 and 19
                stock: Math.floor(Math.random() * 50) + 1, // Random stock between 1 and 50
                imageUrl: `http://localhost:3000/images/category/${i}.jpg`
            });
        }
        return sampleProducts;
    };

    // Set sample products when component mounts
    useEffect(() => {
        const sampleProducts = generateSampleProducts();
        setProducts(sampleProducts);
    }, []);

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <h1 className='text-[#000000] font-semibold text-lg mb-3'>Demand Products</h1>

            <div className='w-full p-4 bg-[#6a5fdf] rounded-md'> 
                <Search setParPage={setParPage} setSearchValue={setSearchValue} searchValue={searchValue} />

                <div className='relative overflow-x-auto mt-5'>
                    <table className='w-full text-sm text-left text-[#d0d2d6]'>
                        <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
                            <tr>
                                <th scope='col' className='py-3 px-4'>No</th>
                                <th scope='col' className='py-3 px-4'>Image</th>
                                <th scope='col' className='py-3 px-4'>Name</th>
                                <th scope='col' className='py-3 px-4'>Category</th>
                                <th scope='col' className='py-3 px-4'>Brand</th>
                                <th scope='col' className='py-3 px-4'>Price</th>
                                <th scope='col' className='py-3 px-4'>Discount</th>
                                <th scope='col' className='py-3 px-4'>Stock</th>
                                {/* <th scope='col' className='py-3 px-4'>Action</th>  */}
                            </tr>
                        </thead>

                        <tbody>
                            {products.map((product, index) => (
                                <tr key={index}>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>{product.id}</td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>
                                        <img className='w-[45px] h-[45px]' src={product.imageUrl} alt="" />
                                    </td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>{product.name}</td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>{product.category}</td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>{product.brand}</td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>${product.price}</td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>{product.discount}%</td>
                                    <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>{product.stock}</td>
                                    {/* <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>
                                        <div className='flex justify-start items-center gap-4'>
                                            <Link className='p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50'> <FaEdit/> </Link> 
                                            <Link className='p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50'> <FaEye/> </Link>
                                            <Link className='p-[6px] bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50'> <FaTrash/> </Link> 
                                        </div>
                                    </td> */}
                                </tr>
                            ))}
                        </tbody> 
                    </table> 
                </div>  

                <div className='w-full flex justify-end mt-4 bottom-4 right-4'>
                    <Pagination 
                        pageNumber={currentPage}
                        setPageNumber={setCurrentPage}
                        totalItem={50}
                        parPage={parPage}
                        showItem={3}
                    />
                </div>
            </div>
        </div>
    );
};

export default DiscountProducts;
