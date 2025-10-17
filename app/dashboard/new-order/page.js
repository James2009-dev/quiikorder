"use client"
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
   customerName: yup.string().required("Full Name is required").min(8),
   serviceType: yup.string().required("Service Type is required").min(8),
   deliveryDate: yup.date().required("Date is required"),
   amount: yup.number().required("Amount is required").min(0, "Amount must be positive"),
   status: yup.string().oneOf(["Received","In-progress","Completed"]).required("Status is required"),
   notes: yup.string().required("Notes are required").min(7),
});

export default function NewOrder(){
   const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
      initialValues: {
         customerName: "", //all these are id names in the form fields
         serviceType: "",
         deliveryDate: "",
         amount: "", //initial values are always empty strings until they are configured
         status: "",
         notes: ""
   },
   onSubmit: () => {
      alert(`Your name is ${values.customerName} and you booked for ${values.serviceType} and your bill is ${values.amount}`);
   },
   validationSchema: schema
 })
    return(
            <main className="min-h max-w-xl mx-auto my-10 px-6 py-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
                   <h1 className="text-2xl font-semibold mb-6 text-center dark:text-white">Make your Order</h1>
                   <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-5">
                      <div>
                        <TextField
                        fullWidth
                        label="Customer Name"
                        size="small"
                        placeholder="Enter Full Name"
                        type="text"
                        id="customerName" //if shit doesn't work,make sure ur id name is the same as the name you use in the {touched}
                        value={values.customerName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        
                        />
                        {touched.customerName && errors.customerName? <span className="text-red-500 text-xs">{errors.customerName}</span>: null}
                      </div>
                      <div>
                        <TextField
                        fullWidth
                        label="Service type"
                        size="small"
                        placeholder="Enter Service Type"
                        type="text"
                        id="serviceType"
                        value={values.serviceType}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        {touched.serviceType && errors.serviceType? <span className="text-red-500 text-xs">{errors.serviceType}</span>: null}
                      </div>
                      <div>
                        <TextField
                        fullWidth
                        size="small"
                        InputLabelProps={{shrink:true}}
                        label="Delivery Date"
                        type="date"
                        id="deliveryDate"
                        value={values.deliveryDate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        {touched.deliveryDate && errors.deliveryDate? <span className="text-red-500 text-xs">{errors.deliveryDate}</span>: null}
                      </div>
                      
                      <div>
                        <TextField
                        fullWidth
                        size="small"
                        type="number"
                        label="Enter Amount"
                        id="amount"
                        value={values.amount}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        {touched.amount && errors.amount? <span className="text-red-500 text-xs">{errors.amount}</span>: null}
                      </div>
                      <FormControl fullWidth >
                        <InputLabel id="orderStatus-abel">Status</InputLabel>
                        <Select
                          labelId="orderStatus-label"
                          id="status"
                          label="status"
                          name="status"
                          value={values.status}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <MenuItem value="Received">Received</MenuItem>
                          <MenuItem value="In-progress">In Progress</MenuItem>
                          <MenuItem value="Completed">Completed</MenuItem>
                          
                        </Select>
                        {touched.status && errors.status? <span className="text-red-500 text-xs">{errors.status}</span>: null}
                      </FormControl>
                      <div>
                        <TextField
                        fullWidth
                        type="text"
                        multiline
                        rows={2}
                        label="Notes"
                        placeholder="Notes/Comments"
                        value={values.notes}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="notes"
                        />
                      </div>
                      <button type="submit" className="h-[40px] w-full rounded-md shadow bg-blue-500 dark:bg-blue-800 dark:text-white text-white text-xl ">Submit</button>
                   </form>
            </main>
         )
}