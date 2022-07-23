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
              <label htmlFor="first_name">First Name</label>
              <input type="text" className={styles.form} id="first_name" aria-describedby="emailHelp" placeholder="Enter first name" name="first_name" required />

            //Last Name
            
              <label htmlFor="last_name">Last Name</label>
              <input type="text" className={styles.form} id="last_name" aria-describedby="emailHelp" placeholder="Enter last name" name="last_name" required />

            //PVC Number
            
              <label htmlFor="pvc_number">PVC Number</label>
              <input type="text" className={styles.form} id="pvc_number" aria-describedby="emailHelp" placeholder="Enter your pvc number" name="pvc_number" required />

            //Account Number
            
              <label htmlFor="acct_number">Account Number</label>
              <input type="text" className={styles.form} id="acct_number" aria-describedby="emailHelp" placeholder="Enter your bank account number" name="acct_number" required />

            //State
            
              <label htmlFor="state_">State</label>
              <select required name="state_" id="state_" className={styles.form}>
                <option value="" selected="selected">Select State...</option>
            </select>
            
            //Local Government Areas      
            
              <label htmlFor="lga">Local Government Area</label>
                <select required name="lga" id="lga" className={styles.form}>
                    <option value="" selected="selected">Select LGA...</option>
                </select>

            //Wards
            
              <label htmlFor="ward">Ward</label>
              <input type="text" className={styles.form} id="ward" aria-describedby="emailHelp" placeholder="Enter your ward" name="ward" required />
          
            //Upload of PVC image
            
              <label htmlFor="pvc_image">Upload an image of your PVC</label>
              <input type="file" className={styles.form} id="pvc_image" name="pvc_image"/>
            
            //Submit Button
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
  </div>
  </body>
</html>
<script>
  var stateObject = {
    "Abia": {"Aba North": [], "Aba South": [], "Arochukwu": [], "Bende": [], "Ikwuano": [], "Isiala Ngwa North": [], "Isiala Ngwa South": [], "Isuikwuato": [], "Obi Ngwa": [], "Ohafia": [], "Osisioma": [], "Ugwunagbo": [], "Ukwa East": [], "Ukwa West": [], "Umuahia North": [], "muahia South": [], "Umu Nneochi": []},
  
    "Adamawa": {"Demsa": [], "Fufure": [], "Ganye": [], "Gayuk": [], "Gombi": [], "Grie": [], "Hong": [], "Jada": [], "Larmurde": [], "Madagali": [], "Maiha": [], "Mayo Belwa": [], "Michika": [], "Mubi North": [], "Mubi South": [], "Numan": [], "Shelleng": [], "Song": [], "Toungo": [], "Yola North": [], "Yola South": []},

    "AkwaIbom": {"Abak": [], "Eastern Obolo": [], "Eket": [], "Esit Eket": [], "Essien Udim": [], "Etim Ekpo": [], "Etinan": [], "Ibeno": [], "Ibesikpo Asutan": [], "Ibiono-Ibom": [], "Ika": [], "Ikono": [], "Ikot Abasi": [], "Ikot Ekpene": [], "Ini": [], "Itu": [], "Mbo": [], "Mkpat-Enin": [], "Nsit-Atai": [], "Nsit-Ibom": [], "Nsit-Ubium": [], "Obot Akara": [], "Okobo": [], "Onna": [], "Oron": [], "Oruk Anam": [], "Udung-Uko": [], "Ukanafun": [], "Uruan": [], "Urue-Offong Oruko": [], "Uyo": []},

    "Anambra": {"Aguata": [], "Anambra East": [], "Anambra West": [], "Anaocha": [], "Awka North": [], "Awka South": [], "Ayamelum": [], "Dunukofia": [], "Ekwusigo": [], "Idemili North": [], "Idemili South": [], "Ihiala": [], "Njikoka": [], "Nnewi North": [], "Nnewi South": [], "Ogbaru": [], "Onitsha North": [], "Onitsha South": [], "Orumba North": [], "Orumba South": [], "Oyi": []},

   "Bauchi": {"Alkaleri": [], "Bauchi": [], "Bogoro": [], "Damban": [], "Darazo": [], "Dass": [], "Gamawa": [], "Ganjuwa": [], "Giade": [], "Itas-Gadau": [], "Jama are": [], "Katagum": [], "Kirfi": [], "Misau": [], "Ningi": [], "Shira": [], "Tafawa Balewa": [], " Toro": [], " Warji": [], " Zaki": []},

    "Bayelsa": {"Brass": [], "Ekeremor": [], "Kolokuma Opokuma": [], "Nembe": [], "Ogbia": [], "Sagbama": [], "Southern Ijaw": [], "Yenagoa": []},

    "Benue": {"Agatu": [], "Apa": [], "Ado": [], "Buruku": [], "Gboko": [], "Guma": [], "Gwer East": [], "Gwer West": [], "Katsina-Ala": [], "Konshisha": [], "Kwande": [], "Logo": [], "Makurdi": [], "Obi": [], "Ogbadibo": [], "Ohimini": [], "Oju": [], "Okpokwu": [], "Oturkpo": [], "Tarka": [], "Ukum": [], "Ushongo": [], "Vandeikya": []},

    "Borno": {"Abadam": [], "Askira-Uba": [], "Bama": [], "Bayo": [], "Biu": [], "Chibok": [], "Damboa": [], "Dikwa": [], "Gubio": [], "Guzamala": [], "Gwoza": [], "Hawul": [], "Jere": [], "Kaga": [], "Kala-Balge": [], "Konduga": [], "Kukawa": [], "Kwaya Kusar": [], "Mafa": [], "Magumeri": [], "Maiduguri": [], "Marte": [], "Mobbar": [], "Monguno": [], "Ngala": [], "Nganzai": [], "Shani": []},

    "CrossRiver": {"Abi": [], "Akamkpa": [], "Akpabuyo": [], "Bakassi": [], "Bekwarra": [], "Biase": [], "Boki": [], "Calabar Municipal": [], "Calabar South": [], "Etung": [], "Ikom": [], "Obanliku": [], "Obubra": [], "Obudu": [], "Odukpani": [], "Ogoja": [], "Yakuur": [], "Yala": []},
    
   "Delta": {"Aniocha North": [], "Aniocha South": [], "Bomadi": [], "Burutu": [], "Ethiope East": [], "Ethiope West": [], "Ika North East": [], "Ika South": [], "Isoko North": [], "Isoko South": [], "Ndokwa East": [], "Ndokwa West": [], "Okpe": [], "Oshimili North": [], "Oshimili South": [], "Patani": [], "Sapele": [], "Udu": [], "Ughelli North": [], "Ughelli South": [], "Ukwuani": [], "Uvwie": [], "Warri North": [], "Warri South": [], "Warri South West": []},
    
   "Ebonyi": {"Abakaliki": [], "Afikpo North": [], "Afikpo South": [], "Ebonyi": [], "Ezza North": [], "Ezza South": [], "Ikwo": [], "Ishielu": [], "Ivo": [], "Izzi": [], "Ohaozara": [], "Ohaukwu": [], "Onicha": []},

    "Edo": {"Akoko-Edo": [], "Egor": [], "Esan Central": [], "Esan North-East": [], "Esan South-East": [], "Esan West": [], "Etsako Central": [], "Etsako East": [], "Etsako West": [], "Igueben": [], "Ikpoba Okha": [], "Orhionmwon": [], "Oredo": [], "Ovia North-East": [], "Ovia South-West": [], "Owan East": [], "Owan West": [], "Uhunmwonde": []},

    "Ekiti": {"Ado Ekiti": [], "Efon": [], "Ekiti East": [], "Ekiti South-West": [], "Ekiti West": [], "Emure": [], "Gbonyin": [], "Ido Osi": [], "Ijero": [], "Ikere": [], "Ikole": [], "Ilejemeje": [], "Irepodun-Ifelodun": [], "Ise-Orun": [], "Moba": [], "Oye": []},

    "Enugu": {"Aninri": [], "Awgu": [], "Enugu East": [], "Enugu North": [], "Enugu South": [], "Ezeagu": [], "Igbo Etiti": [], "Igbo Eze North": [], "Igbo Eze South": [], "Isi Uzo": [], "Nkanu East": [], "Nkanu West": [], "Nsukka": [], "Oji River": [], "Udenu": [], "Udi": [], "Uzo Uwani": []},

   "FCT": {"Abaji": [], "Bwari": [], "Gwagwalada": [], "Kuje": [], "Kwali": [], "Municipal Area Council": []},

    "Gombe": {"Akko": [], "Balanga": [], "Billiri": [], "Dukku": [], "Funakaye": [], "Gombe": [], "Kaltungo": [], "Kwami": [], "Nafada": [], "Shongom": [], "Yamaltu-Deba": []},

    "Imo": {"Aboh Mbaise": [], "Ahiazu Mbaise": [], "Ehime Mbano": [], "Ezinihitte": [], "Ideato North": [], "Ideato South": [], "Ihitte-Uboma": [], "Ikeduru": [], "Isiala Mbano": [], "Isu": [], "Mbaitoli": [], "Ngor Okpala": [], "Njaba": [], "Nkwerre": [], "Nwangele": [], "Obowo": [], "Oguta": [], "Ohaji-Egbema": [], "Okigwe": [], "Orlu": [], "Orsu": [], "Oru East": [], "Oru West": [], "Owerri Municipal": [], "Owerri North": [], "Owerri West": [], "Unuimo": []},

    "Jigawa": {"Auyo": [], "Babura": [], "Biriniwa": [], "Birnin Kudu": [], "Buji": [], "Dutse": [], "Gagarawa": [], "Garki": [], "Gumel": [], "Guri": [], "Gwaram": [], "Gwiwa": [], "Hadejia": [], "Jahun": [], "Kafin Hausa": [], "Kazaure": [], "Kiri Kasama": [], "Kiyawa": [], "Kaugama": [], "Maigatari": [], "Malam Madori": [], "Miga": [], "Ringim": [], "Roni": [], "Sule Tankarkar": [], "Taura": [], "Yankwashi": []},

    "Kaduna": {"Birnin Gwari": [], "Chikun": [], "Giwa": [], "Igabi": [], "Ikara": [], "Jaba": [], "Jema a": [], "Kachia": [], "Kaduna North": [], "Kaduna South": [], "Kagarko": [], "Kajuru": [], "Kaura": [], "Kauru": [], "Kubau": [], "Kudan": [], "Lere": [], "Makarfi": [], "Sabon Gari": [], "Sanga": [], "Soba": [], "Zangon Kataf": [], "Zaria": []},

    "Kano": {"Ajingi": [], "Albasu": [], "Bagwai": [], "Bebeji": [], "Bichi": [], "Bunkure": [], "Dala": [], "Dambatta": [], "Dawakin Kudu": [], "Dawakin Tofa": [], "Doguwa": [], "Fagge": [], "Gabasawa": [], "Garko": [], "Garun Mallam": [], "Gaya": [], "Gezawa": [], "Gwale": [], "Gwarzo": [], "Kabo": [], "Kano Municipal": [], "Karaye": [], "Kibiya": [], "Kiru": [], "Kumbotso": [], "Kunchi": [], "Kura": [], "Madobi": [], "Makoda": [], "Minjibir": [], "Nasarawa": [], "Rano": [], "Rimin Gado": [], "Rogo": [], "Shanono": [], "Sumaila": [], "Takai": [], "Tarauni": [], "Tofa": [], "Tsanyawa": [], "Tudun Wada": [], "Ungogo": [], "Warawa": [], "Wudil": []},

    "Katsina": {"Bakori": [], "Batagarawa": [], "Batsari": [], "Baure": [], "Bindawa": [], "Charanchi": [], "Dandume": [], "Danja": [], "Dan Musa": [], "Daura": [], "Dutsi": [], "Dutsin Ma": [], "Faskari": [], "Funtua": [], "Ingawa": [], "Jibia": [], "Kafur": [], "Kaita": [], "Kankara": [], "Kankia": [], "Katsina": [], "Kurfi": [], "Kusada": [], "Mai Adua": [], "Malumfashi": [], "Mani": [], "Mashi": [], "Matazu": [], "Musawa": [], "Rimi": [], "Sabuwa": [], "Safana": [], "Sandamu": [], "Zango": []},

    "Kebbi": {"Aleiro": [], "Arewa Dandi": [], "Argungu": [], "Augie": [], "Bagudo": [], "Birnin Kebbi": [], "Bunza": [], "Dandi": [], "Fakai": [], "Gwandu": [], "Jega": [], "Kalgo": [], "Koko Besse": [], "Maiyama": [], "Ngaski": [], "Sakaba": [], "Shanga": [], "Suru": [], "Wasagu Danko": [], "Yauri": [], "Zuru": []},
    
   "Kogi": {"Adavi": [], "Ajaokuta": [], "Ankpa": [], "Bassa": [], "Dekina": [], "Ibaji": [], "Idah": [], "Igalamela Odolu": [], "Ijumu": [], "Kabba Bunu": [], "Kogi": [], "Lokoja": [], "Mopa Muro": [], "Ofu": [], "Ogori Magongo": [], "Okehi": [], "Okene": [], "Olamaboro": [], "Omala": [], "Yagba East": [], "Yagba West": []},

    "Kwara": {"Asa": [], "Baruten": [], "Edu": [], "Ekiti": [], "Ifelodun": [], "Ilorin East": [], "Ilorin South": [], "Ilorin West": [], "Irepodun": [], "Isin": [], "Kaiama": [], "Moro": [], "Offa": [], "Oke Ero": [], "Oyun": [], "Pategi": []},

    "Lagos": {"Agege": [], "Ajeromi-Ifelodun": [], "Alimosho": [], "Amuwo-Odofin": [], "Apapa": [], "Badagry": [], "Epe": [], "Eti Osa": [], "Ibeju-Lekki": [], "Ifako-Ijaiye": [], "Ikeja": [], "Ikorodu": [], "Kosofe": [], "Lagos Island": [], "Lagos Mainland": [], "Mushin": [], "Ojo": [], "Oshodi-Isolo": [], "Shomolu": [], "Surulere": []},
    
    "Nassarawa": {"Akwanga": [], "Awe": [], "Doma": [], "Karu": [], "Keana": [], "Keffi": [], "Kokona": [], "Lafia": [], "Nasarawa": [], "Nasarawa Egon": [], "Obi": [], "Toto": [], "Wamba": []},

    "Niger": {"Agaie": [], "Agwara": [], "Bida": [], "Borgu": [], "Bosso": [], "Chanchaga": [], "Edati": [], "Gbako": [], "Gurara": [], "Katcha": [], "Kontagora": [], "Lapai": [], "Lavun": [], "Magama": [], "Mariga": [], "Mashegu": [], "Mokwa": [], "Moya": [], "Paikoro": [], "Rafi": [], "Rijau": [], "Shiroro": [], "Suleja": [], "Tafa": [], "Wushishi": []},
  
    "Ogun": {"Abeokuta North": [], "Abeokuta South": [], "Ado-Odo Ota": [], "Egbado North": [], "Egbado South": [], "Ewekoro": [], "Ifo": [], "Ijebu East": [], "Ijebu North": [], "Ijebu North East": [], "Ijebu Ode": [], "Ikenne": [], "Imeko Afon": [], "Ipokia": [], "Obafemi Owode": [], "Odeda": [], "Odogbolu": [], "Ogun Waterside": [], "Remo North": [], "Shagamu": []},
  
    "Ondo": {"Akoko North-East": [], "Akoko North-West": [], "Akoko South-West": [], "Akoko South-East": [], "Akure North": [], "Akure South": [], "Ese Odo": [], "Idanre": [], "Ifedore": [], "Ilaje": [], "Ile Oluji-Okeigbo": [], "Irele": [], "Odigbo": [], "Okitipupa": [], "Ondo East": [], "Ondo West": [], "Ose": [], "Owo": []},

    "Osun": {"Atakunmosa East": [], "Atakunmosa West": [], "Aiyedaade": [], "Aiyedire": [], "Boluwaduro": [], "Boripe": [], "Ede North": [], "Ede South": [], "Ife Central": [], "Ife East": [], "Ife North": [], "Ife South": [], "Egbedore": [], "Ejigbo": [], "Ifedayo": [], "Ifelodun": [], "Ila": [], "Ilesa East": [], "Ilesa West": [], "Irepodun": [], "Irewole": [], "Isokan": [], "Iwo": [], "Obokun": [], "Odo Otin": [], "Ola Oluwa": [], "Olorunda": [], "Oriade": [], "Orolu": [], "Osogbo": []},

    "Oyo": {"Afijio": [], "Akinyele": [], "Atiba": [], "Atisbo": [], "Egbeda": [], "Ibadan North": [], "Ibadan North-East": [], "Ibadan North-West": [], "Ibadan South-East": [], "Ibadan South-West": [], "Ibarapa Central": [], "Ibarapa East": [], "Ibarapa North": [], "Ido": [], "Irepo": [], "Iseyin": [], "Itesiwaju": [], "Iwajowa": [], "Kajola": [], "Lagelu": [], "Ogbomosho North": [], "Ogbomosho South": [], "Ogo Oluwa": [], "Olorunsogo": [], "Oluyole": [], "Ona Ara": [], "Orelope": [], "Ori Ire": [], "Oyo": [], "Oyo East": [], "Saki East": [], "Saki West": [], "Surulere": []},
    
    "Plateau": {"Bokkos": [], "Barkin Ladi": [], "Bassa": [], "Jos East": [], "Jos North": [], "Jos South": [], "Kanam": [], "Kanke": [], "Langtang South": [], "Langtang North": [], "Mangu": [], "Mikang": [], "Pankshin": [], "Qua an Pan": [], "Riyom": [], "Shendam": [], "Wase": []},

    "Rivers": {"Abua Odual": [], "Ahoada East": [], "Ahoada West": [], "Akuku-Toru": [], "Andoni": [], "Asari-Toru": [], "Bonny": [], "Degema": [], "Eleme": [], "Emuoha": [], "Etche": [], "Gokana": [], "Ikwerre": [], "Khana": [], "Obio Akpor": [], "Ogba Egbema Ndoni": [], "Ogu Bolo": [], "Okrika": [], "Omuma": [], "Opobo Nkoro": [], "Oyigbo": [], "Port Harcourt": [], "Tai": []},

    "Sokoto": {"Binji": [], "Bodinga": [], "Dange Shuni": [], "Gada": [], "Goronyo": [], "Gudu": [], "Gwadabawa": [], "Illela": [], "Isa": [], "Kebbe": [], "Kware": [], "Rabah": [], "Sabon Birni": [], "Shagari": [], "Silame": [], "Sokoto North": [], "Sokoto South": [], "Tambuwal": [], "Tangaza": [], "Tureta": [], "Wamako": [], "Wurno": [], "Yabo": []},

    "Taraba": {"Ardo Kola": [], "Bali": [], "Donga": [], "Gashaka": [], "Gassol": [], "Ibi": [], "Jalingo": [], "Karim Lamido": [], "Kumi": [], "Lau": [], "Sardauna": [], "Takum": [], "Ussa": [], "Wukari": [], "Yorro": [], "Zing": []},
    
    "Yobe": {"Bade": [], "Bursari": [], "Damaturu": [], "Fika": [], "Fune": [], "Geidam": [], "Gujba": [], "Gulani": [], "Jakusko": [], "Karasuwa": [], "Machina": [], "Nangere": [], "Nguru": [], "Potiskum": [], "Tarmuwa": [], "Yunusari": [], "Yusufari": []},

    "Zamfara": {"Anka": [], "Bakura": [], "Birnin Magaji Kiyaw": [], "Bukkuyum": [], "Bungudu": [], "Gummi": [], "Gusau": [], "Kaura Namoda": [], "Maradun": [], "Maru": [], "Shinkafi": [], "Talata Mafara": [], "Chafe": [], "Zurmi": []} 
    }
  window.onload = function() {
    var stateSel = document.getElementById("state_");
    var lgaSel = document.getElementById("lga");

    for (var x in stateObject) {
      stateSel.options[stateSel.options.length] = new Option(x, x);
  }
    stateSel.onchange = function() {
      //empty lga dropdowns
      lgaSel.length = 1;
      //display correct values
      for (var y in stateObject[this.value]) {
        lgaSel.options[lgaSel.options.length] = new Option(y, y);
      }
    }
  }
</script>

)
}
