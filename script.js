// calculate select 
const select = document.querySelector('#mySelect')
const content = document.querySelector('#myContent')
const images = [
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/4-6.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/3-10.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/4-8.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/3-8.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/08/alieri-3.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/08/arena-1.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/2-6.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/Modern-83.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/Modern-16.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/Modern-78.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/Modern-5.jpeg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/oldplastic-2.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/oldplastic-1.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/Modern-95.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/Modern-51.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/2-9.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/02/190c6b63865073.5abee0fc1d01f.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/02/0e4de567932013.5b4bac934c38c.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/01/85334160530743.5a5035f57c50a.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/01/1c952f60082173.5a3ae2eea7d95.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/Modern-63.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/Modern-39.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/Modern-7.jpeg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/Modern-63.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/oldplastic-3.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/401_2.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/02/1f650d66852051.5b2466a84c7c5.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/oldplastic-5.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/01/c0dea670480603.5ba4b400bb441.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/08/eternity-1.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/400_12.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/02/d9d7ca75215149.5c46bc332af2c.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/08/galiano-6.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/Italion_Garda_horizontal1-1.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/02/01caa567244915.5b32cbb57d8ea.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/03/1-4.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/03/2-5.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/08/gvarneri-1.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/01/5e3ac054281519.5954ce15df9c4.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/01/91686375336015.5c49ad5e3d8f6.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/03/1-20.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/08/infinity-2.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/iskia-5.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/03/3-6.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/01/be74bd55235937.597bc04423a4b.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/3-1.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/03/1-7.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/02/96852c74739893.5c3896daf187c.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/03/3-9.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/03/1-10.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/Kolizei-1.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/Modern-61.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/Modern-76.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/Modern-42.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/03/1-8.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/03/4-11.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/Modern-85.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/01/79f64852481897.591232966e321.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/03/1-13.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/01/0c70d969469793.5b82d0cd318a8.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/oldplastic-6.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/Luisiana-1.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/03/4-12.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/Modern-26.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/01/03f04759978585.5a37125d2670a.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/Modern-28.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/Modern-99.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/03/2-14.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/08/Montana-1.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/03/3-15.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/tgrgrthfgyhfyujygutrfjygujfyujhjb.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/08/Napoli-1.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/oldplastic-9.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/oldplastic-4.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/03/1-16.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/Nika-1.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/nika-white-2.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/nike-1.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/08/nikeavorio-11.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/03/4-15.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/01/6a409473811053.5c4afda629d5d.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/01/b0f81257526481.59d943e7943fd.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/08/olimp-8.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/oldplastic-8.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/08/ornela-5.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/08/ornella-bianco-3.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/oldplastic-7.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/08/patrizia-2.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/Modern-16.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/Modern-14.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/02/319be048074407.588e20844ed88.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/pozitano-2.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/02/4fdc6349799983.58bef8be829f8.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/08/Provans-1.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/08/rialto-2.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/rimini-1.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/rygeri-1.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/Modern-86.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/01/87ce0158969639.5a10278f6c5bd.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/03/4-16.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/01/04070647657751.5880d4bfca5cf.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/08/sorento-1.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/Modern-89.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/massivmodern-1-1.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/stradivari-1.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/Modern-62.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/Modern-91.jpeg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/Modern-6.jpeg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/08/tyrin-2.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/01/98cb2375276057.5c48372dbb7e8.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/Modern-12.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/03/1-19.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/01/img_8919.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/03/1.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/03/1-1.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/03/1-2.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/08/venice-2.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2019/03/4-3.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/kuhni-viktoriya-na-zakaz-v-evpatorii-02.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/08/Provans-1.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/Classic-98.jpg',
    'https://kuhni-v-spb.ru/wp-content/uploads/2017/04/nike-niche-4.jpg',
]

function fillSelectWithOptions() {

	const options = [
        {title: 'Афина (Неро)', id: 0},
        {title: 'Афина (Оро)', id: 1},
        {title: 'Афина Аргенто', id: 2},
        {title: 'Афина Just in time', id: 3},
        {title: 'Алиери', id: 4},
        {title: 'Арена', id: 5},
        {title: 'Асти', id: 6},
        {title: 'Белая кухня без ручек', id: 7},
        {title: 'Белая кухня Модерн', id: 8},
        {title: 'Белая кухня модерн', id: 9},
        {title: 'Белая кухня Модерн с островом', id: 10},
        {title: 'Белая кухня с рисунком', id: 11},
        {title: 'Бело-красная кухня', id: 12},
        {title: 'Бело-салатовая кухня', id: 13},
        {title: 'Белоснежная кухня Модерн', id: 14},
        {title: 'Бергонцо', id: 15},
        {title: 'Беридж', id: 16},
        {title: 'Бристоль', id: 17},
        {title: 'Чатем', id: 18},
        {title: 'Челтнем', id: 19},
        {title: 'Черная кухня с островом', id: 20},
        {title: 'Черная кухня с рисунком', id: 21},
        {title: 'Черная пластиковая кухня', id: 22},
        {title: 'Черная современная кухня', id: 23},
        {title: 'Черно-белая кухня с рисунком', id: 24},
        {title: 'Триесте', id: 25},
        {title: 'Дерби', id: 26},
        {title: 'Двухцветная кухня из пластика', id: 27},
        {title: 'Эксмут', id: 28},
        {title: 'Этернити', id: 29},
        {title: 'Фиренце', id: 30},
        {title: 'Фолкстон', id: 31},
        {title: 'Гальяно', id: 32},
        {title: 'Гарда', id: 33},
        {title: 'Глостер', id: 34},
        {title: 'Греве', id: 35},
        {title: 'Гримстад', id: 36},
        {title: 'Гварнери', id: 37},
        {title: 'Харидж', id: 38},
        {title: 'Харлоу', id: 39},
        {title: 'Хорсенс', id: 40},
        {title: 'Инфинити Платинум', id: 41},
        {title: 'Искья', id: 42},
        {title: 'Истад', id: 43},
        {title: 'Истборн', id: 44},
        {title: 'Инфинити', id: 45},
        {title: 'Карлоу', id: 46},
        {title: 'Керби', id: 47},
        {title: 'Килдэр', id: 48},
        {title: 'Клэр', id: 49},
        {title: 'Колизей', id: 50},
        {title: 'Красная кухня Модерн', id: 51},
        {title: 'Красная кухня модерн', id: 52},
        {title: 'Красная пластиковая кухня', id: 53},
        {title: 'Кёге', id: 54},
        {title: 'Лаут', id: 55},
        {title: 'Лазурная кухня с островом', id: 56},
        {title: 'Лестер', id: 57},
        {title: 'Льеж', id: 58},
        {title: 'Лидс', id: 59},
        {title: 'Лиловая пластиковая кухня', id: 60},
        {title: 'Луизиана', id: 61},
        {title: 'Лунд', id: 62},
        {title: 'Маленькая угловая кухня', id: 63},
        {title: 'Манчестер', id: 64},
        {title: 'Современные (МДФ крашеные)', id: 65},
        {title: 'Современные (МДФ пленочные)', id: 66},
        {title: 'Монс', id: 67},
        {title: 'Монтана', id: 68},
        {title: 'Монте', id: 69},
        {title: 'Монтебьянко', id: 70},
        {title: 'Наполи', id: 71},
        {title: 'Небольшая кухня из пластика', id: 72},
        {title: 'Небольшая угловая кухня', id: 73},
        {title: 'Нествед', id: 74},
        {title: 'Ника', id: 75},
        {title: 'Ника Д’Оро', id: 76},
        {title: 'Нике', id: 77},
        {title: 'Нике Аворио', id: 78},
        {title: 'Оденсе', id: 79},
        {title: 'Оксфорд', id: 80},
        {title: 'Олдем', id: 81},
        {title: 'Олимп', id: 82},
        {title: 'Оранжевая кухня', id: 83},
        {title: 'Орнелла', id: 84},
        {title: 'Орнелла Бьянко', id: 85},
        {title: 'Пастельно-зеленая кухня', id: 86},
        {title: 'Патриция', id: 87},
        {title: 'Современные (пластик)', id: 88},
        {title: 'Пластиковая пурпурная кухня', id: 89},
        {title: 'Плимут', id: 90},
        {title: 'Позитано', id: 91},
        {title: 'Престон', id: 92},
        {title: 'Прованс', id: 93},
        {title: 'Риальто', id: 94},
        {title: 'Римини', id: 95},
        {title: 'Руджери', id: 96},
        {title: 'Серая минималистичная кухня', id: 97},
        {title: 'Шеффилд', id: 98},
        {title: 'Скиве', id: 99},
        {title: 'Солфорд', id: 100},
        {title: 'Сорренто', id: 101},
        {title: 'Готланд', id: 102},
        {title: 'Бернад', id: 103},
        {title: 'Страдивари', id: 104},
        {title: 'Меларен', id: 105},
        {title: 'Веттерн', id: 106},
        {title: 'Гёта', id: 107},
        {title: 'Турин', id: 108},
        {title: 'Уэлс', id: 109},
        {title: 'Свидда', id: 110},
        {title: 'Уиклоу', id: 111},
        {title: 'Уокинг', id: 112},
        {title: 'Вайле', id: 113},
        {title: 'Варберг', id: 114},
        {title: 'Варде', id: 115},
        {title: 'Венеция', id: 116},
        {title: 'Виборг', id: 117},
        {title: 'Виктория', id: 118},
        {title: 'Классика (массив Италия)', id: 119},
        {title: 'Классика', id: 120},
        {title: 'Ника Ноче', id: 121},
    ]


	
	// add options to select
	options.forEach((opt) => {
		const optElem = document.createElement('option')
		optElem.innerText = opt.title
		optElem.value = opt.id
		select.append(optElem)
	})
}

window.addEventListener('load', () => {
	fillSelectWithOptions()
	
	// listen for change event on select
	select.addEventListener('change', (e) => {
		// reset content view 
		content.innerHTML = ""
		
		// get select value
		const selectedOption = e.target.value
		
		// create new image
		const imageElem = document.createElement('img')
		imageElem.src = images[parseInt(selectedOption)]
		
		content.append(imageElem)
	})
})




// form
let form1 = document.getElementById('form1');
let form2 = document.getElementById('form2');
let form3 = document.getElementById('form3');
let form4 = document.getElementById('form4');

let size1 = document.getElementById('size1');
let size2 = document.getElementById('size2');
let size3 = document.getElementById('size3');
let size4 = document.getElementById('size4');

let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let input3 = document.getElementById('input3');


form1.onclick = function() {
    size1.style.display = 'block'
    size2.style.display = 'none'
    size3.style.display = 'none'
    size4.style.display = 'none'
    input1.style.opacity = '1'
    input2.style.opacity = '1'
    input3.style.opacity = '1'
    input1.style.visibility = 'visible'
    input2.style.visibility = 'visible'
    input3.style.visibility = 'visible'
    size1.style.marginLeft = '190px'
}

form2.onclick = function() {
    size1.style.display = 'none'
    size2.style.display = 'block'
    size3.style.display = 'none'
    size4.style.display = 'none'
    input1.style.opacity = '0'
    input2.style.opacity = '1'
    input3.style.opacity = '0'
    input1.style.visibility = 'hidden'
    input2.style.visibility = 'visible'
    input3.style.visibility = 'hidden'
    size2.style.marginLeft = '190px'
}

form3.onclick = function() {
    size1.style.display = 'none'
    size2.style.display = 'none'
    size3.style.display = 'block'
    size4.style.display = 'none'
    input1.style.opacity = '1'
    input2.style.opacity = '1'
    input3.style.opacity = '0'
    input1.style.visibility = 'visible'
    input2.style.visibility = 'visible'
    input3.style.visibility = 'hidden'
    size3.style.marginLeft = '190px'
}

form4.onclick = function() {
    size1.style.display = 'none'
    size2.style.display = 'none'
    size3.style.display = 'none'
    size4.style.display = 'block'
    input1.style.opacity = '0'
    input2.style.opacity = '1'
    input3.style.opacity = '1'
    input1.style.visibility = 'hidden'
    input2.style.visibility = 'visible'
    input3.style.visibility = 'visible'
    size4.style.marginLeft = '190px'
}
