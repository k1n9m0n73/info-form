import styles from './FeedbackForm.module.css'
import Script from 'next/script'

export default function FeedbackForm() {
  return ( 
	 <html lang="en">
        <head>
        <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
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

           	<div class="form-group">
              <label for="first_name">First Name</label>
              <input type="text" className={styles['form-field']} id="first_name"  placeholder="Enter first name" name="first_name" required />
		</div>
		      
            	<div class="form-group">
              <label for="last_name">Last Name</label>
              <input type="text" className={styles['form-field']} id="last_name" placeholder="Enter last name" name="last_name" required />
 		</div>
		      
            	<div class="form-group">
              <label for="pvc_number">PVC Number</label>
              <input type="text" className={styles['form-field']} id="pvc_number"  placeholder="Enter your pvc number" name="pvc_number" required />
            	</div>
		      
            	<div class="form-group">
              <label for="acct_number">Account Number</label>
              <input type="text" className={styles['form-field']} id="acct_number" placeholder="Enter your bank account number" name="acct_number" required />
            	</div>
		      
		 <div class="form-group">
		<label for="bank">Bank</label>
              	<select name="bank" id="bank" className={styles['form-field']} required>
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
							<option value="Fidfund Microfinance Bank">Fidfund Microfinance Bank</option>
							<option value="Firmus MFB ">Firmus MFB</option>
							<option value="First Bank PLC">First Bank PLC</option>
							<option value="First City Monument Bank">First City Monument Bank</option>
							<option value="First Generation Mortgage Bank">First Generation Mortgage Bank</option>
							<option value="First Royal Microfinance Bank">First Royal Microfinance Bank</option>
							<option value="Flutterwave Technology Solutions Limited">Flutterwave Technology Solutions Limited</option>
							<option value="Fortis Microfinance Bank">Fortis Microfinance Bank</option>
							<option value="FortisMobile">FortisMobile</option>
							<option value="Fullrange Microfinance Bank">Fullrange Microfinance Bank</option>
							<option value="Futo Microfinance Bank">Futo Microfinance Bank</option>
							<option value="GTMobile">GTMobile</option>
							<option value="Gashua Microfinance Bank">Gashua Microfinance Bank</option>
							<option value="Gateway Mortgage Bank">Gateway Mortgage Bank</option> 
							<option value="Globus Bank">Globus Bank</option>
							<option value="GoMoney">GoMoney</option>
							<option value="Gowans Microfinance Bank">Gowans Microfinance Bank</option> 
							<option value="GreenBank Microfinance Bank">GreenBank Microfinance Bank</option>
							<option value="Greenville Microfinance Bank">Greenville Microfinance Bank</option> 
							<option value="Greenwich Merchant Bank">Greenwich Merchant Bank</option>
							<option value="Grooming Microfinance Bank">rooming Microfinance Bank</option>
							<option value="Guaranty Trust Bank">Guaranty Trust Bank</option> 
							<option value="Hackman Microfinance Bank">Hackman Microfinance Bank</option>
							<option value="Haggai Mortgage Bank Limited">Haggai Mortgage Bank Limited</option>
							<option value="Hasal Microfinance Bank">Hasal Microfinance Bank</option> 
							<option value="Hedonmark Heritage Bank">Hedonmark Heritage Bank</option> 
							<option value="HighStreet Microfinance Bank">HighStreet Microfinance Bank</option> 
							<option value="IBILE Microfinance Bank">IBILE Microfinance Bank</option> 
							<option value="IRL Microfinance Bank">IRL Microfinance Bank</option> 
							<option value="Imo State Microfinance Bank">Imo State Microfinance Bank</option> 
							<option value="Imperial Homes Mortgage Bank">Imperial Homes Mortgage Bank</option>
							<option value="Infinity Microfinance Bank">Infinity Microfinance Bank</option> 
							<option value="Infinity Trust Mortgage Bank">Infinity Trust Mortgage Bank</option> 
							<option value="Innovectives Kesh">Innovectives Kesh</option> 
							<option value="Intellifin">Intellifin</option> 
							<option value="Jaiz Bank">Jaiz Bank</option> 
							<option value="Jubilee-Life Mortgage Bank">Jubilee-Life Mortgage Bank</option> 
							<option value="KCMB Microfinance Bank">KCMB Microfinance Bank</option> 
							<option value="Kegow">Kegow</option> 
							<option value="Keystone Bank">Keystone Bank</option> 
							<option value="Kuda">Kuda</option> 
							<option value="La Fayette Microfinance Bank">La Fayette Microfinance Bank</option>
							<option value="Lagos Building Investment Company">Lagos Building Investment Company</option> 
							<option value="Lapo Microfinance Bank">Lapo Microfinance Bank</option> 
							<option value="Lavender Microfinance Bank">Lavender Microfinance Bank</option> 
							<option value="Letshego MFB">Letshego MFB</option> 
							<option value="Lovonus Microfinance Bank">Lovonus Microfinance Bank</option> 
							<option value="M36">M36</option> 
							<option value="MAUTECH Microfinance Bank">MAUTECH Microfinance Bank</option> 
							<option value="Mainstreet Microfinance Bank">Mainstreet Microfinance Bank</option> 
							<option value="Malachy Microfinance Bank">Malachy Microfinance Bank</option> 
							<option value="Manny Microfinance bank">Manny Microfinance bank</option> 
							<option value="Midland Microfinance Bank">Midland Microfinance Bank</option> 
							<option value="Mint-Finex MICROFINANCE BANK">Mint-Finex MICROFINANCE BANK</option> 
							<option value="Mkudi">Mkudi</option> 
							<option value="Money Trust Microfinance Bank">Money Trust Microfinance Bank</option> 
							<option value="MoneyBox">MoneyBox</option> 
							<option value="Mutual Benefits Microfinance Bank">Mutual Benefits Microfinance Bank</option> 
							<option value="Mutual Trust Microfinance Bank">Mutual Trust Microfinance Bank</option> 
							<option value="NIP Virtual Bank">NIP Virtual Bank</option> 
							<option value="NIRSAL Microfinance Bank">NIRSAL Microfinance Bank</option> 
							<option value="NPF MicroFinance Bank">NPF MicroFinance Bank</option>
							<option value="Nagarta Microfinance Bank">Nagarta Microfinance Bank</option> 
							<option value="Navy Microfinance Bank">Navy Microfinance Bank</option> 
							<option value="Ndiorah Microfinance Bank">Ndiorah Microfinance Bank</option> 
							<option value="New Dawn Microfinance Bank">New Dawn Microfinance Bank</option> 
							<option value="New Prudential Bank">New Prudential Bank</option> 
							<option value="Nova Merchant Bank">Nova Merchant Bank</option> 
							<option value="Ohafia Microfinance Bank">Ohafia Microfinance Bank</option> 
							<option value="Okpoga Microfinance Bank">Okpoga Microfinance Bank</option> 
							<option value="Olabisi Onabanjo University Microfinance Bank">Olabisi Onabanjo University Microfinance Bank</option> 
							<option value="Omoluabi savings and loans">Omoluabi savings and loans</option> 
							<option value="One Finance PALMPAY"></option>
							<option value="Paga">Paga</option> 
							<option value="Page Financials">Page Financials</option> 
							<option value="Parallex Bank">Parallex Bank</option>
							<option value="Parkway-ReadyCash"></option> 
							<option value="Parralex Microfinance bank">Parralex Microfinance bank</option> 
							<option value="PatrickGold Microfinance Bank"></option> 
							<option value="PayAttitude Online">PayAttitude Online</option> 
							<option value="Paycom">Paycom</option> 
							<option value="PecanTrust Microfinance Bank">PecanTrust Microfinance Bank</option>
							<option value="Pennywise Microfinance Bank">Pennywise Microfinance Bank</option> 
							<option value="Personal Trust Microfinance Bank">Personal Trust Microfinance Bank</option> 
							<option value="Petra Microfinance Bank">Petra Microfinance Bank</option> 
							<option value="Platinum Mortgage Bank">Platinum Mortgage Bank</option> 
							<option value="Polaris Bank">Polaris Bank</option> 
							<option value="PremiumTrust Bank">PremiumTrust Bank</option> 
							<option value="Providusbank PLC">Providusbank PLC</option> 
							<option value="Quickfund Microfinance Bank">Quickfund Microfinance Bank</option> 
							<option value="Rand merchant Bank">Rand merchant Bank</option> 
							<option value="Refuge Mortgage Bank"></option> 
							<option value="Regent Microfinance Bank">Regent Microfinance Bank</option> 
							<option value="Reliance Microfinance Bank">Reliance Microfinance Bank</option> 
							<option value="RenMoney Microfinance Bank">RenMoney Microfinance Bank</option> 
							<option value="Richway Microfinance Bank">Richway Microfinance Bank</option> 
							<option value="Royal Exchange Microfinance Bank">Royal Exchange Microfinance Bank</option> 
							<option value="Rubies Microfinance Bank">Rubies Microfinance Bank</option> 
							<option value="Safe Haven MFB SafeTrust">Safe Haven MFB SafeTrust</option>  
							<option value="Sagamu Microfinance Bank">Sagamu Microfinance Bank</option> 
							<option value="Seed Capital Microfinance Bank">Seed Capital Microfinance Bank</option> 
							<option value="Sparkle">Sparkle</option> 
							<option value="Stanbic IBTC @ease wallet">Stanbic IBTC @ease wallet</option> 
							<option value="Stanbic IBTC Bank">Stanbic IBTC Bank</option> 
							<option value="Standard Chaterted Bank PLC">Standard Chaterted Bank PLC</option> 
							<option value="Stanford Microfinance Bank">Stanford Microfinance Bank</option> 
							<option value="Stellas Microfinance Bank">Stellas Microfinance Bank</option> 
							<option value="Sterling Bank PLC">Sterling Bank PLC</option>
							<option value="Suntrust Bank">Suntrust Bank</option>
							<option value="TCF MFB">TCF MFB</option>
							<option value="TagPay">TagPay</option> 
							<option value="Taj Bank Limited">Taj Bank Limited</option> 
							<option value="Tangerine Bank">Tangerine Bank</option> 
							<option value="TeasyMobile">TeasyMobile</option> 
							<option value="Titan Trust Bank">Titan Trust Bank</option> 
							<option value="Trident Microfinance Bank">Trident Microfinance Bank</option> 
							<option value="Trustbond Mortgage Bank">Trustbond Mortgage Bank</option> 
							<option value="Trustfund Microfinance Bank">Trustfund Microfinance Bank</option> 
							<option value="UNN MFB">UNN MFB</option> 
							<option value="Uniben Microfinance Bank">Uniben Microfinance Bank</option> 
							<option value="Unical Microfinance Bank">Unical Microfinance Bank</option> 
							<option value="Union Bank PLC">Union Bank PLC</option> 
							<option value="United Bank for Africa">United Bank for Africa</option> 
							<option value="Unity Bank PLC">Unity Bank PLC</option> 
							<option value="VFD Micro Finance Bank">VFD Micro Finance Bank</option> 
							<option value="VTNetworks">VTNetworks</option> 
							<option value="Verite Microfinance Bank">Verite Microfinance Bank</option> 
							<option value="Virtue Microfinance Bank">Virtue Microfinance Bank</option> 
							<option value="Visa Microfinance Bank">Visa Microfinance Bank</option> 
							<option value="Wema Bank PLC">Wema Bank PLC</option> 
							<option value="Wetland Microfinance Bank">Wetland Microfinance Bank</option> 
							<option value="Xslnce Microfinance Bank">Xslnce Microfinance Bank</option> 
							<option value="Yes Microfinance Bank">Yes Microfinance Bank</option> 
							<option value="Zenith bank PLC">Zenith bank PLC</option> 
							<option value="ZenithMobile">ZenithMobile</option> 
							<option value="Zinternet Nigera Limited">Zinternet Nigera Limited</option> 
							<option value="e-Barcs Microfinance Bank">e-Barcs Microfinance Bank</option> 
							<option value="eTranzact">eTranzact</option>
							</select>
							</div>
			
            	<div class="form-group">
		<label for="state">State</label>
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
						</div>

		<div class="form-group">			
		<label for="lga">Local Government Area</label>
		<select name="lga" id="lga" className={styles['form-field']} class='select-lga' required>
		</select>
		</div>	

		<div class="form-group">
              <label for="ward">Ward</label>
              <input required type="text" className={styles['form-field']}  id="ward" placeholder="Enter your ward" name="ward" required/>
		</div>      
            
		<div class="form-group">
              <label for="pvc_image">Upload an image of your PVC</label>
              <input type="file" className={styles['form-field']} id="pvc_image" name="pvc_image"/>
            	</div>
		      
		<div class="form-group">
            <button type="submit" className={styles.button}>Submit</button>
		</div>
          </form>


	<script id="state" src="components/js/lga.js">
    </script>

     </body>
</html>
)
}
