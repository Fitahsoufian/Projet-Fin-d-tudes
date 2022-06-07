import React from 'react'
import Transaction from './Transaction'
const TransactionList = ({transactionList}) => {
 console.log(transactionList)
 const transactions = transactionList.map(({id , ...otherProps})=> (
  <Transaction key={id} {...otherProps} id={id}
   />))
 
  return ( 
   <React.Fragment>
  {transactions}
    </React.Fragment>
   );
}
 
export default TransactionList;