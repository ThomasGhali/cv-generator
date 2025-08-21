import { useState, Fragment } from 'react'
import './Form.css'
import FormSection from './FormSection'

// function Skill() {
//   return (

//   )
// }

export default function Form({
  skillsState,
  contactState,
  setInterests,
  setProfileDescription,
  setExperience,
  experience,
  education,
  seteducation,
}) {
  // State variables
  const { skills, setSkills } = skillsState;
  const { setEmail, setPhone, setWebsite } = contactState;

  const [interestInput, setInterestInput] = useState('');

  // variables
  const emptyExperience = {
    position: "",
    company: "",
    location: "",
    from: "",
    to: "",
    text: "",
    submit: false
  };

  // Adds a skill with conditions
  function handleSkillBtn() {
    if (
      skills.length === 0 || // no skills yet
      Object.keys(skills[skills.length -1 ]).length !== 0 // last skill not empty
    ) {
      setSkills(prev => [...prev, {}])
    }
  }

  function handleAddInterestsBtn(e) {
    setInterests(prev => [...prev, interestInput])
    setInterestInput('');
  }

  function handleResetInterestsBtn() {
    setInterestInput('');
    setInterests([])
  }

  // changes the appropiate skill key-value pair
  function handleRangeChange(index, e) {
    const { name, value } = e.target
    setSkills(prev => 
      prev.map((skill, i) => 
        i === index ? {...skill, [name]:value} : skill
      )
    )
  }

  function viewSkills() {
    return skills.map((skill, index) => 
      (
        <Fragment key={index}>
          <div className="skill-wrapper">
            <label>
              Skill {index + 1}'s Name 
              <input 
                name='skillName'
                type="text" 
                onChange={(e) => handleRangeChange(index, e)} 
              />
            </label>
            <label>
            Skill {index + 1}'s Proficiency
            <p className='tiny-note'>(Drag the golden bar)</p>
              <input 
                name='range'
                type="range" 
                onChange={(e) => handleRangeChange(index, e)} />
            </label>
          </div>
          {index + 1 !== skills.length && <hr />}
        </Fragment>
      )
    )
  }

  function handleExperience(e) {
    const { name, value } = e.target;
    setExperience(prev => {
      return prev.map((exp, index) => 
        index === prev.length - 1 ? {...exp, [name]: value} : exp
      );
    })
  }

  function handleAddExperienceBtn() {
    setExperience(prev => {
      const updated = prev.map((exp, index) =>
        index === prev.length - 1 ? { ...exp, submit: true } : exp
      );
  
      return [...updated, emptyExperience];
    });
  }

  function handleResetExperienceBtn() {
    setExperience([emptyExperience]);
  }

  function handleEducation(e) {

  }

  return (
    <>
      <form action="">
        <FormSection
          name="Contact"
        >
          <label htmlFor="email">Email </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="phone">Phone </label>
          <input
            type="tel"
            placeholder="+1 234 567 890"
            name="phone"
            id="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="website">Website </label>
          <input
            type="url"
            name="website"
            id="website"
            onChange={(e) => setWebsite(e.target.value)}
          />

        </FormSection>

        <FormSection
          name="Skills"
        >
          {viewSkills()}
          <button className='down-margin' type="button" onClick={handleSkillBtn}>Add skill</button>
          <button type="button" onClick={() => setSkills([])}>Reset Skills</button>
        </FormSection>

        <FormSection
          name="Interests"
        >
          <label htmlFor="interests">Interests</label>
          <input
            type="text"
            name="interests"
            id="interests"
            placeholder='e.g. Minimalist Art'
            value={interestInput}
            onChange={(e) => setInterestInput(e.target.value)}
          />
          <button type="button" className='down-margin' onClick={handleAddInterestsBtn}>Add an interest</button>
          <button type="button" onClick={handleResetInterestsBtn}>Reset interests</button>
        </FormSection>

        <FormSection
          name="Profile"
        >
          <textarea onChange={(e) => setProfileDescription(e.target.value)}></textarea>
          <p className='tiny-note'>(Saved automatically)</p>
        </FormSection>

        <FormSection
          name="Experience"
        >
          <label>
            Position
            <input type="text" 
              name="position"
              value={experience[experience.length - 1].position}
              placeholder='e.g. Senior Front-End Developer'
              onChange={(e) => handleExperience(e)}
            />
          </label>        
          <label>
            Company
            <input 
              type="text"
              name='company'
              value={experience[experience.length - 1].company}
              onChange={(e) => handleExperience(e)}
            />
          </label>          
          <label>
            Location
            <input 
              type="text" 
              name='location'
              value={experience[experience.length - 1].location}
              onChange={(e) => handleExperience(e)}
              placeholder='e.g. New York, NY'
            />
          </label>          
          <label>
            From
            <input 
              type="month"
              name='from'
              value={experience[experience.length - 1].from}
              onChange={(e) => handleExperience(e)}
            />
          </label>
          <label>
            To
            <input 
              type="month"
              name='to'
              value={experience[experience.length - 1].to}
              onChange={(e) => handleExperience(e)}
            />
          </label>
          <label>
            Experience More Info.
            <textarea 
              name="text" 
              value={experience[experience.length - 1].text}
              onChange={handleExperience}
            />
          </label>
          <p className='tiny-note'>(all changes are dynamically saved)</p>       
          <button 
            className='down-margin' 
            type='button'
            onClick={handleAddExperienceBtn}
          >
            Add Blank Experience
          </button>
          <button 
            type="button"
            onClick={handleResetExperienceBtn}
          >
            Reset All Experiences
          </button>
        </FormSection>

        <FormSection
          name="Education"
          demo={true}
        >
          <label>
            Degree
            <input type="text"
              name="degree"
              value={education.degree}
              placeholder='e.g. Bachelor of Arts'
              onChange={(e) => handleEducation(e)}
            />
          </label>
          <label>
            Institution
            <input 
              type="text"
              name='institution'
              value={education.institution}
              onChange={(e) => handleEducation(e)}
            />
          </label>
          <label>
            Location
            <input 
              type="text" 
              name='location'
              value={education.location}
              onChange={(e) => handleEducation(e)}
              placeholder='e.g. New York, NY'
            />
          </label>
          <label>
            Graduation Date
            <input 
              type="month"
              name='gradDate'
              value={education.gradDate}
              onChange={(e) => handleEducation(e)}
            />
          </label>
        </FormSection>
      </form>
    </>
  )
}