const form = document.querySelector('form')
let bmi;
//console.log(form);
//console.log( document.querySelector('#height.innerHTML'))
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height = (parseInt(document.querySelector('#height').value) /100)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('.result')

    if(height === '' || height <= 0 || isNaN(height)){
        result.innerHTML = "Please enter a valid Height"
    }else if (weight === '' || weight <= 0 || isNaN(weight)){
        result.innerHTML= "Please enter a valid Weight"
    }else {
        bmi  = (weight / (height * height)).toFixed(2)
        //result.innerHTML = `<span>Your BMI is ${bmi}</span>`;
    }

    if (bmi <18.5){result.innerHTML= `<span id = "head_of_report">Your BMI is ${bmi}</span>
                       <span id = "subhead_of_report" class ="underweight">UnderWeight</span>
                       <p id = "p_of_report">Your BMI indicates that you are underweight.
                        This may mean your body is not getting enough nutrients or energy for optimal health. 
                        It is important to focus on balanced meals and consult a healthcare professional for personalized guidance.</p>`}
    if (bmi >18.5 && bmi <24.9 ){result.innerHTML= `<span id = "head_of_report">Your BMI is ${bmi}</span>
                       <span id = "subhead_of_report" class = "normal">Normal Weight</span>
                       <p id = "p_of_report">"Your BMI falls within the normal range.
                        This suggests that your weight is appropriate for your height and
                         generally associated with lower health risks. Keep maintaining a balanced diet and 
                         regular physical activity to stay healthy."</p>`}
    if (bmi > 24.9 && bmi <29.9){result.innerHTML= `<span id = "head_of_report">Your BMI is ${bmi}</span>
                       <span id = "subhead_of_report">Over Weight</span>
                       <p id = "p_of_report" class = "overweight">"Your BMI indicates that you are overweight.
                        This may increase the risk of certain health conditions over time.
                        Adopting healthier eating habits and regular exercise can help you
                        move toward a healthier weight."</p>`}
    if (bmi > 30){result.innerHTML= `<span id = "head_of_report">Your BMI is ${bmi}</span>
                       <span id = "subhead_of_report" class = "obese">Obese</span>
                       <p id = "p_of_report">"Your BMI falls in the obese category. 
                       This is linked to higher risks of chronic health issues. Seeking medical advice
                       and making lifestyle changes can help improve your overall well-being."</p>`}
})