// Data ucapan
const ucapanData = [
  "Selamat Ulang Tahun Rifantoro",
  "Semoga engkau selalu bahagia dengan tangan kirimu.",
  "Tetaplah CL dimanapun kau berada",
  "Pertahankan Ketampananmu."

];

// Data album foto
const albumFoto = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7NnbaHtwol2dJS9ivAGZ5CG4ftL2Slzj4V8xeP-zbNA&s",
  "gambar/toro1.jpg",
  "gambar/toro2.jpg"
  // Tambahkan URL foto lainnya sesuai kebutuhan
];
// ... (your existing code)

// Element yang akan menampilkan ucapan
const ucapanContainer = document.getElementById("ucapanContainer");
// Element yang akan menampilkan album
const albumContainer = document.getElementById("albumContainer");

// ... (your existing code)

// Fungsi untuk menampilkan ucapan
function tampilkanUcapan(ucapan, container, delay) {
  return new Promise((resolve) => {
    const spanElement = document.createElement('span');

    container.appendChild(spanElement);

    // Add styles to the appended <span> element
    spanElement.style.backgroundColor = '#f0f0f0';  // Background color
    spanElement.style.fontSize = '40px';  // Font size
    spanElement.style.color = '#333';  // Text color
    spanElement.style.fontFamily = 'Arial, sans-serif';  // Font family
    spanElement.style.display = 'inline-block';  // Make the span inline-block for better styling

    // Initialize the typing animation
    let index = 0;
    const interval = setInterval(() => {
      spanElement.innerHTML = ucapan.slice(0, index) + '<span style="opacity: 0;">' + ucapan.slice(index) + '</span>';
      index++;

      if (index > ucapan.length) {
        clearInterval(interval);
        setTimeout(() => {
          container.innerHTML = ''; // Clear text after delay
          resolve();
        }, delay);
      }
    }, delay);
  });
}

// Fungsi untuk menampilkan album
// Fungsi untuk menampilkan album
function tampilkanAlbum(fotoArray, container) {
  return new Promise((resolve) => {
    const albumInner = container;
    albumInner.innerHTML = ""; // Clear the album container before displaying new photos

    fotoArray.forEach((foto, index) => {
      const itemClass = index === 0 ? "carousel-item active" : "carousel-item";
      const fotoHtml = `<div class="${itemClass}"><img src="${foto}" class="d-block w-100" alt="Foto ${index + 1}"></div>`;
      albumInner.innerHTML += fotoHtml;
    });

    resolve();
  });
}
function tampilkanAlbum2(fotoArray, container) {
  return new Promise((resolve) => {
    const albumInner = container;
    albumInner.innerHTML = ""; // Clear the album container before displaying new photos

    fotoArray.forEach((foto, index) => {
      const itemClass = index === 0 ? "carousel-item active" : "carousel-item";
      const fotoHtml = `<div class="${itemClass}"><img src="${foto}" class="d-block w-100" alt="Foto ${index + 1}"></div>`;
      albumInner.innerHTML += fotoHtml;
    });

    resolve();
  });
}


// Fungsi untuk menjalankan slideshow
// ... (your existing code)

// Fungsi untuk menjalankan slideshow
async function jalankanSlideshow() {
  var position = 0;
  tampilkanAlbum(albumFoto, document.querySelector('#albumBackground .carousel-inner'));
  tampilkanAlbum2(albumFoto, document.querySelector('#albumBackground2 .carousel-inner'));
  while (true) {
    // Show text
    await tampilkanUcapan(ucapanData[position], ucapanContainer, 100);

    // Clear text
    ucapanContainer.innerHTML = '';

  
    // Increment position and handle looping
    position++;
    if (position >= ucapanData.length) {
      position = 0;
    }
  }
}


jalankanSlideshow();

