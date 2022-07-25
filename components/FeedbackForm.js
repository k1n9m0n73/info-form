import styles from './FeedbackForm.module.css'

export default function FeedbackForm() {
  return ( 
	 <html>
	  <body>
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
              <input type="text" className={styles['form-field']} id="first_name"  placeholder="Enter first name" name="first_name" required />

            
              <label htmlFor="last_name">Last Name</label>
              <input type="text" className={styles['form-field']} id="last_name" placeholder="Enter last name" name="last_name" required />
 
            
              <label htmlFor="pvc_number">PVC Number</label>
              <input type="text" className={styles['form-field']} id="pvc_number"  placeholder="Enter your pvc number" name="pvc_number" required />
            
            
              <label htmlFor="acct_number">Account Number</label>
              <input type="text" className={styles['form-field']} id="acct_number" placeholder="Enter your bank account number" name="acct_number" required />
            
            
		<label htmlFor="state">State</label>
		<select onchange="toggleLGA(this);" name="state" id="state" className={styles['form-field']} required>
							<option value="" selected="selected">Select State ...</option>
							<option value="Abia">Abia</option>
							<option value="Adamawa">Adamawa</option>
							<option value="AkwaIbom">AkwaIbom</option>
							<option value="Anambra">Anambra</option>
							<option value="Bauchi">Bauchi</option>
							<option value="Bayelsa">Bayelsa</option>
							<option value="Benue">Benue</option>
							<option value="Borno">Borno</option>
							<option value="Cross River">Cross River</option>
							<option value="Delta">Delta</option>
							<option value="Ebonyi">Ebonyi</option>
							<option value="Edo">Edo</option>
							<option value="Ekiti">Ekiti</option>
							<option value="Enugu">Enugu</option>
							<option value="FCT">FCT</option>
							<option value="Gombe">Gombe</option>
							<option value="Imo">Imo</option>
							<option value="Jigawa">Jigawa</option>
							<option value="Kaduna">Kaduna</option>
							<option value="Kano">Kano</option>
							<option value="Katsina">Katsina</option>
							<option value="Kebbi">Kebbi</option>
							<option value="Kogi">Kogi</option>
							<option value="Kwara">Kwara</option>
							<option value="Lagos">Lagos</option>
							<option value="Nasarawa">Nasarawa</option>
							<option value="Niger">Niger</option>
							<option value="Ogun">Ogun</option>
							<option value="Ondo">Ondo</option>
							<option value="Osun">Osun</option>
							<option value="Oyo">Oyo</option>
							<option value="Plateau">Plateau</option>
							<option value="Rivers">Rivers</option>
							<option value="Sokoto">Sokoto</option>
							<option value="Taraba">Taraba</option>
							<option value="Yobe">Yobe</option>
							<option value="Zamfara">Zamafara</option>
						</select>

					
		<label htmlFor="lga">Local Government Area</label>
		<select name="lga" id="lga" className={styles['form-field']} required>
		</select>
					

              <label htmlFor="ward">Ward</label>
              <input required type="text" className={styles['form-field']} id="ward" placeholder="Enter your ward" name="ward" required/>
		      
            
              <label htmlFor="pvc_image">Upload an image of your PVC</label>
              <input type="file" className={styles['form-field']} id="pvc_image" name="pvc_image"/>
            
		      
            <button type="submit" className={styles.button}>Submit</button>

          </form>
     </body>
	
	<script src="jquery.js" type="text/javascript"></script>
	<script type="javascript" src="js/state.js"></script>

</html>
)
}
