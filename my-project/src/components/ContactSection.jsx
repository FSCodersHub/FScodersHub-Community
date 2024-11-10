const   ContactSection=()=>{
    return(
        <>
         <div className="w-full flex flex-col md:flex-row bg-gray-200/65 font-semibold ">
        
            <div className="w-full p-5 md:flex md:items-center md:justify-center">
                <h3 className="text-3xl font-semibold text-center">Contactez-nous</h3>
            </div>
            <div className="flex flex-col w-1/2 gap-4 p-5">
               
                <div className="row flex flex-col">
                  <label htmlFor="">Nom</label>
                  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="row flex flex-col">
                  <label htmlFor="">Email</label>
                     <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="row flex w-full">
                     <textarea  className="textarea" name="" id=""  rows={8}>
                        Laissez un message 
                     </textarea>
                </div>
               
               <button className="btn bg-emerald-700 text-white w-full">Envoyer</button>
            </div>
           
         </div>
        </>
    );
}
export default ContactSection;