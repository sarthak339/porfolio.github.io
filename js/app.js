'use strict'

// refresh page

window.scrollTo({ top: 0, behavior: 'smooth' })

const contact = document.querySelector('.contact')
const conNavigation = document.querySelector('.nav-wrapper')
contact.addEventListener('click', (e) => {
  e.preventDefault()
  if (e.target.classList.contains('contact')) {
    console.log(e.target)
    const id = e.target.getAttribute('href')
    // console.log(id)
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
  }
})

const allSections = document.querySelectorAll('.section')
console.log(allSections)
allSections.forEach((sec) => sec.classList.add('section--hidden'))

const secObserver = new IntersectionObserver(
  function (entries, observer) {
    const [entry] = entries
    if (!entry.isIntersecting) return

    entry.target.classList.remove('section--hidden')
    observer.unobserve(entry.target)
    // console.log(entry)
  },
  {
    root: null,
    threshold: 0.15,
  },
)
allSections.forEach((sec) => secObserver.observe(sec))

// change theme

const themeContainer = document.querySelector('#theme-options-wrapper')

themeContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('theme-dot')) {
    const mode = e.target.dataset.mode
    document.querySelector('#theme-style').href = `./css/${mode}.css`
  }
})

// send email
document.querySelector('.contact-form').addEventListener('submit', submitForm)

function submitForm(e) {
  e.preventDefault()

  // get input values
  console.log(e)
  const fName = document.querySelector('#name')
  // console.log(fName)
  const email = document.querySelector('#email')
  console.log(email.value)
  // console.log(email)
  const message = document.querySelector('#message')
  // console.log(message)
  // saveContactInfo(n, email, message)

  sendEmail(fName, email, message)
  document.querySelector('.contact-form').reset()
}

//send email info
function sendEmail(fName, email, message) {
  Email.send({
    Host: 'smtp.mailtrap.io',
    Username: '981128451d0741',
    Password: '4afecfb87d8dd1',
    To: 'sarthakofficial920@gmail.com',
    From: email.value,
    Subject: `${fName.value} send you a message`,
    Body: `Name : ${fName.value} <br/> Email : ${email.value} <br/> Message : ${message.value}`,
  }).then((message) => alert('message sent successfully'))
}

// function sendEmail(fName, email, message) {
//   Email.send({
//     Host: 'smtp.gmail.com',
//     Username: 'sarthakofficial920@gmail.com',
//     Password: 'S@rth@k123',
//     To: 'sarthakofficial920@gmail.com',
//     From: email.value,
//     Subject: `${fName.value} send you a message`,
//     Body: `Name : ${fName.value} <br/> Email : ${email.value} <br/> Message : ${message.value}`,
//   }).then((message) => alert('message sent successfully' + message))
// }
// SmtpClient.UseDefaultCredentials = false

// project link

// const posts = document.querySelectorAll('.post').forEach((el, i) => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault()

//     const clicked = e.target.closest(`.post-${i}`)
//   })
// })
