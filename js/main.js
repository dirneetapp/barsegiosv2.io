// Datos de productos
const productData = {
    desayunos: [
        {
            id: 'des1',
            name: {
                es: 'Tostada con Tomate y AOVE',
                en: 'Toast with Tomato and Olive Oil',
                fr: 'Toast à la Tomate et Huile d\'Olive'
            },
            description: {
                es: 'Tostada de pan artesano con tomate rallado y aceite de oliva virgen extra',
                en: 'Artisan bread toast with grated tomato and extra virgin olive oil',
                fr: 'Toast de pain artisanal à la tomate râpée et huile d\'olive extra vierge'
            },
            price: 3.50,
            image: 'assets/images/tostada-tomate.jpg'
        },
        {
            id: 'des2',
            name: {
                es: 'Croissant de Mantequilla',
                en: 'Butter Croissant',
                fr: 'Croissant au Beurre'
            },
            description: {
                es: 'Croissant artesano de mantequilla recién horneado',
                en: 'Freshly baked artisan butter croissant',
                fr: 'Croissant artisanal au beurre fraîchement cuit'
            },
            price: 2.20,
            image: 'assets/images/croissant.jpg'
        },
        {
            id: 'des3',
            name: {
                es: 'Tostada con Aguacate y Huevo',
                en: 'Avocado and Egg Toast',
                fr: 'Toast à l\'Avocat et Œuf'
            },
            description: {
                es: 'Tostada con aguacate, huevo pochado y semillas de sésamo',
                en: 'Toast with avocado, poached egg and sesame seeds',
                fr: 'Toast à l\'avocat, œuf poché et graines de sésame'
            },
            price: 5.50,
            image: 'assets/images/tostada-aguacate.jpg'
        },
        {
            id: 'des4',
            name: {
                es: 'Yogur con Granola y Frutas',
                en: 'Yogurt with Granola and Fruits',
                fr: 'Yaourt avec Granola et Fruits'
            },
            description: {
                es: 'Yogur griego con granola casera, frutas frescas y miel',
                en: 'Greek yogurt with homemade granola, fresh fruits and honey',
                fr: 'Yaourt grec avec granola maison, fruits frais et miel'
            },
            price: 4.80,
            image: 'assets/images/yogur-granola.jpg'
        },
        {
            id: 'des5',
            name: {
                es: 'Tortilla Española',
                en: 'Spanish Omelette',
                fr: 'Omelette Espagnole'
            },
            description: {
                es: 'Porción de tortilla española tradicional con patatas y cebolla',
                en: 'Portion of traditional Spanish omelette with potatoes and onion',
                fr: 'Portion d\'omelette espagnole traditionnelle aux pommes de terre et oignon'
            },
            price: 3.90,
            image: 'assets/images/tortilla.jpg'
        },
        {
            id: 'des6',
            name: {
                es: 'Café con Leche',
                en: 'Coffee with Milk',
                fr: 'Café au Lait'
            },
            description: {
                es: 'Café espresso con leche caliente',
                en: 'Espresso coffee with hot milk',
                fr: 'Café expresso avec lait chaud'
            },
            price: 1.80,
            image: 'assets/images/cafe-leche.jpg'
        },
        {
            id: 'des7',
            name: {
                es: 'Zumo de Naranja Natural',
                en: 'Fresh Orange Juice',
                fr: 'Jus d\'Orange Frais'
            },
            description: {
                es: 'Zumo de naranja recién exprimido',
                en: 'Freshly squeezed orange juice',
                fr: 'Jus d\'orange fraîchement pressé'
            },
            price: 3.20,
            image: 'assets/images/zumo-naranja.jpg'
        },
        {
            id: 'des8',
            name: {
                es: 'Tostada con Jamón Ibérico',
                en: 'Toast with Iberian Ham',
                fr: 'Toast au Jambon Ibérique'
            },
            description: {
                es: 'Tostada con jamón ibérico de bellota y aceite de oliva',
                en: 'Toast with acorn-fed Iberian ham and olive oil',
                fr: 'Toast au jambon ibérique de gland et huile d\'olive'
            },
            price: 6.50,
            image: 'assets/images/tostada-jamon.jpg'
        },
        {
            id: 'des9',
            name: {
                es: 'Churros con Chocolate',
                en: 'Churros with Chocolate',
                fr: 'Churros au Chocolat'
            },
            description: {
                es: 'Ración de churros tradicionales con chocolate caliente',
                en: 'Portion of traditional churros with hot chocolate',
                fr: 'Portion de churros traditionnels avec chocolat chaud'
            },
            price: 4.50,
            image: 'assets/images/churros.jpg'
        },
        {
            id: 'des10',
            name: {
                es: 'Tostada Mixta',
                en: 'Mixed Toast',
                fr: 'Toast Mixte'
            },
            description: {
                es: 'Tostada con jamón york y queso fundido',
                en: 'Toast with ham and melted cheese',
                fr: 'Toast au jambon et fromage fondu'
            },
            price: 4.20,
            image: 'assets/images/tostada-mixta.jpg'
        }
    ],
    bocadillos: [
        {
            id: 'boc1',
            name: {
                es: 'Bocadillo de Jamón Ibérico',
                en: 'Iberian Ham Sandwich',
                fr: 'Sandwich au Jambon Ibérique'
            },
            description: {
                es: 'Pan crujiente con jamón ibérico de bellota y tomate rallado',
                en: 'Crusty bread with acorn-fed Iberian ham and grated tomato',
                fr: 'Pain croustillant avec jambon ibérique de gland et tomate râpée'
            },
            price: 7.50,
            image: 'assets/images/bocadillo-jamon.jpg'
        },
        {
            id: 'boc2',
            name: {
                es: 'Bocadillo de Tortilla',
                en: 'Spanish Omelette Sandwich',
                fr: 'Sandwich à l\'Omelette Espagnole'
            },
            description: {
                es: 'Pan rústico con tortilla española casera',
                en: 'Rustic bread with homemade Spanish omelette',
                fr: 'Pain rustique avec omelette espagnole maison'
            },
            price: 5.20,
            image: 'assets/images/bocadillo-tortilla.jpg'
        },
        {
            id: 'boc3',
            name: {
                es: 'Bocadillo Vegetal',
                en: 'Vegetable Sandwich',
                fr: 'Sandwich Végétal'
            },
            description: {
                es: 'Pan integral con lechuga, tomate, cebolla, zanahoria, huevo y mayonesa',
                en: 'Whole grain bread with lettuce, tomato, onion, carrot, egg and mayonnaise',
                fr: 'Pain complet avec laitue, tomate, oignon, carotte, œuf et mayonnaise'
            },
            price: 5.80,
            image: 'assets/images/bocadillo-vegetal.jpg'
        },
        {
            id: 'boc4',
            name: {
                es: 'Bocadillo de Calamares',
                en: 'Squid Sandwich',
                fr: 'Sandwich aux Calamars'
            },
            description: {
                es: 'Pan crujiente con calamares fritos y mayonesa de alioli',
                en: 'Crusty bread with fried squid rings and aioli mayonnaise',
                fr: 'Pain croustillant avec calamars frits et mayonnaise à l\'aïoli'
            },
            price: 6.50,
            image: 'assets/images/bocadillo-calamares.jpg'
        },
        {
            id: 'boc5',
            name: {
                es: 'Bocadillo de Lomo con Queso',
                en: 'Pork Loin with Cheese Sandwich',
                fr: 'Sandwich au Filet de Porc et Fromage'
            },
            description: {
                es: 'Pan rústico con lomo a la plancha, queso fundido y pimientos',
                en: 'Rustic bread with grilled pork loin, melted cheese and peppers',
                fr: 'Pain rustique avec filet de porc grillé, fromage fondu et poivrons'
            },
            price: 6.20,
            image: 'assets/images/bocadillo-lomo.jpg'
        },
        {
            id: 'boc6',
            name: {
                es: 'Bocadillo de Atún',
                en: 'Tuna Sandwich',
                fr: 'Sandwich au Thon'
            },
            description: {
                es: 'Pan con atún, pimientos asados, cebolla y mayonesa',
                en: 'Bread with tuna, roasted peppers, onion and mayonnaise',
                fr: 'Pain avec thon, poivrons rôtis, oignon et mayonnaise'
            },
            price: 5.50,
            image: 'assets/images/bocadillo-atun.jpg'
        },
        {
            id: 'boc7',
            name: {
                es: 'Bocadillo de Bacon y Queso',
                en: 'Bacon and Cheese Sandwich',
                fr: 'Sandwich au Bacon et Fromage'
            },
            description: {
                es: 'Pan crujiente con bacon crujiente y queso cheddar fundido',
                en: 'Crusty bread with crispy bacon and melted cheddar cheese',
                fr: 'Pain croustillant avec bacon croustillant et fromage cheddar fondu'
            },
            price: 5.80,
            image: 'assets/images/bocadillo-bacon.jpg'
        },
        {
            id: 'boc8',
            name: {
                es: 'Bocadillo de Pollo',
                en: 'Chicken Sandwich',
                fr: 'Sandwich au Poulet'
            },
            description: {
                es: 'Pan con pollo a la plancha, lechuga, tomate y salsa césar',
                en: 'Bread with grilled chicken, lettuce, tomato and caesar sauce',
                fr: 'Pain avec poulet grillé, laitue, tomate et sauce césar'
            },
            price: 6.00,
            image: 'assets/images/bocadillo-pollo.jpg'
        },
        {
            id: 'boc9',
            name: {
                es: 'Bocadillo de Anchoas',
                en: 'Anchovy Sandwich',
                fr: 'Sandwich aux Anchois'
            },
            description: {
                es: 'Pan con anchoas del Cantábrico, tomate y aceite de oliva',
                en: 'Bread with Cantabrian anchovies, tomato and olive oil',
                fr: 'Pain avec anchois de Cantabrie, tomate et huile d\'olive'
            },
            price: 6.80,
            image: 'assets/images/bocadillo-anchoas.jpg'
        },
        {
            id: 'boc10',
            name: {
                es: 'Bocadillo de Queso Manchego',
                en: 'Manchego Cheese Sandwich',
                fr: 'Sandwich au Fromage Manchego'
            },
            description: {
                es: 'Pan rústico con queso manchego curado y membrillo',
                en: 'Rustic bread with cured Manchego cheese and quince paste',
                fr: 'Pain rustique avec fromage Manchego affiné et pâte de coing'
            },
            price: 5.50,
            image: 'assets/images/bocadillo-queso.jpg'
        }
    ],
    croquetas: [
        {
            id: 'cro1',
            name: {
                es: 'Croquetas de Jamón Ibérico',
                en: 'Iberian Ham Croquettes',
                fr: 'Croquettes au Jambon Ibérique'
            },
            description: {
                es: 'Croquetas cremosas de jamón ibérico (6 uds)',
                en: 'Creamy Iberian ham croquettes (6 pcs)',
                fr: 'Croquettes crémeuses au jambon ibérique (6 pièces)'
            },
            price: 8.50,
            image: 'assets/images/croquetas-jamon.jpg'
        },
        {
            id: 'cro2',
            name: {
                es: 'Croquetas de Boletus',
                en: 'Porcini Mushroom Croquettes',
                fr: 'Croquettes aux Cèpes'
            },
            description: {
                es: 'Croquetas caseras de boletus edulis (6 uds)',
                en: 'Homemade porcini mushroom croquettes (6 pcs)',
                fr: 'Croquettes maison aux cèpes (6 pièces)'
            },
            price: 8.00,
            image: 'assets/images/croquetas-boletus.jpg'
        },
        {
            id: 'cro3',
            name: {
                es: 'Croquetas de Bacalao',
                en: 'Cod Croquettes',
                fr: 'Croquettes de Morue'
            },
            description: {
                es: 'Croquetas de bacalao con perejil (6 uds)',
                en: 'Cod croquettes with parsley (6 pcs)',
                fr: 'Croquettes de morue au persil (6 pièces)'
            },
            price: 7.80,
            image: 'assets/images/croquetas-bacalao.jpg'
        },
        {
            id: 'cro4',
            name: {
                es: 'Croquetas de Queso Azul',
                en: 'Blue Cheese Croquettes',
                fr: 'Croquettes au Fromage Bleu'
            },
            description: {
                es: 'Croquetas cremosas de queso cabrales (6 uds)',
                en: 'Creamy Cabrales blue cheese croquettes (6 pcs)',
                fr: 'Croquettes crémeuses au fromage bleu Cabrales (6 pièces)'
            },
            price: 7.50,
            image: 'assets/images/croquetas-queso.jpg'
        },
        {
            id: 'cro5',
            name: {
                es: 'Croquetas de Pollo',
                en: 'Chicken Croquettes',
                fr: 'Croquettes au Poulet'
            },
            description: {
                es: 'Croquetas tradicionales de pollo asado (6 uds)',
                en: 'Traditional roasted chicken croquettes (6 pcs)',
                fr: 'Croquettes traditionnelles au poulet rôti (6 pièces)'
            },
            price: 7.20,
            image: 'assets/images/croquetas-pollo.jpg'
        },
        {
            id: 'cro6',
            name: {
                es: 'Croquetas de Espinacas',
                en: 'Spinach Croquettes',
                fr: 'Croquettes aux Épinards'
            },
            description: {
                es: 'Croquetas veganas de espinacas y piñones (6 uds)',
                en: 'Vegan spinach and pine nut croquettes (6 pcs)',
                fr: 'Croquettes véganes aux épinards et pignons de pin (6 pièces)'
            },
            price: 7.50,
            image: 'assets/images/croquetas-espinacas.jpg'
        },
        {
            id: 'cro7',
            name: {
                es: 'Croquetas de Rabo de Toro',
                en: 'Oxtail Croquettes',
                fr: 'Croquettes de Queue de Bœuf'
            },
            description: {
                es: 'Croquetas de rabo de toro estofado (6 uds)',
                en: 'Stewed oxtail croquettes (6 pcs)',
                fr: 'Croquettes de queue de bœuf mijotée (6 pièces)'
            },
            price: 8.80,
            image: 'assets/images/croquetas-rabo.jpg'
        },
        {
            id: 'cro8',
            name: {
                es: 'Croquetas de Txangurro',
                en: 'Spider Crab Croquettes',
                fr: 'Croquettes au Crabe'
            },
            description: {
                es: 'Croquetas de centollo del Cantábrico (6 uds)',
                en: 'Cantabrian spider crab croquettes (6 pcs)',
                fr: 'Croquettes au crabe de Cantabrie (6 pièces)'
            },
            price: 9.50,
            image: 'assets/images/croquetas-txangurro.jpg'
        },
        {
            id: 'cro9',
            name: {
                es: 'Croquetas de Morcilla',
                en: 'Blood Sausage Croquettes',
                fr: 'Croquettes au Boudin Noir'
            },
            description: {
                es: 'Croquetas de morcilla de Burgos con piñones (6 uds)',
                en: 'Burgos blood sausage croquettes with pine nuts (6 pcs)',
                fr: 'Croquettes au boudin noir de Burgos avec pignons de pin (6 pièces)'
            },
            price: 7.80,
            image: 'assets/images/croquetas-morcilla.jpg'
        },
        {
            id: 'cro10',
            name: {
                es: 'Croquetas de Gambas',
                en: 'Prawn Croquettes',
                fr: 'Croquettes aux Crevettes'
            },
            description: {
                es: 'Croquetas de gambas al ajillo (6 uds)',
                en: 'Garlic prawns croquettes (6 pcs)',
                fr: 'Croquettes aux crevettes à l\'ail (6 pièces)'
            },
            price: 8.20,
            image: 'assets/images/croquetas-gambas.jpg'
        }
    ],
    especiales: [
        {
            id: 'esp1',
            name: {
                es: 'Paella de Marisco',
                en: 'Seafood Paella',
                fr: 'Paella aux Fruits de Mer'
            },
            description: {
                es: 'Paella tradicional con mariscos variados (mín. 2 personas)',
                en: 'Traditional paella with assorted seafood (min. 2 people)',
                fr: 'Paella traditionnelle aux fruits de mer variés (min. 2 personnes)'
            },
            price: 18.00,
            image: 'assets/images/paella.jpg'
        },
        {
            id: 'esp2',
            name: {
                es: 'Pulpo a la Gallega',
                en: 'Galician Style Octopus',
                fr: 'Poulpe à la Galicienne'
            },
            description: {
                es: 'Pulpo cocido con patatas, pimentón y aceite de oliva',
                en: 'Cooked octopus with potatoes, paprika and olive oil',
                fr: 'Poulpe cuit avec pommes de terre, paprika et huile d\'olive'
            },
            price: 16.50,
            image: 'assets/images/pulpo.jpg'
        },
        {
            id: 'esp3',
            name: {
                es: 'Secreto Ibérico',
                en: 'Iberian Pork Secret Cut',
                fr: 'Secreto Ibérique'
            },
            description: {
                es: 'Corte especial de cerdo ibérico a la plancha con patatas',
                en: 'Grilled special cut of Iberian pork with potatoes',
                fr: 'Coupe spéciale de porc ibérique grillée avec pommes de terre'
            },
            price: 17.80,
            image: 'assets/images/secreto.jpg'
        },
        {
            id: 'esp4',
            name: {
                es: 'Arroz Negro',
                en: 'Black Rice',
                fr: 'Riz Noir'
            },
            description: {
                es: 'Arroz con tinta de calamar, mariscos y alioli (mín. 2 personas)',
                en: 'Rice with squid ink, seafood and aioli (min. 2 people)',
                fr: 'Riz à l\'encre de seiche, fruits de mer et aïoli (min. 2 personnes)'
            },
            price: 17.50,
            image: 'assets/images/arroz-negro.jpg'
        },
        {
            id: 'esp5',
            name: {
                es: 'Cochinillo Asado',
                en: 'Roasted Suckling Pig',
                fr: 'Cochon de Lait Rôti'
            },
            description: {
                es: 'Cochinillo asado al estilo segoviano con patatas',
                en: 'Segovian style roasted suckling pig with potatoes',
                fr: 'Cochon de lait rôti à la ségovienne avec pommes de terre'
            },
            price: 22.00,
            image: 'assets/images/cochinillo.jpg'
        },
        {
            id: 'esp6',
            name: {
                es: 'Bacalao a la Vizcaína',
                en: 'Biscayan Style Cod',
                fr: 'Morue à la Biscayenne'
            },
            description: {
                es: 'Bacalao con salsa de pimientos choriceros y patatas',
                en: 'Cod with chorizo pepper sauce and potatoes',
                fr: 'Morue avec sauce aux poivrons chorizo et pommes de terre'
            },
            price: 18.50,
            image: 'assets/images/bacalao.jpg'
        },
        {
            id: 'esp7',
            name: {
                es: 'Cordero Asado',
                en: 'Roasted Lamb',
                fr: 'Agneau Rôti'
            },
            description: {
                es: 'Paletilla de cordero lechal asada al horno con patatas',
                en: 'Oven-roasted suckling lamb shoulder with potatoes',
                fr: 'Épaule d\'agneau de lait rôtie au four avec pommes de terre'
            },
            price: 24.00,
            image: 'assets/images/cordero.jpg'
        },
        {
            id: 'esp8',
            name: {
                es: 'Fideuá',
                en: 'Fideuá',
                fr: 'Fideuá'
            },
            description: {
                es: 'Fideos finos con mariscos y alioli (mín. 2 personas)',
                en: 'Thin noodles with seafood and aioli (min. 2 people)',
                fr: 'Vermicelles fines aux fruits de mer et aïoli (min. 2 personnes)'
            },
            price: 16.50,
            image: 'assets/images/fideua.jpg'
        },
        {
            id: 'esp9',
            name: {
                es: 'Chuletón de Vaca Madurada',
                en: 'Aged Beef T-bone Steak',
                fr: 'T-bone de Bœuf Maturé'
            },
            description: {
                es: 'Chuletón de vaca madurada 30 días con patatas (500g)',
                en: '30-day aged beef T-bone steak with potatoes (500g)',
                fr: 'T-bone de bœuf maturé 30 jours avec pommes de terre (500g)'
            },
            price: 28.00,
            image: 'assets/images/chuleton.jpg'
        },
        {
            id: 'esp10',
            name: {
                es: 'Arroz Caldoso de Bogavante',
                en: 'Lobster Broth Rice',
                fr: 'Riz au Bouillon de Homard'
            },
            description: {
                es: 'Arroz caldoso con bogavante (mín. 2 personas)',
                en: 'Rice in broth with lobster (min. 2 people)',
                fr: 'Riz au bouillon avec homard (min. 2 personnes)'
            },
            price: 26.00,
            image: 'assets/images/arroz-bogavante.jpg'
        }
    ],
    postres: [
        {
            id: 'pos1',
            name: {
                es: 'Tarta de Queso',
                en: 'Cheesecake',
                fr: 'Gâteau au Fromage'
            },
            description: {
                es: 'Tarta de queso cremosa al horno con coulis de frutos rojos',
                en: 'Creamy baked cheesecake with red berry coulis',
                fr: 'Gâteau au fromage crémeux cuit au four avec coulis de fruits rouges'
            },
            price: 5.50,
            image: 'assets/images/tarta-queso.jpg'
        },
        {
            id: 'pos2',
            name: {
                es: 'Crema Catalana',
                en: 'Catalan Cream',
                fr: 'Crème Catalane'
            },
            description: {
                es: 'Crema catalana tradicional con azúcar caramelizado',
                en: 'Traditional Catalan cream with caramelized sugar',
                fr: 'Crème catalane traditionnelle avec sucre caramélisé'
            },
            price: 4.80,
            image: 'assets/images/crema-catalana.jpg'
        },
        {
            id: 'pos3',
            name: {
                es: 'Coulant de Chocolate',
                en: 'Chocolate Coulant',
                fr: 'Coulant au Chocolat'
            },
            description: {
                es: 'Bizcocho de chocolate con interior fundido y helado de vainilla',
                en: 'Chocolate cake with molten center and vanilla ice cream',
                fr: 'Gâteau au chocolat avec centre fondant et glace à la vanille'
            },
            price: 6.20,
            image: 'assets/images/coulant.jpg'
        },
        {
            id: 'pos4',
            name: {
                es: 'Flan de Huevo',
                en: 'Egg Custard',
                fr: 'Flan aux Œufs'
            },
            description: {
                es: 'Flan casero de huevo con caramelo',
                en: 'Homemade egg custard with caramel',
                fr: 'Flan aux œufs maison avec caramel'
            },
            price: 4.50,
            image: 'assets/images/flan.jpg'
        },
        {
            id: 'pos5',
            name: {
                es: 'Arroz con Leche',
                en: 'Rice Pudding',
                fr: 'Riz au Lait'
            },
            description: {
                es: 'Arroz con leche cremoso con canela y limón',
                en: 'Creamy rice pudding with cinnamon and lemon',
                fr: 'Riz au lait crémeux à la cannelle et citron'
            },
            price: 4.80,
            image: 'assets/images/arroz-leche.jpg'
        },
        {
            id: 'pos6',
            name: {
                es: 'Tiramisú',
                en: 'Tiramisu',
                fr: 'Tiramisu'
            },
            description: {
                es: 'Tiramisú tradicional con café, mascarpone y cacao',
                en: 'Traditional tiramisu with coffee, mascarpone and cocoa',
                fr: 'Tiramisu traditionnel au café, mascarpone et cacao'
            },
            price: 5.50,
            image: 'assets/images/tiramisu.jpg'
        },
        {
            id: 'pos7',
            name: {
                es: 'Fruta de Temporada',
                en: 'Seasonal Fruit',
                fr: 'Fruits de Saison'
            },
            description: {
                es: 'Selección de frutas frescas de temporada',
                en: 'Selection of fresh seasonal fruits',
                fr: 'Sélection de fruits frais de saison'
            },
            price: 4.20,
            image: 'assets/images/fruta.jpg'
        },
        {
            id: 'pos8',
            name: {
                es: 'Torrijas',
                en: 'Spanish French Toast',
                fr: 'Pain Perdu Espagnol'
            },
            description: {
                es: 'Torrijas caseras con miel y canela',
                en: 'Homemade Spanish-style French toast with honey and cinnamon',
                fr: 'Pain perdu espagnol maison au miel et cannelle'
            },
            price: 5.20,
            image: 'assets/images/torrijas.jpg'
        },
        {
            id: 'pos9',
            name: {
                es: 'Helados Artesanos',
                en: 'Artisan Ice Cream',
                fr: 'Glaces Artisanales'
            },
            description: {
                es: 'Selección de helados artesanos (2 bolas)',
                en: 'Selection of artisan ice cream (2 scoops)',
                fr: 'Sélection de glaces artisanales (2 boules)'
            },
            price: 4.50,
            image: 'assets/images/helados.jpg'
        },
        {
            id: 'pos10',
            name: {
                es: 'Leche Frita',
                en: 'Fried Milk',
                fr: 'Lait Frit'
            },
            description: {
                es: 'Leche frita tradicional con canela y azúcar',
                en: 'Traditional fried milk with cinnamon and sugar',
                fr: 'Lait frit traditionnel à la cannelle et sucre'
            },
            price: 4.80,
            image: 'assets/images/leche-frita.jpg'
        }
    ],
    tablas: [
        {
            id: 'tab1',
            name: {
                es: 'Tabla de Quesos',
                en: 'Cheese Board',
                fr: 'Plateau de Fromages'
            },
            description: {
                es: 'Selección de quesos nacionales con membrillo y frutos secos',
                en: 'Selection of Spanish cheeses with quince paste and nuts',
                fr: 'Sélection de fromages espagnols avec pâte de coing et fruits secs'
            },
            price: 14.50,
            image: 'assets/images/tabla-quesos.jpg'
        },
        {
            id: 'tab2',
            name: {
                es: 'Tabla de Ibéricos',
                en: 'Iberian Cured Meats Board',
                fr: 'Plateau de Charcuteries Ibériques'
            },
            description: {
                es: 'Selección de embutidos ibéricos con pan tostado',
                en: 'Selection of Iberian cured meats with toasted bread',
                fr: 'Sélection de charcuteries ibériques avec pain grillé'
            },
            price: 18.00,
            image: 'assets/images/tabla-ibericos.jpg'
        },
        {
            id: 'tab3',
            name: {
                es: 'Tabla Mixta',
                en: 'Mixed Board',
                fr: 'Plateau Mixte'
            },
            description: {
                es: 'Combinación de quesos e ibéricos con guarnición',
                en: 'Combination of cheeses and Iberian cured meats with garnish',
                fr: 'Combinaison de fromages et charcuteries ibériques avec garniture'
            },
            price: 20.00,
            image: 'assets/images/tabla-mixta.jpg'
        },
        {
            id: 'tab4',
            name: {
                es: 'Tabla de Patés',
                en: 'Pâté Board',
                fr: 'Plateau de Pâtés'
            },
            description: {
                es: 'Selección de patés artesanos con tostadas',
                en: 'Selection of artisan pâtés with toast',
                fr: 'Sélection de pâtés artisanaux avec toasts'
            },
            price: 12.50,
            image: 'assets/images/tabla-pates.jpg'
        },
        {
            id: 'tab5',
            name: {
                es: 'Tabla de Ahumados',
                en: 'Smoked Fish Board',
                fr: 'Plateau de Poissons Fumés'
            },
            description: {
                es: 'Selección de pescados ahumados con guarnición',
                en: 'Selection of smoked fish with garnish',
                fr: 'Sélection de poissons fumés avec garniture'
            },
            price: 16.50,
            image: 'assets/images/tabla-ahumados.jpg'
        },
        {
            id: 'tab6',
            name: {
                es: 'Tabla de Quesos Internacionales',
                en: 'International Cheese Board',
                fr: 'Plateau de Fromages Internationaux'
            },
            description: {
                es: 'Selección de quesos internacionales con mermeladas',
                en: 'Selection of international cheeses with jams',
                fr: 'Sélection de fromages internationaux avec confitures'
            },
            price: 16.00,
            image: 'assets/images/tabla-quesos-inter.jpg'
        },
        {
            id: 'tab7',
            name: {
                es: 'Tabla Vegetariana',
                en: 'Vegetarian Board',
                fr: 'Plateau Végétarien'
            },
            description: {
                es: 'Selección de hummus, verduras y quesos vegetarianos',
                en: 'Selection of hummus, vegetables and vegetarian cheeses',
                fr: 'Sélection de houmous, légumes et fromages végétariens'
            },
            price: 14.00,
            image: 'assets/images/tabla-vegetariana.jpg'
        },
        {
            id: 'tab8',
            name: {
                es: 'Tabla de Jamón Ibérico',
                en: 'Iberian Ham Board',
                fr: 'Plateau de Jambon Ibérique'
            },
            description: {
                es: 'Jamón ibérico de bellota cortado a mano con pan y tomate',
                en: 'Hand-cut acorn-fed Iberian ham with bread and tomato',
                fr: 'Jambon ibérique de gland coupé à la main avec pain et tomate'
            },
            price: 22.00,
            image: 'assets/images/tabla-jamon.jpg'
        },
        {
            id: 'tab9',
            name: {
                es: 'Tabla de Salazones',
                en: 'Salted Fish Board',
                fr: 'Plateau de Poissons Salés'
            },
            description: {
                es: 'Selección de mojama, huevas y otros salazones',
                en: 'Selection of dried tuna, fish roe and other salted fish',
                fr: 'Sélection de thon séché, œufs de poisson et autres poissons salés'
            },
            price: 15.50,
            image: 'assets/images/tabla-salazones.jpg'
        },
        {
            id: 'tab10',
            name: {
                es: 'Tabla de Foie',
                en: 'Foie Gras Board',
                fr: 'Plateau de Foie Gras'
            },
            description: {
                es: 'Selección de foie mi-cuit con tostadas y mermeladas',
                en: 'Selection of mi-cuit foie gras with toast and jams',
                fr: 'Sélection de foie gras mi-cuit avec toasts et confitures'
            },
            price: 18.50,
            image: 'assets/images/tabla-foie.jpg'
        }
    ],
    'tapas-mes': [
        {
            id: 'tpm1',
            name: {
                es: 'Tartar de Atún',
                en: 'Tuna Tartare',
                fr: 'Tartare de Thon'
            },
            description: {
                es: 'Tartar de atún rojo con aguacate y sésamo',
                en: 'Bluefin tuna tartare with avocado and sesame',
                fr: 'Tartare de thon rouge avec avocat et sésame'
            },
            price: 12.50,
            image: 'assets/images/tartar-atun.jpg'
        },
        {
            id: 'tpm2',
            name: {
                es: 'Alcachofas Confitadas',
                en: 'Confit Artichokes',
                fr: 'Artichauts Confits'
            },
            description: {
                es: 'Alcachofas confitadas con jamón ibérico',
                en: 'Confit artichokes with Iberian ham',
                fr: 'Artichauts confits au jambon ibérique'
            },
            price: 10.80,
            image: 'assets/images/alcachofas.jpg'
        },
        {
            id: 'tpm3',
            name: {
                es: 'Canelones de Rabo de Toro',
                en: 'Oxtail Cannelloni',
                fr: 'Cannellonis de Queue de Bœuf'
            },
            description: {
                es: 'Canelones caseros rellenos de rabo de toro estofado',
                en: 'Homemade cannelloni stuffed with stewed oxtail',
                fr: 'Cannellonis maison farcis à la queue de bœuf mijotée'
            },
            price: 11.50,
            image: 'assets/images/canelones.jpg'
        },
        {
            id: 'tpm4',
            name: {
                es: 'Huevos Rotos con Trufa',
                en: 'Broken Eggs with Truffle',
                fr: 'Œufs Cassés à la Truffe'
            },
            description: {
                es: 'Huevos rotos con patatas, jamón ibérico y trufa negra',
                en: 'Broken eggs with potatoes, Iberian ham and black truffle',
                fr: 'Œufs cassés avec pommes de terre, jambon ibérique et truffe noire'
            },
            price: 13.00,
            image: 'assets/images/huevos-trufa.jpg'
        },
        {
            id: 'tpm5',
            name: {
                es: 'Tataki de Vaca',
                en: 'Beef Tataki',
                fr: 'Tataki de Bœuf'
            },
            description: {
                es: 'Tataki de vaca madurada con salsa ponzu',
                en: 'Aged beef tataki with ponzu sauce',
                fr: 'Tataki de bœuf maturé avec sauce ponzu'
            },
            price: 14.50,
            image: 'assets/images/tataki-vaca.jpg'
        },
        {
            id: 'tpm6',
            name: {
                es: 'Risotto de Setas',
                en: 'Mushroom Risotto',
                fr: 'Risotto aux Champignons'
            },
            description: {
                es: 'Risotto cremoso de setas silvestres y parmesano',
                en: 'Creamy wild mushroom and parmesan risotto',
                fr: 'Risotto crémeux aux champignons sauvages et parmesan'
            },
            price: 12.00,
            image: 'assets/images/risotto.jpg'
        },
        {
            id: 'tpm7',
            name: {
                es: 'Vieiras a la Plancha',
                en: 'Grilled Scallops',
                fr: 'Coquilles Saint-Jacques Grillées'
            },
            description: {
                es: 'Vieiras a la plancha con puré de coliflor y crujiente de jamón',
                en: 'Grilled scallops with cauliflower purée and crispy ham',
                fr: 'Coquilles Saint-Jacques grillées avec purée de chou-fleur et jambon croustillant'
            },
            price: 15.00,
            image: 'assets/images/vieiras.jpg'
        },
        {
            id: 'tpm8',
            name: {
                es: 'Carrillera Ibérica',
                en: 'Iberian Pork Cheek',
                fr: 'Joue de Porc Ibérique'
            },
            description: {
                es: 'Carrillera ibérica estofada al vino tinto con puré de patata',
                en: 'Iberian pork cheek stewed in red wine with mashed potatoes',
                fr: 'Joue de porc ibérique mijotée au vin rouge avec purée de pommes de terre'
            },
            price: 13.50,
            image: 'assets/images/carrillera.jpg'
        },
        {
            id: 'tpm9',
            name: {
                es: 'Ensalada de Burrata',
                en: 'Burrata Salad',
                fr: 'Salade de Burrata'
            },
            description: {
                es: 'Burrata con tomates cherry, rúcula y pesto',
                en: 'Burrata with cherry tomatoes, arugula and pesto',
                fr: 'Burrata avec tomates cerises, roquette et pesto'
            },
            price: 11.00,
            image: 'assets/images/burrata.jpg'
        },
        {
            id: 'tpm10',
            name: {
                es: 'Pulpo a la Brasa',
                en: 'Grilled Octopus',
                fr: 'Poulpe Grillé'
            },
            description: {
                es: 'Pulpo a la brasa con parmentier de patata y pimentón',
                en: 'Grilled octopus with potato parmentier and paprika',
                fr: 'Poulpe grillé avec parmentier de pomme de terre et paprika'
            },
            price: 16.50,
            image: 'assets/images/pulpo-brasa.jpg'
        }
    ],
    torradas: [
        {
            id: 'tor1',
            name: {
                es: 'Torrada de Jamón y Tomate',
                en: 'Ham and Tomato Toast',
                fr: 'Toast au Jambon et Tomate'
            },
            description: {
                es: 'Pan rústico tostado con tomate, aceite y jamón ibérico',
                en: 'Toasted rustic bread with tomato, oil and Iberian ham',
                fr: 'Pain rustique grillé avec tomate, huile et jambon ibérique'
            },
            price: 6.50,
            image: 'assets/images/torrada-jamon.jpg'
        },
        {
            id: 'tor2',
            name: {
                es: 'Torrada de Escalivada',
                en: 'Roasted Vegetables Toast',
                fr: 'Toast aux Légumes Rôtis'
            },
            description: {
                es: 'Pan tostado con berenjena, pimiento y cebolla asados',
                en: 'Toast with roasted eggplant, pepper and onion',
                fr: 'Toast avec aubergine, poivron et oignon rôtis'
            },
            price: 5.80,
            image: 'assets/images/torrada-escalivada.jpg'
        },
        {
            id: 'tor3',
            name: {
                es: 'Torrada de Queso de Cabra',
                en: 'Goat Cheese Toast',
                fr: 'Toast au Fromage de Chèvre'
            },
            description: {
                es: 'Pan tostado con queso de cabra gratinado y miel',
                en: 'Toast with gratinated goat cheese and honey',
                fr: 'Toast avec fromage de chèvre gratiné et miel'
            },
            price: 6.00,
            image: 'assets/images/torrada-cabra.jpg'
        },
        {
            id: 'tor4',
            name: {
                es: 'Torrada de Anchoas',
                en: 'Anchovy Toast',
                fr: 'Toast aux Anchois'
            },
            description: {
                es: 'Pan tostado con anchoas del Cantábrico, tomate y aceite',
                en: 'Toast with Cantabrian anchovies, tomato and oil',
                fr: 'Toast avec anchois de Cantabrie, tomate et huile'
            },
            price: 7.00,
            image: 'assets/images/torrada-anchoas.jpg'
        },
        {
            id: 'tor5',
            name: {
                es: 'Torrada de Sobrasada',
                en: 'Sobrasada Toast',
                fr: 'Toast à la Sobrasada'
            },
            description: {
                es: 'Pan tostado con sobrasada mallorquina y miel',
                en: 'Toast with Mallorcan sobrasada and honey',
                fr: 'Toast avec sobrasada majorquine et miel'
            },
            price: 5.50,
            image: 'assets/images/torrada-sobrasada.jpg'
        },
        {
            id: 'tor6',
            name: {
                es: 'Torrada de Aguacate',
                en: 'Avocado Toast',
                fr: 'Toast à l\'Avocat'
            },
            description: {
                es: 'Pan tostado con aguacate, tomate cherry y rúcula',
                en: 'Toast with avocado, cherry tomatoes and arugula',
                fr: 'Toast avec avocat, tomates cerises et roquette'
            },
            price: 6.20,
            image: 'assets/images/torrada-aguacate.jpg'
        },
        {
            id: 'tor7',
            name: {
                es: 'Torrada de Salmón',
                en: 'Salmon Toast',
                fr: 'Toast au Saumon'
            },
            description: {
                es: 'Pan tostado con salmón ahumado, queso crema y eneldo',
                en: 'Toast with smoked salmon, cream cheese and dill',
                fr: 'Toast avec saumon fumé, fromage frais et aneth'
            },
            price: 6.80,
            image: 'assets/images/torrada-salmon.jpg'
        },
        {
            id: 'tor8',
            name: {
                es: 'Torrada de Champiñones',
                en: 'Mushroom Toast',
                fr: 'Toast aux Champignons'
            },
            description: {
                es: 'Pan tostado con champiñones salteados y ajo',
                en: 'Toast with sautéed mushrooms and garlic',
                fr: 'Toast avec champignons sautés et ail'
            },
            price: 5.80,
            image: 'assets/images/torrada-champinones.jpg'
        },
        {
            id: 'tor9',
            name: {
                es: 'Torrada de Paté',
                en: 'Pâté Toast',
                fr: 'Toast au Pâté'
            },
            description: {
                es: 'Pan tostado con paté de campaña y cebolla caramelizada',
                en: 'Toast with country pâté and caramelized onion',
                fr: 'Toast avec pâté de campagne et oignon caramélisé'
            },
            price: 5.50,
            image: 'assets/images/torrada-pate.jpg'
        },
        {
            id: 'tor10',
            name: {
                es: 'Torrada de Pimientos y Atún',
                en: 'Peppers and Tuna Toast',
                fr: 'Toast aux Poivrons et Thon'
            },
            description: {
                es: 'Pan tostado con pimientos asados y ventresca de atún',
                en: 'Toast with roasted peppers and tuna belly',
                fr: 'Toast avec poivrons rôtis et ventrèche de thon'
            },
            price: 6.20,
            image: 'assets/images/torrada-pimientos.jpg'
        }
    ],
    vermuts: [
        {
            id: 'ver1',
            name: {
                es: 'Vermut Rojo Casero',
                en: 'Homemade Red Vermouth',
                fr: 'Vermouth Rouge Maison'
            },
            description: {
                es: 'Vermut rojo casero con aceituna y naranja',
                en: 'Homemade red vermouth with olive and orange',
                fr: 'Vermouth rouge maison avec olive et orange'
            },
            price: 3.50,
            image: 'assets/images/vermut-rojo.jpg'
        },
        {
            id: 'ver2',
            name: {
                es: 'Vermut Blanco',
                en: 'White Vermouth',
                fr: 'Vermouth Blanc'
            },
            description: {
                es: 'Vermut blanco con aceituna y limón',
                en: 'White vermouth with olive and lemon',
                fr: 'Vermouth blanc avec olive et citron'
            },
            price: 3.50,
            image: 'assets/images/vermut-blanco.jpg'
        },
        {
            id: 'ver3',
            name: {
                es: 'Vermut Reserva',
                en: 'Reserve Vermouth',
                fr: 'Vermouth Réserve'
            },
            description: {
                es: 'Vermut reserva con naranja y aceituna rellena',
                en: 'Reserve vermouth with orange and stuffed olive',
                fr: 'Vermouth réserve avec orange et olive farcie'
            },
            price: 4.50,
            image: 'assets/images/vermut-reserva.jpg'
        },
        {
            id: 'ver4',
            name: {
                es: 'Vermut Negro',
                en: 'Black Vermouth',
                fr: 'Vermouth Noir'
            },
            description: {
                es: 'Vermut negro con naranja y aceituna',
                en: 'Black vermouth with orange and olive',
                fr: 'Vermouth noir avec orange et olive'
            },
            price: 3.80,
            image: 'assets/images/vermut-negro.jpg'
        },
        {
            id: 'ver5',
            name: {
                es: 'Vermut Rosado',
                en: 'Rosé Vermouth',
                fr: 'Vermouth Rosé'
            },
            description: {
                es: 'Vermut rosado con fresa y limón',
                en: 'Rosé vermouth with strawberry and lemon',
                fr: 'Vermouth rosé avec fraise et citron'
            },
            price: 3.80,
            image: 'assets/images/vermut-rosado.jpg'
        },
        {
            id: 'ver6',
            name: {
                es: 'Vermut de Barril',
                en: 'Draft Vermouth',
                fr: 'Vermouth Pression'
            },
            description: {
                es: 'Vermut de barril con sifón y aceituna',
                en: 'Draft vermouth with soda siphon and olive',
                fr: 'Vermouth pression avec siphon et olive'
            },
            price: 3.20,
            image: 'assets/images/vermut-barril.jpg'
        },
        {
            id: 'ver7',
            name: {
                es: 'Vermut Premium',
                en: 'Premium Vermouth',
                fr: 'Vermouth Premium'
            },
            description: {
                es: 'Vermut premium con naranja, aceituna y anchoa',
                en: 'Premium vermouth with orange, olive and anchovy',
                fr: 'Vermouth premium avec orange, olive et anchois'
            },
            price: 5.00,
            image: 'assets/images/vermut-premium.jpg'
        },
        {
            id: 'ver8',
            name: {
                es: 'Vermut con Ginebra',
                en: 'Vermouth with Gin',
                fr: 'Vermouth au Gin'
            },
            description: {
                es: 'Vermut rojo con toque de ginebra y naranja',
                en: 'Red vermouth with a touch of gin and orange',
                fr: 'Vermouth rouge avec une touche de gin et orange'
            },
            price: 4.50,
            image: 'assets/images/vermut-ginebra.jpg'
        },
        {
            id: 'ver9',
            name: {
                es: 'Vermut Especiado',
                en: 'Spiced Vermouth',
                fr: 'Vermouth Épicé'
            },
            description: {
                es: 'Vermut con especias, canela y naranja',
                en: 'Vermouth with spices, cinnamon and orange',
                fr: 'Vermouth aux épices, cannelle et orange'
            },
            price: 4.20,
            image: 'assets/images/vermut-especiado.jpg'
        },
        {
            id: 'ver10',
            name: {
                es: 'Vermut con Bitter',
                en: 'Vermouth with Bitter',
                fr: 'Vermouth avec Bitter'
            },
            description: {
                es: 'Vermut con bitter, naranja y aceituna',
                en: 'Vermouth with bitter, orange and olive',
                fr: 'Vermouth avec bitter, orange et olive'
            },
            price: 4.00,
            image: 'assets/images/vermut-bitter.jpg'
        }
    ],
    tapas: [
        {
            id: 'tap1',
            name: {
                es: 'Patatas Bravas',
                en: 'Spicy Potatoes',
                fr: 'Pommes de Terre Épicées'
            },
            description: {
                es: 'Patatas fritas con salsa brava y alioli',
                en: 'Fried potatoes with spicy sauce and aioli',
                fr: 'Pommes de terre frites avec sauce épicée et aïoli'
            },
            price: 5.50,
            image: 'assets/images/patatas-bravas.jpg'
        },
        {
            id: 'tap2',
            name: {
                es: 'Calamares a la Romana',
                en: 'Fried Squid Rings',
                fr: 'Calamars Frits'
            },
            description: {
                es: 'Calamares rebozados con limón y mayonesa',
                en: 'Battered squid rings with lemon and mayonnaise',
                fr: 'Calamars panés avec citron et mayonnaise'
            },
            price: 7.80,
            image: 'assets/images/calamares.jpg'
        },
        {
            id: 'tap3',
            name: {
                es: 'Gambas al Ajillo',
                en: 'Garlic Prawns',
                fr: 'Crevettes à l\'Ail'
            },
            description: {
                es: 'Gambas salteadas con ajo y guindilla',
                en: 'Sautéed prawns with garlic and chili',
                fr: 'Crevettes sautées à l\'ail et piment'
            },
            price: 9.50,
            image: 'assets/images/gambas-ajillo.jpg'
        },
        {
            id: 'tap4',
            name: {
                es: 'Tortilla Española',
                en: 'Spanish Omelette',
                fr: 'Omelette Espagnole'
            },
            description: {
                es: 'Tortilla de patatas casera',
                en: 'Homemade potato omelette',
                fr: 'Omelette de pommes de terre maison'
            },
            price: 4.50,
            image: 'assets/images/tortilla-espanola.jpg'
        },
        {
            id: 'tap5',
            name: {
                es: 'Boquerones en Vinagre',
                en: 'Anchovies in Vinegar',
                fr: 'Anchois au Vinaigre'
            },
            description: {
                es: 'Boquerones marinados en vinagre con ajo y perejil',
                en: 'Anchovies marinated in vinegar with garlic and parsley',
                fr: 'Anchois marinés au vinaigre avec ail et persil'
            },
            price: 6.50,
            image: 'assets/images/boquerones.jpg'
        },
        {
            id: 'tap6',
            name: {
                es: 'Pimientos de Padrón',
                en: 'Padrón Peppers',
                fr: 'Poivrons de Padrón'
            },
            description: {
                es: 'Pimientos de Padrón fritos con sal en escamas',
                en: 'Fried Padrón peppers with flaky salt',
                fr: 'Poivrons de Padrón frits avec sel en flocons'
            },
            price: 5.80,
            image: 'assets/images/pimientos-padron.jpg'
        },
        {
            id: 'tap7',
            name: {
                es: 'Ensaladilla Rusa',
                en: 'Russian Salad',
                fr: 'Salade Russe'
            },
            description: {
                es: 'Ensaladilla rusa casera con atún y mayonesa',
                en: 'Homemade Russian salad with tuna and mayonnaise',
                fr: 'Salade russe maison au thon et mayonnaise'
            },
            price: 5.50,
            image: 'assets/images/ensaladilla.jpg'
        },
        {
            id: 'tap8',
            name: {
                es: 'Albóndigas en Salsa',
                en: 'Meatballs in Sauce',
                fr: 'Boulettes de Viande en Sauce'
            },
            description: {
                es: 'Albóndigas caseras en salsa de tomate',
                en: 'Homemade meatballs in tomato sauce',
                fr: 'Boulettes de viande maison en sauce tomate'
            },
            price: 7.20,
            image: 'assets/images/albondigas.jpg'
        },
        {
            id: 'tap9',
            name: {
                es: 'Chorizo a la Sidra',
                en: 'Chorizo in Cider',
                fr: 'Chorizo au Cidre'
            },
            description: {
                es: 'Chorizo cocinado en sidra asturiana',
                en: 'Chorizo cooked in Asturian cider',
                fr: 'Chorizo cuit au cidre asturien'
            },
            price: 6.80,
            image: 'assets/images/chorizo-sidra.jpg'
        },
        {
            id: 'tap10',
            name: {
                es: 'Berenjenas Fritas con Miel',
                en: 'Fried Eggplant with Honey',
                fr: 'Aubergines Frites au Miel'
            },
            description: {
                es: 'Berenjenas fritas crujientes con miel de caña',
                en: 'Crispy fried eggplant with cane honey',
                fr: 'Aubergines frites croustillantes au miel de canne'
            },
            price: 6.20,
            image: 'assets/images/berenjenas.jpg'
        }
    ],
    vinos: [
        {
            id: 'vin1',
            name: {
                es: 'Rioja Crianza',
                en: 'Rioja Crianza',
                fr: 'Rioja Crianza'
            },
            description: {
                es: 'Vino tinto Rioja Crianza, 12 meses en barrica',
                en: 'Rioja Crianza red wine, 12 months in barrel',
                fr: 'Vin rouge Rioja Crianza, 12 mois en fût'
            },
            price: 16.50,
            image: 'assets/images/rioja-crianza.jpg'
        },
        {
            id: 'vin2',
            name: {
                es: 'Albariño',
                en: 'Albariño',
                fr: 'Albariño'
            },
            description: {
                es: 'Vino blanco Albariño de Rías Baixas',
                en: 'Albariño white wine from Rías Baixas',
                fr: 'Vin blanc Albariño de Rías Baixas'
            },
            price: 18.00,
            image: 'assets/images/albarino.jpg'
        },
        {
            id: 'vin3',
            name: {
                es: 'Ribera del Duero Reserva',
                en: 'Ribera del Duero Reserve',
                fr: 'Ribera del Duero Réserve'
            },
            description: {
                es: 'Vino tinto Ribera del Duero Reserva, 18 meses en barrica',
                en: 'Ribera del Duero Reserve red wine, 18 months in barrel',
                fr: 'Vin rouge Ribera del Duero Réserve, 18 mois en fût'
            },
            price: 24.00,
            image: 'assets/images/ribera-reserva.jpg'
        },
        {
            id: 'vin4',
            name: {
                es: 'Verdejo',
                en: 'Verdejo',
                fr: 'Verdejo'
            },
            description: {
                es: 'Vino blanco Verdejo de Rueda',
                en: 'Verdejo white wine from Rueda',
                fr: 'Vin blanc Verdejo de Rueda'
            },
            price: 14.50,
            image: 'assets/images/verdejo.jpg'
        },
        {
            id: 'vin5',
            name: {
                es: 'Priorat',
                en: 'Priorat',
                fr: 'Priorat'
            },
            description: {
                es: 'Vino tinto Priorat, intenso y mineral',
                en: 'Priorat red wine, intense and mineral',
                fr: 'Vin rouge Priorat, intense et minéral'
            },
            price: 28.00,
            image: 'assets/images/priorat.jpg'
        },
        {
            id: 'vin6',
            name: {
                es: 'Cava Brut Nature',
                en: 'Cava Brut Nature',
                fr: 'Cava Brut Nature'
            },
            description: {
                es: 'Cava Brut Nature, método tradicional',
                en: 'Cava Brut Nature, traditional method',
                fr: 'Cava Brut Nature, méthode traditionnelle'
            },
            price: 16.00,
            image: 'assets/images/cava.jpg'
        },
        {
            id: 'vin7',
            name: {
                es: 'Mencía',
                en: 'Mencía',
                fr: 'Mencía'
            },
            description: {
                es: 'Vino tinto Mencía de Bierzo',
                en: 'Mencía red wine from Bierzo',
                fr: 'Vin rouge Mencía de Bierzo'
            },
            price: 19.50,
            image: 'assets/images/mencia.jpg'
        },
        {
            id: 'vin8',
            name: {
                es: 'Godello',
                en: 'Godello',
                fr: 'Godello'
            },
            description: {
                es: 'Vino blanco Godello de Valdeorras',
                en: 'Godello white wine from Valdeorras',
                fr: 'Vin blanc Godello de Valdeorras'
            },
            price: 17.50,
            image: 'assets/images/godello.jpg'
        },
        {
            id: 'vin9',
            name: {
                es: 'Rosado de Navarra',
                en: 'Navarra Rosé',
                fr: 'Rosé de Navarre'
            },
            description: {
                es: 'Vino rosado de Navarra, fresco y afrutado',
                en: 'Navarra rosé wine, fresh and fruity',
                fr: 'Vin rosé de Navarre, frais et fruité'
            },
            price: 15.00,
            image: 'assets/images/rosado.jpg'
        },
        {
            id: 'vin10',
            name: {
                es: 'Pedro Ximénez',
                en: 'Pedro Ximénez',
                fr: 'Pedro Ximénez'
            },
            description: {
                es: 'Vino dulce Pedro Ximénez de Jerez',
                en: 'Pedro Ximénez sweet wine from Jerez',
                fr: 'Vin doux Pedro Ximénez de Jerez'
            },
            price: 22.00,
            image: 'assets/images/pedro-ximenez.jpg'
        }
    ],
    sugerencias: [
        {
            id: 'sug1',
            name: {
                es: 'Arroz Meloso de Bogavante',
                en: 'Creamy Lobster Rice',
                fr: 'Riz Crémeux au Homard'
            },
            description: {
                es: 'Arroz meloso con bogavante fresco (mín. 2 personas)',
                en: 'Creamy rice with fresh lobster (min. 2 people)',
                fr: 'Riz crémeux au homard frais (min. 2 personnes)'
            },
            price: 26.00,
            image: 'assets/images/arroz-bogavante-sug.jpg'
        },
        {
            id: 'sug2',
            name: {
                es: 'Steak Tartar',
                en: 'Steak Tartare',
                fr: 'Steak Tartare'
            },
            description: {
                es: 'Steak tartar de solomillo de vaca madurada preparado en mesa',
                en: 'Aged beef sirloin steak tartare prepared at the table',
                fr: 'Steak tartare de filet de bœuf maturé préparé à table'
            },
            price: 22.00,
            image: 'assets/images/steak-tartar.jpg'
        },
        {
            id: 'sug3',
            name: {
                es: 'Lubina a la Sal',
                en: 'Salt-Baked Sea Bass',
                fr: 'Bar en Croûte de Sel'
            },
            description: {
                es: 'Lubina entera cocinada en costra de sal (mín. 2 personas)',
                en: 'Whole sea bass cooked in salt crust (min. 2 people)',
                fr: 'Bar entier cuit en croûte de sel (min. 2 personnes)'
            },
            price: 42.00,
            image: 'assets/images/lubina-sal.jpg'
        },
        {
            id: 'sug4',
            name: {
                es: 'Solomillo al Foie',
                en: 'Sirloin with Foie Gras',
                fr: 'Filet de Bœuf au Foie Gras'
            },
            description: {
                es: 'Solomillo de vaca con foie fresco y reducción de Pedro Ximénez',
                en: 'Beef sirloin with fresh foie gras and Pedro Ximénez reduction',
                fr: 'Filet de bœuf avec foie gras frais et réduction de Pedro Ximénez'
            },
            price: 26.50,
            image: 'assets/images/solomillo-foie.jpg'
        },
        {
            id: 'sug5',
            name: {
                es: 'Caldereta de Bogavante',
                en: 'Lobster Stew',
                fr: 'Ragoût de Homard'
            },
            description: {
                es: 'Caldereta tradicional de bogavante con patatas',
                en: 'Traditional lobster stew with potatoes',
                fr: 'Ragoût traditionnel de homard avec pommes de terre'
            },
            price: 28.00,
            image: 'assets/images/caldereta.jpg'
        }
    ]
};

// Configuración de la aplicación
const appConfig = {
    defaultLanguage: 'es',
    adminPassword: 'admin1234',
    modalTimeout: 500, // ms
};

// Estado de la aplicación
let currentState = {
    language: appConfig.defaultLanguage,
    currentCategory: null,
    adminMode: false,
};

// Función para inicializar la aplicación
function initApp() {
    // Configurar selector de idioma
    setupLanguageSelector();
    
    // Configurar navegación de categorías
    setupCategoryNavigation();
    
    // Configurar menú hamburguesa
    setupHamburgerMenu();
    
    // Configurar modal de sugerencias
    setupSuggestionsModal();
    
    // Configurar acceso al panel de administración
    setupAdminAccess();
    
    // Mostrar productos de la primera categoría por defecto
    showCategory('desayunos');
    
    // Mostrar modal de sugerencias al cargar la página
    setTimeout(() => {
        showSuggestionsModal();
    }, appConfig.modalTimeout);
}

// Configurar selector de idioma
function setupLanguageSelector() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            changeLanguage(lang);
            
            // Actualizar botones activos
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
        
        // Activar botón del idioma por defecto
        if (btn.getAttribute('data-lang') === appConfig.defaultLanguage) {
            btn.classList.add('active');
        }
    });
}

// Cambiar idioma
function changeLanguage(lang) {
    document.body.className = ''; // Limpiar clases anteriores
    document.body.classList.add(`lang-${lang}`);
    currentState.language = lang;
    
    // Actualizar productos si hay una categoría seleccionada
    if (currentState.currentCategory) {
        showCategory(currentState.currentCategory);
    }
}

// Configurar navegación de categorías
function setupCategoryNavigation() {
    const categoryItems = document.querySelectorAll('.category-nav li');
    
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            const category = item.getAttribute('data-category');
            showCategory(category);
            
            // Actualizar categoría activa
            categoryItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            // Cerrar menú hamburguesa en móvil
            document.querySelector('.category-nav').classList.remove('active');
        });
    });
}

// Mostrar productos de una categoría
function showCategory(category) {
    const productsContainer = document.querySelector('.products-container');
    const products = productData[category] || [];
    currentState.currentCategory = category;
    
    // Limpiar contenedor
    productsContainer.innerHTML = '';
    
    // Añadir productos
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
    });
}

// Crear tarjeta de producto
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-id', product.id);
    
    const lang = currentState.language;
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name[lang]}" class="product-image">
        <div class="product-info">
            <h3 class="product-title">${product.name[lang]}</h3>
            <p class="product-description">${product.description[lang]}</p>
            <p class="product-price">${product.price.toFixed(2)} €</p>
        </div>
    `;
    
    return card;
}

// Configurar menú hamburguesa
function setupHamburgerMenu() {
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.category-nav');
    
    hamburgerBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Configurar modal de sugerencias
function setupSuggestionsModal() {
    const modal = document.getElementById('suggestionsModal');
    const closeBtn = document.querySelector('.close-modal');
    const modalBody = document.querySelector('.modal-body');
    
    // Cargar sugerencias en el modal
    const suggestions = productData.sugerencias || [];
    suggestions.forEach(suggestion => {
        const suggestionCard = createProductCard(suggestion);
        modalBody.appendChild(suggestionCard);
    });
    
    // Configurar cierre del modal
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    // Cerrar modal al hacer clic fuera del contenido
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}

// Mostrar modal de sugerencias
function showSuggestionsModal() {
    const modal = document.getElementById('suggestionsModal');
    modal.classList.add('active');
}

// Configurar acceso al panel de administración
function setupAdminAccess() {
    // Escuchar combinación de teclas Ctrl+M
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'm') {
            if (!currentState.adminMode) {
                promptAdminPassword();
            } else {
                toggleAdminPanel();
            }
        }
    });
}

// Solicitar contraseña de administrador
function promptAdminPassword() {
    const password = prompt('Introduce la contraseña de administrador:');
    
    if (password === appConfig.adminPassword) {
        currentState.adminMode = true;
        createAdminPanel();
    } else if (password !== null) {
        alert('Contraseña incorrecta');
    }
}

// Crear panel de administración
function createAdminPanel() {
    // Comprobar si ya existe el panel
    if (document.getElementById('adminPanel')) {
        toggleAdminPanel();
        return;
    }
    
    // Crear panel
    const adminPanel = document.createElement('div');
    adminPanel.id = 'adminPanel';
    adminPanel.className = 'admin-panel';
    
    adminPanel.innerHTML = `
        <div class="admin-header">
            <h2>Panel de Administración</h2>
            <span class="close-admin">&times;</span>
        </div>
        <div class="admin-content">
            <div class="admin-tabs">
                <button class="admin-tab active" data-tab="categories">Categorías</button>
                <button class="admin-tab" data-tab="products">Productos</button>
                <button class="admin-tab" data-tab="settings">Configuración</button>
            </div>
            <div class="admin-tab-content">
                <div class="tab-pane active" id="categories-tab">
                    <h3>Gestionar Categorías</h3>
                    <div class="category-list">
                        ${Object.keys(productData).map(cat => `
                            <div class="admin-item">
                                <span>${cat}</span>
                                <div class="admin-actions">
                                    <button class="edit-btn" data-action="edit-category" data-id="${cat}">Editar</button>
                                    <button class="delete-btn" data-action="delete-category" data-id="${cat}">Eliminar</button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <button class="add-btn" data-action="add-category">Añadir Categoría</button>
                </div>
                <div class="tab-pane" id="products-tab">
                    <h3>Gestionar Productos</h3>
                    <div class="category-selector">
                        <label for="admin-category-select">Categoría:</label>
                        <select id="admin-category-select">
                            ${Object.keys(productData).map(cat => `
                                <option value="${cat}">${cat}</option>
                            `).join('')}
                        </select>
                    </div>
                    <div class="product-list">
                        <!-- Los productos se cargarán dinámicamente -->
                    </div>
                    <button class="add-btn" data-action="add-product">Añadir Producto</button>
                </div>
                <div class="tab-pane" id="settings-tab">
                    <h3>Configuración</h3>
                    <div class="settings-form">
                        <div class="form-group">
                            <label for="admin-password">Contraseña de Administrador:</label>
                            <input type="password" id="admin-password" value="${appConfig.adminPassword}">
                        </div>
                        <div class="form-group">
                            <label for="default-language">Idioma por Defecto:</label>
                            <select id="default-language">
                                <option value="es" ${appConfig.defaultLanguage === 'es' ? 'selected' : ''}>Español</option>
                                <option value="en" ${appConfig.defaultLanguage === 'en' ? 'selected' : ''}>Inglés</option>
                                <option value="fr" ${appConfig.defaultLanguage === 'fr' ? 'selected' : ''}>Francés</option>
                            </select>
                        </div>
                        <button class="save-btn" data-action="save-settings">Guardar Configuración</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(adminPanel);
    
    // Configurar eventos del panel
    setupAdminPanelEvents();
    
    // Mostrar panel
    setTimeout(() => {
        adminPanel.classList.add('active');
    }, 10);
    
    // Cargar productos de la primera categoría
    loadProductsForCategory(Object.keys(productData)[0]);
}

// Configurar eventos del panel de administración
function setupAdminPanelEvents() {
    const adminPanel = document.getElementById('adminPanel');
    
    // Cerrar panel
    adminPanel.querySelector('.close-admin').addEventListener('click', () => {
        toggleAdminPanel();
    });
    
    // Cambiar entre pestañas
    const tabs = adminPanel.querySelectorAll('.admin-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-tab');
            
            // Actualizar pestañas activas
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Actualizar contenido activo
            const tabPanes = adminPanel.querySelectorAll('.tab-pane');
            tabPanes.forEach(pane => pane.classList.remove('active'));
            adminPanel.querySelector(`#${tabName}-tab`).classList.add('active');
        });
    });
    
    // Selector de categoría para productos
    const categorySelect = adminPanel.querySelector('#admin-category-select');
    categorySelect.addEventListener('change', () => {
        loadProductsForCategory(categorySelect.value);
    });
    
    // Botones de acción
    adminPanel.addEventListener('click', (e) => {
        const target = e.target;
        if (target.hasAttribute('data-action')) {
            const action = target.getAttribute('data-action');
            const id = target.getAttribute('data-id');
            
            switch (action) {
                case 'add-category':
                    addCategory();
                    break;
                case 'edit-category':
                    editCategory(id);
                    break;
                case 'delete-category':
                    deleteCategory(id);
                    break;
                case 'add-product':
                    addProduct(categorySelect.value);
                    break;
                case 'edit-product':
                    editProduct(categorySelect.value, id);
                    break;
                case 'delete-product':
                    deleteProduct(categorySelect.value, id);
                    break;
                case 'save-settings':
                    saveSettings();
                    break;
            }
        }
    });
}

// Cargar productos para una categoría en el panel de administración
function loadProductsForCategory(category) {
    const productList = document.querySelector('.product-list');
    const products = productData[category] || [];
    
    // Limpiar lista
    productList.innerHTML = '';
    
    // Añadir productos
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'admin-item';
        productItem.innerHTML = `
            <span>${product.name.es}</span>
            <div class="admin-actions">
                <button class="edit-btn" data-action="edit-product" data-id="${product.id}">Editar</button>
                <button class="delete-btn" data-action="delete-product" data-id="${product.id}">Eliminar</button>
            </div>
        `;
        productList.appendChild(productItem);
    });
}

// Mostrar/ocultar panel de administración
function toggleAdminPanel() {
    const adminPanel = document.getElementById('adminPanel');
    if (adminPanel) {
        adminPanel.classList.toggle('active');
    }
}

// Funciones de administración de categorías
function addCategory() {
    const categoryName = prompt('Introduce el nombre de la nueva categoría:');
    if (categoryName && categoryName.trim() !== '') {
        const normalizedName = categoryName.trim().toLowerCase().replace(/\s+/g, '-');
        
        if (productData[normalizedName]) {
            alert('Ya existe una categoría con ese nombre');
            return;
        }
        
        // Añadir nueva categoría
        productData[normalizedName] = [];
        
        // Actualizar interfaz
        updateAdminInterface();
    }
}

function editCategory(categoryId) {
    const newName = prompt('Introduce el nuevo nombre para la categoría:', categoryId);
    if (newName && newName.trim() !== '' && newName !== categoryId) {
        const normalizedName = newName.trim().toLowerCase().replace(/\s+/g, '-');
        
        if (productData[normalizedName]) {
            alert('Ya existe una categoría con ese nombre');
            return;
        }
        
        // Guardar productos
        const products = productData[categoryId];
        
        // Eliminar categoría antigua
        delete productData[categoryId];
        
        // Crear nueva categoría
        productData[normalizedName] = products;
        
        // Actualizar interfaz
        updateAdminInterface();
    }
}

function deleteCategory(categoryId) {
    if (confirm(`¿Estás seguro de que quieres eliminar la categoría "${categoryId}" y todos sus productos?`)) {
        // Eliminar categoría
        delete productData[categoryId];
        
        // Actualizar interfaz
        updateAdminInterface();
    }
}

// Funciones de administración de productos
function addProduct(category) {
    // Implementación simplificada
    alert('Funcionalidad de añadir producto implementada en la versión completa');
}

function editProduct(category, productId) {
    // Implementación simplificada
    alert('Funcionalidad de editar producto implementada en la versión completa');
}

function deleteProduct(category, productId) {
    if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
        // Encontrar índice del producto
        const index = productData[category].findIndex(p => p.id === productId);
        
        if (index !== -1) {
            // Eliminar producto
            productData[category].splice(index, 1);
            
            // Actualizar interfaz
            loadProductsForCategory(category);
            
            // Si la categoría actual es la que se está editando, actualizar vista
            if (currentState.currentCategory === category) {
                showCategory(category);
            }
        }
    }
}

// Guardar configuración
function saveSettings() {
    const passwordInput = document.getElementById('admin-password');
    const languageSelect = document.getElementById('default-language');
    
    appConfig.adminPassword = passwordInput.value;
    appConfig.defaultLanguage = languageSelect.value;
    
    alert('Configuración guardada correctamente');
}

// Actualizar interfaz de administración
function updateAdminInterface() {
    // Recrear panel de administración
    document.getElementById('adminPanel').remove();
    createAdminPanel();
    
    // Actualizar navegación de categorías
    updateCategoryNavigation();
}

// Actualizar navegación de categorías
function updateCategoryNavigation() {
    const categoryNav = document.querySelector('.category-nav ul');
    categoryNav.innerHTML = '';
    
    // Añadir categorías
    Object.keys(productData).forEach(category => {
        const li = document.createElement('li');
        li.setAttribute('data-category', category);
        
        // Determinar icono (simplificado)
        let icon = 'fas fa-utensils';
        
        li.innerHTML = `
            <i class="${icon}"></i> 
            <span class="lang-es">${category}</span>
            <span class="lang-en">${category}</span>
            <span class="lang-fr">${category}</span>
        `;
        
        categoryNav.appendChild(li);
    });
    
    // Reconfigurar eventos
    setupCategoryNavigation();
    
    // Mostrar primera categoría
    if (Object.keys(productData).length > 0) {
        showCategory(Object.keys(productData)[0]);
    } else {
        document.querySelector('.products-container').innerHTML = '';
    }
}

// Inicializar la aplicación cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', initApp);
