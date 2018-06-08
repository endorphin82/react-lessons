# Урок 5 - React in ES6

### Материалы

🔗 **[Запись урока](https://youtu.be/axEPpLiCJYE)**

### Содержание урока

1. [Способы объявления компонентов]( https://youtu.be/axEPpLiCJYE#t=9m23s) 
2. [Использование ES6 классов для описания компонентов]( https://youtu.be/axEPpLiCJYE#t=11m37s) 
3. [Bind context]( https://youtu.be/axEPpLiCJYE#t=30m00s) 
4. [Props Validation]( https://youtu.be/axEPpLiCJYE#t=49m00s)
5. [Context в React]( https://youtu.be/axEPpLiCJYE#t=84m06s) 
6. [Functional Components]( https://youtu.be/axEPpLiCJYE#t=107m53s)
7. [Higher Order Components]( https://youtu.be/axEPpLiCJYE#t=118m42s)

### Задания

#### 1. HOC's

⭐️⭐️⭐️

Напишите Higher Order Компоненты для решения таких задач:

1) Изменение props. Как аргумент передается объект-маппер для названий props.

```
@mapProps({ foo: 'bar' })
class Component ...

// В компонент передаются такие props

<Component foo="hello" />

// В сам компонент должны прийти props вида { bar: "hello" }

```

2) HOC onlyUpdateForKeys. Не дает компоненту обновляться, если ни один с переданых props не изменен

```
@onlyUpdateForKeys([ 'foo' ])
class Component ...

```

3) HOC shouldComponentRender, который не будет рендерить компонент, если переданная функция-предикат возвращает false

```
@shouldComponentRender(props => props.isLoaded)
class Component ...

```

#### 2. Список студентов с ES6 и PropTypes

⭐️⭐️⭐️

Измените решение для задания 4_1 так, чтобы для описания компонентов использовались ES6 классы либо функции (где какой вариант больше подходит).

Также добавьте propTypes для всех компонентов.

#### 3. Eslint

⭐️

Для задания №2 подключите ESLint к Webpack с eslint-plugin-react и другими плагинами по вашему выбору (a11y, imports). В конфигурации используйте рекомендуемые правила. Соответственно, нужно исправить все ошибки в коде.

#### 4. Eslint Custom Rule

⭐️⭐️

Напишите свое правило для ESLint, которое запрещает использование цикла `for`, содержащее сравнение с длиной массива.

Пример:

```js
    const someArray = [1, 2, 3];

    for (let i; i < someArray.length; i++) {
        someArray[i] = someArray[i] * 2;
    }
```

Правило должно требовать использование map или forEach.

### Полезности

1. [Context](https://facebook.github.io/react/docs/context.html)
2. [PropTypes](https://facebook.github.io/react/docs/typechecking-with-proptypes.html)
3. [React Stateless Functional Components: Nine Wins You Might Have Overlooked](https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.dy9872bq8)
4. [React Higher Order Components in depth](https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e#.2nl9kzdzk)
5. [Recompose](https://github.com/acdlite/recompose)

---

6. [Документация по правилам ESLint](http://eslint.org/docs/rules/)
7. [Документация eslint-loader](https://github.com/MoOx/eslint-loader)
8. [Документация eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
9. [Написание своих правил ESLint](http://eslint.org/docs/developer-guide/working-with-rules)
10. [AST Explorer](https://astexplorer.net/)
