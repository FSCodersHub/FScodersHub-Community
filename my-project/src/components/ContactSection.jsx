const   ContactSection=()=>{
    return(
        <>
         <div className="container flex bg-red-50">
            <div className="w-4/12">
                <h3>Contactez-nous</h3>
            </div>
            <div className="flex flex-col">
               
                <div className="row">
                  <label htmlFor=""></label>
                  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="row">
                  <label htmlFor=""></label>
                     <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                 <textarea name="" id="">

                 </textarea>
               <button>Envoyer</button>
            </div>
           
         </div>
        </>
    );
}
export default ContactSection;