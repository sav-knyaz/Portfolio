export const TheFurniture_problem = `               Сложности на проекте, в основном, были связаны с тем, что функционал 
проекта во время разработки менялся (захотелось добавить комментарии,
 раздел с готовыми комнатами и другие мелочи), это за собой тащило изменения в 
 структуре данных и структур их отображения, вследствии этого рефакторинг и реорганизация кода 
 усложнялись. В конструкторе комнаты, находится специальная область (контейнер комнаты),
 где с помощью "drag and drop" происходит композиция мебели и пояснительного блока к ней.  
 Так вот при перетаскивании элементов малых размеров, они смещались за пределы курсора (в зависимости от его положения в контейнере комнаты) 
 и событие pointerUp не срабатывало, тк находился обработчик события на элементе и 
 "drag and drop" не завершался. Решил эту проблему использованием цепочки условий, где в зависимости от 
 местоположения курсора отнималась/прибавлялась разница этого смещения в позиционирование элемента.`

 export const TheFurniture_further = `В планах собираюсь сделать мобильную версию этого веб-приложения. 
  Компоненты, в которых большие простыни кода, разбить на более мелкие компоненты, это улучшит не только читаемость,
   но и пере используемость кода. 
  Добавить сортировку товара по различным критериям (размещать товары по возрастанию цены, рейтингу и др),
  возможность изменения оценки товара для пользователя.
  Скорее всего переработаю блок комментариев, добавлю личный кабинет для пользователя. Исправлю текущие недочеты,
  которые присутствуют на проекте (ползунок рейтинга в фильтре, более интересный UI пагинации).
   `
export const GtaHud_problem = `В принципе проект не сложный, затруднения были только в работе с объектом EventMeneger и векторной графикой
 (про svg теги до этого только читал). EventMeneger — это объект, в котором хранятся события, у него есть парочка методов для работы с этими 
 событиями (создание, удаление и изменение), надо сказать, что пользовался только созданием и удалением. Как работать с этим объектом
  разбирался сам, лазя по всему коду проекта. Тк я писал интерфейс игры, то там присутствовало большое количество различных индикаторов и 
  формы у них были не стандартные ( 3/4 круга, анимация пульса сердца и др), поэтому единственным оптимальным решением было
   использование svg тегов (circle, path, linearGradient и других). Практически все компоненты независимы и могут быть пере использованы,
   например, индикаторы воды, еды и топлива идентичны, меняется только иконка (капля, бензоколонка и вилка с ножом), я написал один компонент 
   для них, через *пропсы передавал ссылку на иконку и количество единиц, которые остались у игрока. Подобным образом создавал уведомления,
   чат и его сообщения, и многое-многое другое.
 `
export const GtaHud_working_process = `В предисловие скажу с кем я работал. Это небольшая команда разработчиков (пару фронтов
 и бэков), где есть свой дизайнер и даже менеджер проектов. 
Рабочий процесс был построен таким образом, что к концу недели дизайнер доделывал какой-то 
макет (например: интерфейс при смерти и реанимации) и на следующей недели я по нему писал UI код.
 Созванивались с PM в конце надели, рассказывал и показывал, что сделал за этот спринт. Два раза
 на этих созвонах ревьюил мой код один из фронтов команды. Моковых апи на проекте не было, данные с которыми работал hud
  мне скинули в чате телеграмма. 
`
export const Lending_problem = `Проблемы, которые возникали в процессе работы над этим проектом,
были в основном связаны с тем, что не хватало опыта и знаний в разработке. Сейчас, смотря 
на код этого проекта, я понимаю, что нужно было использовать модульный подход, где каждый модуль мог бы быть,
пере использован и это в добавок повысило бы читаемость кода. Использовал бы комбинаторные и пере используемые
 селекторы, это бы сократило в разы время на разработку и улучшило бы читаемость кода. `
export const Lending_work_process = `Рабочий процесс здесь был построен просто. После того как я получил макет в фигме и 
оговорили сроки сдачи (через 6 дней), приступил к выполнению. Через 3 дня поговорили о ходе разработки и на шестой день 
лендинг был готов.`
export const Weather_about = `Это мой первый реактовский проект и также первый проект, где я написал свой первый запрос
к стороннему ресурсу. Пользователь может в поле ввода ввести город, в котором он хочет узнать погоду, и получит прогноз на
день с интервалом в три часа, а также на следующие 5 дней. Ещё в этом веб-приложении присутствуют данные о влажности, давлении 
и других данных о текущих погодных условиях. Есть адаптив под мобильные устройства. 
`
export const ToDoList_about = `Мой первый и единственный проект на Vue). Выполняя его разбирался с синтаксисом 
Вью, как он устроен. В начале выполнил TO DO LIST, а потом Weather, и как я уже писал ранее на гранях куба, 
мне больше понравился React. Задачи, которые записаны в список дел, сортируются на "Общий список дел", "Важное", "Список не выплненных" 
и "Список выполненных". В этом проекте я использовал localstorage для хранения задач. Так же есть мобильная версия.`
export const Form_about = `Ни самый сложный проекте. Просто выполняя его, я учился работать с 
формой, ее валидацией, регулярными выражениями, объектом FileReader и немного поигрался с прелоудерами. На фоне
множества других форм выделяется тем, что здесь есть превью выбранного изображения. Стек: JS, CSS, HTML.`
export const Taplink_about = `Не сложные проектик. Taplink это сайтик с ссылками на соц сети владельца этого сайта, скидки и купоны,
 текущие акции. Стек: JS, HTML, CSS. Сайт адаптивен под все устройства.` 

/*я переписал пару имен переменных и на последнем
 созвоне немного переделал событие, которое добавлялось в обьект EventMeneger*/

