import React, { useState } from "react";

const Registrationform = () => {

    
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
          const {name , value} =e.target;
          setFormData({
            ...formData,
            [name]: value,
          });
    }; 
     
    const [submittedData, setSubmittedData] = useState(null)

    const handleSubmit =(e) => {
         e.preventDefault(); 
          if(!formData.firstname || !formData.lastname|| !formData.email|| !formData.password){
            alert('Please fill all the fields');
            return;
          }

          setSubmittedData(formData);
          setFormData({
            firstname: '',
            lastname: '',
            email: '',
            password: '',
          })
         console.log('Registration Confirm', formData);
          
    };

  return (
    <div className=" min-h-screen w-full flex  justify-center text-center bg-gray-400">
      <div className="bg-[#cb81f9ec] p-8 rounded-2xl shadow-md w-full mt-14 mb-12 max-w-md">
        <h2 className="text-2xl font-bold mb-6">Registration Form</h2>
        <form onSubmit={handleSubmit} > 
        
         <div className="flex flex-row items-center"> 
            
              <input
                className="mt-4 mb-5 p-2 mx-1 w-full border rounded"
                name="firstname"
                type="text"
                placeholder="First Name"
                required
                autoComplete="given-name"
                value={formData.firstname}
                onChange={handleChange}
               />
              <input
                className="mt-4 mb-5 p-2 mx-1 w-full border rounded"
                name="lastname"
                type="text"
                placeholder="Last Name"
                autoComplete="family-name"
                required
                value={formData.lastname}
                onChange={handleChange}

               />
          </div>
            <div className="mb-5">

                 <input
                 name="email"
                 type="email"
                 placeholder="Email ID"
                className="mt-1 p-2 w-full border rounded"
                 required
                 autoComplete="email"
                value={formData.email}
                onChange={handleChange}

               />

            </div>
            <div className="mb-5">

                 <input
                type="password"
                name="password"
                placeholder="New Password"
                className="mt-1 p-2 w-full border rounded"
                required
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}

               />

            </div>
          

            <button type="submit" className="bg-blue-300 px-4 py-2 rounded">Submit</button>
   
        </form>
      </div>
           {submittedData && (
            <div className="bg-gray-300  mx-10 flex flex-col justify-center   rounded-2xl shadow-md w-full mt-14 mb-12 max-w-md ">
                <h2 className="text-2xl font-bold mb-2 ">Submitted details</h2>
                  <div className="flex flex-col text-xl items-center mt-4 p-4">
                  <p className="my-3 "><strong>First Name:</strong>{submittedData.firstname}</p>
                <p className="my-3"><strong>Last Name:</strong>{submittedData.lastname}</p>
                <p className="my-3"><strong>Email ID:</strong>{submittedData.email}</p>
                <p className="my-3"><strong>Password:</strong>{submittedData.password}</p>

                  </div>
                </div>
           )}
    </div>
  );
};

export default Registrationform;
