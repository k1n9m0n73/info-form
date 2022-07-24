import styles from './FeedbackForm.module.css'

export default function FeedbackForm() {
  return (

<html lang="en">
  <head>
    <title>Data Form</title>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"/>
  </head>
  <body>
    <div className={styles.form}>
      <div class="card">
        <div class="card-body">  
            
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

            //First Name
            <div class="form-group">
              <label for="first_name">First Name</label>
              <input type="text" className={styles.hidden} id="first_name" aria-describedby="emailHelp" placeholder="Enter first name" name="first_name" required />
            </div>

            //Last Name
            <div class="form-group">
              <label for="last_name">Last Name</label>
              <input type="text" className={styles.hidden} id="last_name" aria-describedby="emailHelp" placeholder="Enter last name" name="last_name" required />
            </div>

            //PVC Number
            <div class="form-group">
              <label for="pvc_number">PVC Number</label>
              <input type="text" className={styles.hidden} id="pvc_number" aria-describedby="emailHelp" placeholder="Enter your pvc number" name="pvc_number" required />
            </div>

            //Account Number
            <div class="form-group">
              <label for="acct_number">Account Number</label>
              <input type="text" className={styles.hidden} id="acct_number" aria-describedby="emailHelp" placeholder="Enter your bank account number" name="acct_number" required />
            </div>

            //State
            <div class="form-group">
						<label class="control-label">State</label>
						<select onchange="toggleLGA(this);" name="state" id="state" class="form-control">
							<option value="" selected="selected">- Select -</option>
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
					</div>

					<div class="form-group">
						<label class="control-label">LGA of Origin</label>
						<select name="lga" id="lga" class="form-control select-lga" required>
						</select>
					</div>

            //Wards
            <div class="form-group">
              <label for="ward">Ward</label>
              <input required type="text" className={styles.hidden} id="ward" aria-describedby="emailHelp" placeholder="Enter your ward" name="ward" required/>
          </div>

            //Upload of PVC image
            <div class="form-group">
              <label for="pvc_image">Upload an image of your PVC</label>
              <input type="file" className={styles.hidden} id="pvc_image" name="pvc_image"/>
            </div>

            //Submit Button
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
    </div>
  </div>
<script src="components/lga.min.js"></script>
</body>
</html>

)
}
