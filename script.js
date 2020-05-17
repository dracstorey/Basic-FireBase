//  constants linked to the index.html page

const signup = document.getElementById('signup')
const login = document.getElementById('login')
const signupForm = document.getElementById('sign-up-form')



// Shows the sign up modal
function showsignup()
{
  signup.style.display = "block";
  signupForm.reset()
  login.style.display="none";
};

// Shows the login modal
function showlogin()
{
  signup.style.display = "none";
  login.style.display="block";
};