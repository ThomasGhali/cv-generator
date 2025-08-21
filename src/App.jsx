import { useState } from "react";
import generatorLogo from "./assets/cv-generator-logo-lq.png"
import Cv from "./components/Cv/Cv.jsx"
import Form from "./components/Form/Form.jsx"

export default function App() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  
  const [skills, setSkills] = useState([]);

  const [interests, setInterests] = useState([]);

  const [profileDescription, setProfileDescription] = useState('');

  const [experience, setExperience] = useState([{submit: false}]);

  const [education, setEducation] = useState({
    degree: '',
    institution: '',
    location: '',
    gradYear: '',
  });

  return(
    <>
      <header className="generator-header">
          <img src={generatorLogo} alt="cv genenerator logo" className="generator-header__img" />
          <span className="generator-header__text">CV Generator</span>
      </header>
      <main className="main-content">
        <Form   
          skillsState={{ skills, setSkills }}
          contactState={{ setEmail, setPhone, setWebsite }}
          setInterests={ setInterests }
          setProfileDescription={setProfileDescription}
          setExperience={setExperience}
          experience={experience}
          education={education}
          setEducation={setEducation}
        />
        <Cv 
          contactState={{ email, phone, website }}
          skills={skills}
          interests={interests}
          profileDescription={profileDescription}
          experience={experience}
          education={education}
        />
      </main>
    </>
  )
}
