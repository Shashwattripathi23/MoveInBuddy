import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import ig from './images/ig.png';
import fb from './images/fb.png';
import Movers from './images/mover.png';
import Logo from './images/logott.png';

function App() {
  return (
    <>
      <Navbar />
      <MainContent />
      <Footer />
      <ToastContainer />
    </>
  );
}

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white text-white shadow-md w-90 ">
      <div className="flex-grow text-center font-bold">
        <img src={Logo} alt="Logo" className="absolute -top-5 left-0 ml-0 w-48 sm:w-8 sm:-top-10 md:w-64" />
      </div>
      <div>
        <button className="px-4 py-2 bg-red-500 text-white sm:font-semibold shadow-2xl rounded-md hover:bg-red-600 transition-colors duration-300">
          Contact us
        </button>
      </div>
    </nav>
  );
};

const MainContent = () => {
  const [toggleForm, setToggleForm] = useState('appointment');

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-8 space-y-8 md:space-y-0 md:space-x-8">
      
      {/* Text Block */}
      <div className="w-full md:w-1/2 px-4 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight font-avenir">
          Need help moving into a new city? <br /> We've got you covered buddy!
        </h1>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 px-4 flex justify-center">
        <img src={Movers} alt="Movers" className="w-48 sm:w-72 md:w-full" />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-2/3 lg:w-1/2 bg-white shadow-2xl rounded-xl p-6">
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setToggleForm('appointment')}
            className={`px-4 py-2 rounded-md ${toggleForm === 'appointment' ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'} transition-colors duration-300`}
          >
            Appointment
          </button>
          <button
            onClick={() => setToggleForm('complaint')}
            className={`ml-2 px-4 py-2 rounded-md ${toggleForm === 'complaint' ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'} transition-colors duration-300`}
          >
            Complaint
          </button>
        </div>

        {/* Slide Forms */}
        <div className="relative overflow-hidden min-h-[500px]">
          <div className={`absolute w-full transition-transform duration-500 ${toggleForm === 'appointment' ? 'translate-x-0' : '-translate-x-full'}`}>
            <AppointmentForm />
          </div>
          <div className={`absolute w-full transition-transform duration-500 ${toggleForm === 'complaint' ? 'translate-x-0' : 'translate-x-full'}`}>
            <ComplaintForm />
          </div>
        </div>
      </div>
    </div>
  );
};


const amenitiesList = [
  'Swimming Pool',
  'Gym',
  'Parking',
  'WiFi',
  'furnished',
  'Pet Friendly',
  'Laundry Service',
  'Vegetarian Only Food',
  'Non-Vegetarian Food',
  'Jain Food',
];


const AppointmentForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    location: '',
    amenities: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormValues((prevValues) => ({
        ...prevValues,
        amenities: checked
          ? [...prevValues.amenities, value]
          : prevValues.amenities.filter((amenity) => amenity !== value),
      }));
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('We will be contacting you in a few hours with a quotation');
    setFormValues({
      name: '',
      email: '',
      location: '',
      amenities: [],
    });
  };

  return (
    <form className="flex flex-col space-y-4 pb-10 pt-5 px-5 " onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formValues.name}
        onChange={handleChange}
        placeholder="Name"
        className="p-2 border rounded-md"
      />
      <input
        type="email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
        placeholder="Email"
        className="p-2 border rounded-md"
      />
      <input
        type="text"
        name="location"
        value={formValues.location}
        onChange={handleChange}
        placeholder="Location"
        className="p-2 border rounded-md"
      />
      <div className="flex flex-col h-54 bg-green-00 p-4">
  <label className="font-semibold mb-2">Select amenities:</label>
  <div className="flex flex-wrap overflow-y-auto h-full w-90 ">
    {amenitiesList.map((amenity) => (
      <label key={amenity} className="flex items-center space-x-2 w-1/2 mb-2">
        <input
          type="checkbox"
          value={amenity}
          checked={formValues.amenities.includes(amenity)}
          onChange={handleChange}
          className="form-checkbox"
        />
        <span>{amenity}</span>
      </label>
    ))}
  </div>
</div>


      <button type="submit" className="px-4 py-2 -mt-5  bg-red-700 text-white rounded-md hover:bg-red-500 transition-colors duration-300">
        Submit
      </button>
    </form>
  );
};

const ComplaintForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    customerId: '',
    urgency: '',
    complaint: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('We will be contacting you in a few hours with a quotation');
    setFormValues({
      name: '',
      email: '',
      customerId: '',
      urgency: '',
      complaint: '',
    });
  };

  return (
    <form className="flex flex-col space-y-4 pb-10 pt-5 px-5" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formValues.name}
        onChange={handleChange}
        placeholder="Name"
        className="p-2 border rounded-md"
      />
      <input
        type="email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
        placeholder="Email"
        className="p-2 border rounded-md"
      />
      <input
        type="text"
        name="customerId"
        value={formValues.customerId}
        onChange={handleChange}
        placeholder="CustomerId"
        className="p-2 border rounded-md"
      />
      <select
        name="urgency"
        value={formValues.urgency}
        onChange={handleChange}
        className="p-2 border rounded-md"
      >
        <option value="" disabled>
          Select Urgency
        </option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
        <option value="urgent">Urgent</option>
        <option value="AddFeature">Add service</option>
      </select>
      <textarea
        name="complaint"
        value={formValues.complaint}
        onChange={handleChange}
        placeholder="Complaint"
        className="p-2 border rounded-md"
      />
      <button type="submit" className="px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-500 transition-colors duration-300">
        Submit
      </button>
    </form>
  );
};

const Footer = () => (
  <footer className="bg-white text-black mt-12 p-4 flex flex-col sm:flex-row justify-between items-center border-t">
    <div className="text-center sm:text-left text-sm">
      <div>MoveInBuddy.Co</div>
      <div>2024 &copy; MoveInBuddy</div>
      <div>All rights reserved</div>
    </div>
    <div className="flex flex-col sm:flex-row items-center mt-4 sm:mt-0">
      <div className="text-sm sm:mr-4">Privacy Policy</div>
      <div className="text-sm sm:mr-4">Terms of Service</div>
      <div className="flex mt-2 sm:mt-0">
        <a href="#" className="mr-4">
          <img src={ig} alt="Instagram" className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        <a href="#">
          <img src={fb} alt="Facebook" className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      </div>
    </div>
  </footer>
);

export default App;
