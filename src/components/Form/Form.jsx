import './Form.css'
import FormSection from './FormSection'

export default function Form() {
  return (
    <>
      <form action="">
        <FormSection
          name="Contact"
        >
          <span>hello from form</span>  
        </FormSection>
        <FormSection
          name="Skills"
        >
          <span>hello from form</span>  
        </FormSection>
      </form>
    </>
  )
}