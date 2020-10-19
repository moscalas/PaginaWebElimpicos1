// Un programme qui dessine des rosaces automatiquement
// on utilise les coordonnées polaires (et non pas cartésiennes comme d'habitude)
// abscisses et ordonnées sont données relativement à l'origine du repère 
// grâce à un rayon, un angle par rapport à l'axe des abscisses et aux règles de trigonométrie:
// x = rayon * cos(angle) et y = rayon * sin(angle)

//crea una tabla que guarda los datos del archivo .csv
let table; 

//numero de filas en el archivo
let rowCount;

let row;

let diameter = [];

let temp;
let cnv1;

//variable del selector de opciones
let sel;
let sel2;
//variable que guarda la opción seleccionada por el usuario
let opcion = " ";

function preload() 
{
  //carga el archivo y tiene en cuenta el titulo de las columnas
  table = loadTable("assets/Mujeres500.csv", "header");


  //ojoooooooooooooooooooooooooooo!!!
  //el archivo .csv, se recomienda abrir y modificar en bloc de notas, porque al guardarlo desde esxcel genera ; lo cual genera error en P5
  //por otro lado los valores dentro del archivo no debe tener espacio, si la columna es numero y tiene espacio, sale error en p5
}

let n = 1; // un numérateur
let d = 2; // un dénominateur
let k;

function setup() 
{
  //numero de filas en el archivo
  rowCount = table.getRowCount();

  //creamos un objeto que guarda la información de las filas de la tabla
  row = table.getRows();  

  for (let i = 0; i < rowCount; i++) 
  {
    //guardamos la información de la fila "diameter" en una constante
    diameter[i] = row[i].getNum("diameter");
    //diameter[0] = 43.19838
    //diameter[1] = 52.42526

  }


  cnv1 = createCanvas(700,500); 
  cnv1.parent(MuestraC1);
// taille de la fenêtre en pixels
  angleMode(DEGREES); // on utilise les valeurs en degrés pour les angles 
  // (et non pas en radians, qui est l'unité par défaut)
  //frameRate(1); // on choisit un rythme d'affichage assez lent

  sel = createSelect();
  sel.parent(MuestraC1);
  sel.option('Canada');
  sel.option('Federación Rusa');
  sel.option('China');
  sel.option('Reino Unido');
  sel.option('Suecia');
  sel.option('Korea');
  sel.option('Filipinas');
  sel.option('Australia');
  sel.option('Indonesia');
  sel.option('Paises Bajos');
  sel.option('Dinamarca');
  sel.option('España');
  sel.option('Belgica');
  sel.option('Ucrania');
  sel.option('Francia');
  sel.option('Tailandia');
  sel.option('Armenia');
  sel.option('Honw Kong');
  sel.option('Alemania');
  sel.option('Mexico');
  sel.option('Puerto Rico');
  sel.option('Chequia');
  sel.option('Brasil');
  sel.option('India');
  sel.option('Rumania');
  sel.option('Noruega');
  sel.option('Georgia');
  sel.option('Serbia');
  sel.option('Mauritos');
  sel.option('Polonia');
  sel.option('Argentina');
  sel.option('Slovakia');
  sel.option('Singapure');
  sel.option('Latvia');
  sel.option('Lituana');
  sel.option('Japon');
  sel.option('Viet Nam');
  sel.option('Belarus');
  sel.option('Union de Arabes Emiratos');
  sel.option('Finlandia');
  sel.option('USA');

    //cuando se selecciona una opción llama a la funcion mySelectEvent
  sel.changed(mySelectEvent);

  opcion = "Happy";
  console.log(diameter[1]);
frameRate(3);

}

function draw()
 {
  background(204); // couleurs de l'arrière plan (204 = gris clair)
  translate(width / 2.5, height / 2.5); // l'origine du repère est décalée au milieu de la fenêtre
  stroke(255,10,56); // couleur des traits (0 = noir)
  noFill(); // pas de couleur de remplissage des formes
  
  n++; // incrémente les valeurs de n et d pour générer une rosace différente à chaque tour de boucle
  d++;

  if(n>=11)
  { 
    // réinitialise les valeurs de n et d si elles dépassent une certaine valeur
    n=1;
  }
  if(d>=23)
  {
    d=1;
  }

  k = n / d; // k détermine la forme de la rosace

  if(opcion == "Canada")
  {
  	fill(255);
       stroke(255,0,0);
      temp = diameter[0];
       Stroke(0);
	text(diameter[0],300,360);
  }
  else if(opcion == "Federación Rusa")
  {
      temp = diameter[1];
       stroke(255,0,0);
       fill(0,0,255);
  }
  else if(opcion == "China")
  {
      temp = diameter[2];
  }
  else if(opcion == "Reino Unido")
  {
      temp = diameter[3];
  } 
  else if(opcion == "Suecia")
  {
      temp = diameter[4];
  }
  else if(opcion == "Korea")
  {
      temp = diameter[5];
  }
  else if(opcion == "Filipinas")
  {
      temp = diameter[6];
  }
 else if(opcion == "Australia")
  {
      temp = diameter[7];
  }
  else if(opcion == "Indonesia")
  {
      temp = diameter[8];
  }
  else if(opcion == "Paises Bajos")
  {
      temp = diameter[9];
  }
  else if(opcion == "Dinamarca")
  {
      temp = diameter[10];
  } 
  else if(opcion == "España")
  {
      temp = diameter[11];
  }
  else if(opcion == "Belgica")
  {
      temp = diameter[12];
  }
  else if(opcion == "Ucrania")
  {
      temp = diameter[13];
  }
 else if(opcion == "Francia")
  {
      temp = diameter[14];
}
  else if(opcion == "Tailandia")
  {
      temp = diameter[15];
  }
  else if(opcion == "Armenia")
  {
      temp = diameter[16];
  }
  else if(opcion == "Honw Kong")
  {
      temp = diameter[17];
  } 
  else if(opcion == "Alemania")
  {
      temp = diameter[18];
  }
  else if(opcion == "Mexico")
  {
      temp = diameter[19];
  }
  else if(opcion == "Puerto Rico")
  {
      temp = diameter[20];
  }
 else if(opcion == "Chequia")
  {
      temp = diameter[21];
  }
  else if(opcion == "Brasil")
  {
      temp = diameter[22];
  }
  else if(opcion == "India")
  {
      temp = diameter[23];
  }
  else if(opcion == "Rumania")
  {
      temp = diameter[24];
  } 
  else if(opcion == "Noruega")
  {
      temp = diameter[25];
  }
  else if(opcion == "Georgia")
  {
      temp = diameter[26];
  }
  else if(opcion == "Serbia")
  {
      temp = diameter[27];
  }
 else if(opcion == "Mauritos")
  {
      temp = diameter[28];
  }
    else if(opcion == "Polonia")
  {
      temp = diameter[29];
  }
  else if(opcion == "Argentina")
  {
      temp = diameter[30];
  }
  else if(opcion == "Slovakia")
  {
      temp = diameter[31];
  } 
  else if(opcion == "Italia")
  {
      temp = diameter[32];
  }
  else if(opcion == "Kazakistan")
  {
      temp = diameter[34];
  }
  else if(opcion == "Ezlovakia")
  {
      temp = diameter[35];
  }
 else if(opcion == "Singapure")
  {
      temp = diameter[36];
  }
  else if(opcion == "Latvia")
  {
      temp = diameter[37];
  }
  else if(opcion == "Lituana")
  {
      temp = diameter[38];
  }
  else if(opcion == "Japon")
  {
      temp = diameter[39];
  } 
  else if(opcion == "Viet Nam")
  {
      temp = diameter[40];
  }
  else if(opcion == "Belarus")
  {
      temp = diameter[41];
  }
  else if(opcion == "Union de Arabes Emiratos")
  {
      temp = diameter[42];
  }
 else if(opcion == "Finlandia")
  {
      temp = diameter[43];
  }
 else if(opcion == "USA")
  {
      temp = diameter[44];
  }
  beginShape(); // on décrit les formes que doit dessiner le programme
  // une boucle for qui tourne 360 fois donne les coordonnées du point à dessiner
  for (let angle = 0; angle < 360 * d; angle++)
  {
     //let rayon = 150; // le rayon du cercle si on n'utilise pas k pour créer des rosaces
    let rayon = temp * cos(k * angle); // la formule qui permet d'obtenir une rosace, 
    //= 150 * cos(0.5 * 0)
    //=150 * cos(0)
    //=150 

    // à chaque tour de boucle, le rayon change de valeur en fonction de k et de la variable "angle"
    let x = rayon * cos(angle); // traduit les coordonnées polaires en coordonnées cartésiennes
    //x= 150 * cos(0)
    //X= 150
    
    let y = rayon * sin(angle);
    //y = 150 *sin(0)
    //Y= 150 * 0
    //Y=0
    vertex(x, y); // les points qui dessinent la forme ont les coordonnées calculées par la boucle for
  }
  endShape(); // on peut ajouter CLOSE entre les parenthèses = on relie le dernier point de la forme au premier
}

//esta función lee la opción seleccionada por el usuario de los botones desplegables
function mySelectEvent() 
{
  //guarda la opción seleccionada en la variable opcion
  opcion = sel.value();
  console.log(sel.value());
}