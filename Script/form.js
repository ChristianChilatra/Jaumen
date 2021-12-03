const $form = document.querySelector('#form')
const $buttomMenu = document.querySelector('#menu')
const $sideBar = document.querySelector('#sideBar')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      'Accept': 'application/json'
    }
  })
  if (response.ok) {
    $form.reset()
    alert('Gracias por contactarme, pronto respondere')
  }
}

$buttomMenu.addEventListener("click", showMenu)
$sideBar.addEventListener("click", showMenu)

let isVisibility = false

function showMenu(){
  if (isVisibility) {
    isVisibility = false
    console.log(isVisibility);
    $sideBar.style.top = "-50rem"
  }else{
    console.log(isVisibility);
    isVisibility = true
    $sideBar.style.top = "30rem"
  }
}