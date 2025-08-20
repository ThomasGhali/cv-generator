import { useState, Fragment } from 'react'
import './Form.css'
import FormSection from './FormSection'

// function Skill() {
//   return (

//   )
// }

export default function Form({ skills, setSkills}) {
  // 
  function handleSkillBtn() {
    if (
      skills.length === 0 || // no skills yet
      Object.keys(skills[skills.length -1 ]).length !== 0 // last skill not empty
    ) {
      setSkills(prev => [...prev, {}])
    }
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
          <input type="email" name="email" id="email" />

          <label htmlFor="phone">Phone </label>
          <input 
            type="tel" 
            placeholder='+1 234 567 890'
            name="phone" 
            id="phone"
          />
          <label htmlFor="website">Website </label>
          <input type="url" name="website" id="website" />

        </FormSection>
        <FormSection
          name="Skills"
        >
          {viewSkills()}
          <button className='add-skill-btn' type="button" onClick={handleSkillBtn}>Add skill</button>
          <button type="button" >Reset Skills</button>
        </FormSection>
      </form>
    </>
  )
}