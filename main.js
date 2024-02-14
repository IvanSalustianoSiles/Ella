import Swal from 'sweetalert2'
import './style.css'
Swal.fire ({
  title: "🧡💜",
  text: "¿Querés ser mi San Valentín(a)?",
  imageUrl: "https://i.imgur.com/ifBKuO5.jpeg",
  confirmButtonText: "Sí!",
  confirmButtonColor: "red",
  showCancelButton: true,
  cancelButtonText: "No...",
  cancelButtonColor: "black",
  imageWidth: 300,
  color: "orange",
})
.then(respuesta => {
  if (respuesta.isConfirmed){
    Swal.fire ({
      title: "🧡💜🧡💜🧡💜🧡💜🧡💜🧡💜🧡💜🧡💜🧡💜🧡💜🧡💜🧡💜🧡💜🧡💜🧡💜🧡💜!!!!",
      text: "Te amo muchísmo, perdón por hacerte esperar :)",
      confirmButtonText: "Y codearon felices y por siempre",
      confirmButtonColor: "orange",
    })
  } else {
    Swal.fire({
      title: "🧡💜",
      text: "¿Querés ser mi San Valentín(a)?",
      html: "<h6>(No me vas a rechazar, jeje)</h6>",
      imageUrl: "https://i.imgur.com/ifBKuO5.jpeg",
      confirmButtonText: "Sí!",
      confirmButtonColor: "red",
      imageWidth: 300,
      color: "orange",
    }).then(respuesta => {
      Swal.fire ({
        title: "🧡💜🧡💜🧡💜🧡💜🧡💜🧡💜🧡💜🧡💜🧡💜🧡💜🧡💜🧡💜🧡💜🧡💜🧡💜🧡💜!!!!",
        text: "Te amo muchísmo, perdón por hacerte esperar :)",
        confirmButtonText: "Y codearon felices y por siempre",
        confirmButtonColor: "orange",
      })
    })
  }
})