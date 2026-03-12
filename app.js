
const workouts = {

peito:[
{name:"Supino reto",sets:5,reps:6,weight:20},
{name:"Supino inclinado halteres",sets:4,reps:10,weight:18},
{name:"Crossover cabo",sets:3,reps:12,weight:10}
],

pernas:[
{name:"Agachamento livre",sets:5,reps:5,weight:30},
{name:"Hip thrust",sets:4,reps:10,weight:30},
{name:"Leg press",sets:3,reps:10,weight:85}
],

costas:[
{name:"Puxada frente",sets:4,reps:10,weight:50},
{name:"Remada máquina",sets:4,reps:10,weight:50},
{name:"Face pull",sets:3,reps:15,weight:15}
],

ombro:[
{name:"Desenvolvimento halteres",sets:4,reps:10,weight:14},
{name:"Elevação lateral",sets:3,reps:15,weight:7},
{name:"Crucifixo inverso",sets:3,reps:15,weight:8}
]

}

function loadWorkout(type){

const list = document.getElementById("exerciseList")
const title = document.getElementById("workoutTitle")

title.innerText = "Treino: " + type

list.innerHTML = ""

workouts[type].forEach((ex)=>{

list.innerHTML += `
<div class="exercise">
<b>${ex.name}</b><br>
Séries: ${ex.sets}<br>
Reps alvo: ${ex.reps}<br>
Carga: ${ex.weight}kg
</div>
`

})

document.getElementById("workoutCard").classList.remove("hidden")
document.getElementById("feedbackCard").classList.remove("hidden")

}

function analyzeFeedback(){

const text = document.getElementById("feedback").value.toLowerCase()

let response = ""

if(text.includes("facil"))
response = "Treino parece leve. Considere aumentar carga progressivamente."

else if(text.includes("dificil") || text.includes("difícil"))
response = "Treino exigente. Talvez manter carga ou aumentar descanso."

else if(text.includes("otimo") || text.includes("bom"))
response = "Treino consistente. Manter progressão atual."

else
response = "Feedback registrado. Continuar monitorando evolução."

document.getElementById("coach").innerText = "GX Coach: " + response

}
