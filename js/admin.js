// Funcionalidad adicional para el panel de administración

// Función para crear formulario de producto
function createProductForm(category, product = null) {
    const isEdit = product !== null;
    const formTitle = isEdit ? 'Editar Producto' : 'Añadir Producto';
    const formId = isEdit ? `edit-product-${product.id}` : 'add-product-form';
    
    // Crear modal para el formulario
    const modal = document.createElement('div');
    modal.className = 'admin-form-modal';
    modal.id = formId;
    
    // Valores por defecto
    const defaultValues = {
        id: isEdit ? product.id : `${category.substring(0, 3)}${Date.now()}`,
        nameEs: isEdit ? product.name.es : '',
        nameEn: isEdit ? product.name.en : '',
        nameFr: isEdit ? product.name.fr : '',
        descEs: isEdit ? product.description.es : '',
        descEn: isEdit ? product.description.en : '',
        descFr: isEdit ? product.description.fr : '',
        price: isEdit ? product.price : '',
        image: isEdit ? product.image : ''
    };
    
    modal.innerHTML = `
        <div class="admin-form-content">
            <div class="admin-form-header">
                <h3>${formTitle}</h3>
                <span class="close-form">&times;</span>
            </div>
            <div class="admin-form-body">
                <form id="product-form">
                    <div class="form-group">
                        <label for="product-id">ID:</label>
                        <input type="text" id="product-id" value="${defaultValues.id}" readonly>
                    </div>
                    <div class="form-group">
                        <label for="product-name-es">Nombre (Español):</label>
                        <input type="text" id="product-name-es" value="${defaultValues.nameEs}" required>
                    </div>
                    <div class="form-group">
                        <label for="product-name-en">Nombre (Inglés):</label>
                        <input type="text" id="product-name-en" value="${defaultValues.nameEn}" required>
                    </div>
                    <div class="form-group">
                        <label for="product-name-fr">Nombre (Francés):</label>
                        <input type="text" id="product-name-fr" value="${defaultValues.nameFr}" required>
                    </div>
                    <div class="form-group">
                        <label for="product-desc-es">Descripción (Español):</label>
                        <textarea id="product-desc-es" required>${defaultValues.descEs}</textarea>
                    </div>
                    <div class="form-group">
                        <label for="product-desc-en">Descripción (Inglés):</label>
                        <textarea id="product-desc-en" required>${defaultValues.descEn}</textarea>
                    </div>
                    <div class="form-group">
                        <label for="product-desc-fr">Descripción (Francés):</label>
                        <textarea id="product-desc-fr" required>${defaultValues.descFr}</textarea>
                    </div>
                    <div class="form-group">
                        <label for="product-price">Precio (€):</label>
                        <input type="number" id="product-price" step="0.01" min="0" value="${defaultValues.price}" required>
                    </div>
                    <div class="form-group">
                        <label for="product-image">Imagen (URL):</label>
                        <input type="text" id="product-image" value="${defaultValues.image}">
                    </div>
                    <div class="form-actions">
                        <button type="button" class="cancel-btn">Cancelar</button>
                        <button type="submit" class="save-btn">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Configurar eventos
    const closeBtn = modal.querySelector('.close-form');
    const cancelBtn = modal.querySelector('.cancel-btn');
    const form = modal.querySelector('form');
    
    closeBtn.addEventListener('click', () => {
        modal.remove();
    });
    
    cancelBtn.addEventListener('click', () => {
        modal.remove();
    });
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Recoger datos del formulario
        const productData = {
            id: document.getElementById('product-id').value,
            name: {
                es: document.getElementById('product-name-es').value,
                en: document.getElementById('product-name-en').value,
                fr: document.getElementById('product-name-fr').value
            },
            description: {
                es: document.getElementById('product-desc-es').value,
                en: document.getElementById('product-desc-en').value,
                fr: document.getElementById('product-desc-fr').value
            },
            price: parseFloat(document.getElementById('product-price').value),
            image: document.getElementById('product-image').value
        };
        
        // Guardar producto
        if (isEdit) {
            // Encontrar y actualizar producto existente
            const index = productData[category].findIndex(p => p.id === productData.id);
            if (index !== -1) {
                productData[category][index] = productData;
            }
        } else {
            // Añadir nuevo producto
            productData[category].push(productData);
        }
        
        // Actualizar interfaz
        loadProductsForCategory(category);
        
        // Si la categoría actual es la que se está editando, actualizar vista
        if (currentState.currentCategory === category) {
            showCategory(category);
        }
        
        // Cerrar modal
        modal.remove();
    });
    
    // Mostrar modal
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

// Función mejorada para añadir producto
function addProduct(category) {
    createProductForm(category);
}

// Función mejorada para editar producto
function editProduct(category, productId) {
    // Encontrar producto
    const product = productData[category].find(p => p.id === productId);
    
    if (product) {
        createProductForm(category, product);
    }
}

// Función para crear formulario de categoría
function createCategoryForm(categoryId = null) {
    const isEdit = categoryId !== null;
    const formTitle = isEdit ? 'Editar Categoría' : 'Añadir Categoría';
    const formId = isEdit ? `edit-category-${categoryId}` : 'add-category-form';
    
    // Crear modal para el formulario
    const modal = document.createElement('div');
    modal.className = 'admin-form-modal';
    modal.id = formId;
    
    modal.innerHTML = `
        <div class="admin-form-content">
            <div class="admin-form-header">
                <h3>${formTitle}</h3>
                <span class="close-form">&times;</span>
            </div>
            <div class="admin-form-body">
                <form id="category-form">
                    <div class="form-group">
                        <label for="category-id">ID de Categoría:</label>
                        <input type="text" id="category-id" value="${isEdit ? categoryId : ''}" ${isEdit ? 'readonly' : ''} required>
                    </div>
                    <div class="form-group">
                        <label for="category-name-es">Nombre (Español):</label>
                        <input type="text" id="category-name-es" value="${isEdit ? categoryId : ''}" required>
                    </div>
                    <div class="form-group">
                        <label for="category-name-en">Nombre (Inglés):</label>
                        <input type="text" id="category-name-en" value="${isEdit ? categoryId : ''}" required>
                    </div>
                    <div class="form-group">
                        <label for="category-name-fr">Nombre (Francés):</label>
                        <input type="text" id="category-name-fr" value="${isEdit ? categoryId : ''}" required>
                    </div>
                    <div class="form-group">
                        <label for="category-icon">Icono (Clase Font Awesome):</label>
                        <input type="text" id="category-icon" value="fas fa-utensils" required>
                    </div>
                    <div class="form-actions">
                        <button type="button" class="cancel-btn">Cancelar</button>
                        <button type="submit" class="save-btn">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Configurar eventos
    const closeBtn = modal.querySelector('.close-form');
    const cancelBtn = modal.querySelector('.cancel-btn');
    const form = modal.querySelector('form');
    
    closeBtn.addEventListener('click', () => {
        modal.remove();
    });
    
    cancelBtn.addEventListener('click', () => {
        modal.remove();
    });
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Recoger datos del formulario
        const categoryId = document.getElementById('category-id').value;
        
        if (!isEdit && productData[categoryId]) {
            alert('Ya existe una categoría con ese ID');
            return;
        }
        
        // Si es edición, mover productos
        if (isEdit && categoryId !== categoryId) {
            // Guardar productos
            const products = productData[categoryId];
            
            // Eliminar categoría antigua
            delete productData[categoryId];
            
            // Crear nueva categoría
            productData[categoryId] = products;
        } else if (!isEdit) {
            // Crear nueva categoría vacía
            productData[categoryId] = [];
        }
        
        // Actualizar interfaz
        updateAdminInterface();
        
        // Cerrar modal
        modal.remove();
    });
    
    // Mostrar modal
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

// Función mejorada para añadir categoría
function addCategory() {
    createCategoryForm();
}

// Función mejorada para editar categoría
function editCategory(categoryId) {
    createCategoryForm(categoryId);
}

// Función para mostrar/ocultar botón de volver arriba
function setupBackToTopButton() {
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Función para mostrar indicador de carga
function showLoading() {
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = '<div class="loading-spinner"></div>';
    document.body.appendChild(loading);
}

// Función para ocultar indicador de carga
function hideLoading() {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.remove();
    }
}

// Función para generar un logo temporal
function generateTemporaryLogo() {
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 80;
    const ctx = canvas.getContext('2d');
    
    // Fondo
    ctx.fillStyle = '#d9534f';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Texto
    ctx.fillStyle = 'white';
    ctx.font = 'bold 30px Poppins, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('BAR MENU', canvas.width / 2, canvas.height / 2);
    
    return canvas.toDataURL('image/png');
}

// Función para inicializar el logo
function initLogo() {
    const logo = document.getElementById('logo');
    
    // Comprobar si la imagen existe
    const img = new Image();
    img.onload = function() {
        // La imagen existe, no hacer nada
    };
    img.onerror = function() {
        // La imagen no existe, usar logo temporal
        logo.src = generateTemporaryLogo();
    };
    img.src = logo.src;
}

// Extender la función initApp para incluir nuevas funcionalidades
const originalInitApp = initApp;
initApp = function() {
    // Llamar a la función original
    originalInitApp();
    
    // Configurar botón de volver arriba
    setupBackToTopButton();
    
    // Inicializar logo
    initLogo();
    
    // Añadir animación al cambiar de idioma
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            document.body.classList.add('changing-language');
            setTimeout(() => {
                document.body.classList.remove('changing-language');
            }, 300);
        });
    });
};
