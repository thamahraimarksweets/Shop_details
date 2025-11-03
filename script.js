const form = document.getElementById('cakeForm');
const message = document.getElementById('message');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const cake = document.getElementById('cake').value;
    const weight = document.getElementById('weight').value;
    const toppings = [...document.querySelectorAll('.toppings input[type="checkbox"]:checked')].map(cb => cb.value);
    const quantity = document.getElementById('quantity').value;
    const date = document.getElementById('date').value;
    const address = document.getElementById('address').value.trim();
    const payment = document.querySelector('input[name="payment"]:checked')?.value;

    if(!name || !email || !phone || !cake || !weight || toppings.length === 0 || !quantity || !date || !address || !payment) {
        message.style.color = 'red';
        message.textContent = "❌ Please fill all fields correctly!";
        return;
    }

    const phonePattern = /^[0-9]{10}$/;
    if(!phonePattern.test(phone)) {
        message.style.color = 'red';
        message.textContent = "❌ Enter a valid 10-digit phone number!";
        return;
    }

    message.style.color = 'green';
    message.innerHTML = `✅ Thank you ${name}! Your order for ${quantity} ${cake} cake(s) (${weight} kg) with toppings: ${toppings.join(', ')} is confirmed for ${date}. Payment Mode: ${payment}.`;
    
    form.reset();
});
