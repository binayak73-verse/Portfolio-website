function addRecommendation() {
  let recommendation = document.getElementById("new_recommendation");

  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");

    // ✅ Show popup after adding recommendation
    showPopup(true);

    // Create new recommendation element
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    element.innerHTML =
      "<span>&#8220;</span>" +
      recommendation.value +
      "<span>&#8221;</span>";

    document.getElementById("all_recommendations").appendChild(element);
    recommendation.value = "";
  }
}

function showPopup(show) {
  const popup = document.getElementById("popup");
  popup.style.visibility = show ? "visible" : "hidden";
}