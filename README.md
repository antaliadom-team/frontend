# Фронтенд проекта Анталия Дом 🏡

## Над проектом трудятся:

 - Белла https://github.com/bellabzhu
 - Игорь https://github.com/Legend1796
 - Геннадий https://github.com/Resaw-git
 - Никита https://github.com/zeroqs
 - Максим https://github.com/Maksimarus

## Как приступить к разработке?

  1. Клонировать репозиторий <code>git clone https://github.com/antaliadom-team/frontend.git </code>
  2. Перейти в папку с проектом  <code>cd frontend</code>
  3. Установить зависимости <code>npm install</code>
  4. Выбрать себе доступную задачу и перейти в соответсвующую ей ветку для разработки <code>git checkout _название ветки_</code>
  5. Запушить изменения с коммитом "_что я наделал_"
  6. Радоваться что всё прошло успешно :tada:

## Несколько требований к проекту

  - Названия ***файлов и директорий*** написаны в нижнем регистре и не имеют пробелов, для разделений используется дефис, например: директория <code>my-dir</code>, файл <code>my-component.jsx</code>
  - Стили портированы как модули. Если есть общие стили, они портированы в глобальную область видимости
  - Названия функциональных ***компонентов*** написаны с ***Большой буквы***
  - Разметка портирована в JSX, заключена в <code>( )</code> и вынесена в соответствующие ей компоненты
  - Хуки не используются внутри условных блоков и вызываются в основной функции компонента
  - Один файл содержит в себе один функциональный компонент
  - Файлы с утилитарными функциями имеют расширение <code>.js</code>
  - Файлы с компонентами имеют расширение <code>.jsx</code>
  - Имена переменных — существительные, имена функций отражают то что они делают
  - Для именования запрещены транслит и неуместные сокращения
  - Код оформлен по принципам программирования DRY:droplet: и KISS:kiss:


## Пару слов о том как работать с git

 - Проект содержит основую ветку <code>main</code>. Она предназначена для релизного состояния приложения
 - Ветка <code>dev</code> предназначена для слияния ваших работ
 - Коммиты пишем на русском языке. Начинается коммит с глагола - что сделал(а)?. Например "написал(а) маршрутизацию" или "сделал(а) функцию закрития модального окна на крестик"
 - Если необходимо исправить баг, то создайте ветку с названием <code>hotfix/modal</code> и пул реквест
 - Если пул реквест принят ветка в которой велась разработка удаляется
 - Описал своими словами как мог, подробнее о git-flow можно почитать здесь https://github.com/SergeFocus/git-flow