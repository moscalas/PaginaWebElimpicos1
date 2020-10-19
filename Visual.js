
let table;
let datos = [];
let rowCount;
let barraColor;
let cnv2;
function preload() 
{
  //carga el archivo y tiene en cuenta el titulo de las columnas
  table = loadTable("assets/Mujeres500.csv", "header");
}

function setup() 
{
  cnv2 = createCanvas(800,600);
  createCanvas(1000, 300);
  barraColor = createSlider(1, 255, 10);
  cnv2.parent(Visual1);
  barraColor.parent(Visual1);
  //numero de filas en el archivo
  rowCount = table.getRowCount();
  //creamos un objeto que guarda la información de las filas de la tabla
  const row = table.getRows(); 

    for (let i = 0; i < rowCount; i++) 
  {
    
    //guardamos la información de la fila "x" en una constante
    const x = row[i].getNum("x");
    //guardamos la información de la fila "y" en una constante
    const y = row[i].getNum("y");
    //guardamos la información de la fila "diameter" en una constante
    const diameter = row[i].getNum("diameter");
    //guardamos la información de la fila "name" en una constante
    const name = row[i].getString("name");

    //Adiciono al arreglo un objeto de tipo Barra, donde inicializo el objeto creando la barra
    datos.push(new barraDatos( x,y,diameter,10,name));
    //se crean la cantidad de barras acorde a la cantidad de datos
  }
}

  function draw() 
{
  background(0);
let color= barraColor.value();

fill(color);
  //se recorre la cantidad de barras, que es lo mismo que recorrer la cantidad de datos
  //for (let i = 0; i < bubbles.length; i++)
  for (let i = 0; i < rowCount; i++) 
  {
  	//recorre cada burbuja y llama a la función dibujar para mostrarla
    datos[i].mostrar();
    //recorre cada burbuja y llama a la función mouseOver para mostrar  la información
    datos[i].mouseOver(mouseX, mouseY);
  } 
  
 rect(0,250,800,30);
 fill(0);
 textSize(10);
 text( "Primeros 500 lugares en competiciones ocupados por mujeres",0,265)
 fill(255);
 textSize(20);
 textLeading(10);
 text("Canada: 21", 1,245);
}


class barraDatos{
	constructor (x,y, alto, ancho, name)
	{
    //this.jugadoras = jugadoras;
    this.ancho = ancho;
    this.alto =alto;
    this.x =x;
    this.y = y;
    this.name = name;

    this.over = false;
	}
mostrar()
  {
  	  noStroke();
   // fill(244,35,116);
    rect(this.y+10,20,this.ancho,this.alto+100);
    text()
    if (this.over == true) 
    {
      fill(255);
      textAlign(CENTER);
      textSize(20);
      //coloca el texto del dato mas abajo de la barra 
      text(this.name,0,400);
    }
}

mouseOver(px, py) 
  {
  	//distancia que hay entre la posición del mouse y la barra
    let distancia = dist(px, py, this.x, this.y);

    //si la distancia entre el mouse y la barra es cercana
    if(distancia < 1)
    {
    	// entonces la variable over pongala en true
    	this.over = true;	
    }
    //si la distancia entre el mouse y la barra es lejana
    else
    {   
    	// entonces la variable over pongala en false
    	this.over = false;
    }
  }
}

    