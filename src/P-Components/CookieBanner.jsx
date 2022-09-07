const session = require('express-session'); //Cookies and Sessions
const passport = require('passport');       //Cookies and Sessions  
const passportLocalMongoose = require('passport-local-mongoose'); //Cookies and Sessions  

//session cookies /Auktorisering
app.use(session({
    secret:"Our little secret.",
    resave: false,
    saveUninitialized: false,
    //cookie: { secure: true }
}));

// PASSPORT------------------------------------
//Autentisering
passport.use(User.createStrategy());

//serialize skapar  krypterad cookie med personens id, funkar för alla strategies
// skapar cookies with user ID
passport.serializeUser(function(user, done){
    done(null, user.id)
}); 
//deserialize tar sönder cookie så vi kan identifiera personen
// "opens" the cookie to identify user by ID
passport.deserializeUser(function (id, done) {
    User.findById(id, function(err, user){
        done(err, user);
    });
});

app.use(passport.initialize()); //starting passport encryption - passport startar kryptering
app.use(passport.session());    //passport starting session cookies - passport startar session cookies
  

const cookieContainer = document.getElementById("cookie-consent");  
const cookieAccept = document.getElementById("accept-btn");


cookieAccept.addEventListener("click", () => { 
    console.log('user accepted cookies');
    cookieContainer.classList.remove("active");
    sessionStorage.setItem("cookieBannerDisplayed", "true");
    document.getElementById("registerBtn").disabled = false; 
    document.getElementById("loginBtn").disabled = false; 
});
    
setTimeout(() => {
      if (!sessionStorage.getItem("cookieBannerDisplayed")) {
        cookieContainer.classList.add("active");
      }
    }, 2000);
     const cancelButton = document.getElementById("cancel-btn");
    cancelButton.addEventListener("click", () => {
      console.log("user rejected cookies");
    document.getElementById("signUp").disabled = true;
    document.getElementById("signIn").disabled = true;   
     });
    
document.cookie="cookieBannerDisplayed=True";
var accept = getCookie("cookieBannerDisplayed"); 
if (cookieBannerDisplayed =="True") {
    document.cookie = "cookieBannerDisplayed=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    window.location.reload();
}

export default function CookieBanner() {
  return (

    <div id="cookie-consent">
      <p class="fas fa-cookie fa-4x fa-pulse"></p>
      <p>By using this site you agree to our <a href="/terms" class="terms">Terms and conditions</a>.
        Please <button id="accept-btn">ACCEPT</button> 
        these before using our site.
        <button id="cancel-btn">Reject</button>
      </p>
        
    </div>
 
  );
};