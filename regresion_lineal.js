////////////////////////////////////////////////////////////
/**//*                  x0Z3R0                        *//**/
/**//////////////////////////////////////////////////////**/
/**/                                                    /**/
/**/	            /*UNITY 5.1.1*/                     /**/
/**/                                                    /**/
/**//////////////////////////////////////////////////////**/
/**********************************************************/
////////////////////////////////////////////////////////////



class Recta{
	public var m : double = 0; //Pendiente
	public var n : double = 0; //Desfase
}

//Entrada
public var Datos : Vector2[];

//Salida
public var Recta : Recta;

//Variables Unity para dibujar resultados 
public var Punto : GameObject;                 
public var recta_renderer : LineRenderer;       


function Start () {
	CalcularRecta();
}

function CalcularRecta () {
	
	var i : int = 0;
	
	//Sumatorios.
	var xi : double = 0f;
	var yi : double = 0f;
	var xi2 : double = 0f;
	var xiyi : double = 0f;
	
	while(i < Datos.Length){
		xi += Datos[i].x;                  //Sumatorio X sub i
		yi += Datos[i].y;                  //Sumatorio Y sub i
		xi2 += Datos[i].x * Datos[i].x;    //Sumatorio X sub i al cuadrado
		xiyi += Datos[i].x * Datos[i].y;   //Sumatorio X sub i por Y sub i
		
		//Dibujamos cada punto.
		var punto : GameObject = Instantiate(Punto,new Vector3(Datos[i].x,Datos[i].y,0),Quaternion.identity); //Dibujamos puntos
		punto.name = "Punto " + i;
		
		i++;
	}
	
	//Calculamos parametros de la recta de regresion.
	Recta.n = (xi * xi2 - xi * xiyi) / (Datos.length * xi2 - xi * xi); // Desfase eje Y
	Recta.m = (Datos.length * xiyi - xi * yi)/ (Datos.length * xi2 - xi * xi); // Pendiente
	
	//Dibujamos la recta.
	recta_renderer.SetPosition(0,new Vector3(-1000,Recta.m*-1000+Recta.n,0));
	recta_renderer.SetPosition(1,new Vector3(1000,Recta.m*1000+Recta.n,0));
}
