
const quizData = [
    {
        question: "1. Что изображено под цифрой '17' на отбойном молотке?",
        image: "img/1.jpg", // Placeholder; replace with actual image URL
        correct: "Ударник",
        options: [
            "Ударник",
            "Сальник",
            "Молоток",
            "Цилиндр"
        ]
    },
    {
        question: "2. Что изображено под цифрой '2' на ручном перфораторе?",
        image: "img/2.jpg", // Placeholder; replace with actual image URL
        correct: "Поршень-ударник",
        options: [
            "Поршень-ударник",
            "Молоточек",
            "Втулка",
            "Поршень"
        ]
    },
    {
        question: "3 Что изображено под цифрой '3' на центробежном насосе?",
        image: "img/3.jpg", // Placeholder; replace with actual image URL
        correct: "Направляющий аппарат",
        options: [
            "Направляющий аппарат",
            "Центробежная система",
            "Всасывающий канал",
            "Система воздуха"
        ]
    },
    {
        question: "4 Что изображено под цифрой '6' на винтовом насосе?",
        image: "img/4.jpg", // Placeholder; replace with actual image URL
        correct: "Сальник",
        options: [
            "Поршень-ударник",
            "Винтовая система",
            "Сальник",
            "Экцентрик"
        ]
    },
    {
        question: "5. Что изображено под цифрой '1' на регулируемом направляющем аппарате вентилятора ВМ-8М ?",
        image: "img/5.jpg", // Placeholder; replace with actual image URL
        correct: "Лопатки с поворотными закрылками",
        options: [
            "Поршень-ударник",
            "Лопатки с поворотными закрылками",
            "Ударник",
            "Крылья с закрылками"
        ]
    },
    {
        question: "6. Что изображено под цифрой '5' на компрессоре ДЭН-45ШМ «ШАХТЕР»?",
        image: "img/6.jpg", // Placeholder; replace with actual image URL
        correct: "Система масловоздушная",
        options: [
            "Поршень-ударник",
            "Сальник",
            "Система масловоздушная",
            "Система воздушная"
        ]
    },
    {
        question: "7 Что изображено под цифрой '6' на компрессоре УКВШ - 5/72?",
        image: "img/7.jpg", // Placeholder; replace with actual image URL
        correct: "Датчик давления",
        options: [
            "Поршень-ударник",
            "Контроллер",
            "Датчик температуры",
            "Датчик давления"
        ]
    },
    {
        question: "8 Что изображено под цифрой '8' на Шахтном электровозе АМД-8 Д?",
        image: "img/IMG_5837.jpeg", // Placeholder; replace with actual image URL
        correct: "Контроллер",
        options: [
            "Система масловоздушная",
            "Контроллер",
            "Электро-система",
            "Система управления"
        ]
    },
    {
        question: "9. Что изображено под цифрой '8' на шахтной вагонетке ВД 3,3 ?",
        image: "img/9.jpg", // Placeholder; replace with actual image URL
        correct: "Затворы для открывания и закрывания",
        options: [
            "Поршень-ударник",
            "Затворы",
            "Затворы для открывания и закрывания",
            "Держатели"
        ]
    },
    {
        question: "10. Что расположено под цифрой '6' на погрузочной машине 1ПНБ2 ?",
        image: "img/10.jpg", // Placeholder; replace with actual image URL
        correct: "Система управления",
        options: [
            "Система управления",
            "Система давления",
            "Цилиндрическая система",
            "Затворы"
        ]
    },
    {
        question: "11. Что расположено под цифрой '1' на проходческом комбайне ГПКС ?",
        image: "img/11.jpg", // Placeholder; replace with actual image URL
        correct: "Стреловидный исполнительный орган",
        options: [
            "Поршень-ударник",
            "Лопатка",
            "Стреловидный исполнительный орган",
            "Проходимый ударник"
        ]
    },
    {
        question: "12 Что расположено под цифрой '10' на электроузле комбайна SL 300 ?",
        image: "img/12.jpg", // Placeholder; replace with actual image URL
        correct: "Аварийный - Стоп",
        options: [
            "Поршень-ударник",
            "Аварийный - Стоп",
            "Система давления",
            "Cтоп-сигнал"
        ]
    },
    {
        question: "13 Что расположено под цифрой '2' на узле резания комбайна SL 300 ?",
        image: "img/13.jpg", // Placeholder; replace with actual image URL
        correct: "Двигатель резания",
        options: [
            "Поршень-ударник",
            "Прокручивающий вал",
            "Стреловидный исполнительный орган",
            "Двигатель резания"
        ]
    },
    {
        question: "14 Что расположено под цифрой *3* на гусеничном ходовом механизме?",
        image: "img/14.jpg", // Placeholder; replace with actual image URL
        correct: "Регулируемый гидромотор",
        options: [
            "Регулируемый гидромотор",
            "Мотор",
            "Регулируемый мотор",
            "Двигатель"
        ]
    },
    {
        question: "15 Что расположено под цифрами '7-8' на питателе проходческого комбайна ГПКС ?",
        image: "img/15.jpg", // Placeholder; replace with actual image URL
        correct: "Гидроцилиндры перемещения",
        options: [
            "Поршень-ударник",
            "Гидроцилиндры перемещения",
            "Гидроусилитель",
            "Ротор"
        ]
    },
    { 
    question: "15 Что расположено под цифрой '5' проходческого комбайна ГПКС ?",
        image: "img/15.jpg", // Placeholder; replace with actual image URL
        correct: "Нагребающие лапы",
        options: [
            "Поршень-ударник",
            "Нагребающие лапы",
            "Гидроусилитель",
            "Ротор"
        ]
    },
    {
        question: "16 Что расположено под цифрой '9' на шахтном самоходном вагоне 10ВС15 ?",
        image: "img/16.jpg", // Placeholder; replace with actual image URL
        correct: "Кабельный барабан",
        options: [
            "Поршень",
            "Cтартор",
            "Кабельный барабан",
            "Пневмо-барабан"
        ]
    },
    {
        question: "17 Что необходимо сделать если возникает большое усилие на рукоятке для запуска и работы отбойного молотка или молоток не останавливается?",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "Вывернуть ниппель, снять рукоятку. Промыть и отжать вентиль. Удалить посторонние предметы.",
        options: [
            "Проверить давление воздуха. Длина резинового рукава от воздухопровода до молотка не должна быть более 10-12 м.",
            "Удалить ржавчину, масло. Продуть воздухом, собрать молоток и приработать. ",
            "Вывернуть ниппель, снять рукоятку. Промыть и отжать вентиль. Удалить посторонние предметы.",
            "Выдать отбойный молоток на поверхность для последующего ремонта."
        ]
    },
    {
        question: "18 Какая допускается максимальная длина резинового рукава от воздуховода до отбойного молотка?",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "Не более 10-12 м.",
        options: [
            "Не более 10-12 м.",
            "Не более 20 м. ",
            "Не более 5-10 м.",
            "Не более 5м."
        ]
    },
    {
        question: "19 Какое рабочее давление воды подается для промывки ручного перфоратора?",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "2- 4 кгс/см2 Насосы, компрессоры, вентиляторы.",
        options: [
            "8-10 кгс/см2",
            "6-8 кгс/см2",
            "4-6 кгс/см2 ",
            "2- 4 кгс/см2 Насосы, компрессоры, вентиляторы."
        ]
    },
    {
        question: "20 Какая должна быть максимально допустимая температура подшипников при работе углесоса?",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "75° С",
        options: [
            "55° С",
            "65° С",
            "75° С",
            "85° С"
        ]
    },
    {
        question: "21 При помощи чего осуществляется поворот закрылков лопаток на угол от +30 до -50° на вентиляторе типа BM?",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "Торцевого ключа",
        options: [
            "Зубила",
            "Молотка",
            "Рожкового ключа",
            "Торцевого ключа"
        ]
    },
    {
        question: "22 Какие виды исполнения имеют шахтные локомотивы ?",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "Всё перечисленное",
        options: [
            "Рудничное нормальное (РН)",
            "Рудничное повышенной надежности (РП)",
            "Рудничное взрывобезопасное (РВ)",
            "Всё перечисленное"
        ]
    },
    {
        question: "23 Какими двумя независимыми системами торможения оборудован шахтный электровоз АМ 8Д?",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "Механическим тормозом с ручным приводом и электродинамическим тормозом",
        options: [
            "Механическим тормозом с ручным приводом и электродинамическим тормозом",
            "Механическим тормозом с ручным приводом и пневматическим тормозом",
            "Механическим тормозом с ручным приводом и гидравлическим тормозом ",
            "Электродинамическим тормозом и пневматическим тормозом"
        ]
    },
    {
        question: "24 Для чего предназначены шахтные маневровые лебедки?",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "Все варианты верны",
        options: [
            "Все варианты верны",
            " Для откатки порожних и груженых вагонеток по горизонтальным участкам шахт, опасных по газу или пыли, и на поверхности",
            "Для механизации маневровых работ на погрузочных пунктах под забоями, приёмно-отправительных площадках уклонов и бремсбергов, в околоствольных дворах и у опрокидывателей",
            "Для спуска и подъема оборудования, леса и других материалов на вспомогательных операциях погрузочные и горновыемочные машины"
        ]
    },
    {
        question: "25 Погрузочные машины по способу передвижения разделяют на: ",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "С колеснорельсовой, гусеничной, пневмоколесной ходовой частью",
        options: [
            "С колеснорельсовой, гусеничной, пневмоколесной ходовой частью",
            "С колеснорельсовой и гусеничной ходовой частью",
            "С колесной и рельсовой ходовой частью",
            "С гусеничной и рельсовой ходовой частью"
        ]
    },
    {
        question: "26 Какое количество рукояток управления установлено на гидравлическом пульте погрузочной машины 2NH62 ? ",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "12",
        options: [
            "8",
            "10",
            "12",
            "14"
        ]
    },
    {
        question: "27 Какой максимальный ход телескопа стрелы машины МПК 1600 «Буян»?",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "1000 мм",
        options: [
            "600 мм",
            "800 мм ",
            "1000 мм",
            "1200 мм"
        ]
    },
    {
        question: "28 Какая ёмкость гидросистемы проходческого комбайна П110?",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "700 литров",
        options: [
            "500 литров",
            "700 литров",
            "1000 литров",
            "1500 литров"
        ]
    },
    {
        question: "29 Проходческие комбайны по способу обработки забоя органом разрушения подразделяются на:",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "Избирательного и фронтального действия",
        options: [
            "Избирательного и фронтального действия",
            "Фронтального и бокового действия",
            "Постоянного и периодического действия",
            "Полного и частичного действия"
        ]
    },
    {
        question: "30 Гидросистема семейства комбайнов ГПКС предназначена для:",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "Все варианты верны",
        options: [
            "Все варианты верны",
            "Подъёма и опускания питателя погрузочного устройства; включения и отключения рабочих фрикционов и тормозной зубчатой муфты гусеничных тележек ходовой части комбайна",
            "Подъема и поворота в горизонтальной плоскости консольной части скребкового конвейера",
            "Управления подъемом, опусканием, поворотом в горизонтальной плоскости и выдвижением (сокращением) стрелы исполнительного органа"
        ]
    },
    {
        question: "31 С помощью чего осуществляется управление комбайном ГПКС ?",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "Электрического и гидравлического пультов управления",
        options: [
            "Электрического и гидравлического пультов управления",
            "Только электрического пульта управления",
            "Только гидравлического пульта управления",
            "Только радиопульта"
        ]
    },
    {
        question: "32 Из чего состоит стреловидный исполнительный орган проходческого комбайна?",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "Электродвигатель, редуктор, режущая коронка",
        options: [
            "Электродвигатель, редуктор, режущая коронка",
            "Электродвигатель и редуктор",
            "Электродвигатель и режущая коронка",
            "Электродвигатель, редуктор, режущая коронка, пульт управления комбайном"
        ]
    },
    {
        question: "33 Для чего предназначен погрузочный стол на проходческом комбайне ?",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "Для погрузки нарезанной горной массы в конвейерный канал",
        options: [
            "Для защиты частей машины",
            "Для погрузки нарезанной горной массы в конвейерный канал",
            "Для установки металлической арочной крепи",
            "Все варианты верны"
        ]
    },
    {
        question: "34 Тормозная система очистного комбайна МВ 320 Е состоит из:",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "Пружинного механического тормоза и гидравлического механизма для выключения тормоза",
        options: [
            "Пружинного механизма",
            "Гидравлической тормозной системы",
            "Пружинного механического тормоза и гидравлического механизма для выключения тормоза",
            "ружинного механического тормоза и пневматического механизма для выключения тормоза"
        ]
    },
    {
        question: "35 Как контролируется уровень масла в гидросистеме очистного комбайна МВ 320 Е?",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "Автоматически - датчиком уровня, визуально по маслознаку",
        options: [
            "Автоматически - датчиком давления",
            "Автоматически - датчиком уровня, визуально по маслознаку",
            "Визуально, через смотровые окна",
            "Визуально, проверка производится при помощи щупа"
        ]
    },
    {
        question: "36 Для чего предназначен погрузочный лемех на очистном комбайне?",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "Для погрузки отбитой массы на лавный конвейер",
        options: [
            "Для погрузки отбитой массы на лавный конвейер",
            "Для транспортировки отбитой горной массы посредством комбайна до ближайшего пересыпа",
            "Для отбойки угля от забоя",
            "Для очистки секций крепи от штыба"
        ]
    },
    {
        question: "37 Для разработки каких пластов струговая выемка угля является оптимальной",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "Тонких",
        options: [
            "Тонких",
            "Средней мощности",
            "Мощных",
            "Все варианты верны"
        ]
    },
    {
        question: "38 Разрешается ли устанавливать на левый и правый механизмы передвижки комбайна разные типы эл.двигателей",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "Нет",
        options: [
            "Только по распоряжению главного механика шахты не более чем на 1 сутки",
            "Да",
            "Нет",
            "Временно разрешается, если отсутствуют два однотипных эл. двигателя"
        ]
    },
    {
        question: "39 Какое минимальное количество рабочих должно быть при замене шнека на очистном комбайне?",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "3",
        options: [
            "2",
            "3",
            "4",
            "5"
        ]
    },
    {
        question: "40 Какое минимальное количество рабочих должно быть при замене электроузла или механизма подачи на очистном комбайне ?",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "4",
        options: [
            "2",
            "3",
            "4",
            "5"
        ]
    },
    {
        question: "41 Механизированная крепь. сопряжения это ?",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "Часть механизированной крепи или специальная крепь, располагаемая в местах сопряжения очистного забоя (лавы) со штреками или просеком",
        options: [
            "Часть механизированной крепи или специальная крепь, располагаемая в местах сопряжения очистного забоя (лавы) со штреками или просеком",
            "Элемент крепи, состоящий из взаимно увязанных между собой нескольких сборочных единиц",
            "Секция крепи, установленная на концевом участке очистного забоя, прилегающем к штреку",
            "Совокупность двух и более одинаковых или различных секций, соединенных кинематическими связями и гидродомкратами передвижения"
        ]
    },
    {
        question: "42 По принципу работы и конструктивному исполнению все металлические крепи разделяют ",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "Индивидуальные и механизированные",
        options: [
            "Ручные и автоматические",
            "Индивидуальные и механизированные",
            "Все варианты верны",
            "Электрические и механические"
        ]
    },
    {
        question: "43 Механизированная гидрофицированная крепь предназначена для: ",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "Крепления кровли в рабочем пространстве лавы или ограждения его от обрушенных пород, управления горным давлением полным обрушением, передвижения става скребкового конвейера и удержания его от сползания",
        options: [
            "Периодического порционного разрушения пород кровли за пределами призабойного пространства по заданной линии «обреза»",
            "Крепления призабойной части выработки до места возведения постоянной крепи при проведении выработок в слабых и неустойчивых породах",
            "Крепления кровли в рабочем пространстве лавы или ограждения его от обрушенных пород, управления горным давлением полным обрушением, передвижения става скребкового конвейера и удержания его от сползания",
            "Все варианты верны"
        ]
    },
    {
        question: "44 По каким основным признакам классифицируют механизированные комплексы",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "Все варианты верны",
        options: [
            "Все варианты верны",
            "По виду добываемого полезного ископаемого и по назначению",
            "По типу кинематических связей между машинами и оборудованием комплекса",
            "По углу залегания пласта и по мощности пласта"
        ]
    },
    {
        question: "45 Где может производиться загрузка ленточного конвейера?",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "В любом месте по его длине",
        options: [
            "В любом месте по его длине",
            "Только на приводе ленточного конвейера",
            "Только на хвостовой части ленточного конвейера",
            "Только в средней части ленточного конвейера"
        ]
    },
    {
        question: "46 Схема автоматизации ленточных конвейеров должна обеспечивать:",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "Все варианты верны",
        options: [
            "Все варианты верны",
            "Подачу звукового сигнала перед пуском",
            "Пуск конвейеров в линии в определенной последовательности",
            "Одновременное отключение всех конвейеров"
        ]
    },
    {
        question: "47 Как часто должна проводиться проверка отсутствия утечки масла в редукторах и рабочих жидкостей в гидросистемах автоматических натяжных устройств ленточного конвейера?",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "Не реже одного раза в сутки",
        options: [
            "Не реже одного раза в сутки",
            "Не реже одного раза в неделю ",
            "Не реже одного раза в месяц",
            "Не реже одного раза в квартал"
        ]
    },
    {
        question: "48 Что является несущим и тяговым органом ленточного конвейера?",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "Конвейерная лента",
        options: [
            "Приводной барабан",
            "Конвейерная лента",
            "Приводная головка",
            "Конвейерный став"
        ]
    },
    {
        question: "49 Для чего предназначены датчики КСЛ на ленточных конвейерах? ",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "Для контроля схода конвейерной ленты",
        options: [
            "Для контроля схода конвейерной ленты",
            "Для контроля заштыбовки перегрузочных устройств",
            "Для контроля скорости ленты",
            "Для контроля складывания ленты"
        ]
    },
    {
        question: "50 Когда должно осуществляться автоматическое аварийное отключение привода конвейера? ",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "Все варианты верны",
        options: [
            "При неисправности электродвигателя под действием соответствующих электрических защит",
            "При заштыбовке мест перегрузки транспортируемого материала",
            "При перегреве ленты или при пожароопасной ситуации",
            "Все варианты верны"
        ]
    },
    {
        question: "51 Какая должна быть длина ограждающих бортов в пунктах погрузки и перегруза горной массы на ленточных конвейерах?",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "не менее 5 м",
        options: [
            "не менее 3 м",
            "не менее 5 м",
            "не менее 8 м",
            "не менее 10 м"
        ]
    },
    {
        question: "52 С какой периодичностью проводится технический осмотр средств борьбы с пылью с целью проверки их работоспособности и эффективности?",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "не реже одного раза в сутки",
        options: [
            "не реже одного раза в смену",
            "не реже одного раза в сутки",
            "не реже одного раза в месяц",
            "не реже одного раза в неделю"
        ]
    },
    {
        question: "53 На что необходимо обратить внимание при осмотре состояния приводов ленточного конвейера?",
        image: "img/robox.webp", // Placeholder; replace with actual image URL
        correct: "Всё перечисленное",
        options: [
            "На износ футеровки приводных барабанов ",
            "На наличие масла в редукторе",
            "На состояние соединительных муфт и тормозов",
            "Всё перечисленное"
        ]
    },
    // Add more questions as needed
];

let currentQuestionIndex = 0;
const quizArea = document.getElementById("quiz-area");

function displayQuestion() {
    const q = quizData[currentQuestionIndex];
    const img = `<img src="${q.image}" class="img-fluid mb-3">`;
    const optionsHtml = q.options.map((option, index) =>
        `<li class="list-group-item" onclick="selectOption('${option}', this)">${option}</li>`
    ).join('');

    quizArea.innerHTML = `
        <div class="quiz-header">
            <h2>${q.question}</h2>
            ${img}
            <ul class="list-group">
                ${optionsHtml}
            </ul>
        </div>
    `;
}

function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        quizArea.innerHTML = "<h3>End of the Quiz!</h3>";
    }
}

function selectOption(option, element) {
    if (option === quizData[currentQuestionIndex].correct) {
        element.classList.add("list-group-item-success");
    } else {
        element.classList.add("list-group-item-danger");
    }
}

document.addEventListener("DOMContentLoaded", displayQuestion);
