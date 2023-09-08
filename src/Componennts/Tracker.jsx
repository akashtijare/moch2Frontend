import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {addProducts, getProducts} from "../redux/userDataRedux/action"

export const Tracker = () => {


    const dispatch = useDispatch()
    const [tog,setTog]= useState(false);

    const [transaction, setTransaction] = useState({
        type: 'Income',
        category: 'Salary',
        amount: '',
        date: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTransaction({ ...transaction, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(transaction)


        dispatch(addProducts(transaction)).then(()=>dispatch(getProducts()))
          
      };
    
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
        <div   style={{width:"60%",margin:"auto", boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
          <h1>Expense Tracker</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Type:
              <select  style={{padding:"5px",margin:"20px" ,width:"50%"}}
                name="type"
                value={transaction.type}
                onChange={handleInputChange}
              >
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </select>
            </label>
            <br />
            <label>
              Category:
              <select style={{padding:"5px",margin:"20px" ,width:"50%"}}
                name="category"
                value={transaction.category}
                onChange={handleInputChange}
              >
                {updateCategoryOptions()}
              </select>
            </label>
            <br />
            <label>
              Amount in Rupees:
              <input style={{padding:"5px",margin:"20px" ,width:"50%"}}
                type="number"
                name="amount"
                value={transaction.amount}
                onChange={handleInputChange}
                placeholder="Amount in Rupees"
                required
              />
            </label>
            <br />
            <label>
              Date:
              <input style={{padding:"5px",margin:"20px" ,width:"50%"}}
                type="date"
                name="date"
                value={transaction.date}
                onChange={handleInputChange}
                required
              />
            </label>
            <br />
            <button type="submit" style={{padding:"5px",margin:"20px" ,width:"20%" ,backgroundColor :"#37d2dd"}}>Create</button>
          </form>

          
        </div>
      );
    };

