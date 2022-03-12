console.log('script start');

let contacts = [
  {
    "name": "Christian",
    "email": "rowdyC@yahoo.com",
    "phone": "3235551234"
  },
  {
    "name": "Emily",
    "email": "lovemycats@gmail.com",
    "phone": "2094446789"
  },
  {
    "name": "Brad",
    "email": "loosegoose@netscape.com",
    "phone": "9846382067"
  },
  {
    "name": "Danny",
    "email": "monsterjam@yandex.com",
    "phone": "4030583932"
  },
  {
    "name": "Jen",
    "email": "fishy8@mozzila.com",
    "phone": "5967390593"
  },
  {
    "name": "Abdul",
    "email": "duel22@theranos.com",
    "phone": "2739502785"
  },
  {
    "name": "Malcom",
    "email": "everest@aol.com",
    "phone": "5967390593"
  },
  {
    "name": "Bonnie",
    "email": "purpleturbo@neopets.com",
    "phone": "857357390"
  }
]

function populate() {

  let nameNodes = document.querySelectorAll('.contact_item')
  let contactNodes = document.querySelectorAll('.info')

  for (let i = 0; i < contacts.length; i++) {
    nameNodes[i].insertAdjacentHTML("afterbegin", contacts[i].name)
    contactNodes[i].insertAdjacentHTML("afterbegin", contacts[i].email)
  }
}

populate()

let contactToggle = true

function changeInfo(value) {

  let nodeList = document.querySelectorAll('.info')

  if (value === "email") {
    for (let i = 0; i < contacts.length; i++) {
      nodeList[i].innerHTML = contacts[i].email
    }
  } else {
    for (let i = 0; i < contacts.length; i++) {
      nodeList[i].innerHTML = contacts[i].phone
    }
  }
}
