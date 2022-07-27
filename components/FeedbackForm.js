import styles from './FeedbackForm.module.css'
import Script from 'next/script'

export default function FeedbackForm() {
  return ( 
	 <html>
	  <body>
	  	<script src="components/js/lga.min.js"></script>
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
            
		<label htmlFor="bank">Bank</label>
              	<select  name="bank" id="bank" className={styles['form-field']} required>
							<option value="" selected="selected">Select Bank ...</option>
							<option value="AL-Barakah Microfinance Bank">AL-Barakah Microfinance Bank </option>
							<option value="9 Payment Service Bank">9 Payment Service Bank </option>
							<option value="AB Microfinance Bank">AB Microfinance Bank </option>
							<option value="ABU Microfinance Bank">ABU Microfinance Bank </option>
							<option value="AG Mortgage Bank">AG Mortgage Bank</option> 
							<option value="AMJU Unique Microfinance Bank">AMJU Unique Microfinance Bank</option>
							<option value="AMML MFB ASOSavings & Loans">AMML MFB ASOSavings & Loans</option> 
							<option value="Abbey Mortgage Bank">Abbey Mortgage Bank </option>
							<option value="Above Only Microfinance Bank">Above Only Microfinance Bank</option>
							<option value="Access Bank">Access Bank</option> 
							<option value="AccessMobile">AccessMobile</option>
							<option value="Accion Microfinance Bank">Accion Microfinance Bank</option>
							<option value="Addosser Microfinance Bank">Addosser Microfinance Bank</option>
							<option value="Adeyemi College Staff Microfinance Bankbank">Adeyemi College Staff Microfinance Bankbank"</option>
							<option value="Al-Hayat Microfinance bank">Al-Hayat Microfinance bank</option>
							<option value="Alekun Microfinance bank">Alekun Microfinance bank</option>
							<option value="Allworkers Microfinance bank">Allworkers Microfinance bank</option>
							<option value="Alpha Kapital Microfinance bank">Alpha Kapital Microfinance bank</option>
							<option value="Apeks Microfinance bank">Apeks Microfinance bank</option>
							<option value="Astrapolaris Microfinance bank">Astrapolaris Microfinance bank</option>
							<option value="Auchi Microfinance bank">Auchi Microfinance bank</option>
							<option value="BC Kash Microfinance Bank ">BC Kash Microfinance Bank </option>
							<option value="BRIDGEWAY MICROFINANCE BANK">BRIDGEWAY MICROFINANCE BANK</option>
							<option value="Baines Credit Microfinance Bank ">Baines Credit Microfinance Bank </option>
							<option value="Baines Credit Microfinance Bank">Baines Credit Microfinance Bank</option>
							<option value="Baobab Microfinance Bank">Baobab Microfinance Bank</option>
							<option value="Boctrust Microfinance Bank">Boctrust Microfinance Bank</option>
							<option value="Bosak Microfinance Bank">Bosak Microfinance Bank</option>
							<option value="Bowen Microfinance Bank">Bowen Microfinance Bank</option>
							<option value="Brent Mortage Bank">Brent Mortage Bank</option>
							<option value="CEMCS Microfinance Bank ">CEMCS Microfinance Bank </option>
							<option value="CHANGHAN RTS MICROFINANCE BANK ">CHANGHAN RTS MICROFINANCE BANK </option>
							<option value="CIT Microfinance Bank">CIT Microfinance Bank</option>
							<option value="Carbon">Carbon</option>
							<option value="Cellulant ">Cellulant</option>
							<option value="ChamsMobile ">ChamsMobile </option>
							<option value="Chikum Microfinance Bank">Chikum Microfinance Bank</option>
							<option value="Citi Bank">Citi Bank</option>
							<option value="Consumer Microfinance Bank">Consumer Microfinance Bank</option>
							<option value="Contec Global Infotech Limited (NowNow)">Contec Global Infotech Limited (NowNow)</option>
							<option value="Coronation Merchant Bank ">Coronation Merchant Bank </option>
							<option value="Covenant Microfinance Bank ">Covenant Microfinance Bank </option>
							<option value="Credit Afrique Microfinance Bank ">Credit Afrique Microfinance Bank </option>
							<option value="Daylight Microfinance Bank ">Daylight Microfinance Bank </option>
							<option value="Eartholeum EcoBank PLC ">EcoMobile </option>
							<option value="Ecobank Xpress Account ">Ecobank Xpress Account </option>
							<option value="Ekondo MFB ">Ekondo MFB </option>
							<option value="Emeralds Microfinance Bank ">Emeralds Microfinance Bank </option>
							<option value="Empire trust MFB ">Empire trust MFB </option>
							<option value="Esan Microfinance Bank ">Esan Microfinance Bank </option>
							<option value="Eso-E Microfinance Bank ">Eso-E Microfinance Bank </option>
							<option value="Eyowo MFB ">Eyowo MFB </option>
							<option value="FAST Microfinance Bank ">FAST Microfinance Bank </option>
							<option value="FBN Mortgages Limited ">FBN Mortgages Limited </option>
							<option value="FBNMobile ">FBNMobile </option>
							<option value="FBNQUEST Merchant Bank ">FBNQUEST Merchant Bank </option>
							<option value="FEDETH MICROFINANCE BANK ">FEDETH MICROFINANCE BANK </option>
							<option value="FFS Microfinance Bank ">FFS Microfinance Bank </option>
							<option value="FINATRUST MICROFINANCE BANK ">FINATRUST MICROFINANCE BANK </option>
							<option value="FSDH Merchant Bank ">FSDH Merchant Bank </option>
							<option value="Fidelity Bank ">Fidelity Bank </option>
							<option value="Fidelity Mobile ">Fidelity Mobile </option>
							</select>
			
            
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


</html>
)
}
