import React from 'react'
import Invoice from './Invoice'
const InvoiceList = ({invoiceList}) => {
 console.log(invoiceList)
 const invoices = invoiceList.map(({id , ...otherProps})=> (
  <Invoice key={id} {...otherProps} id={id}
   />))
 
  return ( 
   <React.Fragment>
  {invoices}
    </React.Fragment>
   );
}
 
export default InvoiceList;