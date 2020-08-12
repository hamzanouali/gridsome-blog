function closeMenuAndGoTo(query) {
  document.querySelector('#hero-menu').classList.remove('ft-menu--js-show')
  setTimeout(() => {
    const element = document.querySelector(query)
    window.scrollTo({
      top: Math.abs(window.scrollY - Math.abs(element.getBoundingClientRect().top)) - document.querySelector('.offer-alert').clientHeight,
      behavior: 'smooth'
    })
  }, 250);
}

document.querySelectorAll('#hero-menu [href*="#"], #footer [href*="#"]').
  forEach(function (link) {
    link.onclick = function (event) {
      event.preventDefault()
      closeMenuAndGoTo(link.getAttribute('href'))
    }
  })

/* PREVIEW =========================================== */
function setMobileView() {
  document.querySelector('.responsive-preview').style.padding = '2rem 0'
  document.querySelector('.responsive-preview__iframe-container').style.width = '360px'
}

function setLaptopView() {
  document.querySelector('.responsive-preview').style.padding = '0'
  document.querySelector('.responsive-preview__iframe-container').style.width = '100%'
}

function getIframeDocument() {
  return document.querySelector('#previewIframe').contentDocument
}

function getHTMLFromBody() {
  return document.querySelector('.component__wrapper').innerHTML
}

function downloadComponent(e) {
  e.preventDefault()

  e.target.href = 'data:text/html;charset=UTF-8,' + encodeURIComponent(getIframeDocument().documentElement.outerHTML)

  setTimeout(function () {
    document.querySelector('[download]').click()
  }, 3000)
}

function openPreview(src) {
  if (!src) {
    window.showPopup()
    return false
  }

  document.querySelector('#previewIframe').setAttribute('src', src)

  document.querySelector('.responsive-preview').classList.add('responsive-preview--show')
  document.body.style.overflow = 'hidden'
}

function closePreview() {
  document.querySelector('.responsive-preview').classList.remove('responsive-preview--show')
  document.body.style.overflow = ''
}

/* ******************* FIRESTORE ******************** */

// Initialize Cloud Firestore through Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDqD7Lv-XVcVFVGro7J1r7AjSN_cw7eUWM",
  authDomain: "hamza-nouali.firebaseapp.com",
  databaseURL: "https://hamza-nouali.firebaseio.com",
  projectId: "hamza-nouali",
  storageBucket: "hamza-nouali.appspot.com",
  messagingSenderId: "442499154863",
  appId: "1:442499154863:web:e388dfd04425f6f8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

function sTE(e) {
  e.preventDefault()

  const btn = e.target.querySelector('button')

  if (!btn.classList.contains('button--loading')) {
    const inputValue = e.target.querySelector('input').value
    if (!inputValue || !inputValue.length || inputValue.search('@') === -1) {
      alert('Hey, please enter a valid email to that input before you submit!')
      return
    }

    btn.classList.toggle('button--loading')

    db.collection("emailList").add({
      email: inputValue
    })
      .then(function (docRef) {
        alert('Thank you! we\'ll send you HTML blocks, Templates, UI designs and so much more to your inbox!')
        btn.classList.toggle('button--loading')
      })
      .catch(function (error) {
        alert('Opps! something went wrong, please try again!')
        btn.classList.toggle('button--loading')
        console.error("Error adding document: ", error);
      })
  }
}