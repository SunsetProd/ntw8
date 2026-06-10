const topics = [
  { title: "Network management", path: " Network managment", score: "20/20", accent: "SNMP, SPAN, IP SLA", color: "#0b7466" },
  { title: "Network debugging", path: "network debugging", score: "19/20", accent: "OSI, baseline, troubleshooting", color: "#dc6a35" },
  { title: "Wireless network", path: "Wireless network", score: "19/20", accent: "Wi-Fi, CAPWAP, WLC", color: "#245aa6" },
  { title: "Tunneling / VPN", path: "tunneling", score: "20/20", accent: "GRE, IPsec, DMVPN", color: "#7b4ab8" },
  { title: "WAN networks", path: "WAN-Networks", score: "", accent: "WAN, ISP, топологии", color: "#4d6f2f" },
  { title: "NAT", path: "NAT", score: "20/20", accent: "Static NAT, PAT, NAT64", color: "#c55336" },
  { title: "Virtual network", path: "Virtual Network", score: "19/20", accent: "SDN, ACI, IoT", color: "#166b9b" },
  { title: "QoS", path: "QOS", score: "19/20", accent: "LLQ, policing, shaping", color: "#946216" },
  { title: "Network security", path: "Network Security", score: "20/20", accent: "ACL, атаки, IPv6 ACL", color: "#9b334c" },
  { title: "Connection through Internet", path: "Connection through Internet ", score: "18/20", accent: "PPPoE, DSL, BGP", color: "#29745a" },
  { title: "PPP", path: "PPP", score: "20/20", accent: "LCP, NCP, multilink", color: "#3d5f9f" }
];

const rawQuestions = `
1|Какая функция в программно-определяемой сетевой архитектуре переносится с сетевых устройств и выполняется контроллером SDN?|Плоскость управления|Безопасность;Плоскость данных;Плоскость управления;Политики приложений|В SDN контроллер централизует control plane, а устройства в основном пересылают данные.
2|Какой набор API использует контроллер SDN для взаимодействия с различными приложениями?|Северный API|Северный API;Восточный API;Южный API;Западный API|Northbound API смотрит вверх, к приложениям и политикам.
3|Датчик вибрации сам сообщает контроллеру, а контроллер отключает линию. Какой это тип коммуникации?|Машина-машина|Машина-машина;Человек-машина;Люди-люди;Машина-люди|Устройства обмениваются данными без участия человека.
4|Что используется для обмена информацией о маршрутизации между маршрутизаторами в пределах каждой AS?|Протоколы маршрутизации IGP|Статический маршрут;Маршрут по умолчанию;Протоколы маршрутизации IGP;Протоколы маршрутизации EGP|Внутри автономной системы работают IGP: OSPF, EIGRP, IS-IS.
5|Какая функция отправляет смоделированные данные и измеряет производительность между сетевыми точками?|IP SLA|SNMP;IP SLA;Syslog;SPAN|IP SLA генерирует тестовый трафик и меряет задержку, джиттер, потери.
6|Какие два протокола IPsec используются для обеспечения целостности данных?|MD5;SHA|MD5;SSL;SHA;DH;RSA|MD5 и SHA являются хеш-алгоритмами для проверки целостности.
7|Какое утверждение точно описывает IPsec?|IPsec - структура открытых стандартов, основанная на существующих алгоритмах|IPsec работает на прикладном уровне;IPsec - структура открытых стандартов, основанная на существующих алгоритмах;IPsec является проприетарным стандартом Cisco;IPsec работает на транспортном уровне|IPsec защищает на сетевом уровне и не привязан к одному вендору.
8|Какой вариант настройки удаленного доступа к сетевому устройству является безопасным?|Настройка SSH|Настройка Telnet;Настройка 802.1x;Настройка ACL на VTY;Настройка SSH|SSH шифрует удаленный доступ, Telnet передает данные открыто.
9|Хеш пересчитывается с кодом по умолчанию, чтобы гарантировать достоверность источника. О каком аспекте речь?|Аутентификация источника|Невозможность отказа;Целостность данных;Конфиденциальность данных;Аутентификация источника|Код/ключ в хеше подтверждает отправителя, а не только факт изменения данных.
10|Простое и недорогое решение для безопасного соединения удаленных сотрудников с офисом?|Remote-access VPN|Remote-access VPN;Широкополосное соединение;Выделенная линия;Site-to-site VPN|Для отдельных сотрудников нужен клиентский удаленный VPN.
11|В чем преимущество Dynamic Multipoint VPN?|DMVPN поддерживает удаленные узлы, предоставляя им базу публичных IP-адресов|DMVPN использует mGRE для нескольких интерфейсов;DMVPN использует NHRP для динамического создания туннелей;DMVPN не требует IPsec;DMVPN поддерживает удаленные узлы, предоставляя им базу публичных IP-адресов|Ключевая идея DMVPN - динамика spoke-to-spoke через NHRP/mGRE.
12|Какова цель GRE?|Управлять передачей многоадресного и многопротокольного трафика между удаленными точками|Управление потоком;Шифрование IP-трафика;Базовое незашифрованное IP-туннелирование;Управлять передачей многоадресного и многопротокольного трафика между удаленными точками|GRE инкапсулирует разные протоколы и multicast, но сам не шифрует.
13|Что нужно сотруднику для remote-access VPN?|Программное обеспечение VPN-клиента|VPN-шлюз;VPN-концентратор;Программное обеспечение VPN-клиента;VPN-устройство|На стороне пользователя ставится VPN-клиент.
14|Чем проверить заголовок второго уровня кадров с конкретного хоста?|Анализатор протоколов|Анализатор протоколов;Базовые показатели сети;База знаний;Кабельный тестер|Wireshark/анализатор показывает кадры и заголовки L2.
15|Какие два вида информации включают в логическую топологию сети?|Тип соединения;Идентификатор интерфейса|Тип устройства;Тип соединения;Идентификатор интерфейса;Версия IOS;Тип кабеля|Логическая схема показывает связи, интерфейсы и адресацию.
16|По результатам проверки: какие два вывода о подключении к 192.168.100.1 можно сделать?|Соединение активно;Существует 4 перехода|Соединение активно;Поддерживает видеоконференции;Не настроен шлюз;Существует 4 перехода;Среднее время 2 мс|Вывод traceroute/ping подтверждает достижимость и число hops.
17|Какой признак относится к проблемам сетевого уровня?|Смежность с соседями формируется с некоторыми маршрутизаторами, но не со всеми|DNS-имя не работает;Firewall блокирует файловый сервер;Смежность с соседями формируется с некоторыми маршрутизаторами, но не со всеми;Много недопустимых кадров|Соседство маршрутизаторов и маршруты - это L3.
18|Цель ACL при настройке SNMPv3?|Указать исходные адреса, которым разрешен доступ к SNMP-агенту|Разрешить адреса к SNMP-агенту;Разрешить VPN-туннель;Определить алгоритмы;Определить тип управленческого трафика|ACL ограничивает, кто может обращаться к SNMP.
19|Какой сервер хранит историю сообщений от контролируемых сетевых устройств?|Syslog|Syslog;DHCP;RADIUS;DNS|Syslog собирает журналы сетевых устройств.
20|Какая функция Cisco копирует кадры с одного порта коммутатора на другой для анализа?|SPAN|SPAN|Switched Port Analyzer зеркалирует трафик.
21|Сопоставьте методы QoS: классификация, policing, маркировка, shaping.|Классификация - определяет класс; policing - отбрасывает избыток; маркировка - добавляет значение; shaping - ставит избыток в очередь|Классификация - определяет класс; policing - отбрасывает избыток; маркировка - добавляет значение; shaping - ставит избыток в очередь|Это базовая цепочка QoS: распознать, пометить, ограничить или сгладить.
22|Какова функция границы доверия QoS?|Определяет, какие устройства доверяют маркировке пакетов|Впускает только ранее помеченный трафик;Определяет, какие устройства доверяют маркировке пакетов;Место, где трафик не может быть помечен;Впускает только доверенные endpoints|Trust boundary решает, чьим DSCP/CoS меткам верить.
23|Какой механизм QoS отправляет голос до пакетов в других очередях?|LLQ|LLQ;WFQ;CBWFQ;FIFO|Low Latency Queue дает приоритет чувствительному трафику.
24|Какие две характеристики видеотрафика?|Задержка не должна превышать 400 мс;Видеотрафик непредсказуем и непостоянен|Задержка не должна превышать 400 мс;Видеотрафик непредсказуем и непостоянен;Видео устойчивее к потерям;Нужно минимум 30 кбит/с;Видео потребляет меньше ресурсов|Видео требует полосы и терпит ограниченную задержку.
25|Какая технология требует PPPoE для PPP-подключений к клиентам?|DSL|T1;DSL;ISDN-модем;Аналоговый модем|PPPoE часто используется поверх DSL.
26|Какие три утверждения о PPP верны?|PPP может использовать синхронные и асинхронные схемы;PPP использует LCP для установки, настройки и тестирования канала;PPP использует LCP для согласования аутентификации, сжатия и ошибок|PPP может использовать синхронные и асинхронные схемы;PPP использует LCP для установки, настройки и тестирования канала;PPP использует LCP для согласования аутентификации, сжатия и ошибок;PPP только Cisco;PPP передает протоколы сетевого уровня с помощью LCP|LCP отвечает за канал, NCP - за сетевые протоколы.
27|Какую функцию обеспечивает Multilink PPP?|Распределение трафика по нескольким физическим каналам WAN|Одна логическая связь между коммутаторами;Транк VLAN;Распределение трафика по нескольким физическим каналам WAN;Деление полосы на таймслоты|MLPPP объединяет несколько WAN-каналов.
28|Что делает ppp quality 70?|Канал PPP будет закрыт, если качество упадет ниже 70 процентов|Не установится, если 30% опций не приняты;LCP ждет 70% полосы;NCP сообщает при 70%;Канал PPP будет закрыт, если качество упадет ниже 70 процентов|Команда задает минимальное качество линии.
29|Какие две WAN-технологии чаще используются бизнесом?|MetroE;Frame Relay|MetroE;Кабель;Frame Relay;VPN;DSL|Metro Ethernet и Frame Relay типичнее для корпоративных WAN.
30|Какие два устройства относятся к WAN-средам и не встречаются в LAN?|CSU/DSU;Широкополосный модем|Коммутатор доступа;Распределительный маршрутизатор;CSU/DSU;Коммутатор ядра;Широкополосный модем|Это устройства подключения к провайдерской WAN-среде.
31|Лучший широкополосный доступ для путешествий в горах и на море?|Спутниковая связь|Городской Wi-Fi;WiMax;Мобильный интернет;Спутниковая связь|Там, где нет наземной сети, помогает спутник.
32|Что лучше всего описывает WAN?|WAN соединяет локальные сети на больших расстояниях|WAN - другое название Интернета;WAN - расширенная LAN;WAN - утилита доступа;WAN соединяет локальные сети на больших расстояниях|WAN связывает географически удаленные LAN.
33|Какие два варианта являются частной WAN-архитектурой?|Выделенная линия;Глобальная сеть Ethernet|Выделенная линия;Глобальная сеть Ethernet;Кабельная сеть;Городской Wi-Fi;DSL|Private WAN строится на выделенных/операторских услугах.
34|Что описывает DWDM?|Используется для связи на большие расстояния, например между провайдерами|Назначает электрические сигналы частотам;Поддерживает SONET, но не SDH;Двусторонняя связь по меди;Используется для связи на большие расстояния, например между провайдерами|DWDM мультиплексирует оптические длины волн.
35|Три преимущества частных IP и NAT?|Расширяет LAN без дополнительных публичных IP;Сохраняет публичные IP;Скрывает частную адресацию|Создает публичные IP;Снижает CPU;Расширяет LAN без дополнительных публичных IP;Сохраняет публичные IP;Скрывает частную адресацию;Улучшает производительность|NAT экономит IPv4 и прячет внутреннюю схему.
36|Какая команда привязывает внутренние адреса к пулу PAT?|ip nat inside source list 14 pool POOL-STAT overload|ip nat inside source list ACCTNG pool POOL-STAT;ip nat inside source list 14 pool POOL-STAT overload;ip nat translation timeout 36000;ip nat inside source static 172.19.89.13 198.133.219.65|Ключевое слово overload включает PAT.
38|ПК 10.1.1.45 не выходит в Интернет. Наиболее вероятная причина?|Пул NAT закончился|Интерфейсы inside/outside наоборот;Пул NAT закончился;Неправильная маска пула;ACL 1 неверен|Если доступ есть не у всех, часто исчерпан пул адресов.
39|Устройство с портами коммутатора, SSID, аутентификацией WLAN и firewall?|Беспроводной маршрутизатор|Беспроводной маршрутизатор;Автономная точка доступа;Коммутатор;Аппаратный брандмауэр|Домашний/малый офисный wireless router объединяет все эти функции.
40|Какие два параметра нужны для разделения беспроводного трафика?|5 ГГц для мультимедиа и чувствительного трафика;2,4 ГГц для обычного несрочного трафика|WPA TKIP/AES для обеих;5 ГГц для мультимедиа и чувствительного трафика;Один SSID;2,4 ГГц для обычного несрочного трафика;Разные режимы безопасности|5 ГГц обычно разгружают под чувствительный трафик, 2,4 ГГц - под обычный.
41|Какие каналы на нескольких AP не перекрываются?|Каналы 1, 6 и 11|1,5,9;1,6,11;1,7,13;2,6,10|Для 2,4 ГГц классическая неперекрывающаяся тройка - 1/6/11.
42|Зачем отключать широковещание SSID?|Чтобы посторонние не могли найти доступные SSID в области|Снизить помехи;Снизить риск rogue AP;Обеспечить шифрование;Чтобы посторонние не могли найти доступные SSID в области;Нет ответа|Скрытие SSID не является сильной защитой, но убирает имя из обычного обнаружения.
43|Диапазон для ACL 172.16.2.0 с wildcard 0.0.1.255?|172.16.2.0 - 172.16.3.255|172.16.2.1 - 172.16.255.255;172.16.2.0 - 172.16.3.255;172.16.2.0 - 172.16.2.255;172.16.2.1 - 172.16.3.254|Wildcard 0.0.1.255 затрагивает две /24 сети: 2 и 3.
44|Где размещать расширенные ACL?|Как можно ближе к источнику запрещаемого трафика|На самом быстром интерфейсе;На WAN-канале назначения;Ближе к назначению;Как можно ближе к источнику запрещаемого трафика|Extended ACL точнее фильтрует, поэтому лишний трафик лучше остановить у источника.
45|Характеристика стандартных IPv4 ACL?|Фильтруют только по IP-адресам источника|Фильтруют по source IP и port;Настраиваются на интерфейсе;Фильтруют только по IP-адресам источника;Только номерованные|Standard ACL смотрит только на адрес источника.
46|Зачем IPv6 ACL неявно содержит permit icmp any any nd-na / nd-ns?|Чтобы разрешить преобразование IPv6 в MAC-адреса|Разрешить IPv6 в MAC;Разрешить multicast forwarding;Разрешить автоконфигурацию;Разрешить весь ICMPv6|Neighbor Discovery нужен для сопоставления IPv6 и MAC.
47|Что характерно для гипервизора типа 2?|Не требует ПО консоли управления|Прямой доступ к железу;Лучше для бизнеса;Ставится на железо;Не требует ПО консоли управления|Type 2 работает поверх хостовой ОС и проще для локального использования.
48|Какие ресурсы требуются для гипервизора типа 1?|Консоль управления|Выделенная VLAN;Консоль управления;Сервер с VMware Fusion;ОС хоста|Bare-metal гипервизором обычно управляют через отдельную консоль.
49|Как виртуализация помогает при аварийном восстановлении в ЦОД?|Через поддержку динамической миграции|Подача воздуха;Методы бизнеса;Гарантия питания;Через поддержку динамической миграции|VM можно переносить между хостами и восстанавливать быстрее.
50|Что создает и управляет ВМ с доступом ко всему оборудованию консолидированных серверов?|Гипервизор типа 1|APIC-EM;Гипервизор типа 1;SDN;Cisco ACI|Bare-metal hypervisor управляет виртуальными машинами прямо на сервере.
51|ACL permit tcp 172.18.20.0/27 -> 172.18.20.32/27 eq ftp. Пакет src 172.18.20.55 dst 172.18.20.3 proto 21: что будет?|Пакет будет отброшен|Передан по неявному правилу;Источник добавлен в таблицу;Пакет передан;Пакет будет отброшен;Нет ответа|Источник и назначение поменяны местами относительно permit, дальше действует implicit deny.
52|Недостаток пакетной коммутации относительно коммутации каналов?|Более высокая задержка|Меньшая гибкость;Более высокая стоимость;Более высокая задержка;Фиксированная производительность|Пакеты делят среду и могут ждать в очередях.
53|Какие три Wi-Fi стандарта работают в 2,4 ГГц?|802.11b;802.11g;802.11n|802.11a;802.11b;802.11g;802.11n;802.11ac|b/g/n поддерживают 2,4 ГГц, a/ac - 5 ГГц.
54|Зачем использовать несколько lightweight AP?|Для облегчения групповой настройки и управления несколькими WLAN через один WLC|Контроль WLAN;Создание разных WLAN;Приоритет трафика;Для облегчения групповой настройки и управления несколькими WLAN через один WLC;Нет ответа|Lightweight AP централизованно управляются контроллером WLC.
55|Какие показатели производительности измерять для проверки SLA?|Задержка, джиттер и потеря пакетов|Ошибки syslog;CPU и память;Статистика NAT;Задержка, джиттер и потеря пакетов|SLA для сети обычно фиксирует latency, jitter и loss.
`;

const commands = [
  {
    title: "База: быстро понять, что происходит",
    why: "Первый набор команд, когда сеть не работает и надо не гадать, а смотреть факты.",
    code: "show running-config\nshow startup-config\nshow version\nshow ip interface brief\nshow interfaces status\nshow interfaces description\nshow clock\nshow users\nshow history\nterminal length 0"
  },
  {
    title: "Ping / traceroute / DNS",
    why: "Проверка связности, маршрута до узла и разрешения имен.",
    code: "ping 192.168.1.1\nping 8.8.8.8 source g0/0\ntraceroute 8.8.8.8\nshow hosts\nip domain-lookup\nip name-server 8.8.8.8\nnslookup example.com"
  },
  {
    title: "ARP / MAC / соседи",
    why: "Понять, видит ли устройство соседей на L2/L3 и где сидит конкретный MAC.",
    code: "show arp\nshow ip arp\nshow mac address-table\nshow mac address-table dynamic\nshow mac address-table interface fa0/1\nclear mac address-table dynamic\nshow cdp neighbors\nshow cdp neighbors detail\nshow lldp neighbors\nshow lldp neighbors detail"
  },
  {
    title: "VLAN / access / trunk",
    why: "Базовая настройка VLAN, access-порта и trunk между коммутаторами.",
    code: "show vlan brief\nvlan 10\n name USERS\ninterface fa0/1\n switchport mode access\n switchport access vlan 10\n spanning-tree portfast\ninterface g0/1\n switchport mode trunk\n switchport trunk allowed vlan 10,20,30\nshow interfaces trunk\nshow interfaces switchport"
  },
  {
    title: "STP / защита портов",
    why: "Проверить петли, root bridge и базово защитить пользовательские порты.",
    code: "show spanning-tree\nshow spanning-tree vlan 10\nspanning-tree vlan 10 root primary\ninterface range fa0/1-10\n spanning-tree portfast\n spanning-tree bpduguard enable\nswitchport port-security\nswitchport port-security maximum 2\nswitchport port-security violation restrict\nshow port-security interface fa0/1"
  },
  {
    title: "EtherChannel",
    why: "Собрать несколько физических линков в один логический канал.",
    code: "interface range g0/1-2\n channel-group 1 mode active\ninterface port-channel 1\n switchport mode trunk\n switchport trunk allowed vlan 10,20\nshow etherchannel summary\nshow interfaces port-channel 1\nshow lacp neighbor"
  },
  {
    title: "DHCP",
    why: "Раздать адреса клиентам и проверить аренды.",
    code: "ip dhcp excluded-address 192.168.10.1 192.168.10.20\nip dhcp pool USERS\n network 192.168.10.0 255.255.255.0\n default-router 192.168.10.1\n dns-server 8.8.8.8\n domain-name lab.local\nshow ip dhcp binding\nshow ip dhcp pool\nshow ip dhcp conflict"
  },
  {
    title: "Статическая маршрутизация",
    why: "Маршрут по умолчанию, конкретный маршрут и проверка таблицы.",
    code: "ip route 0.0.0.0 0.0.0.0 203.0.113.1\nip route 10.20.0.0 255.255.0.0 192.168.1.2\nshow ip route\nshow ip route static\nshow ip cef\nshow ip protocols"
  },
  {
    title: "OSPF",
    why: "Базовая динамическая маршрутизация внутри автономной системы.",
    code: "router ospf 1\n router-id 1.1.1.1\n network 192.168.10.0 0.0.0.255 area 0\n passive-interface g0/1\n no passive-interface g0/0\nshow ip ospf neighbor\nshow ip ospf interface brief\nshow ip route ospf\n\n# 1 в router ospf 1 - локальный process-id, area 0 - backbone area"
  },
  {
    title: "EIGRP",
    why: "Классика Cisco: соседства, advertised networks и проверка маршрутов.",
    code: "router eigrp 100\n eigrp router-id 1.1.1.1\n network 192.168.10.0 0.0.0.255\n no auto-summary\nshow ip eigrp neighbors\nshow ip eigrp topology\nshow ip route eigrp"
  },
  {
    title: "SNMP / мониторинг",
    why: "Проверка агентской настройки, логов и базовых метрик.",
    code: "show snmp\nshow logging\nshow processes cpu sorted\nshow interfaces\nshow ip interface brief\nsnmp-server community PUBLIC ro\nsnmp-server host 192.0.2.10 version 2c PUBLIC"
  },
  {
    title: "SPAN / анализ трафика",
    why: "Зеркалирование кадров на порт анализатора.",
    code: "monitor session 1 source interface fa0/1\nmonitor session 1 destination interface fa0/24\nshow monitor session 1\nno monitor session 1"
  },
  {
    title: "IP SLA",
    why: "Искусственный трафик для задержки, джиттера и доступности.",
    code: "ip sla 1\n icmp-echo 8.8.8.8 source-interface g0/0\n frequency 30\nip sla schedule 1 life forever start-time now\nshow ip sla statistics\nshow ip sla configuration"
  },
  {
    title: "NAT / PAT",
    why: "Трансляция адресов, перегрузка по портам и отладка таблицы.",
    code: "access-list 1 permit 192.168.10.0 0.0.0.255\nip nat pool PUB 203.0.113.10 203.0.113.20 netmask 255.255.255.0\nip nat inside source list 1 pool PUB overload\ninterface g0/0\n ip nat inside\ninterface s0/0/0\n ip nat outside\nshow ip nat translations\nshow ip nat statistics\nclear ip nat translation *"
  },
  {
    title: "ACL",
    why: "Фильтрация трафика и безопасный удаленный доступ.",
    code: "access-list 10 permit 192.168.1.0 0.0.0.255\nline vty 0 4\n access-class 10 in\n transport input ssh\nip access-list extended WEB-ONLY\n permit tcp 192.168.1.0 0.0.0.255 any eq 80\n deny ip any any\nshow access-lists\nshow ip interface g0/0"
  },
  {
    title: "PPP / PPPoE",
    why: "Инкапсуляция, качество канала, CHAP и проверка сессии.",
    code: "interface serial0/0/0\n encapsulation ppp\n ppp quality 70\n ppp authentication chap\nshow interfaces serial0/0/0\nshow ppp multilink\nshow pppoe session"
  },
  {
    title: "GRE / IPsec VPN",
    why: "Туннель, маршрутизация поверх него и проверка crypto-состояния.",
    code: "interface tunnel0\n ip address 10.10.10.1 255.255.255.252\n tunnel source g0/0\n tunnel destination 203.0.113.2\n tunnel mode gre ip\nshow interface tunnel0\nshow crypto isakmp sa\nshow crypto ipsec sa"
  },
  {
    title: "Wi-Fi",
    why: "Каналы, клиенты, контроллер и lightweight AP.",
    code: "show wireless client summary\nshow ap summary\nshow wlan summary\nshow advanced 802.11b channel\nshow advanced 802.11a channel\nshow capwap client config"
  },
  {
    title: "Syslog / NTP / SSH",
    why: "Базовая управляемость: время, логи и безопасный доступ.",
    code: "service timestamps log datetime msec\nlogging host 192.0.2.50\nlogging trap warnings\nshow logging\nntp server 192.0.2.60\nshow ntp status\nip domain-name lab.local\ncrypto key generate rsa modulus 2048\nusername admin secret cisco123\nline vty 0 4\n login local\n transport input ssh"
  },
  {
    title: "Debug осторожно",
    why: "Полезно для практики, но на живой сети включать точечно и выключать сразу.",
    code: "debug ip icmp\ndebug ip nat\ndebug ppp negotiation\ndebug ppp authentication\nshow debugging\nundebug all\nterminal monitor\nterminal no monitor"
  },
  {
    title: "Маршрутизация / WAN",
    why: "Базовая диагностика связности и BGP-соседства.",
    code: "show ip route\nshow ip protocols\nshow cdp neighbors detail\nshow controllers serial 0/0/0\nshow bgp ipv4 unicast summary\nshow ip bgp\ntraceroute 8.8.8.8"
  }
];

const commandLabs = [
  {
    title: "Настроить PAT",
    topic: "NAT",
    task: "Внутренняя сеть 192.168.10.0/24 должна выходить в Интернет через внешний интерфейс с перегрузкой по портам.",
    checks: [
      { label: "ACL разрешает внутреннюю сеть", patterns: ["access-list 1 permit 192.168.10.0 0.0.0.255"] },
      { label: "Есть команда PAT с overload", patterns: ["ip nat inside source list 1", "overload"] },
      { label: "Inside-интерфейс помечен", patterns: ["ip nat inside"] },
      { label: "Outside-интерфейс помечен", patterns: ["ip nat outside"] },
      { label: "Есть проверка трансляций", patterns: ["show ip nat translations"] }
    ],
    answer: "access-list 1 permit 192.168.10.0 0.0.0.255\ninterface g0/0\n ip nat inside\ninterface s0/0/0\n ip nat outside\nip nat inside source list 1 interface s0/0/0 overload\nshow ip nat translations"
  },
  {
    title: "Закрыть VTY через SSH",
    topic: "Security",
    task: "Разреши удаленное управление только по SSH и ограничь доступ к VTY из сети 192.168.1.0/24.",
    checks: [
      { label: "ACL разрешает управляющую сеть", patterns: ["access-list 10 permit 192.168.1.0 0.0.0.255"] },
      { label: "Выбран диапазон VTY", patterns: ["line vty 0 4"] },
      { label: "ACL применен на VTY", patterns: ["access-class 10 in"] },
      { label: "Telnet не разрешен", patterns: ["transport input ssh"] },
      { label: "Есть проверка ACL", patterns: ["show access-lists"] }
    ],
    answer: "access-list 10 permit 192.168.1.0 0.0.0.255\nline vty 0 4\n access-class 10 in\n transport input ssh\nshow access-lists"
  },
  {
    title: "Запустить IP SLA",
    topic: "Management",
    task: "Настрой ICMP-проверку до 8.8.8.8 каждые 30 секунд и включи ее навсегда.",
    checks: [
      { label: "Создан объект IP SLA", patterns: ["ip sla 1"] },
      { label: "Настроен icmp-echo", patterns: ["icmp-echo 8.8.8.8"] },
      { label: "Частота 30 секунд", patterns: ["frequency 30"] },
      { label: "SLA запланирован навсегда", patterns: ["ip sla schedule 1 life forever start-time now"] },
      { label: "Есть проверка статистики", patterns: ["show ip sla statistics"] }
    ],
    answer: "ip sla 1\n icmp-echo 8.8.8.8 source-interface g0/0\n frequency 30\nip sla schedule 1 life forever start-time now\nshow ip sla statistics"
  },
  {
    title: "Поднять GRE-туннель",
    topic: "VPN",
    task: "Создай GRE tunnel0 между публичными адресами и задай адрес туннеля 10.10.10.1/30.",
    checks: [
      { label: "Открыт интерфейс tunnel0", patterns: ["interface tunnel0"] },
      { label: "Назначен адрес туннеля", patterns: ["ip address 10.10.10.1 255.255.255.252"] },
      { label: "Указан tunnel source", patterns: ["tunnel source"] },
      { label: "Указан tunnel destination", patterns: ["tunnel destination"] },
      { label: "Есть проверка интерфейса", patterns: ["show interface tunnel0"] }
    ],
    answer: "interface tunnel0\n ip address 10.10.10.1 255.255.255.252\n tunnel source g0/0\n tunnel destination 203.0.113.2\n tunnel mode gre ip\nshow interface tunnel0"
  },
  {
    title: "Настроить PPP",
    topic: "PPP",
    task: "На serial-интерфейсе включи PPP, задай контроль качества 70 и CHAP-аутентификацию.",
    checks: [
      { label: "Выбран serial-интерфейс", patterns: ["interface serial"] },
      { label: "Включена PPP-инкапсуляция", patterns: ["encapsulation ppp"] },
      { label: "Задано качество 70", patterns: ["ppp quality 70"] },
      { label: "Включен CHAP", patterns: ["ppp authentication chap"] },
      { label: "Есть проверка интерфейса", patterns: ["show interfaces serial"] }
    ],
    answer: "interface serial0/0/0\n encapsulation ppp\n ppp quality 70\n ppp authentication chap\nshow interfaces serial0/0/0"
  },
  {
    title: "Собрать VLAN и trunk",
    topic: "Switching",
    task: "Создай VLAN 10 USERS, переведи fa0/1 в access VLAN 10, а g0/1 сделай trunk с разрешенными VLAN 10 и 20.",
    checks: [
      { label: "Создана VLAN 10", patterns: ["vlan 10"] },
      { label: "Access-порт назначен в VLAN 10", patterns: ["switchport mode access", "switchport access vlan 10"] },
      { label: "Trunk-порт включен", patterns: ["switchport mode trunk"] },
      { label: "На trunk разрешены VLAN 10 и 20", patterns: ["switchport trunk allowed vlan 10,20"] },
      { label: "Есть проверка trunk", patterns: ["show interfaces trunk"] }
    ],
    answer: "vlan 10\n name USERS\ninterface fa0/1\n switchport mode access\n switchport access vlan 10\ninterface g0/1\n switchport mode trunk\n switchport trunk allowed vlan 10,20\nshow interfaces trunk\nshow vlan brief"
  },
  {
    title: "Поднять OSPF area 0",
    topic: "Routing",
    task: "Настрой OSPF для сети 192.168.10.0/24 в backbone area 0, задай router-id и проверь соседей. Process-id локальный, можно использовать любой.",
    checks: [
      { label: "Открыт режим OSPF", patterns: ["router ospf"] },
      { label: "Задан router-id", patterns: ["router-id"] },
      { label: "Сеть добавлена в area 0", patterns: ["network 192.168.10.0 0.0.0.255 area 0"] },
      { label: "Есть проверка соседей", patterns: ["show ip ospf neighbor"] },
      { label: "Есть проверка маршрутов OSPF", patterns: ["show ip route ospf"] }
    ],
    answer: "router ospf 1\n router-id 1.1.1.1\n network 192.168.10.0 0.0.0.255 area 0\nshow ip ospf neighbor\nshow ip route ospf"
  },
  {
    title: "Раздать DHCP",
    topic: "Services",
    task: "Настрой DHCP-пул USERS для сети 192.168.10.0/24, шлюз 192.168.10.1, DNS 8.8.8.8, первые 20 адресов исключи.",
    checks: [
      { label: "Исключены первые адреса", patterns: ["ip dhcp excluded-address 192.168.10.1 192.168.10.20"] },
      { label: "Создан pool USERS", patterns: ["ip dhcp pool USERS"] },
      { label: "Указана сеть", patterns: ["network 192.168.10.0 255.255.255.0"] },
      { label: "Указан default-router", patterns: ["default-router 192.168.10.1"] },
      { label: "Есть проверка binding", patterns: ["show ip dhcp binding"] }
    ],
    answer: "ip dhcp excluded-address 192.168.10.1 192.168.10.20\nip dhcp pool USERS\n network 192.168.10.0 255.255.255.0\n default-router 192.168.10.1\n dns-server 8.8.8.8\nshow ip dhcp binding\nshow ip dhcp pool"
  },
  {
    title: "Собрать EtherChannel",
    topic: "Switching",
    task: "Объедини g0/1-2 в LACP port-channel 1 и сделай его trunk.",
    checks: [
      { label: "Выбран range физических портов", patterns: ["interface range g0/1-2"] },
      { label: "Включен LACP active", patterns: ["channel-group 1 mode active"] },
      { label: "Открыт port-channel 1", patterns: ["interface port-channel 1"] },
      { label: "Port-channel сделан trunk", patterns: ["switchport mode trunk"] },
      { label: "Есть проверка etherchannel", patterns: ["show etherchannel summary"] }
    ],
    answer: "interface range g0/1-2\n channel-group 1 mode active\ninterface port-channel 1\n switchport mode trunk\nshow etherchannel summary\nshow lacp neighbor"
  },
  {
    title: "Диагностика клиента",
    topic: "Troubleshooting",
    task: "Клиент не выходит в сеть. Собери базовые факты: интерфейсы, VLAN, MAC/ARP, маршрут, ping и traceroute.",
    checks: [
      { label: "Проверены интерфейсы", patterns: ["show ip interface brief"] },
      { label: "Проверены VLAN", patterns: ["show vlan brief"] },
      { label: "Проверена MAC-таблица", patterns: ["show mac address-table"] },
      { label: "Проверен ARP", patterns: ["show arp"] },
      { label: "Есть ping и traceroute", patterns: ["ping", "traceroute"] }
    ],
    answer: "show ip interface brief\nshow interfaces status\nshow vlan brief\nshow mac address-table\nshow arp\nshow ip route\nping 192.168.1.1\ntraceroute 8.8.8.8"
  }
];

const questions = rawQuestions.trim().split("\n").map((line) => {
  const [number, text, correct, answers, why] = line.split("|");
  return {
    number,
    text,
    correct: correct.split(";"),
    answers: answers.split(";"),
    why
  };
});

const state = {
  currentTopic: null,
  quizOrder: questions.map((_, index) => index),
  quizIndex: 0,
  checked: new Map(),
  mistakes: new Set(),
  currentLab: 0,
  labResults: new Map()
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const storageKey = "network8-progress-v2";

function imageName(index) {
  return index === 0 ? "image.png" : `image-${index}.png`;
}

function renderTopics(filter = "") {
  const query = filter.toLowerCase().trim();
  $("#topicGrid").innerHTML = topics
    .filter((topic) => `${topic.title} ${topic.accent}`.toLowerCase().includes(query))
    .map((topic, index) => `
      <article class="topic-card" style="--topic-color: ${topic.color}">
        <div class="topic-meta">
          <span class="pill">${topic.score || "лекция"}</span>
          <span class="pill blue">${countTopicImages(topic.path)} скринов</span>
        </div>
        <h3>${topic.title}</h3>
        <p class="muted">${topic.accent}</p>
        <button class="button" type="button" data-topic="${index}">Открыть конспект</button>
      </article>
    `).join("");
  $$("#topicGrid [data-topic]").forEach((button) => {
    button.addEventListener("click", () => openTopic(Number(button.dataset.topic)));
  });
}

function countTopicImages(path) {
  const map = {
    "tunneling": 64,
    "Network Security": 68,
    "Connection through Internet ": 55,
    "network debugging": 55,
    "Wireless network": 55,
    "WAN-Networks": 55,
    "PPP": 55,
    "NAT": 52,
    " Network managment": 48,
    "Virtual Network": 45,
    "QOS": 49
  };
  return map[path] || 0;
}

async function openTopic(index) {
  const topic = topics[index];
  state.currentTopic = topic;
  $("#reader").hidden = false;
  $("#readerTitle").textContent = topic.title;
  $("#readerMeta").textContent = `${topic.accent} · ${topic.score || "конспект"}`;
  $("#readerContent").innerHTML = `<p class="muted">Загружаю конспект...</p>`;
  location.hash = "reader";

  try {
    const embedded = window.LECTURE_DATA?.[topic.path];
    let markdown = embedded;
    if (!markdown) {
      const response = await fetch(`${encodeURI(topic.path)}/lec.md`);
      markdown = await response.text();
    }
    $("#readerContent").innerHTML = renderMarkdown(markdown, topic.path, Boolean(embedded));
    renderToc();
    wireImages();
  } catch (error) {
    $("#readerContent").innerHTML = `<p class="feedback">Не удалось загрузить lec.md. Проверь путь: ${topic.path}/lec.md</p>`;
  }
}

function renderMarkdown(markdown, basePath, embedded = false) {
  const lines = markdown.split(/\r?\n/);
  let html = "";
  let inList = false;
  let inCode = false;
  let code = [];

  const closeList = () => {
    if (inList) html += "</ul>";
    inList = false;
  };

  lines.forEach((raw) => {
    const line = raw.trim();
    if (line.startsWith("```")) {
      if (inCode) {
        html += `<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`;
        code = [];
        inCode = false;
      } else {
        closeList();
        inCode = true;
      }
      return;
    }
    if (inCode) {
      code.push(raw);
      return;
    }
    if (!line) {
      closeList();
      return;
    }
    const image = line.match(/^!\[[^\]]*]\(([^)]+)\)/);
    if (image) {
      closeList();
      if (embedded) return;
      const src = `${basePath}/${image[1]}`;
      html += `<figure><img src="${encodeURI(src)}" alt="Скрин по теме ${escapeHtml(basePath)}" loading="lazy"><figcaption>${escapeHtml(image[1])}</figcaption></figure>`;
      return;
    }
    const heading = line.match(/^(#{1,4})\s+(.+)/);
    if (heading) {
      closeList();
      const level = heading[1].length;
      const text = inline(heading[2]);
      const id = slug(heading[2]);
      html += `<h${level} id="${id}">${text}</h${level}>`;
      return;
    }
    const bullet = line.match(/^[-*]\s+(.+)/);
    if (bullet) {
      if (!inList) html += "<ul>";
      inList = true;
      html += `<li>${inline(bullet[1])}</li>`;
      return;
    }
    closeList();
    html += `<p>${inline(line)}</p>`;
  });
  closeList();
  return html;
}

function inline(text) {
  return escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`(.+?)`/g, "<code>$1</code>");
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function slug(text) {
  return text.toLowerCase().replace(/[^a-zа-я0-9]+/gi, "-").replace(/^-|-$/g, "");
}

function renderToc() {
  const headings = $$("#readerContent h1, #readerContent h2, #readerContent h3");
  $("#readerToc").innerHTML = headings.map((heading) => `<a href="#${heading.id}">${heading.textContent}</a>`).join("");
}

function renderQuiz() {
  const q = questions[state.quizOrder[state.quizIndex]];
  const multiple = q.correct.length > 1;
  const saved = state.checked.get(q.number);
  $("#quizCounter").textContent = `${state.quizIndex + 1} / ${state.quizOrder.length}`;
  $("#quizScore").textContent = `${[...state.checked.values()].filter(Boolean).length} верно`;
  $("#quizHint").textContent = multiple ? "Можно выбрать несколько вариантов" : "Один правильный вариант";
  $("#quizCard").innerHTML = `
    <h3>${q.number}. ${q.text}</h3>
    <p class="muted">${multiple ? "Выбери несколько вариантов." : "Выбери один вариант."}</p>
    <div class="answers">
      ${q.answers.map((answer) => `
        <label class="answer">
          <input type="${multiple ? "checkbox" : "radio"}" name="answer" value="${escapeHtml(answer)}">
          <span>${answer}</span>
        </label>
      `).join("")}
    </div>
    <div id="feedback"></div>
  `;
  if (saved !== undefined) markQuiz(q);
  renderQuizNav();
  updateProgress();
}

function selectedAnswers() {
  return $$("#quizCard input:checked").map((input) => input.value);
}

function isCorrect(q, selected) {
  return selected.length === q.correct.length && q.correct.every((answer) => selected.includes(answer));
}

function checkQuiz() {
  const q = questions[state.quizOrder[state.quizIndex]];
  const selected = selectedAnswers();
  if (!selected.length) {
    $("#feedback").innerHTML = `<div class="feedback">Сначала выбери вариант ответа.</div>`;
    return;
  }
  const ok = isCorrect(q, selected);
  state.checked.set(q.number, ok);
  ok ? state.mistakes.delete(q.number) : state.mistakes.add(q.number);
  markQuiz(q, selected);
  renderQuizNav();
  updateProgress();
  saveProgress();
}

function markQuiz(q, selected = selectedAnswers()) {
  $$("#quizCard .answer").forEach((label) => {
    const value = label.querySelector("input").value;
    label.classList.toggle("correct", q.correct.includes(value));
    label.classList.toggle("wrong", selected.includes(value) && !q.correct.includes(value));
  });
  $("#feedback").innerHTML = `<div class="feedback">Ответ: ${q.correct.join("; ")}. ${q.why}</div>`;
}

function renderSolutions() {
  $("#solutionList").innerHTML = questions.map((q) => `
    <details>
      <summary>${q.number}. ${q.correct.join("; ")}</summary>
      <p>${q.text}</p>
      <p class="muted">${q.why}</p>
    </details>
  `).join("");
}

function renderCommands() {
  $("#commandBoard").innerHTML = commands.map((group) => `
    <article class="command-card">
      <h3>${group.title}</h3>
      <p>${group.why}</p>
      <pre><code>${escapeHtml(group.code)}</code></pre>
    </article>
  `).join("");
}

function renderQuizNav() {
  $("#quizNav").innerHTML = state.quizOrder.map((questionIndex, orderIndex) => {
    const q = questions[questionIndex];
    const checked = state.checked.get(q.number);
    const status = checked === true ? "correct" : checked === false ? "wrong" : "";
    const current = orderIndex === state.quizIndex ? "current" : "";
    return `<button class="question-dot ${status} ${current}" type="button" data-question="${orderIndex}">${q.number}</button>`;
  }).join("");
  $$("#quizNav [data-question]").forEach((button) => {
    button.addEventListener("click", () => {
      state.quizIndex = Number(button.dataset.question);
      renderQuiz();
    });
  });
}

function renderCommandLabs() {
  $("#commandLabs").innerHTML = commandLabs.map((lab, index) => {
    const result = state.labResults.get(index);
    const score = result ? `${result.done}/${result.total}` : "не начато";
    return `
      <button class="lab-button ${index === state.currentLab ? "active" : ""}" type="button" data-lab="${index}">
        <strong>${lab.title}</strong>
        <span>${lab.topic} · ${score}</span>
      </button>
    `;
  }).join("");
  $$("#commandLabs [data-lab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.currentLab = Number(button.dataset.lab);
      renderCurrentLab();
    });
  });
}

function renderCurrentLab() {
  const lab = commandLabs[state.currentLab];
  const result = state.labResults.get(state.currentLab);
  $("#labTopic").textContent = lab.topic;
  $("#labTitle").textContent = lab.title;
  $("#labTask").textContent = lab.task;
  $("#labStatus").textContent = result ? `${Math.round((result.done / result.total) * 100)}%` : "0%";
  $("#commandFeedback").innerHTML = "";
  $("#labChecklist").innerHTML = lab.checks.map((check, index) => {
    const done = result?.passed[index] || false;
    return `
      <div class="check-item ${done ? "done" : ""}">
        <span class="check-mark">${done ? "✓" : index + 1}</span>
        <span>${check.label}</span>
      </div>
    `;
  }).join("");
  renderCommandLabs();
  updateProgress();
}

function normalizeCommandText(text) {
  return text.toLowerCase().replace(/\s+/g, " ").trim();
}

function checkCommandLab() {
  const lab = commandLabs[state.currentLab];
  const value = normalizeCommandText($("#commandInput").value);
  const passed = lab.checks.map((check) => {
    return check.patterns.every((pattern) => value.includes(normalizeCommandText(pattern)));
  });
  const done = passed.filter(Boolean).length;
  state.labResults.set(state.currentLab, { done, total: lab.checks.length, passed });
  saveProgress();
  renderCurrentLab();
  $("#commandFeedback").innerHTML = `
    <div class="feedback">
      Выполнено ${done} из ${lab.checks.length}. ${done === lab.checks.length ? "Отлично, задание закрыто." : "Дополни недостающие команды и проверь еще раз."}
    </div>
  `;
}

function updateProgress() {
  const solved = state.checked.size;
  const correct = [...state.checked.values()].filter(Boolean).length;
  const labDone = [...state.labResults.values()].filter((result) => result.done === result.total).length;
  const totalUnits = questions.length + commandLabs.length;
  const doneUnits = correct + labDone;
  const percent = Math.round((doneUnits / totalUnits) * 100);
  $("#heroPercent").textContent = `${percent}%`;
  $(".ready-meter").style.setProperty("--progress", `${percent}%`);
  $("#stripQuiz").textContent = `${solved} / ${questions.length}`;
  $("#stripMistakes").textContent = state.mistakes.size;
  $("#stripCommands").textContent = `${labDone} / ${commandLabs.length}`;
  $("#quizScore").textContent = `${correct} верно`;
}

function saveProgress() {
  const payload = {
    checked: [...state.checked.entries()],
    mistakes: [...state.mistakes],
    labResults: [...state.labResults.entries()]
  };
  localStorage.setItem(storageKey, JSON.stringify(payload));
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return;
    const payload = JSON.parse(raw);
    state.checked = new Map(payload.checked || []);
    state.mistakes = new Set(payload.mistakes || []);
    state.labResults = new Map(payload.labResults || []);
  } catch (error) {
    localStorage.removeItem(storageKey);
  }
}

function wireImages() {
  $$("img").forEach((img) => {
    img.addEventListener("click", () => {
      $("#modalImage").src = img.src;
      $("#modalCaption").textContent = img.alt || img.src;
      $("#imageModal").showModal();
    });
  });
}

function shuffle(array) {
  return array.map((value) => [Math.random(), value]).sort((a, b) => a[0] - b[0]).map(([, value]) => value);
}

function applyQuizMode() {
  const mode = $("#quizMode").value;
  if (mode === "mistakes") {
    state.quizOrder = questions.map((_, i) => i).filter((i) => state.mistakes.has(questions[i].number));
  } else if (mode === "unseen") {
    state.quizOrder = questions.map((_, i) => i).filter((i) => !state.checked.has(questions[i].number));
  } else {
    state.quizOrder = questions.map((_, i) => i);
  }
  if (!state.quizOrder.length) state.quizOrder = questions.map((_, i) => i);
  state.quizIndex = 0;
  renderQuiz();
}

function init() {
  loadProgress();
  $("#statTopics").textContent = topics.length;
  $("#statImages").textContent = topics.reduce((sum, topic) => sum + countTopicImages(topic.path), 0);
  renderTopics();
  renderQuiz();
  renderSolutions();
  renderCommands();
  renderCommandLabs();
  renderCurrentLab();
  wireImages();

  $("#topicSearch").addEventListener("input", (event) => renderTopics(event.target.value));
  $("#readerClose").addEventListener("click", () => $("#reader").hidden = true);
  $("#checkQuestion").addEventListener("click", checkQuiz);
  $("#nextQuestion").addEventListener("click", () => {
    state.quizIndex = (state.quizIndex + 1) % state.quizOrder.length;
    renderQuiz();
  });
  $("#prevQuestion").addEventListener("click", () => {
    state.quizIndex = (state.quizIndex - 1 + state.quizOrder.length) % state.quizOrder.length;
    renderQuiz();
  });
  $("#shuffleQuiz").addEventListener("click", () => {
    state.quizOrder = shuffle(state.quizOrder);
    state.quizIndex = 0;
    renderQuiz();
  });
  $("#resetQuiz").addEventListener("click", () => {
    state.checked.clear();
    state.mistakes.clear();
    state.labResults.clear();
    localStorage.removeItem(storageKey);
    state.quizOrder = questions.map((_, i) => i);
    state.quizIndex = 0;
    $("#quizMode").value = "all";
    renderQuiz();
    renderCurrentLab();
  });
  $("#quizMode").addEventListener("change", applyQuizMode);
  $("#copyCommands").addEventListener("click", async () => {
    await navigator.clipboard.writeText(commands.map((group) => `# ${group.title}\n${group.code}`).join("\n\n"));
    $("#copyCommands").textContent = "Скопировано";
    setTimeout(() => $("#copyCommands").textContent = "Скопировать шпаргалку", 1400);
  });
  $("#checkCommands").addEventListener("click", checkCommandLab);
  $("#showCommandAnswer").addEventListener("click", () => {
    $("#commandInput").value = commandLabs[state.currentLab].answer;
    checkCommandLab();
  });
  $("#clearCommandInput").addEventListener("click", () => {
    $("#commandInput").value = "";
    $("#commandFeedback").innerHTML = "";
  });
  $("#modalClose").addEventListener("click", () => $("#imageModal").close());
  updateProgress();
}

init();
