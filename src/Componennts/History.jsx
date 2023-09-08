import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteProducts, editProducts, getProducts } from '../redux/userDataRedux/action';

export const History = ({product}) => {
    const [tog,setTog]= useState(false);

    const {id,type,category,amount,date}=product
    const dispatch = useDispatch();

    const [transaction, setTransaction] = useState({
        type: '',
        category: '',
        amount: '',
        date: '',
      });

    const handleEdit =() =>{


       setTog(true)
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTransaction({ ...transaction, [name]: value });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(transaction)


        dispatch(editProducts(id,transaction)).then(()=>dispatch(getProducts()))
        setTog(false)
          
      };
    const handleDelete =() =>{
         dispatch(deleteProducts(id)).then(()=>dispatch(getProducts()))
    }

    const updateCategoryOptions = () => {
        const selectedType = transaction.type;
        const categories =
          selectedType === 'Income'
            ? ['Salary', 'Gifts', 'Refunds', 'Other']
            : [
                'Food & Drinks',
                'Shopping',
                'Housing',
                'Bills',
                'Vehicle & Transport',
                'Lifestyle',
              ];
    
        return categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ));
      };
  return (
    <div style={{border:"1px solid black", display:"flex", justifyContent:"space-between",width:"60%",margin:"auto"}} >
        <div>
            <h1>{category}</h1>
            <h3>{type}</h3>
            <h3>{date}</h3>
        </div>
        <div>
            <h1>
                {amount}
            </h1>
            <button style={{backgroundColor:"blue" ,color:"white"}} onClick={handleEdit}>EDIT</button>
             {
                tog?(
                                <div>
                                    <form  onSubmit={handleSubmit}>
                                    <select
                            name="category"
                            value={transaction.category}
                            onChange={handleInputChange}
                        >
                            {updateCategoryOptions()}
                        </select>
                            <select
                                    name="type"
                                    value={transaction.type}
                                    onChange={handleInputChange}
                                >
                                    <option value="Income">Income</option>
                                    <option value="Expense">Expense</option>
                                </select>
                            <input type="date" placeholder='date'  name='date' value={transaction.date} onChange={handleInputChange}/>
                            <input type="number" placeholder='amount'  name="amount" value={transaction.amount} onChange={handleInputChange}/>
                            <button type='submit'>Submit</button>
                        </form>
                    </div>
                ):(<></>)
             }
            <button style={{backgroundColor:"red",color:"white"}} onClick={handleDelete}>DELETE</button>
        </div>
    </div>
  )
}
