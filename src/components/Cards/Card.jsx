import users from "../../containers/data";

const Card = ({ image, username, email, fullname, lastname, midname, phone, birthDate, address, city, state })=>{
    
    return (
    
        <>
            
            <div className="boxes">
               <div class="box">
                <div>
                    <img src={image} className="card-img-top" alt={`${username}'s image`} />
                    <h2> User name : {username}</h2>
                    <h3> Email : {email}</h3>
                </div>

                  <div class="content">
                <p>Full name : {fullname} {lastname} {midname}</p>
                <p>Date of Birth : {birthDate} </p>
                <p>Phone : {phone} </p>
                <p>Address : {address}{city}{state}</p>
   
                  </div>
               </div>
            
            </div>

        </>
    
        
    );

}


export default Card;