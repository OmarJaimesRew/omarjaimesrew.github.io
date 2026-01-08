 //obtener la galería de imágenes
   const getImages = container => [...container.querySelectorAll('img')];
   //Obtener array de la rutas de las imagenes 
   const getLargeImages = gallery => gallery
                                        .map ( el => el.src)
                                        .map(el=> el.replace('small','large'));
//obtener la descripción de las imagenes
const getDescriptions = gallery => gallery.map (el=> el.alt);
//captura el evento click en la galeria para abrir lightbox
const openLightboxEvent=(container,gallery,larges,descriptions) =>{
    container.addEventListener('click',e=>{
        let el =e.target,
        i= gallery.indexOf(el);
        if(el.tagName ==='IMG'){
            openLightbox(gallery,i,larges,descriptions);
        }
    })
};
//Imprimir Overlay del lightboxen el body
const openLightbox = (gallery,i,larges,descriptions) => {
    let lightboxElement = document.createElement('div');
        lightboxElement.innerHTML=`
        
        <div class="lightbox-overlay">
            <figure class="lightbox-container">
            <nav class="lightbox-nav">
            <a href="#" class="nav__button_prev">\u2B9C</a>
            <a href="#" class="nav__button_next">\u2B9E</a>                        
            </nav>
                <div class="close-modal">\u2716</div>
                <img src="${larges[i]}" class="lightbox__img">
                <figcaption>
                    <p class="lightbox-description">${descriptions[i]}</p>
                   
                </figcaption>
            </figure>

        </div>
        `;
        lightboxElement.id ='lightbox';
        document.body.appendChild(lightboxElement);
        closeModal(lightboxElement);
        navigateLightbox(lightboxElement,i,larges, descriptions);

};
 //cerrar modal
 const closeModal = modalElement=>{
     let closeModal = modalElement.querySelector('.close-modal');
     closeModal.addEventListener('click', e=>{
         e.preventDefault();
         document.body.removeChild(modalElement);
     })
 }
 //Navegar en el modal
 const navigateLightbox =(lightboxElement,i,larges,descriptions)=>{
     let prevButton = lightboxElement.querySelector('.nav__button_prev'),
         nextButton = lightboxElement.querySelector('.nav__button_next'),
         image =lightboxElement.querySelector('img'),
         description = lightboxElement.querySelector('p'),
         //counter = lightboxElement.querySelector('span'),
         closeButton = lightboxElement.querySelector('.close-modal');

    lightboxElement.addEventListener('click', e=>{
        e.preventDefault();
        let target = e.target;

        if(target=== prevButton){
            if(i>0){
                image.src = larges[i -1];
                i--
            } else{
                image.src = larges[larges.length -1];
                i=larges.length -1;
            }
        } else if (target===nextButton){
            if(i<larges.length-1){
                image.src = larges[i+1];
                i++
            }else{
                image.src =larges[0];
                i=0;
            }
        }

        description.textContent = descriptions[i];
        //counter.textContent = `Imagen ${i+1} de ${larges.length}`; 

    })
 };
 

const lightbox= container => {
    let images = getImages (container), 
        larges = getLargeImages(images),
        descriptions = getDescriptions(images);
        openLightboxEvent(container,images,larges,descriptions);
};

 