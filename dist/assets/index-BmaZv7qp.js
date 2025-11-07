(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&m(u)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function m(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();const j="modulepreload",_=function(c){return"/web/"+c},b={},a=function(t,i,m){let e=Promise.resolve();if(i&&i.length>0){let v=function(s){return Promise.all(s.map(l=>Promise.resolve(l).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};var u=v;document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),o=d?.nonce||d?.getAttribute("nonce");e=v(i.map(s=>{if(s=_(s),s in b)return;b[s]=!0;const l=s.endsWith(".css"),p=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${p}`))return;const r=document.createElement("link");if(r.rel=l?"stylesheet":j,l||(r.as="script"),r.crossOrigin="",r.href=s,o&&r.setAttribute("nonce",o),document.head.appendChild(r),l)return new Promise((y,h)=>{r.addEventListener("load",y),r.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})}))}function n(d){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=d,window.dispatchEvent(o),!o.defaultPrevented)throw d}return e.then(d=>{for(const o of d||[])o.status==="rejected"&&n(o.reason);return t().catch(n)})},E=`<div id="home">
    <div class="intro-home">
        <h2>Bienvenido a la aplicación web de física</h2>
        <br>
        <p> Esta plataforma ha sido creada con el propósito de ofrecerte una experiencia de aprendizaje
            dinámica e interactiva, donde podrás explorar los conceptosfundamentales y avanzados de la
            física de manera visual, práctica y accesible. </p>
            <br>
        <p> Aquí encontrarás unidades organizadas por temas como mecánica, electricidad, óptica, 
            termodinámica y más que te permitirán comprender cómo las leyes de la física 
            se aplican en el mundo real.</p>
            <br>
        <p> Utiliza el menú de navegación superior para desplazarte entre las diferentes secciones y 
            recursos disponibles. En cada apartado podrás acceder a explicaciones teóricas, simulaciones,
            ejercicios y materiales de apoyo que fortalecerán tu comprensión y curiosidad científica.</p>
            <br>
        <p> Nuestro objetivo es que aprendas de forma autónoma, divertida y significativa, descubriendo cómo
            la física está presente en todos los aspectos de la vida cotidiana. ¡Explora, experimenta y disfruta
            aprendiendo!</p>
    </div>
    <div >
        <img src="/grupo.jpeg" alt="fisica logo" class="img-home">
    </div>
</div>`,q=`<!-- views/404.html -->
<section id="not-found" class="not-found">
    <div class="not-found-container">
        <h1>404 - pagina no encontrada</h1>
        <p>La página que estás buscando no existe.</p>
        <a href="#/" id="back-home">Volver a Inicio</a>
    </div>
</section>`,z=`<div id="unidadI">
    <div class="intro-unidadI">
        <h2>Unidad I: Introducción a la Física Radiológica</h2>
        <p>En esta unidad, exploraremos los fundamentos de la física radiológica, incluyendo los principios básicos de
            la radiación y su interacción con la materia.</p>
        <p>Aprenderás sobre los diferentes tipos de radiación, sus fuentes y aplicaciones en el campo de la radiología.
        </p>
    </div>

    <div>
        <img src="/fisica-web3/public/Energia-en-fisica-e1538145328130-800x400.webp" alt="recorderis logo" class="img-recorderis">
    </div>
</div>

<div id="temas-unidadI">
    <h2>Temas de la Unidad I</h2>
    <div class="dashboard">
        <div class="tema-card" data-link="#/tema1">
            <h3>1. Introducción a la física</h3>
            <img src="/fisica-web3/public/fisica.png" alt="ico" class="ico-tema">
            <p>Acá encontrarás que es la física y <br>
                conceptos básicos de la materia y su <br>
                importancia en la comprensión del mundo. <br>
            </p>
        </div>
        <div class="tema-card" data-link="#/tema2">
            <h3>2. Sistemas de Unidades y Conversion</h3>
            <img src="/fisica-web3/public/fisica unds.png" alt="ico" class="ico-tema">
            <p>Descripción de los diferentes sistemas de unidades utilizados en física. <br>
            </p>
        </div>
        <div class="tema-card" data-link="#/tema4">
            <h3>3. Radiación y sus Tipos</h3>
            <img src="/fisica-web3/public/radiacion  y  tipos.png" alt="ico" class="ico-tema">
            <p>Mecanismos de interacción y efectos en los tejidos biológicos.</p>
        </div>
        <div class="tema-card" data-link="#/tema5">
            <h3>4. Caracteristicas de la Radiación</h3>
            <img src="/fisica-web3/public/carac. Rad.png" alt="ico" class="ico-tema">
            <p>Fuentes naturales y artificiales de radiación.</p>
        </div>
        <div class="tema-card" data-link="#/tema5">
            <h3>5. Espectro Eléctromagnetico</h3>
            <img src="/fisica-web3/public/espectro electromagnético.png" alt="ico" class="ico-tema">
            <p>Fuentes naturales y artificiales de radiación.</p>
        </div>
    </div>
</div>`,R=`<div id="unidadI">
    <div class="intro-unidadI">
        <h2>Unidad II: Unidades radiológicas y particularidades de los rayos X</h2>
        <p>En esta unidad, exploraremos los fundamentos de la física radiológica, incluyendo los principios básicos de
            la radiación y su interacción con la materia.</p>
        <p>Aprenderás sobre los diferentes tipos de radiación, sus fuentes y aplicaciones en el campo de la radiología.
        </p>
    </div>

    <div>
        <img src="/fisica-web3/public/física-y-matemáticas.webp" alt="recorderis logo" class="img-recorderis">
    </div>
</div>

<div id="temas-unidadI">
    <h2>Temas de la Unidad II</h2>
    <div class="dashboard">
        <div class="tema-card" data-link="#/tema6">
            <h3>6. Unidades Radiologicas</h3>
            <img src="/fisica-web3/public/unds. rad.png" alt="ico" class="ico-tema">
            <p> Descripción de las unidades radiológicas
                utilizadas para medir la radiación ionizante,
                como el gray (Gy), sievert (Sv) y becquerel (Bq).
            </p>
        </div>
        <div class="tema-card" data-link="#/tema7">
            <h3>7. Rayos X - Generalidades</h3>
            <img src="/fisica-web3/public/rayos-x.png" alt="ico" class="ico-tema">
            <p> Descripción de los rayos X, su producción, propiedades y
                aplicaciones en radiología.
            </p>
        </div>
        <div class="tema-card" data-link="#/tema8">
            <h3>8. Tubo de Rx y sus partes </h3>
            <img src="/fisica-web3/public/1.jpg" alt="ico" class="ico-tema">
            <p> Descripción del tubo de rayos X, sus
                componentes principales y su funcionamiento.
            </p>
        </div>
        <div class="tema-card" data-link="#/tema9">
            <h3>9. Tipos de Imagen</h3>
            <img src="/fisica-web3/public/tipos de imagen(ICO).png" alt="ico" class="ico-tema">
            <p> Descripción de los diferentes tipos de imágenes radiológicas,
                como radiografías, tomografías computarizadas (TC) y
                resonancias magnéticas (RM).
            </p>
        </div>
        <div class="tema-card" data-link="#/tema10">
            <h3>10. Reglas para la formación de imágenes exactas</h3>
            <img src="/fisica-web3/public/formacion de imagen.png" alt="ico" class="ico-tema">
            <p> Descripción de las reglas y principios para
                la formación de imágenes radiológicas precisas y
                de alta calidad.
            </p>
        </div>
    </div>
</div>`,I=`<div id="unidadI">
    <div class="intro-unidadI">
        <h2>Unidad III: Receptores de imagen, cálculo de modificación a factores de exposición</h2>
        <p> En esta unidad, exploraremos los diferentes tipos de receptores de imagen utilizados en radiología, así como los
            cálculos necesarios para modificar los factores de exposición y optimizar la calidad de la imagen radiológica.
        </p>
    </div>
    <div>
        <img src="/fisica-web3/public/unidad 3.jpg" alt="recorderis logo" class="tema-img">
    </div>
</div>

<div id="temas-unidadI">
    <h2>Temas de la Unidad III</h2>
    <div class="dashboard">
        <div></div>
        <div class="tema-card" data-link="#/tema11">
            <h3>11. Rejillas antidifusoras</h3><br>
            <img src="/fisica-web3/public/rejilla.png" alt="ico" class="ico-tema">
            <p> Descripción de las rejillas antidifusoras y su función en la 
                mejora de la calidad de la imagen radiológica.
            </p>
        </div>
        <div class="tema-card" data-link="#/tema12">
            <h3>12. Receptores de imagen</h3><br>
            <img src="/fisica-web3/public/receptores-imagen.png" alt="ico" class="ico-tema">
            <p> Descripción de los diferentes tipos de receptores de imagen utilizados en radiología, 
                como las películas radiográficas, los detectores digitales y las placas de fósforo.
            </p>
        </div>
        <div class="tema-card" data-link="#/tema13">
            <h3>13. Calculo de modificación a factores de exposición</h3>
            <img src="/fisica-web3/public/calculo.png" alt="ico" class="ico-tema">
            <p> Explicación de los cálculos necesarios para modificar los factores de exposición, 
                incluyendo la densidad óptica, el contraste y la resolución espacial.
            </p>
        </div>
    </div>
</div>`,w=`<div id="temaN°">
    <div class="subtemas">
        <div class="tema-content">
            <h2>Introducción a la física</h2>
            <p>La física es la ciencia que estudia los fenómenos naturales del universo, desde las partículas
                subatómicas hasta las galaxias.</p>
            <p>Su objetivo es comprender las leyes fundamentales que rigen el comportamiento de la materia y la energía.
            </p>
            <p>La física se divide en varias ramas, como la mecánica, la termodinámica, el electromagnetismo y la física
                cuántica, entre otras.</p>
            <p>Estas ramas abordan diferentes aspectos de la realidad física, pero todas están interconectadas y
                contribuyen a nuestro entendimiento del mundo que nos rodea.</p>
        </div>
        <div>
            <video src="/fisica-web3/public/que es la fisica.mp4" class="tema-video" controls>Este navegador no soporta la etiqueta
                video de html5</video>
        </div>
    </div>

    <div class="subtemas">
        <div class="tema-content">
            <h2>Historia de la física</h2>
            <video src="/fisica-web3/public/historia de la fisica.mp4" class="tema-video" controls>Este navegador no soporta la etiqueta video de html5</video>
        </div>
    </div>
    <div class="subtemas">
        <div class="tema-content">
            <h2>Relación con otras ciencias</h2>
            <h3>Biofísica</h3>
            <p> <strong>Relación:</strong> Combina la biología con la física para investigar los sistemas vivos.
            </p> <strong>Ejemplos:</strong>
            <p>El estudio de la mecánica muscular, los principios de la visión o el análisis de procesos moleculares y celulares.</p>
            <br><br>
            <h3>Fisicoquímica</h3>
            <p> <strong>Relación:</strong> Estudia las propiedades físicas de la materia y la energía, actuando como un puente entre la química y la física.
            </p> <strong>Ejemplos:</strong>
            <p>El estudio de la termodinámica, la cinética de reacciones químicas y la estructura atómica y molecular.</p>
            <br><br>
            <h3>Geofísica</h3>
            <p> <strong></strong>Relación:</strong> Aplica los principios físicos para estudiar la Tierra, incluyendo su estructura interna y su dinámica.
            </p> <strong>Ejemplos:</strong>
            <p>El estudio de los terremotos (sismología), los campos magnéticos de la Tierra, los procesos de formación de rocas y el estudio de los fenómenos volcánicos.</p>
            <br><br>
            <h3>Astrofísica</h3>
            <p> <strong>Relación:</strong> Usa las leyes de la física para estudiar los objetos celestes, la radiación electromagnética y los fenómenos del cosmos.
            </p> <strong>Ejemplos:</strong>
            <p>El estudio de las estrellas, las galaxias, los agujeros negros, la cosmología (el origen y la evolución del universo) y el movimiento de los astros.</p>
        </div>
    </div>
</div>`,P=`<div id="temaN°">
    <div class="subtemas">
        <div class="tema-content">
            <h2>Qué son los sistemas de unidades?</h2>
            <p>Los sistemas de unidades son conjuntos <br>
                de unidades de medida que se utilizan para cuantificar <br>
                magnitudes físicas. Estos sistemas permiten la comunicación <br>
                y comparación de medidas en diferentes contextos.</p>
        </div>
        <div>
            <video src="/fisica-web3/public/Que son los Sistemas de unidades.mp4" class="tema-video" controls>Este navegador no
                soporta la etiqueta
                video de html5</video>
        </div>
    </div>

    <div class="subtemas">
        <div class="tema-content">
            <h2>Sistema Internacional de Unidades:</h2>
            <p>También abreviado como SI, se creó en 1960 en la 11.ª Conferencia General de Pesas y Medidas <br>
                en París, Francia. En este sitio se reconocieron seis unidades de físicas básicas: longitud, tiempo,
                <br>
                masa, corriente eléctrica, temperatura y cantidad de sustancia (excepto el mol). El mol se añadió en
                1971.
            </p>
        </div>
        <div>
            <img src="/fisica-web3/public/SI.jpeg" alt="Sistema Internacional de Unidades" class="tema-img">
        </div>
    </div>

    <div class="subtemas">
        <div class="tema-content">
            <h2>Sistema inglés o anglosajón</h2>
            <p>Es el conjunto de las unidades no métricas que se utilizan como medida principal <br>
                en Estados Unidos y en algunas partes del Reino Unido. <br>
                Este sistema se basa en la pulgada, el pie, la yarda y la milla como elementos principales para la
                medición.</p>
        </div>
        <div>
            <img src="/fisica-web3/public/SAX.jpeg" alt="Unidades básicas del SI" class="tema-img">
        </div>

    </div>
</div>`,L=`<div id="temaN°">
    <div class="subtemas">
        <div class="tema-content">
            <h2>¿Qué es la radiación?</h2>
            <p>La radiación consiste en la propagación de energía en forma de ondas electromagnéticas o partículas 
                subatómicas a través del vacío o de un medio material. Este fenómeno puede producirse de manera natural, 
                como ocurre con la radiación solar que llega a la Tierra, o de forma artificial, mediante dispositivos 
                creados por el ser humano, como los rayos X o los reactores nucleares.
            </p>
        </div>
        <div>
            <img src="/fisica-web3/public/Radiación.png" alt="radiacion" class="tema-img">
        </div>
    </div>
    <div class="subtemas">
        <div class="tema-content">
            <h2>Tipos de radiación</h2>
            <p>Existen varios tipos de radiación, que se clasifican principalmente en dos categorías: 
                radiación ionizante y no ionizante. La radiación ionizante tiene suficiente energía para ionizar átomos y 
                moléculas, lo que puede causar daños en los tejidos biológicos.
            </p>
        </div>
        <div>
            <img src="/fisica-web3/public/Tipos-rad.png" alt="Tipos de radiacion.png" class="tema-img">
        </div>
    </div>
    <div class="subtemas">
        <div class="tema-content">
            <h2>Radiación ionizante</h2>
            <p>La radiación ionizante incluye partículas alfa, partículas beta, rayos gamma y rayos X. 
                Estas formas de radiación son utilizadas en diversas aplicaciones médicas, industriales y científicas, 
                pero también presentan riesgos para la salud si no se manejan adecuadamente.
            </p>
        </div>
        <div>
            <img src="/fisica-web3/public/radiacion-ionizante.jpg" alt="radiacion ionizante.jpg" class="tema-img">
        </div>
    </div>
    <div class="subtemas">
        <div class="tema-content">
            <h2>Radiación no ionizante</h2>
            <p>La radiación no ionizante incluye ondas de radio, microondas, luz visible, luz ultravioleta y 
                radiación infrarroja. Aunque generalmente se considera menos peligrosa que la radiación ionizante, 
                la exposición excesiva a ciertos tipos de radiación no ionizante, como la luz ultravioleta, puede 
                causar daños en la piel y otros efectos adversos para la salud.
            </p>
        </div>
        <div>
            <img src="/fisica-web3/public/Rad- No-Ionizante.jpg" alt="Radiación no ionizante.jpg" class="tema-img">
        </div>
    </div>
</div>`,S=`<div id="temaN°">
    <div class="subtemas">
        <div class="tema-content">
            <h2>Carácterísticas físicas de las ondas</h2>
            <p>La radiación viaja formando paquetes discretos de energía o cuantos energéticos,
                llamados fotones. La energía de un fotón depende de su frecuencia (o de su longitud de onda),
                dada por la ecuación de Planck: <br>
                <strong>E = h * f</strong> <br>
                <strong>Donde:</strong> <br>
                <strong>E:</strong> energía <br>
                <strong>H:</strong> constante de Planck, <strong>6.62618 x 10-34 J.s</strong> <br>
                <strong>F:</strong> frecuencia, <strong>f = c / λ</strong> <br>
                <strong>Otras fórmulas de interés son las siguientes:</strong><br>
                La velocidad de cualquier cuerpo es igual al espacio dividido el tiempo que tarda en recorrerlo, en el
                caso de las ondas electromagnéticas:
                <strong>v = c (velocidad de la luz)</strong> <br>
                <strong>λ = espacio (longitud de onda)</strong> <br>
                <strong>f = tiempo (frecuencia) (1/t).</strong> <br>
                <strong>Por ello podríamos decir: <br>
                c = λ * f</strong> <br>
                Si relacionamos estas fórmulas, de forma tal que de la última tomemos el valor de f despejado,
                obtendríamos la siguiente: <br>
                <strong>E = h * (c / λ)</strong>
            </p>
        </div>
        <div>
            <img src="/fisica-web3/public/Carac. Ondas.png" alt="Características de las ondas" class="tema-img">
        </div>
    </div>
</div>`,x=`<div id="temaN°">
    <div class="subtemas">
        <div class="tema-content">
            <h2>Espectro Eléctromagnetico</h2>
            <video src="/fisica-web3/public/espectro electromagnetico.mp4" class="tema-video" controls></video>
        </div>
    </div>
</div>`,T=`<div class="temaN°">
    <div class="subtemas">
        <div class="tema-content">
            <h2>Que son las unidades radiológicas</h2>
            <p> Las <strong>unidades radiológicas</strong> son magnitudes para medir la radiación ionizante y sus
                efectos, divididas principalmente en: <br>
                <strong>radiométricas (cantidad de radiación) <br>
                    dosimétricas (energía absorbida) <br>
                    y de protección radiológica (efecto biológico).</strong> <br>
                El avance de la tecnología médica ha aumentado el uso de radiaciones ionizantes, por lo que es necesario
                regular la exposición de pacientes y personal. La dosimetría radiológica mide y controla la radiación
                absorbida para evaluar riesgos biológicos y asegurar una práctica segura mediante el uso adecuado de las
                unidades radiológicas. <br>
                En medicina, las unidades radiológicas se usan en <strong>radiografías, tomografías y
                    fluoroscopías</strong>, donde la dosis varía según el procedimiento. La dosimetría busca optimizar
                la calidad de imagen con la menor exposición, y la IAEA impulsa programas de control y capacitación del
                personal.
            </p>
        </div>
        <div>
            <video src="/fisica-web3/public/unidades y magnitudes rad.mp4" class="tema-video" controls></video>
        </div>
    </div>
    <div class="subtemas">
        <div class="tema-content">
            <h2>Que es la dosis absorbida</h2>
            <p>
                La dosis absorbida se define como la energía depositada por la radiación en una unidad de masa del
                material irradiado. Se expresa con la fórmula <br><br>
                <strong>D = E/m.</strong> <br><br>
                <strong>Donde,</strong> <br>
                <strong>E </strong>es la energía en <strong>joules (J)</strong> <br>
                <strong>m</strong> la masa en <strong>kilogramos (kg).</strong><br><br>
                Su unidad en el Sistema Internacional es el <strong>gray (Gy)</strong>, equivalente a
                <strong>1 J/kg.</strong><br>
                En el ámbito clínico, la dosis absorbida es esencial para evaluar el impacto físico de la exposición en
                los tejidos.
            </p>
        </div>
        <div>
            <video src="/fisica-web3/public/dosis eq.mp4" class="tema-video" controls></video>
        </div>
    </div>
    <div class="subtemas">
        <div class="tema-content">
            <h2>Tipos de efectos biológicos de la radiación</h2>
            <p> Los efectos de la radiación ionizante dependen de la <strong>dosis y la frecuencia de
                    exposición</strong>, y se dividen en dos tipos: <br><br>
                <strong>determinísticos:</strong> que aparecen por dosis altas y tienen un umbral <br>
                <strong>estocásticos:</strong> que ocurren al azar sin umbral, como el cáncer o las mutaciones
                genéticas.
            </p>
        </div>
    </div>
    <div class="subtemas">
        <div class="tema-content">
            <h2>Dosis Equivalente (H)</h2>
            <p> La <strong>dosis equivalente</strong> mide el daño biológico según el tipo de radiación y se calcula
                con: <br><br>
                <strong>H = D x wR.</strong> <br><br>
                Su unidad es el <strong>Sievert (Sv).</strong> Una misma dosis puede tener distinto efecto, por
                ejemplo;<br>
                <strong>1 Gy </strong>de rayos X equivale a <strong>1 Sv</strong>,
                pero <strong>1 Gy de partículas alfa</strong> equivale a <strong>20 Sv</strong> por su mayor ionización.
            </p>
            <h2>Factor de Ponderación de la Radiación (wR)</h2>
            <p> El <strong>factor de ponderación radiológica</strong> indica la capacidad de cada tipo de radiación para
                causar daño biológico. <br>
                <strong>Lo define la ICRP:</strong> <br>
                para rayos X, gamma y beta wR = 1; <br>
                para neutrones varía entre 5 y 20; <br>
                para partículas alfa, wR = 20, según estudios epidemiológicos y radiobiológicos.
            </p>
            <h2>Dosis Efectiva (E)</h2>
            <p> La <strong>dosis efectiva</strong> combina<strong> el tipo de radiación y la sensibilidad de los
                    órganos</strong>, calculándose con la suma ponderada de <strong>las dosis equivalentes según el
                    factor wT.</strong> <br>
                <strong>Se mide en sievert (Sv)</strong>
                y permite comparar el riesgo total de distintos procedimientos radiológicos.
            </p>
        </div>
        <div>
            <img src="/fisica-web3/public/dosis equiv.png" alt="dosis equivalente" class="tema-img">
        </div>
    </div>
</div>`,A=`<div class="temaN°">
    <div class="subtemas">
        <div class="tema-content">
            <h2>Producción de los rayos X</h2>
            <p> Los rayos X, descubiertos por <strong>Röntgen</strong> en 1895, son <strong>radiación electromagnética
                    de alta energía</strong>, generada cuando electrones acelerados impactan un blanco metálico,
                generalmente de tungsteno, dentro de un tubo de rayos X con cátodo y ánodo. Solo el <strong>1%</strong>
                de la energía se convierte en rayos X y el resto en calor. <br>
                <strong>Se producen dos tipos de radiación:</strong> de frenado (Bremsstrahlung) y característica. La
                calidad y cantidad del haz dependen de factores técnicos: <br>
                el <strong>kVp</strong>, controla la energía y penetración <br>
                la <strong>mAs</strong> la cantidad de fotones y la filtración elimina fotones de baja energía para
                reducir la dosis al paciente, garantizando imágenes precisas con mínima exposición.
            </p>
            <h2>Rayo central</h2>
            <p> El <strong> rayo central</strong> es el haz principal de radiación que sale del tubo de rayos X y se
                dirige en línea recta desde el ánodo hasta el centro del receptor de imagen. Su orientación
                perpendicular al detector es esencial para evitar distorsiones y obtener imágenes fieles a la anatomía
                real. <br>
                Una <strong>mala alineación del rayo central</strong> puede generar imágenes borrosas, artefactos o
                errores de medición,
                afectando la precisión diagnóstica. Por eso, en cada tipo de estudio radiológico se establece un punto
                exacto de centrado, especialmente en exámenes donde la exactitud es clave, como radiografías de
                extremidades o estudios odontológicos.
            </p>
        </div>
        <div>
            <img src="/fisica-web3/public/rayo central.jpg" class="tema-img" alt="as">
        </div>
    </div>
    <div class="subtemas">
        <div class="tema-content">
            <h2>Efecto talón (anódico)</h2>
            <p> El <strong>efecto talón o efecto anódico</strong> ocurre por la inclinación del ánodo en el tubo de
                rayos X. Esta
                geometría hace que la intensidad del haz sea mayor en el lado del cátodo y menor en el del ánodo, ya que
                los rayos X generados cerca del ánodo atraviesan más material y se atenúan parcialmente. <br>
                Este fenómeno puede aprovecharse en radiología, colocando la parte más gruesa del cuerpo hacia el lado
                del cátodo para lograr una <strong>exposición más uniforme</strong> (por ejemplo, en radiografías de
                fémur o abdomen).
                El grado del efecto talón depende del ángulo del ánodo, el tamaño del campo irradiado y la distancia
                foco-película; un ángulo menor produce un efecto más marcado. Por ello, se considera en el diseño de
                equipos especiales como mamógrafos o equipos portátiles, donde se requiere una distribución homogénea de
                la radiación.
            </p>
        </div>
        <div>
            <video src="/fisica-web3/public/efecto Talon.mp4" class="tema-video" controls></video>
        </div>
    </div>
    <div class="subtemas">
        <div class="tema-content">
            <h2>Sustancias radiopacas y radiolúcidas</h2>
            <p> Las <strong>sustancias radiopacas</strong> son aquellas que absorben más rayos X por su alta densidad y
                número atómico,
                como <strong>los huesos, el esmalte dental y los medios de contraste (yodo o bario).</strong> En la
                imagen radiográfica
                se ven blancas o grises claras. <br>
                Las <strong>sustancias radiolúcidas</strong>, como el aire en los pulmones o el tubo digestivo, dejan
                pasar la radiación
                y aparecen oscuras o negras.
                Esta diferencia se conoce como absorción diferencial, y es la base de la formación de imágenes
                radiográficas, ya que las variaciones en densidad y composición de los tejidos permiten distinguir las
                estructuras internas del cuerpo.
            </p>
        </div>
        <div>
            <img src="/fisica-web3/public/radiopaco y radiolucido.jpg" class="tema-img" alt="">
        </div>
    </div>
</div>`,O=`<div class="temaN°">
    <div class="subtemas">
        <div class="tema-content">
            <h2>¿Que es el Tubo de Rx?</h2>
            <p> El <strong>tubo de rayos X</strong> es el componente principal del equipo radiológico que genera los
                rayos X al acelerar electrones desde el cátodo hacia el ánodo dentro de un tubo al vacío. Al chocar los
                electrones con el
                ánodo, una pequeña parte de su energía se convierte en rayos X y el resto en calor. <br><br>
                Sus <strong>partes principales son: la carcasa de plomo,</strong> que evita fugas de radiación; <br>
                <strong>el aceite,</strong> que aísla y disipa el calor; <br>
                <strong>el vidrio,</strong> que mantiene el vacío; <br>
                <strong>el cátodo,</strong> que emite electrones; <br>
                <strong>el ánodo,</strong> que los recibe y produce <br>
                <strong>los rayos X;</strong> la ventana, por donde sale el haz útil; el haz primario, que forma la
                <strong>imagen;</strong> y el rayo central, que asegura una proyección precisa.
            </p>
        </div>
        <div>
            <img src="/fisica-web3/public/Tubo Rx.jpg" alt="" class="tema-img">
        </div>
    </div>
    <div class="subtemas">
        <div class="tema-content">
            <h2>Partes</h2>
            <p> <strong>Carcasa de plomo:</strong> es la cubierta externa del tubo y su función principal es evitar que
                los rayos X se
                escapen en direcciones no deseadas. Además, protege al operador de la radiación de fuga y sirve como
                soporte mecánico y aislamiento eléctrico.
                <br><br>
                <strong>Aceite:</strong> se encuentra entre la carcasa y el tubo interno. Su función es aislar
                eléctricamente los
                componentes que trabajan con alto voltaje y absorber el calor generado durante la producción de rayos X,
                actuando como refrigerante.
                <br><br>
                <strong>Vidrio:</strong> forma el tubo interno y mantiene el vacío en su interior. Este vacío permite
                que los electrones
                viajen libremente desde el cátodo hasta el ánodo sin chocar con moléculas de aire, y además brinda
                soporte estructural.
                <br><br>
                <strong>Cátodo:</strong> es el electrodo negativo del tubo. Contiene un filamento de tungsteno que, al
                calentarse, emite
                electrones mediante el proceso de emisión termoiónica. Una copa de enfoque dirige estos electrones hacia
                el ánodo.
                <br><br>
                <strong>Ánodo:</strong> es el electrodo positivo del tubo y su función es recibir los electrones
                emitidos por el cátodo.
                Al impactar contra él, los electrones transforman parte de su energía en rayos X y el resto en calor.
                Puede ser fijo o giratorio; el giratorio disipa mejor el calor y prolonga la vida útil del tubo.
                <br><br>
                <strong>Ventana:</strong> es una pequeña abertura por donde salen los rayos X útiles. Está fabricada con
                materiales como
                el berilio, que permiten el paso de los rayos sin absorberlos en exceso.
                <br><br>
                <strong>Haz primario:</strong> es el conjunto de rayos X que salen directamente del tubo por la ventana
                antes de llegar
                al paciente. Es el haz que se utiliza para formar la imagen radiográfica.
                <br><br>
                <strong>Rayo central:</strong> es el rayo que se encuentra en el centro del haz primario y se usa como
                referencia para
                alinear correctamente el tubo con el receptor de imagen o el paciente, garantizando una proyección
                precisa.
            </p>
        </div>
    </div>
</div>`,D=`<div class="temaN°">
    <div class="subtemas">
        <div class="tema-content">
            <h2>Tipos de imágenes: aérea, latente y visible</h2>
            <p>En el proceso radiológico se distinguen tres etapas de formación de la imagen:
                <strong>1. Imagen aérea:</strong> Es el patrón invisible de radiación que atraviesa el cuerpo y contiene
                la información
                diagnóstica según las diferencias de absorción. <br><br>
                <strong>2. Imagen latente:</strong> Se forma en el <strong>receptor (película o sensor digital)</strong>
                al registrarse la radiación, pero
                aún no es visible. <br><br>
                <strong>3. Imagen visible:</strong> Es el resultado final tras el <strong>procesamiento químico o
                    digital</strong>, que muestra las
                estructuras anatómicas para su interpretación diagnóstica.
            </p>
        </div>
        <div>
            <img src="/fisica-web3/public/tipos de imagen.png" alt="" class="tema-img">
        </div>
    </div>
</div>`,X=`<div class="temaN°">
    <div class="subtemas">
        <div class="tema-content">
            <h2>Reglas para la formación de imágenes exactas</h2>
            <p> <strong>1. El foco debe ser lo más pequeño posible,</strong> entre
                más pequeño mayor calidad de imagen. <br>
                <strong>2. La distancia entre el objeto (paciente) y el tubo de Rx debe ser la máxima posible.</strong>
                <br>
                <strong>3. La distancia entre el objeto ( paciente) y el plano del receptor (película) debe ser la
                    mínima
                    posible</strong> <br>
                <strong>4. El rayo central debe ser perpendicular (90º) al objeto y a la placa</strong> <br>
                <strong> 5. El plano del objeto y el plano del receptor deben ser
                    paralelos, </strong> para evitar distorsión (desigualdad en las
                    ampliación de las partes del objeto ).
            </p>
        </div>
        <div>
            <img src="/fisica-web3/public/Reglas img. Real.png" alt="" class="tema-img">
        </div>
    </div>
</div>`,C=`<div id="temaN°">
    <div class="subtemas">
        <div class="tema-content">
            <h2>CONTROL DE LA RADIACIÓN DISPERSA</h2>
            <p> a radiación dispersa representa uno de los principales desafíos en la obtención de imágenes
                radiográficas de alta calidad. Este fenómeno ocurre cuando el haz de rayos X, al interactuar
                con los tejidos del cuerpo humano, cambia su dirección sin perder toda su energía, produciendo
                fotones que se desvían del camino original. Estos rayos dispersos no aportan información útil
                para la formación de la imagen, pero sí degradan su calidad y aumentan innecesariamente la dosis
                de radiación que recibe el paciente y el personal técnico.
                El control de la radiación dispersa es, por tanto, un aspecto crucial dentro de la radiología
                médica. Su adecuada gestión garantiza imágenes más nítidas, con mayor contraste y menor ruido
                radiográfico, al tiempo que optimiza la protección radiológica.
            </p>
        </div>
        <div>
            <img src="/fisica-web3/public/img rejilas.jpg" alt="radiación dispersa" width="450px" class="tema-img">
        </div>
    </div>
    <div class="subtemas">
        <div class="tema-content">
            <h2>Qué factores influyen en la cantidad de radiación dispersa?</h2>
            <p><strong>La cantidad de radiación dispersa depende de múltiples factores físicos y técnicos:</strong> <br>
                • El espesor del cuerpo irradiado: a mayor grosor del tejido, mayor será la cantidad de radiación
                dispersa. Los pacientes de contextura más grande o las áreas corporales gruesas (como abdomen o pelvis)
                producen más dispersión que regiones más delgadas. <br>
                • El tamaño del campo de radiación: cuanto más amplio sea el campo irradiado, mayor será la probabilidad
                de que los rayos X interactúen con los tejidos y generen radiación dispersa. Por ello, es fundamental
                utilizar colimadores para limitar el área irradiada solo a la zona de interés. <br>
                • El kilo voltaje (kVp): a medida que aumenta el kVp, los fotones de rayos X adquieren más energía y
                tienen más probabilidades de sufrir interacciones Compton, las principales responsables de la
                dispersión. <br>
                • La composición del tejido: los tejidos con bajo número atómico (como grasa y músculo) generan más
                radiación dispersa que los de alto número atómico (como el hueso).</p>
        </div>
        <div class="tema-content">
            <h2>¿Por qué disminuir el kVp <br> reduce la radiación dispersa, <br> pero aumenta la dosis al paciente?
            </h2>
            <p>Cuando se reduce el <strong>kVp</strong>, disminuye la energía de los fotones del haz primario. <br>
                Esto reduce las <strong>interacciones Compton (responsables de la radiación dispersa)</strong>, <br>
                pero también hace que el haz tenga menos poder de penetración. <br>
                En consecuencia, para lograr una imagen con densidad adecuada, el operador debe <br>
                aumentar el tiempo de exposición o la corriente (mAs). Ese incremento implica una <br>
                mayor dosis absorbida por el paciente, aunque se logre una reducción de la radiación dispersa. <br>
                <strong>"Por eso, en radiología se busca siempre un equilibrio entre calidad de imagen y dosis. No se
                    trata de
                    usar el kVp más bajo posible, sino de seleccionar el que proporcione una imagen diagnóstica con la
                    menor
                    dosis razonable" <br> (Bontrager & Lampignano, 2020).</strong>
            </p>
        </div>
    </div>
    <div class="subtemas">
        <div class="tema-content">
            <h2>¿Qué función cumple la rejilla en el control de la radiación dispersa?</h2>
            <p> La <strong>rejilla anti dispersión</strong> cumple la función de eliminar los fotones de rayos X que
                se desvían de su trayectoria original después de interactuar con los tejidos del paciente. Estos fotones
                dispersos viajan en múltiples direcciones y tienden a alcanzar el receptor de imagen sin contener
                información anatómica útil.
                <br>
                La rejilla está compuesta por delgadas láminas de plomo separadas por materiales
                radiotransparentes como aluminio, plástico o fibra de carbono. Su diseño permite el
                paso del haz primario (rayos útiles) mientras bloquea la radiación dispersa. Gracias
                a esto, se mejora la nitidez y el contraste de la imagen radiográfica.
                <br>
                <strong>"En términos prácticos, una imagen obtenida con rejilla muestra bordes más definidos
                    y diferencias más claras entre tejidos blandos, huesos y estructuras internas. Sin este
                    dispositivo, la radiación dispersa produciría una especie de “velo gris” sobre la imagen,
                    dificultando la interpretación médica" (Bushong, 2021).
                </strong>
            </p>
        </div>
        <div>
            <video src="/fisica-web3/public/Rejilla Antidifusora en RX 2.mp4" class="tema-video" controls></video>
        </div>
    </div>
    <div class="subtemas">
        <div class="tema-content">
            <h2>¿De qué materiales está compuesta una rejilla radiológica?</h2>
            <p> Las rejillas radiológicas se componen de finas láminas de plomo, separadas por materiales
                radiotransparentes como aluminio, plástico o fibra de carbono. El plomo absorbe los fotones dispersos
                debido a su alta densidad, mientras que los espacios permiten el paso del haz primario.
                <strong>"Las rejillas modernas están diseñadas para combinar eficacia y ligereza, ya que los sistemas
                    digitales
                    actuales requieren estructuras que no interfieran con la transmisión de datos ni con el movimiento
                    del
                    receptor" (IARC/OMS, 2013).</strong>
                <br>
            </p>
            <h2>¿Qué porcentaje de radiación dispersa puede eliminar una rejilla de alta calidad?</h2>
            <p>
            <strong>"Una rejilla de alta calidad puede eliminar entre 80% y 95% de la radiación dispersa. Este
                porcentaje
                depende de la relación de rejilla (la altura de las láminas dividida por el espacio entre ellas), el
                número de líneas por centímetro y la correcta alineación con el haz de rayos X" (Bushong,
                2021).</strong>
            </p>
            <h2>¿Dónde se coloca la rejilla en relación al paciente y al receptor de imagen?</h2>
            <p> La rejilla se coloca entre el paciente y el receptor (ya sea película, CR o detector digital). En
            equipos modernos, suele estar integrada al sistema de bandeja del receptor o en la mesa Bucky. Su
            ubicación permite interceptar los rayos dispersos antes de que lleguen al detector.
            </p>
        </div>
        <div>
            <img src="/fisica-web3/public/rejilla (img).png" alt="rejilla radiológica" height="40vh" class="tema-img">
            <img src="/fisica-web3/public/rejilla 2 (img).png" alt="rejilla radiológica" class="tema-img">
        </div>
    </div>
    <div class="subtemas">
        <div class="tema-content">
            <h2>Tipos de rejillas</h2>
            <p>Existen varios tipos de rejillas anti dispersión, cada una con características específicas que
                las hacen adecuadas para diferentes aplicaciones clínicas:
                <br>
                <strong>Rejillas lineales:</strong> Son las más comunes y consisten en láminas de plomo dispuestas
                paralelamente. Son efectivas para la mayoría de las aplicaciones radiográficas.
                <br>
                <strong>Rejillas cruzadas:</strong> Tienen láminas de plomo dispuestas en dos direcciones
                perpendiculares. Proporcionan una mayor reducción de la radiación dispersa, pero requieren una
                alineación precisa del haz primario.
                <br>
                <strong>Rejillas móviles:</strong> Pueden moverse durante la exposición para evitar la aparición de
                líneas visibles en la imagen. Son útiles en radiografías de cuerpo completo.
                <br>
                <strong>Rejillas estacionarias:</strong> Permanecen fijas durante la exposición y son más simples en
                diseño, pero pueden producir artefactos si no se alinean correctamente con el haz primario.
            </p>
        </div>
        <div>
            <img src="/fisica-web3/public/tipos de rejilla.jpg" alt="Tipos de Rejillas" class="tema-img">
        </div>
    </div>
</div>`,V=`<div id="temaN°">
    <div class="subtemas">
        <div class="tema-content">
            <h2>Receptores de imagenes</h2>
            <p> Es un dispositivo que mide la cantidad de radiación que llega al receptor de imagen y concluye
                automáticamente la exposición cuando ha llegado al mismo una cantidad suficiente de radiación como para
                proporcionar una imagen apta para el diagnóstico.
                Los chasis radiográficos pueden varíar en tamaño (de 13x18 cm hasta 35x43 cm) según la zona del cuerpo a
                estudiar. En su interior contienen pantallas reforzadoras que mejoran la calidad de la imagen.
            </p>
            <h2>Tipos de receptores</h2>
            <p><strong>Chasis de revelado químico: </strong>Usa película radiográfica procesada con químicos en un
                cuarto
                oscuro.
                <br><br>
                <strong>Chasis digitalizado:</strong> Utiliza placas de fósforo escaneadas para obtener imágenes
                digitales.
                <br><br>
                <strong>Flat panel (panel plano):</strong> Detectores digitales que convierten directamente los rayos X
                en
                señales electrónicas sin necesidad de procesado químico.
            </p>
        </div>
    </div>
    <div class="subtemas">
        <div class="tema-content">
            <h2>Caracterización de los equipos</h2>
            <h2>Radiología convencional</h2>
            <p><strong>Factores que influyen en la calidad de imagen:</strong> kV (kilovoltaje): Energía de los rayos
                X.
                <br>
                <strong>mA (miliamperaje):</strong> Intensidad del haz.
                <br>
                <strong>Tiempo de exposición:</strong> Duración de la radiación.
                <br>
                <strong>Factor de intensificación y velocidad de película:</strong> Afectan brillo y sensibilidad.
            </p>
            <h2>Radiología digital</h2>
            <p>
                Los sistemas digitales convierten los rayos X en señales electrónicas que se visualizan en un monitor.
                <strong>Componentes principales:</strong>
                Tubo de rayos X (ánodo y cátodo). <br>
                Generador de alta tensión. <br>
                Colimador (control del haz de radiación). <br>
                <strong>Tipos de detectores:</strong>
                <br>
                <strong>Conversión indirecta:</strong> Rayos X → luz → señal eléctrica.
                <br>
                <strong>Conversión directa:</strong> Rayos X → señal eléctrica directa (mayor resolución).
                <br>
                <strong>Parámetros técnicos:</strong> Resolución espacial y de contraste.
                <br>
                <strong>Ruido electrónico.</strong>
            </p>
        </div>
        <div>
            <img src="/fisica-web3/public/receptores de imagenes.jpg" alt="receptores de imagen" class="tema-img">
        </div>
    </div>
    <div class="subtemas">
        <div class="tema-content">
            <h2>Ventajas y desventajas de los tipos de receptores de imagen</h2>
            <img src="/fisica-web3/public/tabla receptores.jpg" alt="">
        </div>
    </div>
</div>`,k=`<div id="temaN°">
    <div class="subtemas">
        <div class="tema-content">
            <h2>Calculo de modificación a factores de exposición</h2>
            <p> El cálculo de modificación de los factores de exposición en radiología consiste en ajustar los
                parámetros
                técnicos del equipo de rayos X para obtener imágenes diagnósticas de calidad óptima, minimizando la
                dosis de radiación al paciente. <br>
                Estos factores controlan la cantidad, energía y tiempo de exposición de la radiación que llega al
                receptor de imagen.
            </p>
        </div>
        <div>
            <video src="/fisica-web3/public/calculos.mp4" class="tema-video" controls></video>
        </div>
    </div>
    <div class="subtemas2">
        <div class="tema-content">
            <h2>Factores primarios de exposición</h2>
            <p> <strong>Kilovoltaje (kV):</strong> Determina la energía o capacidad de penetración del haz de rayos X.
                <br><br>
                A mayor <strong>kV</strong>, mayor poder de penetración y menor el contraste. Un incremento del
                <strong>15%</strong> en kV aproximadamente duplica la densidad de la imagen, por lo que puede
                compensarse reduciendo a la mitad el <strong>miliamperaje-segundo (mAs).</strong>
                <br><br>
                <strong>Miliamperaje (mA):</strong> Controla la cantidad de radiación producida por segundo. A mayor mA,
                mayor densidad (oscuridad) en la imagen. Si se aumenta el mA, debe reducirse proporcionalmente el tiempo
                de exposición para mantener la misma dosis total.
                <br><br>
                <strong>Tiempo de exposición (s):</strong> Representa la duración de la emisión de rayos X. Influye
                directamente en la cantidad total de radiación <strong>(mAs = mA x s).</strong> En pacientes pediátricos
                o inquietos, se recomienda reducir el tiempo de exposición para evitar movimiento y desenfoque.
            </p>
            <h2>Factores secundarios de exposición</h2>
            <p> <strong>Distancia foco-película (DFP) o foco-receptor:</strong> Afecta la intensidad del haz según la
                <strong>Ley del Cuadrado Inverso:</strong>
                La intensidad es inversamente proporcional al cuadrado de la distancia. <br>
                Es decir, si se duplica la
                distancia, la intensidad disminuye a la cuarta parte.
                Para compensar un aumento de distancia, debe incrementarse el mAs proporcionalmente. <br><br>
                <strong>Espesor del paciente:</strong> Cuanto mayor sea el espesor corporal, mayor absorción de rayos X
                y por tanto se requiere un aumento de kV o mAs.
                Es recomendable ajustar principalmente el kV para tejidos más densos y el mAs para mejorar la densidad
                sin alterar el contraste. <br><br>
                <strong>Uso de rejillas (grids):</strong> Las rejillas eliminan radiación dispersa, mejorando el
                contraste, pero requieren aumentar la exposición. <br>
                El factor de rejilla indica cuánto debe multiplicarse el mAs al usarla (por ejemplo, 5:1 → multiplicar
                por 2; 12:1 → multiplicar por 4 o más).
            </p>
        </div>
    </div>
    <div class="subtemas">
        <div class="tema-content">
            <h2>Compensaciones y fórmulas prácticas</h2>
            <p> <strong>Relación kV-mAs:</strong> Incrementar el kV en 15% ≈ duplicar la densidad → reducir el mAs a la
                mitad y a su vez el disminuir el kV en 15% ≈ reducir la densidad a la mitad → duplicar el mAs.
                <br><br>
                <strong>Ley del Cuadrado Inverso:</strong><br>
                <img src="/public/formula1.jpg" alt=""> <br>
                <strong>donde:</strong><br>
                I = intensidad de radiación <br>
                D = distancia foco-película <br><br>
                <strong>Ecuación de mantenimiento de exposición:</strong><br>
                <img src="/public/formula 2.jpg" alt=""><br>
                <strong>donde:</strong><br>
                mAs = tiempo de exposición <br>
                D = distancia foco-película
            </p>
        </div>
    </div>
    <div class="subtemas">
        <div class="tema-content">
            <h2>Ventajas y desventajas del ajuste manual vs. automático</h2>
            <img src="/fisica-web3/public/tabla calc. mod. fac.jpg" alt="">
        </div>
    </div>
</div>`,g={"/":{view:E,logic:()=>a(()=>import("./home-BOofd1H3.js"),[]),title:"Inicio | Física Radiologica"},"/unidadI":{view:z,logic:()=>a(()=>import("./unidadI-Tubi1k4O.js"),[]),title:"Unidad I | Física Radiologica"},"/unidadII":{view:R,logic:()=>a(()=>import("./unidadII-B3mqzYXo.js"),[]),title:"Unidad II | Física Radiologica"},"/unidadIII":{view:I,logic:()=>a(()=>import("./unidadIII-DzmDicsA.js"),[]),title:"Unidad III | Física Radiologica"},"/tema1":{view:w,logic:()=>a(()=>Promise.resolve().then(()=>U),void 0),title:"Tema 1 | Física Radiologica"},"/tema2":{view:P,logic:()=>a(()=>Promise.resolve().then(()=>F),void 0),title:"Tema 2 | Física Radiologica"},"/tema3":{view:L,logic:()=>a(()=>Promise.resolve().then(()=>N),void 0),title:"Tema 3 | física Radiologica"},"/tema4":{view:S,logic:()=>a(()=>Promise.resolve().then(()=>M),void 0),title:"Tema 4 | Física Radiologica"},"/tema5":{view:x,logic:()=>a(()=>Promise.resolve().then(()=>$),void 0)},"/tema6":{view:T,logic:()=>a(()=>Promise.resolve().then(()=>B),void 0)},"/tema7":{view:A,logic:()=>a(()=>Promise.resolve().then(()=>G),void 0)},"/tema8":{view:O,logic:()=>a(()=>Promise.resolve().then(()=>Q),void 0)},"/tema9":{view:D,logic:()=>a(()=>Promise.resolve().then(()=>H),void 0)},"/tema10":{view:X,logic:()=>a(()=>Promise.resolve().then(()=>J),void 0)},"/tema11":{view:C,logic:()=>a(()=>Promise.resolve().then(()=>K),void 0)},"/tema12":{view:V,logic:()=>a(()=>Promise.resolve().then(()=>W),void 0)},"/tema13":{view:k,logic:()=>a(()=>Promise.resolve().then(()=>Y),void 0)},"*":{view:q,logic:()=>a(()=>import("./404-BoqRquPy.js"),[]),title:"404 | Not Found"}};async function f(){const c=location.hash.slice(1)||"/",t=document.getElementById("app"),i=g[c]||g["*"];if(i===g["*"]&&c!=="*"){console.log("Route not found, redirecting to 404"),location.hash="*";return}if(document.title=i.title||"Física",t.innerHTML=i.view,i.logic){const m=await i.logic();requestAnimationFrame(()=>{try{m.init?.()}catch(e){console.error("Error initializing route logic:",e)}})}}window.addEventListener("hashchange",f);window.addEventListener("DOMContentLoaded",f);const U=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),F=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),N=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),M=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),$=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),B=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),G=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),Q=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),H=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),J=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),K=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),W=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),Y=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));
