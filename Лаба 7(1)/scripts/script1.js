document.addEventListener('DOMContentLoaded', function () {
  psych1 = "<h2>Трудно быть человеком </h2><p>Дождливым пятничным вечером профессор Кембриджского университета Эндрю Мартин находит решение самой сложной в мире математической задачи. Оно способно изменить весь ход человеческой истории. Но профессор Мартин внезапно и бесследно исчезает.</p><p>Когда спустя некоторое время его обнаруживают... шагающим по шоссе без какого-либо предмета одежды на теле, профессор Мартин ведет себя немного странно. Жене и сыну он кажется каким-то другим. Самому ему абсолютно все вокруг представляется нелепым, люди достойными жалости, человеческая жизнь лишенной смысла. Все окружающие вызывают у него отвращение. Все, кроме Ньютона. Старого полуслепого пса.<p>Эта остроумная, смешная и грустная одновременно книга о том, как трудно быть человеком. И как это потрясающе здорово!</p>";
  psych2 = "<h2>Иллюзия Я, или Игры, в которые играет с нами мозг</h2><p>В книге представлены новейшие научные данные о работе мозга и его влиянии на нашу самоидентификацию. Вы найдете ответы на самые неожиданные и парадоксальные вопросы. Например: откуда возникают и как развиваются наши мысли; почему для развития мозга так важны внешние воздействия; от чего на самом деле зависят решения, которые мы принимаем; почему мы помним много лишнего, нередко забывая нужное; может ли мозг заставить нас делать то, что мы не хотим; как «договориться» с мозгом и взять собственную жизнь под контроль; что делать, чтобы наше Я стало успешным и счастливым.</p>";
  fantasy1 = "<h2>Мир Карика</h2><p>Вы попадаете в мир, где вокруг одни негодяи. Ваш покровитель – бог обмана. Ваша сила – магия, но никто не должен о ней узнать…</p><p>Все вокруг погибли, но ты и кучка незнакомцев волею таинственных существ перенеслись в странное место. Мир Карика похож на игру, тут можно получать уровни, развиваться, воскресать в случае неудач. Но стоит допустить ошибку, поверить не тому, и ты легко умрешь по-настоящему.</p><p>Все знают, где выход из мира, где можно вернуться домой, вот только еще ни один игрок не прошел на ту сторону. Хочешь быть первым? Тогда осталось определиться: кто стоит рядом с тобой? Друг или враг? Тварь бездны или невинная жертва? Обычная девушка или…</p>";
  fantasy2 = "<h2>Изгой</h2><p>Прошли столетья с тех пор как отгремели чудовищные войны магов, и половина континента превратилась в покрытую пеплом пустошь непригодную для жизни. Некогда великолепные города теперь лежат в руинах населенных настолько опасными темными тварями, что пришлось возвести Пограничную Стену, дабы оградить мирных жителей от смертельной угрозы.</p><p>Так появились Дикие Земли...</p><p>Небольшой отряд во главе с бароном Корисом Ван Исер сослан на постоянное поселение в Дикие Земли, что, по сути, является лишь отсрочкой смертной казни – разваливающаяся Империя управляемая рукой стареющего короля избавляется от неугодных. У поселенцев одна цель - выжить любой ценой, всему и всем вопреки.</p>";
  fant1 = "<h2>Звездная Бабочка</h2><p>Человечество оказалось на грани гибели: природные катаклизмы, смертельные вирусы, теракты, насилие и жестокость. Кажется, спасения нет. Но отчаянный инженер-идеалист решается на безумие. Он конструирует корабль «Звездная бабочка», чтобы перелететь на другую планету и дать человечеству новый шанс. Несколько тысяч тщательно отобранных добровольцев рискнули поверить, что можно все начать сначала и построить справедливое общество. Смогут ли они выжить на гигантском корабле и добраться до загадочной планеты? Идеалы – это прекрасно, но куда бы человек ни сбежал, он берет с собой свою сущность...</p>"
  fant2 = "<h2>Дюна</h2><p>Роман Дюна, первая книга прославленной саги, знакомит читателя с Арракисом - миром суровых пустынь, исполинских песчаных червей, отважных фрименов и таинственной специи. Безграничная фантазия автора создала яркую, почти осязаемую вселенную, в которой есть враждующие Великие Дома, могущественная Космическая Гильдия, загадочный Орден Бинэ Гессерит и неуловимые ассасины.</p>";
  
  function hide() {
    this.hidden = true;
    console.log(this.closest("#content-item").lastElementChild);
    this.closest("#content-item").lastElementChild.removeAttribute('style');
    console.log(this.closest("#content-item").lastElementChild);

    if(window.innerWidth < 840) {
      this.closest("#content-item").style.display = "block";
      this.closest("#content-item").style.textAlign = "center";
      this.closest("#content-item").style.paddingRight = "0px";
      this.closest("#content-item").lastElementChild.style.textAlign = "left";
    }
  }

  function check() {  
    if(document.querySelectorAll('#button')[0].hidden == true || 
    document.querySelectorAll('#button')[1].hidden == true){
      if(window.innerWidth > 840) {
        document.querySelectorAll('#content-item')[0].style.display = "flex";
        document.querySelectorAll('#content-item')[1].style.display = "flex"; 
      } else {
        if(document.querySelectorAll('#button')[1].hidden == true) {
          document.querySelectorAll('#content-item')[1].style.display = "block";
          document.querySelectorAll('#content-item')[1].style.textAlign = "center";
          document.querySelectorAll('#content-item')[1].style.paddingRight = "0px";
          document.querySelectorAll('#item')[1].style.textAlign = "left";
        }
        if(document.querySelectorAll('#button')[0].hidden == true){
          document.querySelectorAll('#content-item')[0].style.display = "block";
          document.querySelectorAll('#content-item')[0].style.textAlign = "center";
          document.querySelectorAll('#content-item')[0].style.paddingRight = "0px";
          document.querySelectorAll('#item')[0].style.textAlign = "left";
        }
        }
      }
    }

  function psych() {
    img1.src = "images/matt.png";
    img2.src = "images/bruce.png";
    img1.setAttribute("href", "http://oz.by/books/more10750128.html");
    img2.setAttribute("href", "https://belkniga.by/catalog/nauchnaya_i_tekhnicheskaya_literatura/psikhologiya_filosofiya/psikhlabmo_illyuziya_ya_ili_igry_v_kotorye/");
    document.querySelectorAll('#item')[0].innerHTML = psych1;
    document.querySelectorAll('#item')[1].innerHTML = psych2;
  }

  function fantasy() {
    img1.src = "images/savinov.png";
    img2.src = "images/mihailov.jpg";
    img1.setAttribute("href", "https://author.today/work/8776");
    img2.setAttribute("href", "https://author.today/work/23034");
    document.querySelectorAll('#item')[0].innerHTML = fantasy1;
    document.querySelectorAll('#item')[1].innerHTML = fantasy2;
  }

  function fant() {
    img1.src = "images/verber.png";
    img2.src = "images/herbert.jpg";
    img1.setAttribute("href", "https://www.litres.ru/bernar-verber/zvezdnaya-babochka-9598677/chitat-onlayn/");
    img2.setAttribute("href", "https://oz.by/books/more10916281.html");
    document.querySelectorAll('#item')[0].innerHTML = fant1;
    document.querySelectorAll('#item')[1].innerHTML = fant2;
  }
  let slider = new SimpleAdaptiveSlider('.slider', {
    autoplay: true,
    interval: 10000,
  });

  function send() {
    hreff = this.getAttribute("href");
    window.open(hreff, '_blank');


  }

document.querySelectorAll('#button')[0].addEventListener("click" , hide);
document.querySelectorAll('#button')[1].addEventListener("click" , hide);
img1.addEventListener("click" , send);
img2.addEventListener("click" , send);
document.querySelector('#psych').addEventListener("click", psych);
document.querySelector('#fantasy').addEventListener("click", fantasy);
document.querySelector('#fant').addEventListener("click", fant);
window.addEventListener('resize', check);
});

