const ramos = [
  {
    nombre: "Introducción a la Ciencia de la Enfermería",
    eje: "disciplinar",
    requisitos: []
  },
  {
    nombre: "Química",
    eje: "basicas",
    requisitos: []
  },
  {
    nombre: "Morfo Función",
    eje: "basicas",
    requisitos: []
  },
  {
    nombre: "Biología",
    eje: "basicas",
    requisitos: []
  },
  {
    nombre: "Seguridad del Cuidado y Primeros Auxilios",
    eje: "disciplinar",
    requisitos: []
  },
  {
    nombre: "CFG",
    eje: "general",
    requisitos: []
  }
  // Puedes seguir agregando ramos con sus requisitos
];

const mallaDiv = document.getElementById("malla");

ramos.forEach((ramo, index) => {
  const div = document.createElement("div");
  div.className = `ramo ${ramo.eje}`;
  div.textContent = ramo.nombre;
  div.dataset.index = index;
  div.onclick = () => toggleAprobado(div, ramo);
  mallaDiv.appendChild(div);
});

function toggleAprobado(div, ramo) {
  if (ramo.requisitos.length > 0) {
    const noCumple = ramo.requisitos.some(nombreReq => {
      const req = ramos.find(r => r.nombre === nombreReq);
      return !req.aprobado;
    });
    if (noCumple) {
      alert("Debes aprobar los ramos requeridos primero.");
      return;
    }
  }

  ramo.aprobado = !ramo.aprobado;
  div.classList.toggle("aprobado");
}
