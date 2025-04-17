// Funcionalidad de gestión de contenido para el panel de administración

// Función para exportar datos
function exportData() {
    // Convertir datos a JSON
    const dataStr = JSON.stringify(productData, null, 2);
    
    // Crear blob
    const blob = new Blob([dataStr], { type: 'application/json' });
    
    // Crear URL
    const url = URL.createObjectURL(blob);
    
    // Crear enlace de descarga
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bar-menu-data.json';
    
    // Simular clic
    document.body.appendChild(a);
    a.click();
    
    // Limpiar
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Función para importar datos
function importData() {
    // Crear input de archivo
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    
    // Configurar evento
    input.onchange = function(e) {
        const file = e.target.files[0];
        
        if (file) {
            const reader = new FileReader();
            
            reader.onload = function(event) {
                try {
                    // Parsear JSON
                    const data = JSON.parse(event.target.result);
                    
                    // Validar estructura
                    if (typeof data !== 'object') {
                        throw new Error('Formato de datos inválido');
                    }
                    
                    // Confirmar
                    if (confirm('¿Estás seguro de que quieres importar estos datos? Se sobrescribirán todos los datos actuales.')) {
                        // Actualizar datos
                        Object.assign(productData, data);
                        
                        // Actualizar interfaz
                        updateAdminInterface();
                        
                        // Mostrar mensaje
                        alert('Datos importados correctamente');
                    }
                } catch (error) {
                    alert('Error al importar datos: ' + error.message);
                }
            };
            
            reader.readAsText(file);
        }
    };
    
    // Simular clic
    document.body.appendChild(input);
    input.click();
    
    // Limpiar
    document.body.removeChild(input);
}

// Función para crear copia de seguridad
function createBackup() {
    // Obtener fecha actual
    const date = new Date();
    const dateStr = date.toISOString().split('T')[0];
    
    // Convertir datos a JSON
    const dataStr = JSON.stringify(productData, null, 2);
    
    // Crear blob
    const blob = new Blob([dataStr], { type: 'application/json' });
    
    // Crear URL
    const url = URL.createObjectURL(blob);
    
    // Crear enlace de descarga
    const a = document.createElement('a');
    a.href = url;
    a.download = `bar-menu-backup-${dateStr}.json`;
    
    // Simular clic
    document.body.appendChild(a);
    a.click();
    
    // Limpiar
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Mostrar mensaje
    alert('Copia de seguridad creada correctamente');
}

// Función para restaurar copia de seguridad
function restoreBackup() {
    // Crear input de archivo
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    
    // Configurar evento
    input.onchange = function(e) {
        const file = e.target.files[0];
        
        if (file) {
            const reader = new FileReader();
            
            reader.onload = function(event) {
                try {
                    // Parsear JSON
                    const data = JSON.parse(event.target.result);
                    
                    // Validar estructura
                    if (typeof data !== 'object') {
                        throw new Error('Formato de datos inválido');
                    }
                    
                    // Confirmar
                    if (confirm('¿Estás seguro de que quieres restaurar esta copia de seguridad? Se sobrescribirán todos los datos actuales.')) {
                        // Actualizar datos
                        Object.keys(productData).forEach(key => {
                            delete productData[key];
                        });
                        
                        Object.assign(productData, data);
                        
                        // Actualizar interfaz
                        updateAdminInterface();
                        
                        // Mostrar mensaje
                        alert('Copia de seguridad restaurada correctamente');
                    }
                } catch (error) {
                    alert('Error al restaurar copia de seguridad: ' + error.message);
                }
            };
            
            reader.readAsText(file);
        }
    };
    
    // Simular clic
    document.body.appendChild(input);
    input.click();
    
    // Limpiar
    document.body.removeChild(input);
}

// Función para reordenar productos
function reorderProducts(category) {
    // Obtener productos
    const products = productData[category] || [];
    
    // Crear modal
    const modal = document.createElement('div');
    modal.className = 'admin-form-modal';
    modal.id = 'reorder-modal';
    
    // Crear contenido
    let productsHtml = '';
    
    products.forEach((product, index) => {
        productsHtml += `
            <div class="reorder-item" data-id="${product.id}">
                <div class="reorder-handle">
                    <i class="fas fa-grip-lines"></i>
                </div>
                <div class="reorder-content">
                    <span>${product.name.es}</span>
                </div>
            </div>
        `;
    });
    
    modal.innerHTML = `
        <div class="admin-form-content">
            <div class="admin-form-header">
                <h3>Reordenar Productos</h3>
                <span class="close-form">&times;</span>
            </div>
            <div class="admin-form-body">
                <p>Arrastra los productos para cambiar su orden.</p>
                <div class="reorder-container">
                    ${productsHtml}
                </div>
                <div class="form-actions">
                    <button type="button" class="cancel-btn">Cancelar</button>
                    <button type="button" class="save-btn" id="save-order">Guardar Orden</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Configurar eventos
    const closeBtn = modal.querySelector('.close-form');
    const cancelBtn = modal.querySelector('.cancel-btn');
    const saveBtn = modal.querySelector('#save-order');
    
    closeBtn.addEventListener('click', () => {
        modal.remove();
    });
    
    cancelBtn.addEventListener('click', () => {
        modal.remove();
    });
    
    saveBtn.addEventListener('click', () => {
        // Obtener nuevo orden
        const items = modal.querySelectorAll('.reorder-item');
        const newOrder = [];
        
        items.forEach(item => {
            const id = item.getAttribute('data-id');
            const product = products.find(p => p.id === id);
            
            if (product) {
                newOrder.push(product);
            }
        });
        
        // Actualizar datos
        productData[category] = newOrder;
        
        // Actualizar interfaz
        loadProductsForCategory(category);
        
        // Si la categoría actual es la que se está editando, actualizar vista
        if (currentState.currentCategory === category) {
            showCategory(category);
        }
        
        // Cerrar modal
        modal.remove();
        
        // Mostrar mensaje
        alert('Orden guardado correctamente');
    });
    
    // Configurar arrastrar y soltar
    const container = modal.querySelector('.reorder-container');
    let draggedItem = null;
    
    // Función para hacer que los elementos sean arrastrables
    function makeItemsDraggable() {
        const items = container.querySelectorAll('.reorder-item');
        
        items.forEach(item => {
            item.setAttribute('draggable', 'true');
            
            item.addEventListener('dragstart', function() {
                draggedItem = this;
                setTimeout(() => {
                    this.classList.add('dragging');
                }, 0);
            });
            
            item.addEventListener('dragend', function() {
                this.classList.remove('dragging');
                draggedItem = null;
            });
            
            item.addEventListener('dragover', function(e) {
                e.preventDefault();
            });
            
            item.addEventListener('dragenter', function(e) {
                e.preventDefault();
                if (this !== draggedItem) {
                    const rect = this.getBoundingClientRect();
                    const y = e.clientY - rect.top;
                    
                    if (y < rect.height / 2) {
                        container.insertBefore(draggedItem, this);
                    } else {
                        container.insertBefore(draggedItem, this.nextSibling);
                    }
                }
            });
        });
    }
    
    // Hacer elementos arrastrables
    setTimeout(() => {
        makeItemsDraggable();
        modal.classList.add('active');
    }, 10);
}

// Función para duplicar producto
function duplicateProduct(category, productId) {
    // Encontrar producto
    const product = productData[category].find(p => p.id === productId);
    
    if (product) {
        // Crear copia
        const newProduct = JSON.parse(JSON.stringify(product));
        
        // Generar nuevo ID
        newProduct.id = `${category.substring(0, 3)}${Date.now()}`;
        
        // Modificar nombre
        newProduct.name.es += ' (Copia)';
        newProduct.name.en += ' (Copy)';
        newProduct.name.fr += ' (Copie)';
        
        // Añadir a datos
        productData[category].push(newProduct);
        
        // Actualizar interfaz
        loadProductsForCategory(category);
        
        // Si la categoría actual es la que se está editando, actualizar vista
        if (currentState.currentCategory === category) {
            showCategory(category);
        }
        
        // Mostrar mensaje
        alert('Producto duplicado correctamente');
    }
}

// Función para añadir botones de gestión de contenido
function addContentManagementButtons() {
    // Añadir botones a la pestaña de configuración
    const settingsTab = document.getElementById('settings-tab');
    
    if (settingsTab) {
        // Crear contenedor
        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'admin-buttons-container';
        
        // Añadir botones
        buttonsContainer.innerHTML = `
            <h4>Gestión de Datos</h4>
            <div class="admin-buttons-grid">
                <button class="admin-btn" id="export-data">
                    <i class="fas fa-file-export"></i>
                    Exportar Datos
                </button>
                <button class="admin-btn" id="import-data">
                    <i class="fas fa-file-import"></i>
                    Importar Datos
                </button>
                <button class="admin-btn" id="create-backup">
                    <i class="fas fa-save"></i>
                    Crear Copia de Seguridad
                </button>
                <button class="admin-btn" id="restore-backup">
                    <i class="fas fa-undo"></i>
                    Restaurar Copia de Seguridad
                </button>
            </div>
        `;
        
        // Insertar después del formulario
        const settingsForm = settingsTab.querySelector('.settings-form');
        settingsForm.parentNode.insertBefore(buttonsContainer, settingsForm.nextSibling);
        
        // Configurar eventos
        document.getElementById('export-data').addEventListener('click', exportData);
        document.getElementById('import-data').addEventListener('click', importData);
        document.getElementById('create-backup').addEventListener('click', createBackup);
        document.getElementById('restore-backup').addEventListener('click', restoreBackup);
    }
    
    // Añadir botón de reordenar a la pestaña de productos
    const productsTab = document.getElementById('products-tab');
    
    if (productsTab) {
        // Crear botón
        const reorderBtn = document.createElement('button');
        reorderBtn.className = 'admin-btn reorder-btn';
        reorderBtn.innerHTML = '<i class="fas fa-sort"></i> Reordenar Productos';
        
        // Insertar antes del botón de añadir
        const addBtn = productsTab.querySelector('[data-action="add-product"]');
        addBtn.parentNode.insertBefore(reorderBtn, addBtn);
        
        // Configurar evento
        reorderBtn.addEventListener('click', () => {
            const category = document.getElementById('admin-category-select').value;
            reorderProducts(category);
        });
    }
}

// Extender la función createAdminPanel para incluir botones de gestión de contenido
const originalCreateAdminPanelWithDashboard = createAdminPanel;
createAdminPanel = function() {
    // Llamar a la función original
    originalCreateAdminPanelWithDashboard();
    
    // Añadir botones de gestión de contenido
    addContentManagementButtons();
    
    // Añadir botones de duplicar a los productos
    addDuplicateButtons();
};

// Función para añadir botones de duplicar a los productos
function addDuplicateButtons() {
    // Esperar a que se carguen los productos
    setTimeout(() => {
        const productItems = document.querySelectorAll('.product-list .admin-item');
        
        productItems.forEach(item => {
            // Obtener acciones
            const actions = item.querySelector('.admin-actions');
            
            // Obtener ID
            const id = actions.querySelector('[data-action="edit-product"]').getAttribute('data-id');
            
            // Crear botón
            const duplicateBtn = document.createElement('button');
            duplicateBtn.className = 'duplicate-btn';
            duplicateBtn.setAttribute('data-action', 'duplicate-product');
            duplicateBtn.setAttribute('data-id', id);
            duplicateBtn.textContent = 'Duplicar';
            
            // Insertar antes del botón de eliminar
            const deleteBtn = actions.querySelector('[data-action="delete-product"]');
            actions.insertBefore(duplicateBtn, deleteBtn);
            
            // Configurar evento
            duplicateBtn.addEventListener('click', () => {
                const category = document.getElementById('admin-category-select').value;
                duplicateProduct(category, id);
            });
        });
    }, 100);
}

// Extender la función loadProductsForCategory para añadir botones de duplicar
const originalLoadProductsForCategory = loadProductsForCategory;
loadProductsForCategory = function(category) {
    // Llamar a la función original
    originalLoadProductsForCategory(category);
    
    // Añadir botones de duplicar
    addDuplicateButtons();
};
