
let currentWorkout = []
let currentExercise = 0
let log = []

function startWorkout(id){

currentWorkout = workouts[id]
currentExercise = 0
log = []

document.getElementById("workoutCard").classList.remove("hidden")
document.getElementById("feedbackCard").classList.add("hidden")
document.getElementById("summaryCard").classList.add("hidden")

renderExercise()

}

function renderExercise(){

const ex = currentWorkout[currentExercise]

document.getElementById("exerciseTitle").innerHTML =
ex.name + "<br><small>Substituições: " + ex.subs.join(", ") + "</small>"

let html = ""

for(let i=0;i<ex.sets;i++){

html += `
Set ${i+1}
Carga <input id="w${i}" value="${ex.weight}">
Reps <input id="r${i}" value="${ex.reps}">
<br><br>
`

}

document.getElementById("sets").innerHTML = html

}

function nextExercise(){

saveExercise()

if(currentExercise < currentWorkout.length-1){
currentExercise++
renderExercise()
}

}

function prevExercise(){

if(currentExercise > 0){
currentExercise--
renderExercise()
}

}

function saveExercise(){

const ex = currentWorkout[currentExercise]

let sets = []

for(let i=0;i<ex.sets;i++){

sets.push({
weight:document.getElementById("w"+i).value,
reps:document.getElementById("r"+i).value
})

}

log.push({
exercise:ex.name,
sets:sets
})

}

function startRest(sec){

let timer = sec
const el = document.getElementById("restTimer")

const interval = setInterval(()=>{

timer--
el.innerText = timer+"s"

if(timer<=0){
clearInterval(interval)
el.innerText=""
}

},1000)

}

function finishWorkout(){

saveExercise()

document.getElementById("feedbackCard").classList.remove("hidden")

}

function generateSummary(){

const fb = document.getElementById("feedback").value

let text = "GX TRAINING RESUMO\n\n"

log.forEach(e=>{

text += e.exercise+"\n"

e.sets.forEach(s=>{

text += s.weight+"kg "+s.reps+" reps\n"

})

text += "\n"

})

text += "Feedback:\n"+fb

document.getElementById("summary").innerText = text
document.getElementById("summaryCard").classList.remove("hidden")

}
