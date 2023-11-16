import React from "react";
import image1 from '../../../assets/img1.jpg'
import image2 from '../../../assets/img2.jpg'


const Home = () => {
  return (
    <>
     
     <main class="relative bg-blue-900 h-screen flex flex-col items-center">

<div class="container mx-auto flex flex-col md:flex-row items-center justify-between p-8">
    
    <div class="text-white max-w-md mb-8 md:mb-0 md:mr-8">
        <h1 class="text-4xl font-bold mb-4 text-yellow-300">Explore The Travel</h1>
        <p class="text-lg">Find awsome hotel, tour and car.</p>
    </div>

    <div class="flex-shrink-0 mb-8 md:mb-0">
        <img src={image1} alt="Image 1" class="w-56 h-56 object-cover mr-4"/>
        <img src={image2} alt="Image 2" class="w-56 h-56 object-cover"/>
    </div>
    
</div>

<div class="absolute bottom-28 left-1/2 transform -translate-x-1/2 mb-8 md:mb-0">
    <div class="bg-white p-5 rounded-lg">
        <form className="flex items-center">
           
                <input type="text" id="Destination" placeholder="Destination" class="border p-2 "/>
                <input type="text" id="Type" placeholder="Type" class="border p-2 "/>
                <input type="date" id="Date" placeholder="Date" class="border p-2 "/>
                <input type="text" id="Guests" placeholder="Guests" class="border p-2 "/>
            <button type="button" class="bg-yellow-300 p-2 rounded-md ml-3">Search</button>
        </form>
    </div>
</div>

</main>





      
    </>
  );
};

export default Home;
