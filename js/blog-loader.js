document.addEventListener('DOMContentLoaded', () => {
    const blogContainer = document.getElementById('blog-container');

    // URL del archivo JSON
    const dataUrl = 'data/news.json';

    fetch(dataUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar el archivo de noticias');
            }
            return response.json();
        })
        .then(data => {
            // Ordenar por fecha descendente (más reciente primero)
            data.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

            renderPosts(data);
        })
        .catch(error => {
            console.error('Error al cargar noticias:', error);
            blogContainer.innerHTML = '<p style="text-align:center; color:white;">No se pudieron cargar las noticias recientes.</p>';
        });

    function renderPosts(posts) {
        if (posts.length === 0) {
            blogContainer.innerHTML = '<p style="text-align:center; color:white;">No hay noticias publicadas.</p>';
            return;
        }

        posts.forEach(post => {
            const article = document.createElement('article');
            article.className = 'blog-post';
            article.style.marginBottom = '3em';
            article.style.padding = '1em';
            article.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'; // Fondo sutil
            article.style.borderRadius = '8px';

            // Corrección crítica: Resetear estilos que vienen de blog.css (#blog article)
            article.style.height = 'auto';
            article.style.overflow = 'visible';
            article.style.display = 'block';

            let mediaContent = '';

            if (post.tipo === 'imagen' && post.media_url) {
                if (Array.isArray(post.media_url)) {
                    mediaContent = '<div style="display:flex; flex-wrap:wrap; gap:1em; justify-content:center;">';
                    post.media_url.forEach(url => {
                        mediaContent += `<img src="${url}" alt="${post.titulo}" style="max-width:100%; height:auto; display:block; margin-bottom: 0.5em; border-radius:4px;">`;
                    });
                    mediaContent += '</div>';
                } else {
                    mediaContent = `<img src="${post.media_url}" alt="${post.titulo}" style="width:100%; max-width:600px; height:auto; display:block; margin: 1em auto; border-radius:4px;">`;
                }
            } else if (post.tipo === 'video' && post.media_url) {
                mediaContent = `
                    <video controls style="width:100%; max-width:600px; height:auto; display:block; margin: 1em auto; border-radius:4px;">
                        <source src="${post.media_url}" type="video/mp4">
                        Tu navegador no soporta el video.
                    </video>`;
            } else if (post.tipo === 'youtube' && post.media_url) {
                mediaContent = `
                    <div style="padding:56.25% 0 0 0;position:relative; margin: 1em auto; max-width:600px;">
                        <iframe src="${post.media_url}" 
                        style="position:absolute;top:0;left:0;width:100%;height:100%; border-radius:4px;" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                    </div>`;
            }

            const htmlContent = `
                <div style="color:white; max-width: 800px; margin: auto;">
                    <h2 style="text-align:center; color:#fd054f; margin-bottom:0.5em;">${post.titulo}</h2>
                    <p style="text-align:center; font-size:0.9em; color:#ccc; margin-bottom:1em;">${formatDate(post.fecha)}</p>
                    
                    ${mediaContent}
                    
                    <div style="text-align:justify; margin-top:1em; font-family: 'Open Sans', sans-serif;">
                        <p>${post.descripcion}</p>
                    </div>
                </div>
                <hr style="border: 0; height: 1px; background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(253, 5, 79, 0.75), rgba(0, 0, 0, 0)); margin-top: 3em;">
            `;

            article.innerHTML = htmlContent;
            blogContainer.appendChild(article);
        });
    }

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        // Crear fecha asegurando zona horaria local o UTC consistente para visualización
        const date = new Date(dateString + 'T00:00:00');
        return date.toLocaleDateString('es-ES', options);
    }
});
