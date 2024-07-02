import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Bienvenida.css';
import Tabla from './Tabla';

const Bienvenida = () => {
  return (
    <div className="bienvenida-container">
      <Carousel
        autoPlay
        interval={5000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
      >
        <div>
        <img src="https://images.unsplash.com/photo-1533589067335-b0114bd0ab00?q=80&w=1491&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagen 1" />
        </div>
        <div>
        <img src="https://plus.unsplash.com/premium_photo-1685207267343-1c8852b45575?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagen 2" />
        </div>
        <div>
        <img src="https://images.unsplash.com/photo-1633707167699-cdd893b84441?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagen 3" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1568991004407-cdd5d0930945?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagen 4" />
        </div>
      </Carousel>
      <h1>
      Cómo elegir la talla de bicicleta correcta
      </h1>
      <p>
     
Una de las dudas más frecuentes a la hora de comprar una bicicleta de segunda mano es acertar con la talla correcta. ¿Me va mejor una talla M o una talla L? ¿La 53 se ajusta mejor a mi altura o debería comprarme la 55? Un dato que debes conocer es que la talla de una bicicleta viene indicada de manera diferente dependiendo de si es para carretera o para montaña. En el ciclismo de montaña se utilizan las pulgadas como medida para indicar la talla. Una mountain bike de la talla 17,5" significa que la medida del tubo vertical que conecta el pedalier con la tija del sillín es de 17,5 pulgadas. Esto está empezando a cambiar y algunos fabricantes ya usan el tallaje en centímetros. La talla de una bicicleta viene mercada por la longitud del tubo vertical. O al menos así era hasta haca unos años, cuando las geometrías de los cuadros cambiaron radicalmente. Así, en una bicicleta de carretera de la talla 54 la longitud de este tubo es de 54 centímetros.


<strong>
"Algunas marcas utilizan un sistema de tallas expresadas en centímetros, otras en pulgadas y otras usando la denominación estándar de S, M, L y XL"
</strong>

Todas indicaban lo mismo: que la longitud del tubo vertical era de 54 centímetros. Sin embargo, todo cambió cuando Giant introdujo en el mercado los cuadros con sloping. El sloping es el ángulo de caída del tubo horizontal que une la pipa de dirección con el tubo del sillín..
</p>

<h2>Equivalencia de tallas</h2>

<p>
Cuando compramos unos zapatos tenemos un patrón que nos sirve de referencia. Si usamos una talla 44 de zapatillas, cuando nos compremos otras nuevas pediremos la talla 44. Es probable que haya pequeñas diferencias de una marca a otra, pero por norma general las hormas son las mismas. Ahora bien, imaginemos que tenemos una bicicleta Orbea Avant de la talla 54 y queremos comprarnos una Giant Defy. Giant ofrece sus tallas por patrones alfabéticos: XS, S, M, ML, L y XL. ¿Cuál nos corresponde? Hemos visto que cada marca utiliza sus propios patrones para configurar los ángulos de los cuadros que fabrica. Por tanto, las tallas no tienen por qué ser coincidentes. Pero en Tuvalum hemos recopilado las geometrías de más de 30 fabricantes para elaborar la siguiente tabla, que recoge las equivalencias orientativas entre tallas numéricas y alfabéticas.
</p>

<Tabla />

<h2>Calcula tu talla de bicicleta a partir de tu altura...</h2>
<p>
Vale, ya sabes que una talla 54 de carretera o 18" de montaña equivale a una M en la mayoría de fabricantes. Ahora viene la siguiente pregunta: ¿cómo podemos saber si la talla de bicicleta que necesitamos es la M, la L, la 56 o la 19"? Si consultas las páginas web de las marcas de bicicletas verás que la mayoría de ellas ofrecen guías de tallas basadas en la altura. Es decir, tanto mides, tal es la talla que te corresponde. Un primer problema es que cada marca te va a recomendar una talla distinta. ¡Incluso una misma marca puede recomendarte dos tallas distintas! Por ejemplo, la guía de tallas de Trek indica que alguien que mide 1,75m. puede usar tanto una talla 54 como una talla 56. ¿Cómo es posible? Estas diferencias se deben a que la altura de una persona es un dato orientativo para calcular su talla correcta de bicicleta, pero nunca es un valor definitivo. No todas las personas que miden 1,75m. tienen las piernas igual de largas. Por eso a unas les irá mejor una talla 56 y a otras una talla 54. La siguiente tabla recoge una recomendación de tallas de bicicleta basadas en la altura. Para elaborarla hemos tomado como referencia las guías que proporcionan los fabricantes. <a href='https://www.trekbikes.com/es/es_ES/sizing/#sizing_table_bikes_road'> Guía de tallas de Trek</a>
</p>
<strong> 
Para saber con exactitud cuál es tu talla de bicicleta más adecuada, lo mejor es hacerse un 'fitting' o estudio biomecánico
</strong>

<h2>Calcula tu talla según tu longitud de pierna</h2>

<p>
<strong> Lo importante a la hora de elegir la talla de bicicleta correcta no es la altura de tu cuerpo, sino la altura de tu cadera. </strong> Por eso, uno de los factores más fiables para determinar la talla de una bicicleta es la longitud de tus piernas. Éste es el dato que suelen utilizar como referencia en las tiendas de bicicletas para recomendarte una talla u otra. Para ello es fundamental que midas la longitud interna de tus piernas. Descálzate, apoya los pies en el suelo con las piernas rectas y mide la distancia desde el suelo hasta tu entrepierna. <strong> Puedes ayudarte sujetando un libro entre las piernas a la altura de las ingles </strong> y midiendo desde el suelo hasta la esquina superior del libro. Así te resultará más sencillo.
</p>
<p>
Esa medición te va a dar un valor X, por ejemplo 90 centímetros. <strong>  Si quieres saber tu talla de bicicleta de montaña multiplica ese número por 0,21. </strong> Así, siguiendo con el ejemplo, tenemos que 90 x 0,21 = 18,9. En este caso nuestra talla de bicicleta de montaña sería la 19, que corresponde con una longitud del tubo vertical de 19 pulgadas. Si queremos comprar una bicicleta de montaña cuyo fabricante ha expresado la talla en centímetros, multiplicaremos ese valor por 0,54. ¿Y si lo que vamos a comprar es una bicicleta de carretera? Lo que haremos será multiplicar la altura de nuestra entrepierna en centímetros por 0,65. Esto es, 90 x 0,65 = 58,5. ¡Una talla 58 ó 59 es la nuestra! Esta fórmula es más fiable para calcular nuestra talla de bicicleta que basarnos únicamente en la altura. Sin embargo, el resultado no no es totalmente exacto -aunque sí funciona para la mayoría de la población-. Dado que los fabricantes y marcas cambian las geometrías de sus cuadros cada poco tiempo, hay otras medidas que influyen, como por ejemplo la longitud de los antebrazos o la elasticidad.
</p>
    </div>
  );
};

export default Bienvenida;
