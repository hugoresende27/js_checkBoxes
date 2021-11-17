const toggles = document.querySelectorAll('.toggle')
const bomEL = document.querySelector('#bom')
const baratoEL = document.querySelector('#barato')
const rapidoEL = document.querySelector('#rapido')

toggles.forEach( tog => tog.addEventListener('change', (eve) => executa(eve.target)))

function executa (x) {
    if (bomEL.checked && baratoEL.checked && rapidoEL.checked) {
        if (bomEL === x) {
            rapidoEL.checked = false
        }
        if (baratoEL === x) {
            bomEL.checked = false
        }
        if (rapidoEL === x) {
            baratoEL.checked = false
        }
    }
}