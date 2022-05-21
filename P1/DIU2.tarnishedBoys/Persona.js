/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.2 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU2.tarnishedBoys";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Reginald Miles",
				Photo: "16.jpg",
				Quote: "El camino para empezar es dejar de hablar y empezar a hacerlo.",
				Age: 25,
				Occupation: "Nutricionista",
				Family: "Tiene padres. Soltero",
				Location: "Houtson, Texas",
				Character: "Le encanta la tranquilidad",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 1 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["Vivir una vida sana", "Viajar mucho", "convertirse en el mejor nutricionista", "Poder vivir en la ciudad de sus sueños"],
				Frustrations: ["Que haya niños llorando cuando come"],
				Bio: "Reginald es nutricionista, por tanto siempre lleva un estilo de vida bastante sano, aunque siempre hay huecos para divertirse y dejarse llevar. Le encanta viajar en plan mochilero y prefiere disfrutar más de las vistas que de un hotel lujoso, pero tambien no le gusta viajar en grupo y socializar, es solitario.",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Movil", Value: 3 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos: " Necesita unas vacaciones del trabajo, le gustaría disfrutar de un tiempo libre.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 4 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 1 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Andrea Gallego Manchón",
				Photo: "68.jpg",
				Quote: ":Si hay algo más importante que el trabajo, es la gente a la que queremos.",
				Age: 28,
				Occupation: "Química",
				Family: "Tiene padres y una hermana pequeña. Casada.",
				Location: "Almería",
				Character: "Dedicada, organizada e independiente",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["Tener un trabajo estable", "Una vida tranquila", "Poder hacer lo que quiera"],
				Frustrations: ["Los imprevistos le fastidian el día", " una temporada inestable puede afectar mucho a su salud mental."],
				Bio: "Andrea se interesó en el campo de la química en el instituto al ver que tenía facilidad en este. Desde entonces tuvo claro qué estudios seguir, y los siguió sin mucho obstáculo. Siempre apoyada por sus padres, e idolatrada por su hermana, siempre intenta ayudar a su familia ya sea económicamente o con su tiempo. Conoció a su mujer en un máster, con la que se casó cuatro años después.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Mobile", Value: 4 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos:   "Ella está buscando alojamiento en la ciudad donde está estudiando su hermana porque quiere ir a visitarla con su mujer" ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 2 },
					{ Name: "Online & Social Media", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 1 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])