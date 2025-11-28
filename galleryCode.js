const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('lightbox-close');
const prevBtn = document.getElementById('lightbox-prev');
const nextBtn = document.getElementById('lightbox-next');

const galleryImages = document.querySelectorAll('.gallery-item img');

let currentIndex = 0;

function openLightbox(index) {
    lightbox.style.display = 'flex'; 
    lightboxImg.src = galleryImages[index].src;
    currentIndex = index;
    document.body.style.overflow = 'hidden'; 
}

function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; 
}

function showNextImage() {
    currentIndex++;
    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }
    lightboxImg.src = galleryImages[currentIndex].src;
}

function showPrevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
    }
    lightboxImg.src = galleryImages[currentIndex].src;
}

galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        openLightbox(index);
    });
});

closeBtn.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

nextBtn.addEventListener('click', showNextImage);
prevBtn.addEventListener('click', showPrevImage);

document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
        if (e.key === 'ArrowRight') {
            showNextImage();
        } else if (e.key === 'ArrowLeft') {
            showPrevImage();
        } else if (e.key === 'Escape') {
            closeLightbox();
        }
    }
});

const viewBtn = document.querySelector('.view-btn');
const mainGallerySection = document.getElementById('main-gallery');

if (viewBtn && mainGallerySection) {
  viewBtn.addEventListener('click', () => {
    mainGallerySection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  });
}
