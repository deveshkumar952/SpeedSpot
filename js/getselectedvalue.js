function getSelectedValue(city) {
    // Redirect to the corresponding plans page
    window.location.href = `plans/${city.toLowerCase()}.html`;
  }