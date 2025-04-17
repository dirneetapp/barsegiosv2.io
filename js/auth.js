// Funcionalidad de autenticación para el panel de administración

// Configuración de autenticación
const authConfig = {
    maxAttempts: 3,
    lockoutTime: 60000, // 1 minuto en milisegundos
    keyHintDuration: 3000 // 3 segundos en milisegundos
};

// Estado de autenticación
let authState = {
    attempts: 0,
    lockedUntil: 0,
    ctrlPressed: false
};

// Función para mostrar modal de autenticación
function showAuthModal() {
    // Comprobar si está bloqueado
    if (authState.lockedUntil > Date.now()) {
        const remainingTime = Math.ceil((authState.lockedUntil - Date.now()) / 1000);
        alert(`Demasiados intentos fallidos. Inténtalo de nuevo en ${remainingTime} segundos.`);
        return;
    }
    
    // Crear modal
    const modal = document.createElement('div');
    modal.className = 'auth-modal';
    modal.id = 'authModal';
    
    modal.innerHTML = `
        <div class="auth-content">
            <div class="auth-header">
                <h3>Acceso al Panel de Administración</h3>
            </div>
            <div class="auth-body">
                <p>Introduce la contraseña para acceder al panel de administración.</p>
                <input type="password" class="auth-input" id="auth-password" placeholder="Contraseña">
                <div class="auth-error" id="auth-error" style="display: none;"></div>
            </div>
            <div class="auth-footer">
                <button class="auth-btn" id="auth-submit">Acceder</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Enfocar campo de contraseña
    setTimeout(() => {
        document.getElementById('auth-password').focus();
    }, 100);
    
    // Configurar eventos
    document.getElementById('auth-submit').addEventListener('click', validateAuth);
    document.getElementById('auth-password').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            validateAuth();
        }
    });
}

// Función para validar autenticación
function validateAuth() {
    const passwordInput = document.getElementById('auth-password');
    const errorElement = document.getElementById('auth-error');
    const password = passwordInput.value;
    
    if (password === appConfig.adminPassword) {
        // Autenticación exitosa
        authState.attempts = 0;
        currentState.adminMode = true;
        
        // Cerrar modal
        document.getElementById('authModal').remove();
        
        // Mostrar panel de administración
        createAdminPanel();
    } else {
        // Autenticación fallida
        authState.attempts++;
        
        // Mostrar error
        errorElement.textContent = `Contraseña incorrecta. Intentos restantes: ${authConfig.maxAttempts - authState.attempts}`;
        errorElement.style.display = 'block';
        
        // Limpiar campo
        passwordInput.value = '';
        passwordInput.focus();
        
        // Comprobar bloqueo
        if (authState.attempts >= authConfig.maxAttempts) {
            authState.lockedUntil = Date.now() + authConfig.lockoutTime;
            document.getElementById('authModal').remove();
            alert(`Demasiados intentos fallidos. Inténtalo de nuevo en ${authConfig.lockoutTime / 1000} segundos.`);
        }
    }
}

// Función mejorada para solicitar contraseña de administrador
function promptAdminPassword() {
    showAuthModal();
}

// Función para mostrar pista de teclas
function showKeyHint() {
    // Comprobar si ya existe
    let keyHint = document.querySelector('.key-hint');
    
    if (!keyHint) {
        // Crear elemento
        keyHint = document.createElement('div');
        keyHint.className = 'key-hint';
        keyHint.innerHTML = 'Presiona <span class="key">Ctrl</span> + <span class="key">M</span> para acceder al panel de administración';
        document.body.appendChild(keyHint);
    }
    
    // Mostrar
    setTimeout(() => {
        keyHint.classList.add('show');
        
        // Ocultar después de un tiempo
        setTimeout(() => {
            keyHint.classList.remove('show');
        }, authConfig.keyHintDuration);
    }, 100);
}

// Función mejorada para configurar acceso al panel de administración
function setupAdminAccess() {
    // Escuchar tecla Ctrl
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Control') {
            authState.ctrlPressed = true;
        } else if (authState.ctrlPressed && e.key === 'm') {
            e.preventDefault(); // Prevenir comportamiento por defecto
            
            if (!currentState.adminMode) {
                promptAdminPassword();
            } else {
                toggleAdminPanel();
            }
        }
    });
    
    document.addEventListener('keyup', (e) => {
        if (e.key === 'Control') {
            authState.ctrlPressed = false;
        }
    });
    
    // Mostrar pista de teclas al hacer clic derecho
    document.addEventListener('contextmenu', (e) => {
        // Solo mostrar en ciertas condiciones (por ejemplo, en el footer)
        if (e.target.closest('footer')) {
            e.preventDefault();
            showKeyHint();
        }
    });
}

// Función para cerrar sesión de administrador
function logoutAdmin() {
    currentState.adminMode = false;
    
    // Cerrar panel si está abierto
    const adminPanel = document.getElementById('adminPanel');
    if (adminPanel) {
        adminPanel.remove();
    }
    
    // Mostrar mensaje
    alert('Has cerrado sesión del panel de administración.');
}

// Función para añadir botón de cerrar sesión al panel de administración
function addLogoutButton() {
    const adminHeader = document.querySelector('.admin-header');
    
    if (adminHeader) {
        // Crear botón
        const logoutBtn = document.createElement('button');
        logoutBtn.className = 'logout-btn';
        logoutBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i> Cerrar sesión';
        
        // Insertar antes del botón de cerrar
        adminHeader.insertBefore(logoutBtn, adminHeader.querySelector('.close-admin'));
        
        // Configurar evento
        logoutBtn.addEventListener('click', logoutAdmin);
    }
}

// Extender la función createAdminPanel para incluir nuevas funcionalidades
const originalCreateAdminPanel = createAdminPanel;
createAdminPanel = function() {
    // Llamar a la función original
    originalCreateAdminPanel();
    
    // Añadir botón de cerrar sesión
    addLogoutButton();
    
    // Añadir dashboard
    addAdminDashboard();
};

// Función para añadir dashboard al panel de administración
function addAdminDashboard() {
    const categoriesTab = document.getElementById('categories-tab');
    
    if (categoriesTab) {
        // Crear dashboard
        const dashboard = document.createElement('div');
        dashboard.className = 'admin-dashboard';
        
        // Contar categorías y productos
        const categoryCount = Object.keys(productData).length;
        let productCount = 0;
        
        Object.values(productData).forEach(products => {
            productCount += products.length;
        });
        
        // Añadir tarjetas
        dashboard.innerHTML = `
            <div class="dashboard-card">
                <i class="fas fa-list"></i>
                <h4>Categorías</h4>
                <p>${categoryCount}</p>
            </div>
            <div class="dashboard-card">
                <i class="fas fa-utensils"></i>
                <h4>Productos</h4>
                <p>${productCount}</p>
            </div>
        `;
        
        // Insertar al principio
        categoriesTab.insertBefore(dashboard, categoriesTab.firstChild);
    }
}

// Función para previsualizar imagen en formularios
function setupImagePreview() {
    const imageInput = document.getElementById('product-image');
    const previewContainer = document.createElement('div');
    previewContainer.className = 'image-preview';
    previewContainer.innerHTML = '<span class="image-preview-placeholder">Vista previa de la imagen</span>';
    
    // Insertar después del input
    imageInput.parentNode.insertBefore(previewContainer, imageInput.nextSibling);
    
    // Configurar evento
    imageInput.addEventListener('input', () => {
        const imageUrl = imageInput.value;
        
        if (imageUrl) {
            // Crear imagen
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = 'Vista previa';
            
            // Limpiar contenedor
            previewContainer.innerHTML = '';
            previewContainer.appendChild(img);
            
            // Manejar error
            img.onerror = function() {
                previewContainer.innerHTML = '<span class="image-preview-placeholder">Error al cargar la imagen</span>';
            };
        } else {
            previewContainer.innerHTML = '<span class="image-preview-placeholder">Vista previa de la imagen</span>';
        }
    });
}

// Extender la función createProductForm para incluir previsualización de imagen
const originalCreateProductForm = createProductForm;
createProductForm = function(category, product = null) {
    // Llamar a la función original
    originalCreateProductForm(category, product);
    
    // Configurar previsualización de imagen
    setupImagePreview();
};
