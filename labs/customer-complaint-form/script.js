const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const orderNo = document.getElementById('order-no');
const productCode = document.getElementById('product-code');
const quantity = document.getElementById('quantity');
const checkboxes = document.querySelectorAll('#complaints-group input[type="checkbox"]');
const otherCheckbox = document.getElementById('other-complaint');
const complaintDescription = document.getElementById('complaint-description');
const solutionDescription = document.getElementById('solution-description');
const radioInputs = document.querySelectorAll('#solutions-group input[type="radio"]');
const otherRadio = document.getElementById('other-solution');
const complaintsGroup = document.getElementById('complaints-group');
const solutionsGroup = document.getElementById('solutions-group');
const submitBtn = document.getElementById('submit-btn');
const form = document.getElementById('form');
const messageBox = document.getElementById('message-box');

function validateForm() {
  return {
    'full-name': fullName.value !== '',
    'email': /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value),
    'order-no': /^2024\d{6}$/.test(orderNo.value),
    'product-code': /^[a-z]{2}\d{2}-[a-z]\d{3}-[a-z]{2}\d$/i.test(productCode.value),
    'quantity': !/\D/.test(quantity.value) && quantity.value > 0,
    'complaints-group': [...checkboxes].some(box => box.checked),
    'complaint-description': !otherCheckbox.checked || complaintDescription.value.length >= 20,
    'solutions-group': [...radioInputs].some(radio => radio.checked),
    'solution-description': !otherRadio.checked || solutionDescription.value.length >= 20

  }
}

function isValid(obj) {
  return Object.values(obj).every(value => value === true);
}

fullName.addEventListener('change', () => {
  const result = validateForm();

  if (result['full-name']) {
    fullName.style.borderColor = "green";
  }
  else {
    fullName.style.borderColor = "red";
  }
})

email.addEventListener('change', () => {
  const result = validateForm();

  if (result['email']) {
    email.style.borderColor = "green";
  }
  else {
    email.style.borderColor = "red";
  }
})

orderNo.addEventListener('change', () => {
  const result = validateForm();

  if (result['order-no']) {
    orderNo.style.borderColor = "green";
  }
  else {
    orderNo.style.borderColor = "red";
  }
})

productCode.addEventListener('change', () => {
  const result = validateForm();

  if (result['product-code']) {
    productCode.style.borderColor = "green";
  }
  else {
    productCode.style.borderColor = "red";
  }
})

quantity.addEventListener('change', () => {
  const result = validateForm();

  if (result['quantity']) {
    quantity.style.borderColor = "green";
  }
  else {
    quantity.style.borderColor = "red";
  }
})

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const result = validateForm();

    if (result['complaints-group']) {
      complaintsGroup.style.borderColor = "green";    
    }
    else {
      complaintsGroup.style.borderColor = "red";
    }
  })
})

radioInputs.forEach(radioInput => {
  radioInput.addEventListener('change', () => {
    const result = validateForm();

    if (result['solutions-group']) {
      solutionsGroup.style.borderColor = "green";    
    }
    else {
      solutionsGroup.style.borderColor = "red";
    }    
  })
})

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const fieldMap = {
    'full-name': fullName,
    'email': email,
    'order-no': orderNo,
    'product-code': productCode,
    'quantity': quantity,
    'complaints-group': complaintsGroup,
    'complaint-description': complaintDescription,
    'solutions-group': solutionsGroup,
    'solution-description': solutionDescription
  }

  const result = validateForm();
  if (isValid(result)) {
    messageBox.innerText = `Complaint Submitted`;    
  }
  else {
    Object.entries(result).forEach(([key, value]) => {
      if (value === false) {
        fieldMap[key].style.borderColor = 'red';      
      }
    })
  }

})

complaintDescription.addEventListener('change', () => {
  const result = validateForm();
  complaintDescription.style.borderColor = result['complaint-description'] ? 'green' : 'red';
})

solutionDescription.addEventListener('change', () => {
  const result = validateForm();
  solutionDescription.style.borderColor = result['solution-description'] ? 'green' : 'red';
})
