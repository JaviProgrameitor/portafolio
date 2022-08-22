//ELEMENTOS DE PROYECTO 1
const proyecto = document.querySelectorAll(".proyecto"),
  fragmento = document.createDocumentFragment(),
  templateInformacion = document.querySelector(".template-informacion").content,
  enlaces = document.querySelectorAll(".enlace-proyectos"),
  imagenesProyecto = document.querySelectorAll(".img-proyecto img"),
  informacionProyecto = [
    {
      nombre: "Blog Personal.",
      texto: "No es responsive",
      tec1: "img/html-5.png",
      tec2: "img/css-3.png",
    },
  ];

informacionProyecto.forEach(el => {
  templateInformacion.querySelector(".nombre-proyecto").textContent = el.nombre;
  templateInformacion.querySelector(".texto-proyecto").textContent = el.texto;
  templateInformacion.querySelector(".tec-1").src = el.tec1;
  templateInformacion.querySelector(".tec-2").src = el.tec2;
  templateInformacion.querySelector(".tec-3").style.setProperty("display", "none");

  let clone1 = document.importNode(templateInformacion, true);
  fragmento.appendChild(clone1);
})

proyecto[0].appendChild(fragmento);

proyecto[0].addEventListener("mouseover", () => {
  proyecto[0].style.setProperty("cursor", "pointer");
  proyecto[0].children[2].style.setProperty("display", "inline");
  enlaces[0].style.setProperty("display", "inline");
  imagenesProyecto[0].style.setProperty("transform", "scale(1.3)");
});

//ELEMENTOS DE PROYECTO 2
const informacionProyecto2 = [
  {
    nombre: "Movies.",
    texto: "Es responsive.",
    tec1: "img/html-5.png",
    tec2: "img/css-3.png",
  },
];

informacionProyecto2.forEach(el => {
  templateInformacion.querySelector(".nombre-proyecto").textContent = el.nombre;
  templateInformacion.querySelector(".texto-proyecto").textContent = el.texto;
  templateInformacion.querySelector(".tec-1").src = el.tec1;
  templateInformacion.querySelector(".tec-2").src = el.tec2;
  templateInformacion.querySelector(".tec-3").style.setProperty("display", "none");

  let clone1 = document.importNode(templateInformacion, true);
  fragmento.appendChild(clone1);
})

proyecto[1].appendChild(fragmento);

proyecto[1].addEventListener("mouseover", () => {
  proyecto[1].style.setProperty("cursor", "pointer");
  proyecto[1].children[2].style.setProperty("display", "inline");
  enlaces[1].style.setProperty("display", "inline");
  imagenesProyecto[1].style.setProperty("transform", "scale(1.3)");
});

//ELEMENTOS DE PROYECTO 3
const informacionProyecto3 = [
  {
    nombre: "Calculadora.",
    texto: "Es responsive.",
    tec1: "img/html-5.png",
    tec2: "img/css-3.png",
    tec3: "img/js.png",
  },
];

informacionProyecto3.forEach(el => {
  templateInformacion.querySelector(".nombre-proyecto").textContent = el.nombre;
  templateInformacion.querySelector(".texto-proyecto").textContent = el.texto;
  templateInformacion.querySelector(".tec-1").src = el.tec1;
  templateInformacion.querySelector(".tec-2").src = el.tec2;
  templateInformacion.querySelector(".tec-3").style.setProperty("display", "inline-block");
  templateInformacion.querySelector(".tec-3").src = el.tec3;

  let clone1 = document.importNode(templateInformacion, true);
  fragmento.appendChild(clone1);
})

proyecto[2].appendChild(fragmento);

proyecto[2].addEventListener("mouseover", () => {
  proyecto[2].style.setProperty("cursor", "pointer");
  proyecto[2].children[2].style.setProperty("display", "inline");
  enlaces[2].style.setProperty("display", "inline");
  imagenesProyecto[2].style.setProperty("transform", "scale(1.3)");
});

//ELEMENTOS DE PROYECTO 4
const informacionProyecto4 = [
  {
    nombre: "Tabla Periódica.",
    texto: "Es responsive.",
    tec1: "img/html-5.png",
    tec2: "img/css-3.png",
    tec3: "img/js.png",
  },
];

informacionProyecto4.forEach(el => {
  templateInformacion.querySelector(".nombre-proyecto").textContent = el.nombre;
  templateInformacion.querySelector(".texto-proyecto").textContent = el.texto;
  templateInformacion.querySelector(".tec-1").src = el.tec1;
  templateInformacion.querySelector(".tec-2").src = el.tec2;
  templateInformacion.querySelector(".tec-3").style.setProperty("display", "inline-block");
  templateInformacion.querySelector(".tec-3").src = el.tec3;

  let clone1 = document.importNode(templateInformacion, true);
  fragmento.appendChild(clone1);
})

proyecto[3].appendChild(fragmento);

proyecto[3].addEventListener("mouseover", () => {
  proyecto[3].style.setProperty("cursor", "pointer");
  proyecto[3].children[2].style.setProperty("display", "inline");
  enlaces[3].style.setProperty("display", "inline");
  imagenesProyecto[3].style.setProperty("transform", "scale(1.3)");
});

//FUNCIONES GENERALES
for(let i=0; i<=(proyecto.length -1); i++) {
  proyecto[i].addEventListener("mouseleave", () => {
    proyecto[i].children[2].style.setProperty("display", "none");
    enlaces[i].style.setProperty("display", "none");
    imagenesProyecto[i].style.setProperty("transform", "scale(1)");
  })
}