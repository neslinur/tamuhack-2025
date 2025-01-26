import "../css/OfferHelp.css"
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import HelpCard from "../components/HelpCard";


function OfferHelp() {
    const help = [
        {id: 1, title: "Provide Housing", url:"https://static.vecteezy.com/system/resources/thumbnails/000/425/085/small_2x/Multimedia__2814_29.jpg"},
        {id: 2, title: "Provide Resources", url:"https://static.vecteezy.com/system/resources/previews/002/582/954/non_2x/donation-charity-volunteer-help-social-handshake-assistance-line-style-icon-free-vector.jpg"},
    ]
    return (
    <div className="offerHelp">
    <h1>Offer Help</h1>
    <p>Help those in need by providing resources or a place to stay!</p>
    <p>Sign up now!</p>
            <div className="help-grid">
               {help.map(help => (
                <HelpCard help={help} key={help.id}/>
                ))} 
            </div>
         </div>
         );
}

export default OfferHelp