import './Form.css'
import FormSection from './FormSection'

export default function Form() {
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
          
        </FormSection>
      </form>
    </>
  )
}