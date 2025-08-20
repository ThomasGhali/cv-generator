import { useState, Fragment } from 'react'
import './Form.css'
import FormSection from './FormSection'

// function Skill() {
//   return (

//   )
// }

export default function Form({ skillsState, contactState, setInterests }) {
  const { skills, setSkills } = skillsState;
  const { setEmail, setPhone, setWebsite } = contactState;

  const [interestInput, setInterestInput] = useState('');

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
              <input 
                name='range'
                type="range" 
                onChange={(e) => handleRangeChange(index, e)} />
            </label>
          </div>
          {index + 1 === skills.length && <hr />}
        </Fragment>
      )
    )
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
          demo={true}
        >
          <textarea ></textarea>
          <button style={{marginTop: '10px'}} type="button">Add Profile description</button>
        </FormSection>
      </form>
    </>
  )
}