function submitForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const gender = document.querySelectorAll('input[name="gender"]:checked');
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    if (firstName && lastName && dob && country && gender.length > 0 && profession && email && mobile) {
      let content = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${[...gender].map(g => g.value).join(", ")}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
      `;

      const popup = document.getElementById("popup");
      const popupContent = document.getElementById("popupContent");
      popup.style.display = "block";
      popupContent.innerHTML = content;
    } else {
      alert("Please fill in all required fields.");
    }
  }

  function resetForm() {
    document.getElementById("surveyForm").reset();
  }

  function closePopup() {
    document.getElementById("popup").style.display = "none";
    resetForm();
  }