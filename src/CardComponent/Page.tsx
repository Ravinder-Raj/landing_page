

// "use client";

// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Label } from '@/components/ui/label';

// import { useState, ChangeEvent } from 'react';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';

// export default function FormCard() {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     phoneNumber: '',
//     companyName: '',
//     businessEmail: ''
//   });

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value
//     }));
//   };

//   const handlePhoneChange = (value: string) => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       phoneNumber: value
//     }));
//   };

//   const handleGetOtp = () => {
//     alert('OTP sent to ' + formData.businessEmail);
//   };

//   return (
//     <Card className="w-[40rem] ml-20 text-black bg-navbar mt-4 h-full border-none shadow-md">
//       <CardHeader className="border-none">
//         <CardTitle className="text-xl">
//           Leave your contacts and we will call you back <br /> within 30 minutes
//         </CardTitle>
//       </CardHeader>
//       <CardContent className="-mt-8 border-none ">
//         <div className="grid gap-4 z-10">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div className="relative">
//               <Label className="text-sm text-gray-400" htmlFor="fullName">Full Name</Label>
//               <input
//                 id="fullName"
//                 name="fullName"
//                 className="w-full bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-black text-sm"
//                 value={formData.fullName}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="relative">
//               <Label className="text-sm" htmlFor="phoneNumber">Phone Number</Label>
//               <PhoneInput
//                 country={'us'}
//                 value={formData.phoneNumber}
//                 onChange={handlePhoneChange}
//                 inputClass="w-full bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-black text-sm"
//                 buttonClass="bg-transparent border-none"
                
//               />
//             </div>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div className="relative">
//               <Label className="text-sm" htmlFor="companyName">Company Name</Label>
//               <input
//                 id="companyName"
//                 name="companyName"
//                 className="w-full bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-black text-sm"
//                 value={formData.companyName}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="relative flex items-end">
//               <div className="flex-grow">
//                 <Label className="text-sm" htmlFor="businessEmail">Business Email</Label>
//                 <input
//                   id="businessEmail"
//                   name="businessEmail"
//                   className="w-full bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-black text-sm"
//                   value={formData.businessEmail}
//                   onChange={handleChange}
//                 />
//               </div>
//               <Button
//                 type="button"
//                 className="ml-4 mt-4 w-28 bg-button text-sm"
//                 onClick={handleGetOtp}
//               >
//                 Get OTP
//               </Button>
//             </div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }
"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useState, ChangeEvent } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface FormCardProps {
  cardTitle?: string;
  height?: string; // Accept height as a prop
}

const FormCard: React.FC<FormCardProps> = ({ cardTitle, height }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    companyName: '',
    businessEmail: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handlePhoneChange = (value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      phoneNumber: value
    }));
  };

  const handleGetOtp = () => {
    alert('OTP sent to ' + formData.businessEmail);
  };

  return (
    <Card className={`w-[40rem] ml-20 text-black bg-navbar mt-4 border-none shadow-md ${height ? `h-[${height}]` : 'h-full'}`}>
      <CardHeader className="border-none">
        {cardTitle && (
          <CardTitle className="text-xl">
            {cardTitle}
          </CardTitle>
        )}
      </CardHeader>
      <CardContent className="-mt-8 border-none">
        <div className="grid gap-4 z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <Label className="text-sm text-gray-400" htmlFor="fullName">Full Name</Label>
              <input
                id="fullName"
                name="fullName"
                className="w-full bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-black text-sm"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <Label className="text-sm" htmlFor="phoneNumber">Phone Number</Label>
              <PhoneInput
                country={'us'}
                value={formData.phoneNumber}
                onChange={handlePhoneChange}
                inputClass="w-full bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-black text-sm"
                buttonClass="bg-transparent border-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <Label className="text-sm" htmlFor="companyName">Company Name</Label>
              <input
                id="companyName"
                name="companyName"
                className="w-full bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-black text-sm"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>
            <div className="relative flex items-end">
              <div className="flex-grow">
                <Label className="text-sm" htmlFor="businessEmail">Business Email</Label>
                <input
                  id="businessEmail"
                  name="businessEmail"
                  className="w-full bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-black text-sm"
                  value={formData.businessEmail}
                  onChange={handleChange}
                />
              </div>
              <Button
                type="button"
                className="ml-4 mt-4 w-28 bg-button text-sm"
                onClick={handleGetOtp}
              >
                Get OTP
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default FormCard;
