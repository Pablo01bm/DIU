/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Reginald Miles",
                Photo: "16.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere realizar un viaje en sus vacaciones",
                touch1: "agenda",
                feel1: "4",
                con1: "ver cuantos días puede tener libres para organizar lugar de viaje ",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECISION ***/ 
                goal2: "Busca en internet ofertas para esas fechas",
                touch2: "Portátil",
                feel2: "1",
                con2: "No encuentra nada barato, por tanto se frustra y pierde el tiempo",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide buscar un Hostel en Granada, donde hará buen tiempo y podrá visitar de los mejores monumentos del país español",
                touch3: "Portátil",
                feel3: "3",
                con3: "Está preocupado por si le tocará mucha gente en el hostel o no",
                ima3: "cartoon-PCangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Por casualidad buscando Hostels por internet se encuentra con el Hostel Carlota Braun",
                touch4: "Portátil",
                feel4: "4",
                con4: "Buscar opciones en el lugar que había seleccionado, viendo sobre todo el precio y la distancia del centro a la ciudad",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Se encuentra una habitación en dicho Hostel a muy buen precio y encima esta muy centrico en la ciudad",
                touch5: "Portátil",
                feel5: "3",
                con5: "Le empieza a dar algo de pánico que en la misma habitación se pueda encontrar con hasta 6 personas",
                ima5: "cartoon-thinking.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue reservar de una manera muy facil e intuitiva en la pagina web",
                touch6: "ordenador",
                feel6: "4",
                con6: "A la hora de reservar ve que hay una tarifa que es para niños, lo cual le preocupa pues no le gustan los niños",
                ima6: "cartoon-reading.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
                Name: "Andrea Gallego Manchón",
                Photo: "68.jpg",
                
                 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Ella está buscando alojamiento en la ciudad donde está estudiando su hermana porque quiere ir a visitarla con su mujer",
                touch1: "agenda",
                feel1: "5",
                con1: "Debido a su inestabilidad laboral, quiere buscar un alojamiento lo más económico posible",
                ima1: "cartoon-reading.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca con su teléfono móvil en internet alojamientos en Granada baratos",
                touch2: "Movil",
                feel2: "5",
                con2: "Está un poco perdida buscando pero la ilusión de visitar a su hermana es más fuerte",
                ima2: "cartoon-phone.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Debido a que no encuentra nada y está perdida pide ayuda y consejo a su hermana",
                touch3: "Móvil (llamada)",
                feel3: "2",
                con3: "Le da coraje no haber encontrado por ella misma nada",
                ima3: "cartoon-phoningangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Su hermana le recomienda el hostel Carlota Braum, al cual ella va a menudo a la parte del bar/restaurante",
                touch4: "Móvil (enlace directo de whatsapp)",
                feel4: "3",
                con4: "Ella se entera de como son los hostels y de primeras no le agrada la idea de compartir habitación con más gente, por lo que no puede tener privacidad",
                ima4: "cartoon-phone-street.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Se dispone a resrvar a traves de la página web ",
                touch5: "Móvil (webapp)",
                feel5: "3",
                con5: "Ve que hay opciones de habitación privada en las que podría estar a solas con su mujer, pero no quedan libres",
                ima5: "cartoon-phone-sitting.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Hace la reserva, la cual es muy sencilla e intuitiva y pese a tener que compartir habitación con otra gente la ilusiona más ver a su hermana",
                touch6: "Móvil (confirmación de la reserva por gmail)",
                feel6: "4",
                con6: "Va a informarse de las normas del hostel para poder organizar desde ya todo",
                ima6: "cartoon-phone-sitting.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



