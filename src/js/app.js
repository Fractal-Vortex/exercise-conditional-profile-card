import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${!variables.name ? "Ryan" : variables.name}  ${
    !variables.lastName ? "Boylett" : variables.lastName
  }</h1>
          <h2>${!variables.role ? "Web Developer" : variables.role}</h2>
          <h3>${!variables.city ? "Miami" : variables.city},
          ${!variables.country ? " USA" : variables.country}</h3> <ul class="${
    variables.socialMediaPosition === "position-left"
      ? "position-left"
      : "position-right"
  }">
            <li><a href="https://x.com/${
              !variables.twitter ? "4geeksacademy" : variables.twitter
            }"><i class="fab fa-twitter"></i></a></li>            
            <li><a href="https://www.github.com/${
              !variables.github ? "4geeksacademy" : variables.github
            }"><i class="fab fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/${
              !variables.linkedin ? "4geeksacademy" : variables.linkedin
            }"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://www.instagram.com/${
              !variables.instagram ? "4geeksacademy" : variables.instagram
            }"><i class="fab fa-instagram"></i></a></li></ul></div>`;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background:
      "https://upload.wikimedia.org/wikipedia/commons/c/c1/Escena_del_infierno._%C3%93leo,_s._XX._Autor%C3%ADa_desconocida._En_(E)mancipa-Ment_(Cullera,_Valencia).jpg",
    // this is the url for the profile avatar
    avatarURL:
      "https://imgs.search.brave.com/KPKIOA_iTXcGhR_NbwqqQqJqp4SVn5urOke31JhZa18/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmRp/c2NvZ3MuY29tL0tX/Ny1TTWRKa25KQ3Fw/Qldib1BPY254Nk5U/dGVuYkZDcHNESUNI/TllaTWsvcnM6Zml0/L2c6c20vcTo0MC9o/OjMwMC93OjMwMC9j/ek02THk5a2FYTmpi/MmR6L0xXUmhkR0Zp/WVhObExXbHQvWVdk/bGN5OUJMVFF6TXpV/dy9MVEV6TkRRNE16/ZzBPREV0L016YzJP/QzVxY0dWbi5qcGVn",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
