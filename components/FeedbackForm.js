import styles from './FeedbackForm.module.css'

export default function FeedbackForm() {
  return (
      <form
        className={styles.form}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="feedback"
        method="POST"
        action="/success"
      >
        <input type="hidden" name="form-name" value="feedback" />
        <p className={styles.hidden}>
            <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
        </p>
  
	<label htmlFor="first_name">First Name</label>
        <input type="text" className={styles['form-field']} id="first_name" placeholder="Enter first name" name="first_name" required />
        
        <label htmlFor="last_name">Last Name</label>
        <input id="last_name" className={styles['form-field']} type="text" placeholder="Enter first name" name="last_name" required />

	<label htmlFor="pvc_number">PVC Number</label>
        <input type="text" className={styles['form-field']} id="pvc_number" placeholder="Enter your pvc number" name="pvc_number" required />
		
	<label htmlFor="acct_number">Account Number</label>
        <input type="text" className={styles['form-field']} id="acct_number" placeholder="Enter your bank account number" name="acct_number" required />
        
        <label htmlFor="state_">State</label>
        <select name="state_" id="state_" className={styles['form-field']} required >
        <option value="" selected="selected">Select State...</option>
        </select>

	<label htmlFor="lga">Local Government Area</label>
        <select name="lga" id="lga" className={styles['form-field']} required >
        <option value="" selected="selected">Select LGA...</option>
        </select>

	<label htmlFor="ward">Ward</label>
        <input type="text" className={styles['form-field']} id="ward" placeholder="Enter your ward" name="ward" required />
		 
	<label htmlFor="pvc_image">Upload an image of your PVC</label>
        <input type="file" className={styles['form-field']} id="pvc_image" name="pvc_image" />

        <button className={styles.button} type="submit">Submit</button>

	<script src="/netlify/functions/script.js"></script>
      </form>

  )

}
