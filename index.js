var docTitle=document.title;
window.addEventListener("blur", function () {
    document.title="Come back :(";
})
window.addEventListener("focus", function(){
    document.title=docTitle;
})
const termscheckbox=document.getElementById("termscheckbox");
const signupsubmit=document.getElementById("signupsubmit");
const alert=document.getElementById("alerttc");

//Buttons in the Services Page
var brakepara="Brakes are one of the most important safety features of your vehicle, and it is essential to keep them in optimal condition to ensure your safety on the road. Our brake service includes a comprehensive inspection of the brake system to identify any issues that could affect the safety and performance of your brakes. Our experienced technicians use state-of-the-art equipment to diagnose the problem and recommend the necessary repairs or replacements. During the inspection, our technicians check the brake pads, rotors, and calipers for signs of wear and damage. They also inspect the brake fluid for contaminants and check the brake lines for leaks. If any issues are identified, we recommend the appropriate repairs or replacements. We use high-quality, genuine parts that meet or exceed OEM standards to ensure that your brakes are reliable and long-lasting. Our brake service typically includes the replacement of brake pads, resurfacing or replacement of rotors, and flushing the brake fluid. The cost of our brake service starts at $99, but the price can vary depending on the make and model of your vehicle and the extent of the repairs needed.Regular maintenance of your brakes is crucial to ensure their longevity and optimal performance. We recommend having your brakes inspected annually, or sooner if you notice any signs of brake wear or abnormal brake behavior, such as squeaking, grinding, or reduced braking power. Dont compromise on your safety, trust our experienced technicians to provide you with reliable and efficient brake services.";
var tyrepara="Your vehicle's tyres are one of its most critical components, providing traction, stability, and control on the road. At our car mechanic shop, we offer a full range of tyre services, including repair, replacement, and maintenance, to ensure your vehicle is safe and performs optimally.We use top-quality, branded tyres such as Bridgestone, Yokohama, and Michelin to ensure maximum performance and longevity. Our experienced technicians are trained to inspect your tyres for wear, damage, and proper inflation to identify any issues that may affect your vehicle's performance or safety. We use state-of-the-art equipment to balance and align your tyres to improve handling, reduce vibration, and increase fuel efficiency.If your tyres are damaged or worn, we can recommend suitable replacements based on your vehicle's make and model, driving habits, and budget. We offer a wide range of tyres, including all-season, summer, and winter tyres, for passenger cars, SUVs, trucks, and commercial vehicles. Our prices for tyre services typically start at $50 per tyre, but the cost can vary depending on the make and model of your vehicle and the type of tyre required.Regular tyre maintenance helps ensure optimal performance, safety, and longevity for your vehicle. We recommend checking your tyres' pressure and tread depth regularly and having them inspected and serviced every 10,000 miles or as recommended by your vehicle's manufacturer. Proper tyre maintenance helps reduce the risk of accidents, improve fuel efficiency, and prolong your tyre's life, saving you money in the long run. At our car mechanic shop, we are committed to providing you with the best possible tyre services, using high-quality, branded tyres and advanced equipment to ensure your vehicle is safe, reliable, and performs optimally on the road. Contact us today to schedule a tyre service or inspection for your vehicle.";
var oilpara="Regular oil changes are critical to maintain the health of your vehicle's engine. At our car mechanic shop, we offer a range of oil change services to keep your vehicle running smoothly. Our oil change services start with a comprehensive inspection of your engine to assess its condition and detect any issues that need addressing. Once we determine your engine's needs, we drain the old oil and replace the oil filter with a new one. We use high-quality, synthetic or conventional oil, depending on your vehicle's requirements and driving habits. Synthetic oil typically provides better engine protection, especially in extreme temperatures or high-performance driving conditions, while conventional oil is suitable for everyday driving.Regular oil changes help reduce engine wear and tear, improve fuel efficiency, and prevent costly engine damage. We recommend changing your oil every 5,000 to 7,500 miles, depending on your vehicles make and model and your driving habits. Our oil change service prices typically start at $50, but the cost can vary depending on the type of oil used and the make and model of your vehicle";
var enginepara="The engine is the most crucial component of your vehicle, and regular maintenance is essential to keep it running smoothly. Our engine service includes a thorough inspection of your engine, diagnosis of any issues, and the necessary repairs or replacements. Our experienced technicians use state-of-the-art equipment to diagnose any issues affecting your engine's performance, such as unusual noises, poor acceleration, or rough idling.Once we determine your engine's needs, we use high-quality, genuine parts to replace any damaged or worn parts. We can also perform engine tuning, such as adjusting the timing or fuel injection system, to optimize your engine's performance and fuel efficiency. Our engine service prices typically start at $200, but the cost can vary depending on the make and model of your vehicle and the extent of the repairs required.Regular engine maintenance helps improve engine performance, reduce emissions, and prolong your vehicles life. We recommend having your engine inspected and serviced every 30,000 miles or as recommended by your vehicles manufacturer.";
var timingpara="The timing belt is an essential component of your vehicle's engine that controls the timing of the valves and pistons. A worn or damaged timing belt can lead to engine failure, so it's crucial to have it inspected and replaced regularly. Our timing belt service includes a comprehensive inspection of your timing belt, diagnosis of any issues, and the necessary repairs or replacements. Our experienced technicians use advanced equipment to diagnose any issues affecting your timing belt's performance and replace it with a high-quality, genuine timing belt that meets or exceeds OEM standards. We also replace the timing belt tensioner and any other related components to ensure proper function and longevity.We recommend having your timing belt inspected and replaced every 60,000 to 100,000 miles or as recommended by your vehicle's manufacturer. Neglecting to replace a worn or damaged timing belt can result in severe engine damage, which can be costly to repair. Our prices for timing belt service typically start at $300, but the cost can vary depending on the make and model of your vehicle and the extent of the repairs required.Regular timing belt maintenance helps ensure your engine's longevity and reliability, improves engine performance, and prevents costly engine damage. At our car mechanic shop, we are committed to providing you with the best possible service and keeping your vehicle running smoothly for years to come.";
var brakebtn=document.getElementById("sbrake");
var oilbtn=document.getElementById("soil");
var enginebtn=document.getElementById("sengine");
var tyrebtn=document.getElementById("styre");
var timingbtn=document.getElementById("stiming");
var para=document.getElementById("sp");
var head=document.getElementById("stitle");

//Buttons in the Services Page
timingbtn.addEventListener("click",()=>{
    para.innerHTML=timingpara;
    head.innerHTML="Timing Belt"

});
oilbtn.addEventListener("click",()=>{
    para.innerHTML=oilpara;
    head.innerHTML="Oil Change"

});
tyrebtn.addEventListener("click", ()=>{
    para.innerHTML=tyrepara;
    head.innerHTML="Tyre Repair/Replacement"

});
brakebtn.addEventListener("click",()=>{
    para.innerHTML=brakepara;
    head.innerHTML="Brake Service"
});
enginebtn.addEventListener("click", ()=>{
    para.innerHTML=enginepara;
    head.innerHTML="Engine Service"
})

// Timing 
var date=new Date();
var hours=date.getHours();
var minutes=date.getMinutes();
var seconds=date.getSeconds();

const atime=document.getElementById("atime");
atime.innerHTML= date;

const loginform=document.getElementById("loginform");
const email=document.getElementById("inputEmail");
const password=document.getElementById("inputPassword");


loginform.addEventListener("submit", (event){
    if(email.value === "admin" && password.value ==="admin"){
        window.location.href="admin-dash.html";
    }
    else{
        window.location.href="error.html";
    }
})
