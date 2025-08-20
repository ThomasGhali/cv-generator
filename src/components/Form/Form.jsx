import { useState } from 'react'
import './Form.css'
import FormSection from './FormSection'

// function Skill() {
//   return (

//   )
// }

export default function Form({ skills, setSkills}) {
  function handleSkillBtn() {
    if (
      skills.length === 0 || // no skills yet
      Object.keys(skills[skills.length -1 ]).length !== 0 // last skill not empty
    ) {
      return setSkills(prev => [...prev, {}])
    }

    return
  }
  function viewSkills() {
    return skills.map((skill, index) => {
      return (
        <>
        <div className="skill-wrapper">
          <label>
            Skill 1's Name 
            <input type="text" id='' />
          </label>
          <label>
          Skill 1's Proficiency
            <input type="range" />
          </label>
        </div>
        {index + 1 === skills.length && <hr />}
        </>
      )
    })
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
          <button type='button' onClick={handleSkillBtn}>Add skill</button>
        </FormSection>
      </form>
    </>
  )
}