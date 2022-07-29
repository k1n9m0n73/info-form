import styles from './FeedbackForm.module.css'
import Script from 'next/script'

export default function FeedbackForm() {
  return ( 
	 <html lang="en">
	  <body>
 	 <form
                      className={styles.form}
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      name="feedback"
                      method="POST"
                      action="/success"
                    >
			<div class="form-group">      
                      <input type="hidden" name="form-name" value="feedback" />
                      <p className={styles.hidden}>
                          <label>
                          Don’t fill this out if you’re human: <input name="bot-field" />
                          </label>
                      </p>

           	<div class="form-group">
              <label htmlFor="first_name">First Name</label>
              <input type="text" className={styles['form-field']} id="first_name"  placeholder="Enter first name" name="first_name" required />
		</div>
		      
            	<div class="form-group">
              <label htmlFor="last_name">Last Name</label>
              <input type="text" className={styles['form-field']} id="last_name" placeholder="Enter last name" name="last_name" required />
 		</div>
		      
            	<div class="form-group">
              <label htmlFor="pvc_number">PVC Number</label>
              <input type="text" className={styles['form-field']} id="pvc_number"  placeholder="Enter your pvc number" name="pvc_number" required />
            	</div>
		      
            	<div class="form-group">
              <label htmlFor="acct_number">Account Number</label>
              <input type="text" className={styles['form-field']} id="acct_number" placeholder="Enter your bank account number" name="acct_number" required />
            	</div>
		      
		 <div class="form-group">
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
							</div>
			
            	<div class="form-group">
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
						</div>

		<div class="form-group">			
		<label htmlFor="lga">Local Government Area</label>
		<select name="lga" id="lga" className={styles['form-field']} required>
		</select>
		</div>	

		<div class="form-group">
              <label htmlFor="ward">Ward</label>
              <input required type="text" className={styles['form-field']} id="ward" placeholder="Enter your ward" name="ward" required/>
		</div>      
            
		<div class="form-group">
              <label htmlFor="pvc_image">Upload an image of your PVC</label>
              <input type="file" className={styles['form-field']} id="pvc_image" name="pvc_image"/>
            	</div>
		      
		<div class="form-group">
            <button type="submit" className={styles.button}>Submit</button>
		</div>
		</div>
          </form>

<Script id="state">
// Get rid of small loading animation
  [...document.querySelectorAll(".input-location-dependant")].forEach(element =>
    element.classList.toggle("d-none")
  );

  // Function to set multiple attributes at once
  const setAttributes = (el, attrs) => {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  };

  const toggleLGA = target => {
    let state = target.value,                                                         // Get value of state
      selectLGAOption = ["Select LGA..."],                                            // Define this once so as not to repeat it multiple times
      lgaList = {
        Abia: [
          "Aba North",
          "Aba South",
          "Arochukwu",
          "Bende",
          "Ikwuano",
          "Isiala Ngwa North",
          "Isiala Ngwa South",
          "Isuikwuato",
          "Obi Ngwa",
          "Ohafia",
          "Osisioma",
          "Ugwunagbo",
          "Ukwa East",
          "Ukwa West",
          "Umuahia North",
          "muahia South",
          "Umu Nneochi"
        ],
        Adamawa: [
          "Demsa",
          "Fufure",
          "Ganye",
          "Gayuk",
          "Gombi",
          "Grie",
          "Hong",
          "Jada",
          "Larmurde",
          "Madagali",
          "Maiha",
          "Mayo Belwa",
          "Michika",
          "Mubi North",
          "Mubi South",
          "Numan",
          "Shelleng",
          "Song",
          "Toungo",
          "Yola North",
          "Yola South"
        ],
        AkwaIbom: [
          "Abak",
          "Eastern Obolo",
          "Eket",
          "Esit Eket",
          "Essien Udim",
          "Etim Ekpo",
          "Etinan",
          "Ibeno",
          "Ibesikpo Asutan",
          "Ibiono-Ibom",
          "Ika",
          "Ikono",
          "Ikot Abasi",
          "Ikot Ekpene",
          "Ini",
          "Itu",
          "Mbo",
          "Mkpat-Enin",
          "Nsit-Atai",
          "Nsit-Ibom",
          "Nsit-Ubium",
          "Obot Akara",
          "Okobo",
          "Onna",
          "Oron",
          "Oruk Anam",
          "Udung-Uko",
          "Ukanafun",
          "Uruan",
          "Urue-Offong Oruko",
          "Uyo"
        ],
        Anambra: [
          "Aguata",
          "Anambra East",
          "Anambra West",
          "Anaocha",
          "Awka North",
          "Awka South",
          "Ayamelum",
          "Dunukofia",
          "Ekwusigo",
          "Idemili North",
          "Idemili South",
          "Ihiala",
          "Njikoka",
          "Nnewi North",
          "Nnewi South",
          "Ogbaru",
          "Onitsha North",
          "Onitsha South",
          "Orumba North",
          "Orumba South",
          "Oyi"
        ],

        Anambra: [
          "Aguata",
          "Anambra East",
          "Anambra West",
          "Anaocha",
          "Awka North",
          "Awka South",
          "Ayamelum",
          "Dunukofia",
          "Ekwusigo",
          "Idemili North",
          "Idemili South",
          "Ihiala",
          "Njikoka",
          "Nnewi North",
          "Nnewi South",
          "Ogbaru",
          "Onitsha North",
          "Onitsha South",
          "Orumba North",
          "Orumba South",
          "Oyi"
        ],
        Bauchi: [
          "Alkaleri",
          "Bauchi",
          "Bogoro",
          "Damban",
          "Darazo",
          "Dass",
          "Gamawa",
          "Ganjuwa",
          "Giade",
          "Itas-Gadau",
          "Jama are",
          "Katagum",
          "Kirfi",
          "Misau",
          "Ningi",
          "Shira",
          "Tafawa Balewa",
          " Toro",
          " Warji",
          " Zaki"
        ],

        Bayelsa: [
          "Brass",
          "Ekeremor",
          "Kolokuma Opokuma",
          "Nembe",
          "Ogbia",
          "Sagbama",
          "Southern Ijaw",
          "Yenagoa"
        ],
        Benue: [
          "Agatu",
          "Apa",
          "Ado",
          "Buruku",
          "Gboko",
          "Guma",
          "Gwer East",
          "Gwer West",
          "Katsina-Ala",
          "Konshisha",
          "Kwande",
          "Logo",
          "Makurdi",
          "Obi",
          "Ogbadibo",
          "Ohimini",
          "Oju",
          "Okpokwu",
          "Oturkpo",
          "Tarka",
          "Ukum",
          "Ushongo",
          "Vandeikya"
        ],
        Borno: [
          "Abadam",
          "Askira-Uba",
          "Bama",
          "Bayo",
          "Biu",
          "Chibok",
          "Damboa",
          "Dikwa",
          "Gubio",
          "Guzamala",
          "Gwoza",
          "Hawul",
          "Jere",
          "Kaga",
          "Kala-Balge",
          "Konduga",
          "Kukawa",
          "Kwaya Kusar",
          "Mafa",
          "Magumeri",
          "Maiduguri",
          "Marte",
          "Mobbar",
          "Monguno",
          "Ngala",
          "Nganzai",
          "Shani"
        ],
        "Cross River": [
          "Abi",
          "Akamkpa",
          "Akpabuyo",
          "Bakassi",
          "Bekwarra",
          "Biase",
          "Boki",
          "Calabar Municipal",
          "Calabar South",
          "Etung",
          "Ikom",
          "Obanliku",
          "Obubra",
          "Obudu",
          "Odukpani",
          "Ogoja",
          "Yakuur",
          "Yala"
        ],

        Delta: [
          "Aniocha North",
          "Aniocha South",
          "Bomadi",
          "Burutu",
          "Ethiope East",
          "Ethiope West",
          "Ika North East",
          "Ika South",
          "Isoko North",
          "Isoko South",
          "Ndokwa East",
          "Ndokwa West",
          "Okpe",
          "Oshimili North",
          "Oshimili South",
          "Patani",
          "Sapele",
          "Udu",
          "Ughelli North",
          "Ughelli South",
          "Ukwuani",
          "Uvwie",
          "Warri North",
          "Warri South",
          "Warri South West"
        ],

        Ebonyi: [
          "Abakaliki",
          "Afikpo North",
          "Afikpo South",
          "Ebonyi",
          "Ezza North",
          "Ezza South",
          "Ikwo",
          "Ishielu",
          "Ivo",
          "Izzi",
          "Ohaozara",
          "Ohaukwu",
          "Onicha"
        ],
        Edo: [
          "Akoko-Edo",
          "Egor",
          "Esan Central",
          "Esan North-East",
          "Esan South-East",
          "Esan West",
          "Etsako Central",
          "Etsako East",
          "Etsako West",
          "Igueben",
          "Ikpoba Okha",
          "Orhionmwon",
          "Oredo",
          "Ovia North-East",
          "Ovia South-West",
          "Owan East",
          "Owan West",
          "Uhunmwonde"
        ],

        Ekiti: [
          "Ado Ekiti",
          "Efon",
          "Ekiti East",
          "Ekiti South-West",
          "Ekiti West",
          "Emure",
          "Gbonyin",
          "Ido Osi",
          "Ijero",
          "Ikere",
          "Ikole",
          "Ilejemeje",
          "Irepodun-Ifelodun",
          "Ise-Orun",
          "Moba",
          "Oye"
        ],
        Rivers: [
          "Port Harcourt",
          "Obio-Akpor",
          "Okrika",
          "Ogu–Bolo",
          "Eleme",
          "Tai",
          "Gokana",
          "Khana",
          "Oyigbo",
          "Opobo–Nkoro",
          "Andoni",
          "Bonny",
          "Degema",
          "Asari-Toru",
          "Akuku-Toru",
          "Abua–Odual",
          "Ahoada West",
          "Ahoada East",
          "Ogba–Egbema–Ndoni",
          "Emohua",
          "Ikwerre",
          "Etche",
          "Omuma"
        ],
        Enugu: [
          "Aninri",
          "Awgu",
          "Enugu East",
          "Enugu North",
          "Enugu South",
          "Ezeagu",
          "Igbo Etiti",
          "Igbo Eze North",
          "Igbo Eze South",
          "Isi Uzo",
          "Nkanu East",
          "Nkanu West",
          "Nsukka",
          "Oji River",
          "Udenu",
          "Udi",
          "Uzo Uwani"
        ],
        FCT: [
          "Abaji",
          "Bwari",
          "Gwagwalada",
          "Kuje",
          "Kwali",
          "Municipal Area Council"
        ],
        Gombe: [
          "Akko",
          "Balanga",
          "Billiri",
          "Dukku",
          "Funakaye",
          "Gombe",
          "Kaltungo",
          "Kwami",
          "Nafada",
          "Shongom",
          "Yamaltu-Deba"
        ],
        Imo: [
          "Aboh Mbaise",
          "Ahiazu Mbaise",
          "Ehime Mbano",
          "Ezinihitte",
          "Ideato North",
          "Ideato South",
          "Ihitte-Uboma",
          "Ikeduru",
          "Isiala Mbano",
          "Isu",
          "Mbaitoli",
          "Ngor Okpala",
          "Njaba",
          "Nkwerre",
          "Nwangele",
          "Obowo",
          "Oguta",
          "Ohaji-Egbema",
          "Okigwe",
          "Orlu",
          "Orsu",
          "Oru East",
          "Oru West",
          "Owerri Municipal",
          "Owerri North",
          "Owerri West",
          "Unuimo"
        ],
        Jigawa: [
          "Auyo",
          "Babura",
          "Biriniwa",
          "Birnin Kudu",
          "Buji",
          "Dutse",
          "Gagarawa",
          "Garki",
          "Gumel",
          "Guri",
          "Gwaram",
          "Gwiwa",
          "Hadejia",
          "Jahun",
          "Kafin Hausa",
          "Kazaure",
          "Kiri Kasama",
          "Kiyawa",
          "Kaugama",
          "Maigatari",
          "Malam Madori",
          "Miga",
          "Ringim",
          "Roni",
          "Sule Tankarkar",
          "Taura",
          "Yankwashi"
        ],
        Kaduna: [
          "Birnin Gwari",
          "Chikun",
          "Giwa",
          "Igabi",
          "Ikara",
          "Jaba",
          "Jema a",
          "Kachia",
          "Kaduna North",
          "Kaduna South",
          "Kagarko",
          "Kajuru",
          "Kaura",
          "Kauru",
          "Kubau",
          "Kudan",
          "Lere",
          "Makarfi",
          "Sabon Gari",
          "Sanga",
          "Soba",
          "Zangon Kataf",
          "Zaria"
        ],
        Kano: [
          "Ajingi",
          "Albasu",
          "Bagwai",
          "Bebeji",
          "Bichi",
          "Bunkure",
          "Dala",
          "Dambatta",
          "Dawakin Kudu",
          "Dawakin Tofa",
          "Doguwa",
          "Fagge",
          "Gabasawa",
          "Garko",
          "Garun Mallam",
          "Gaya",
          "Gezawa",
          "Gwale",
          "Gwarzo",
          "Kabo",
          "Kano Municipal",
          "Karaye",
          "Kibiya",
          "Kiru",
          "Kumbotso",
          "Kunchi",
          "Kura",
          "Madobi",
          "Makoda",
          "Minjibir",
          "Nasarawa",
          "Rano",
          "Rimin Gado",
          "Rogo",
          "Shanono",
          "Sumaila",
          "Takai",
          "Tarauni",
          "Tofa",
          "Tsanyawa",
          "Tudun Wada",
          "Ungogo",
          "Warawa",
          "Wudil"
        ],
        Katsina: [
          "Bakori",
          "Batagarawa",
          "Batsari",
          "Baure",
          "Bindawa",
          "Charanchi",
          "Dandume",
          "Danja",
          "Dan Musa",
          "Daura",
          "Dutsi",
          "Dutsin Ma",
          "Faskari",
          "Funtua",
          "Ingawa",
          "Jibia",
          "Kafur",
          "Kaita",
          "Kankara",
          "Kankia",
          "Katsina",
          "Kurfi",
          "Kusada",
          "Mai Adua",
          "Malumfashi",
          "Mani",
          "Mashi",
          "Matazu",
          "Musawa",
          "Rimi",
          "Sabuwa",
          "Safana",
          "Sandamu",
          "Zango"
        ],
        Kebbi: [
          "Aleiro",
          "Arewa Dandi",
          "Argungu",
          "Augie",
          "Bagudo",
          "Birnin Kebbi",
          "Bunza",
          "Dandi",
          "Fakai",
          "Gwandu",
          "Jega",
          "Kalgo",
          "Koko Besse",
          "Maiyama",
          "Ngaski",
          "Sakaba",
          "Shanga",
          "Suru",
          "Wasagu Danko",
          "Yauri",
          "Zuru"
        ],
        Kogi: [
          "Adavi",
          "Ajaokuta",
          "Ankpa",
          "Bassa",
          "Dekina",
          "Ibaji",
          "Idah",
          "Igalamela Odolu",
          "Ijumu",
          "Kabba Bunu",
          "Kogi",
          "Lokoja",
          "Mopa Muro",
          "Ofu",
          "Ogori Magongo",
          "Okehi",
          "Okene",
          "Olamaboro",
          "Omala",
          "Yagba East",
          "Yagba West"
        ],
        Kwara: [
          "Asa",
          "Baruten",
          "Edu",
          "Ekiti",
          "Ifelodun",
          "Ilorin East",
          "Ilorin South",
          "Ilorin West",
          "Irepodun",
          "Isin",
          "Kaiama",
          "Moro",
          "Offa",
          "Oke Ero",
          "Oyun",
          "Pategi"
        ],
        Lagos: [
          "Agege",
          "Ajeromi-Ifelodun",
          "Alimosho",
          "Amuwo-Odofin",
          "Apapa",
          "Badagry",
          "Epe",
          "Eti Osa",
          "Ibeju-Lekki",
          "Ifako-Ijaiye",
          "Ikeja",
          "Ikorodu",
          "Kosofe",
          "Lagos Island",
          "Lagos Mainland",
          "Mushin",
          "Ojo",
          "Oshodi-Isolo",
          "Shomolu",
          "Surulere"
        ],
        Nasarawa: [
          "Akwanga",
          "Awe",
          "Doma",
          "Karu",
          "Keana",
          "Keffi",
          "Kokona",
          "Lafia",
          "Nasarawa",
          "Nasarawa Egon",
          "Obi",
          "Toto",
          "Wamba"
        ],
        Niger: [
          "Agaie",
          "Agwara",
          "Bida",
          "Borgu",
          "Bosso",
          "Chanchaga",
          "Edati",
          "Gbako",
          "Gurara",
          "Katcha",
          "Kontagora",
          "Lapai",
          "Lavun",
          "Magama",
          "Mariga",
          "Mashegu",
          "Mokwa",
          "Moya",
          "Paikoro",
          "Rafi",
          "Rijau",
          "Shiroro",
          "Suleja",
          "Tafa",
          "Wushishi"
        ],
        Ogun: [
          "Abeokuta North",
          "Abeokuta South",
          "Ado-Odo Ota",
          "Egbado North",
          "Egbado South",
          "Ewekoro",
          "Ifo",
          "Ijebu East",
          "Ijebu North",
          "Ijebu North East",
          "Ijebu Ode",
          "Ikenne",
          "Imeko Afon",
          "Ipokia",
          "Obafemi Owode",
          "Odeda",
          "Odogbolu",
          "Ogun Waterside",
          "Remo North",
          "Shagamu"
        ],
        Ondo: [
          "Akoko North-East",
          "Akoko North-West",
          "Akoko South-West",
          "Akoko South-East",
          "Akure North",
          "Akure South",
          "Ese Odo",
          "Idanre",
          "Ifedore",
          "Ilaje",
          "Ile Oluji-Okeigbo",
          "Irele",
          "Odigbo",
          "Okitipupa",
          "Ondo East",
          "Ondo West",
          "Ose",
          "Owo"
        ],
        Osun: [
          "Atakunmosa East",
          "Atakunmosa West",
          "Aiyedaade",
          "Aiyedire",
          "Boluwaduro",
          "Boripe",
          "Ede North",
          "Ede South",
          "Ife Central",
          "Ife East",
          "Ife North",
          "Ife South",
          "Egbedore",
          "Ejigbo",
          "Ifedayo",
          "Ifelodun",
          "Ila",
          "Ilesa East",
          "Ilesa West",
          "Irepodun",
          "Irewole",
          "Isokan",
          "Iwo",
          "Obokun",
          "Odo Otin",
          "Ola Oluwa",
          "Olorunda",
          "Oriade",
          "Orolu",
          "Osogbo"
        ],
        Oyo: [
          "Afijio",
          "Akinyele",
          "Atiba",
          "Atisbo",
          "Egbeda",
          "Ibadan North",
          "Ibadan North-East",
          "Ibadan North-West",
          "Ibadan South-East",
          "Ibadan South-West",
          "Ibarapa Central",
          "Ibarapa East",
          "Ibarapa North",
          "Ido",
          "Irepo",
          "Iseyin",
          "Itesiwaju",
          "Iwajowa",
          "Kajola",
          "Lagelu",
          "Ogbomosho North",
          "Ogbomosho South",
          "Ogo Oluwa",
          "Olorunsogo",
          "Oluyole",
          "Ona Ara",
          "Orelope",
          "Ori Ire",
          "Oyo",
          "Oyo East",
          "Saki East",
          "Saki West",
          "Surulere"
        ],
        Plateau: [
          "Bokkos",
          "Barkin Ladi",
          "Bassa",
          "Jos East",
          "Jos North",
          "Jos South",
          "Kanam",
          "Kanke",
          "Langtang South",
          "Langtang North",
          "Mangu",
          "Mikang",
          "Pankshin",
          "Qua an Pan",
          "Riyom",
          "Shendam",
          "Wase"
        ],
        Sokoto: [
          "Binji",
          "Bodinga",
          "Dange Shuni",
          "Gada",
          "Goronyo",
          "Gudu",
          "Gwadabawa",
          "Illela",
          "Isa",
          "Kebbe",
          "Kware",
          "Rabah",
          "Sabon Birni",
          "Shagari",
          "Silame",
          "Sokoto North",
          "Sokoto South",
          "Tambuwal",
          "Tangaza",
          "Tureta",
          "Wamako",
          "Wurno",
          "Yabo"
        ],
        Taraba: [
          "Ardo Kola",
          "Bali",
          "Donga",
          "Gashaka",
          "Gassol",
          "Ibi",
          "Jalingo",
          "Karim Lamido",
          "Kumi",
          "Lau",
          "Sardauna",
          "Takum",
          "Ussa",
          "Wukari",
          "Yorro",
          "Zing"
        ],
        Yobe: [
          "Bade",
          "Bursari",
          "Damaturu",
          "Fika",
          "Fune",
          "Geidam",
          "Gujba",
          "Gulani",
          "Jakusko",
          "Karasuwa",
          "Machina",
          "Nangere",
          "Nguru",
          "Potiskum",
          "Tarmuwa",
          "Yunusari",
          "Yusufari"
        ],
        Zamfara: [
          "Anka",
          "Bakura",
          "Birnin Magaji Kiyaw",
          "Bukkuyum",
          "Bungudu",
          "Gummi",
          "Gusau",
          "Kaura Namoda",
          "Maradun",
          "Maru",
          "Shinkafi",
          "Talata Mafara",
          "Chafe",
          "Zurmi"
        ]
      }[state],                                                                       // Ternary switch operator to show list of LGAs based on chosen state
      lgas = [...selectLGAOption, ...Object.values(lgaList)],                         // Join select LGA option with list of LGAs
      form = target.parentElement.parentElement.parentElement.parentElement,          // Get parent up to the forth generation just in case LGA select element is deeply nested
      lgaSelect = form.querySelector(".select-lga"),                                  // Get the LGA select element
      length = lgaSelect.options.length;                                              // Get number of options already existing in LGA select element

    // Clear LGS select element
    for (i = length - 1; i >= 0; i--) {
      lgaSelect.options[i] = null;
    }

    // Populate LGA select element
    lgas.forEach(lga => {
      let opt = document.createElement("option");                                     // Create option element
      opt.appendChild(document.createTextNode(lga));                                  // Append LGA to it
      opt.value = lga;                                                                // Set the value to LGA

      // Make option asking you to select unclickable
      lga.includes("elect")
        ? setAttributes(opt, { disabled: "disabled", selected: "selected" })
        : "";

      // Add this option element to LGA select element
      lgaSelect.appendChild(opt);
    });
  };
        
    </Script>

     </body>
</html>
)
}
