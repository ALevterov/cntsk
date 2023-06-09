import ManagmentCard from '@/components/ui/Sections/ManagmentSection/ManagmentCard'
import BlackTitle from '../../ui/Common/BlackTitle/BlackTitle'
import styles from './ManagmentSection.module.css'
import global from '@/styles/global.module.css'
import img1 from '@/assets/ManagmentSection/1.png'
import img2 from '@/assets/ManagmentSection/2.png'
import img3 from '@/assets/ManagmentSection/3.png'

const ManagmentSection = () => {
  return (
    <div className={styles.section} id='managment'>
      <div className={global.container}>
        <BlackTitle className={styles.titleClass}>РУКОВОДСТВО</BlackTitle>
        <div className={styles.cardsContainer}>
          <ManagmentCard
            title='Вадим Дегтярев'
            description='Генеральный директор ЦНТСК'
            image={img1.src}
          >
            <p>
              Предприниматель, российский медиаменеджер, продюсер, специалист в
              области современных коммуникаций и медиа. Также в прошлом Вадим
              успел несколько лет провести в профессиональном футболе. Поиграл в
              «Химках», в тверской «Волге» и у Сергея Юрана в «Зорком». Травмы
              помешали сделать большую карьеру в футболе (Вадим дважды рвал
              мениск и связки). Он завершил карьеру в 23 года, но смог быстро
              найти себя вне футбола, став основателем TikTok-хауса «Поп Стар
              Хаус». Родился 15 сентября 1996 года в городе Москва.
            </p>
            <p>
              Окончил Российский университет спорта «ГЦОЛИФК» — крупнейшее в
              России и за рубежом высшее учебное заведение в области физической
              культуры и спорта. Также окончил РАНХиГС по специальности
              региональная экономика.
            </p>
            <p>
              Во время учебы был руководителем и создателем нескольких крупных
              спортивных мероприятий в городском округе Красногорск. Одним из
              таких мероприятий стали Открытые личные первенства городского
              округа Красногорск имени Олимпийской чемпионки Веры Бирюковой по
              художественной гимнастике. В каждом турнире принимали участие
              более 400-х девочек разных возрастных групп со всех регионов
              России.
            </p>
            <p>
              По окончанию учебы активно занялся проектами, связанными с
              социальными сетями и современными медиа. В 2020 году вместе с
              Марией Погребняк стал одним из основателей и продюсеров Тик-Ток
              Дома «Поп Стар Хаус». Проект стал стартовой площадкой для многих
              ныне известных блогеров и звезд социальных сетей, таких как Кирилл
              Колесников, Вероника Золотова, Екатерина Лещинская, Михаил
              Медалин, актер Павел Андреев и др.
            </p>
            <p>
              В 2021 году основал медиаагентство WillStаr, включающее в себя
              несколько направлений: продюсерский центр, инфлюенс-маркетинг,
              видеопродакшн. Среди клиентов компании отметились: Adidas, Dolce&
              Gabbana, LG, СБЕР, ВКонтакте, ДоДо-Пицца, Золотое Яблоко, METRO,
              ТНТ, СТС, GQ и другие известные бренды.
            </p>
            <p>
              В 2022 году WillStar начал развиваться. В новом направление:
              короткометражные и полнометражные фильмы.
            </p>
            <p>
              В 2022 году WillStar начал развиваться. В новом направление:
              короткометражные и полнометражные фильмы. В 2022 году Вадим
              Дегтярев приступил к созданию международного коммуникационного
              агентства нового типа CNTSC (Центр новых технологий социальных
              коммуникаций). Компания уже перекупила несколько небольших
              информационно-развлекательных медиаресурсов в зарубежных странах и
              создала сеть блогеров в зарубежных странах, включающую более 3000
              блогеров.
            </p>
            <p>
              В начале 2023 года Вадим инвестировал в создание двух российских
              компании: продукты женской гигиены и бады.
            </p>
            <p>
              Вадим Дегтярев: «Мир стремительно меняется, и устаревшие рекламные
              и PR-монстры, работающие в реалиях еще 20 века, уходят в прошлое.
              Огромные раздутые штаты этих компаний, огромные цены,
              ориентированные на госзаказы и большие корпорации – это всё
              перестает быть востребованным, перестает работать. Будущее – за
              новыми форматами работы, коммуникаций, построения бизнеса,
              построений отношений с клиентами”.
            </p>
            <p>
              О бизнесе: «Хочется сломать стереотип, что в России не
              технологичные условия для создания и развития бизнесов. Считаю,
              что в ближайшие несколько лет будет появляться все больше и больше
              интересных российских компаний на прилавках магазинов. Верю, что
              наши компании смогут себя зарекомендовать на российском рынке и
              занять достойное место».
            </p>
            <p>Хобби: спорт, активный образ жизни, путешествия, работа.</p>
          </ManagmentCard>
          <ManagmentCard
            title='Вадим Самодуров'
            description='Генеральный директор Агентства стратегических коммуникаций'
            image={img2.src}
          >
            <p>
              Политолог, публицист, руководитель «Агентства стратегических
              коммуникаций».
            </p>
            <p>
              Родился 27 февраля 1977 года в Переславле-Залесском Ярославской
              области. После окончания школы-гимназии академика Евгения Велихова
              поступил в Российский Университет Дружбы Народов на специальность
              «Международная журналистика». С 2000 года работал в качестве
              корреспондента, специального корреспондента, редактора, продюсера
              в различных СМИ: Первый канал (ОРТ), РТР (Россия) «Итоги»,
              «Огонек», «Вечерняя Москва», «Московский Комсомолец», «Известия».
              В 2000-2002 году являлся редактором и продюсером программы «Ночная
              смена» Дмитрия Диброва на канале ОРТ (Первый канал). Автор более
              20 сценариев документальных фильмов для ОРТ (Первый канал) и РТР
              (Россия) и других телеканалов.
            </p>
            <p>
              В 2002 году обучался в Русской школе PR на курсе «Подготовка
              руководителей и специалистов пресс-служб». В 2006 году создавал и
              возглавлял Службу по связям с общественностью российского
              информационного телеканала международного вещания «Russia Today».
              С 2008 года занялся проектами в сфере общественно-политической
              деятельности, политического консалтинга. В 2010 году стал одним из
              основателей «Агентства стратегических коммуникаций» - частной
              российской компании, работающей в сфере коммуникаций, Public
              Relations и консалтинга.
            </p>
            <p>
              В 2011-2012 гг. работал управляющим делами Института
              социально-экономических и политических исследований (ИСЭПИ),
              занимавшегося подготовкой программы Общероссийского Народного
              Фронта в рамках президентских выборов 2012 года.
            </p>
            <p>
              В 2012 году являлся консультантом будущего президента Сербии
              Томислава Николича в ходе президентских выборов в Сербии.
              «Агентство стратегических коммуникаций» курировало взаимодействие
              с «российским политическим блоком» и информационную составляющую.
              После победы Томислава Николича на президентских выборах,
              продолжительное время жил и работал в Сербии.
            </p>
            <p>
              В 2014 году поступил в аспирантуру МГИМО (У) МИД РФ по
              специальности «Политология».
            </p>
            <p>
              С 2012 года до настоящего времени является Генеральным директором
              «Агентства стратегических коммуникаций» (АСК). Под руководством
              В.В.Самодурова АСК консультировало руководство ряда субъектов РФ
              по вопросам информационной политики и внутренней политики. В
              частности, компания упоминалась в федеральных СМИ в контексте
              выборов в Государственную Думу РФ в 2016 году, как структура
              консультирующая Главу и Правительство Республики Дагестан.
            </p>
            <p>
              В 2015-2016 году АСК работало с руководством Иркутской области. В
              публикациях СМИ Агентство стратегических коммуникаций упоминалось
              в контексте присутствия России в ДНР и ЛНР; присоединения Крыма;
              политических процессов в регионах Дальнего Востока.
            </p>
            <p>
              Автор книг «Первая двадцатка» (Издательство «Амфора», 2004, 2006,
              2008), «Большая двадцатка» (Издательство «Амфора»), издатель книги
              «Чечня. Солдатская правда» (Издательский дом «РОСПО», 2004).
              Награжден нагрудным знаком Генерального Штаба ВС РФ, памятным
              знаком «90 лет ВЧК-КГБ-ФСБ». В 2021 году получил благодарность
              руководства ЮНИСЕФ за личную благотворительную помощь жителям
              стран Балканского региона.
            </p>
            <p>
              Как эксперт и политолог регулярно публикуется в изданиях
              «Аргументы и Факты», «Взгляд», Московский комсомолец»,
              «Независимая газета», «Свободная пресса» и цитируется рядом
              федеральных изданий как политический эксперт и специалист в
              области коммуникаций.
            </p>
          </ManagmentCard>
          <ManagmentCard
            title='Мария Погребняк'
            description='Генеральный директор Willstar'
            image={img3.src}
          >
            <p>
              Политолог, публицист, руководитель «Агентства стратегических
              коммуникаций».
            </p>
            <p>
              Родился 27 февраля 1977 года в Переславле-Залесском Ярославской
              области. После окончания школы-гимназии академика Евгения Велихова
              поступил в Российский Университет Дружбы Народов на специальность
              «Международная журналистика». С 2000 года работал в качестве
              корреспондента, специального корреспондента, редактора, продюсера
              в различных СМИ: Первый канал (ОРТ), РТР (Россия) «Итоги»,
              «Огонек», «Вечерняя Москва», «Московский Комсомолец», «Известия».
              В 2000-2002 году являлся редактором и продюсером программы «Ночная
              смена» Дмитрия Диброва на канале ОРТ (Первый канал). Автор более
              20 сценариев документальных фильмов для ОРТ (Первый канал) и РТР
              (Россия) и других телеканалов.
            </p>
            <p>
              В 2002 году обучался в Русской школе PR на курсе «Подготовка
              руководителей и специалистов пресс-служб». В 2006 году создавал и
              возглавлял Службу по связям с общественностью российского
              информационного телеканала международного вещания «Russia Today».
              С 2008 года занялся проектами в сфере общественно-политической
              деятельности, политического консалтинга. В 2010 году стал одним из
              основателей «Агентства стратегических коммуникаций» - частной
              российской компании, работающей в сфере коммуникаций, Public
              Relations и консалтинга.
            </p>
            <p>
              В 2011-2012 гг. работал управляющим делами Института
              социально-экономических и политических исследований (ИСЭПИ),
              занимавшегося подготовкой программы Общероссийского Народного
              Фронта в рамках президентских выборов 2012 года.
            </p>
            <p>
              В 2012 году являлся консультантом будущего президента Сербии
              Томислава Николича в ходе президентских выборов в Сербии.
              «Агентство стратегических коммуникаций» курировало взаимодействие
              с «российским политическим блоком» и информационную составляющую.
              После победы Томислава Николича на президентских выборах,
              продолжительное время жил и работал в Сербии.
            </p>
            <p>
              В 2014 году поступил в аспирантуру МГИМО (У) МИД РФ по
              специальности «Политология».
            </p>
            <p>
              С 2012 года до настоящего времени является Генеральным директором
              «Агентства стратегических коммуникаций» (АСК). Под руководством
              В.В.Самодурова АСК консультировало руководство ряда субъектов РФ
              по вопросам информационной политики и внутренней политики. В
              частности, компания упоминалась в федеральных СМИ в контексте
              выборов в Государственную Думу РФ в 2016 году, как структура
              консультирующая Главу и Правительство Республики Дагестан.
            </p>
            <p>
              В 2015-2016 году АСК работало с руководством Иркутской области. В
              публикациях СМИ Агентство стратегических коммуникаций упоминалось
              в контексте присутствия России в ДНР и ЛНР; присоединения Крыма;
              политических процессов в регионах Дальнего Востока.
            </p>
            <p>
              Автор книг «Первая двадцатка» (Издательство «Амфора», 2004, 2006,
              2008), «Большая двадцатка» (Издательство «Амфора»), издатель книги
              «Чечня. Солдатская правда» (Издательский дом «РОСПО», 2004).
              Награжден нагрудным знаком Генерального Штаба ВС РФ, памятным
              знаком «90 лет ВЧК-КГБ-ФСБ». В 2021 году получил благодарность
              руководства ЮНИСЕФ за личную благотворительную помощь жителям
              стран Балканского региона.
            </p>
            <p>
              Как эксперт и политолог регулярно публикуется в изданиях
              «Аргументы и Факты», «Взгляд», Московский комсомолец»,
              «Независимая газета», «Свободная пресса» и цитируется рядом
              федеральных изданий как политический эксперт и специалист в
              области коммуникаций.
            </p>
          </ManagmentCard>
        </div>
      </div>
    </div>
  )
}

export default ManagmentSection
