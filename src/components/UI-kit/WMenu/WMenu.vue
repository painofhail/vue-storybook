<template>
	<ul class="w-menu w-menu--root">
		<li class="w-menu__item"><a href="#">Link1</a></li>
		<li class="w-menu__item">
			<span>Submenu1</span>
			<ul class="w-menu w-menu__submenu">
				<li class="w-menu__item"><a href="#">Link2</a></li>
				<li class="w-menu__item"><a href="#">Link3</a></li>
				<li class="w-menu__item"><a href="#">Link4</a></li>
			</ul>
		</li>
		<li class="w-menu__item"><a href="#">Link5</a></li>
		<li class="w-menu__item">
			<span>Submenu2</span>
			<ul class="w-menu w-menu__submenu">
				<li class="w-menu__item"><a href="#">Link6</a></li>
				<li class="w-menu__item">
					<span>Submenu3</span>
						<ul class="w-menu w-menu__submenu">
							<li class="w-menu__item"><a href="#">Link17</a></li>
							<li class="w-menu__item"><a href="#">Link18</a></li>
							<li class="w-menu__item"><a href="#">Link19</a></li>
						</ul>
				</li>
				<li class="w-menu__item"><a href="#">Link10</a></li>
			</ul>
		</li>
	</ul>
</template>

<script>
	export default {
		name: 'WMenu',
		mounted () {
			document.querySelector('.w-menu').addEventListener('click', this.clickMenuFunction);
			document.querySelector('.w-menu').addEventListener('mouseleave', this.closeSubMenus);
		},
		beforeDestroy () {
			document.querySelector('.w-menu').removeEventListener('click', this.clickMenuFunction);
			document.querySelector('.w-menu').removeEventListener('mouseleave', this.closeSubMenus);
		},
		methods: {
			clickMenuFunction (event) {
				// Если ссылка, то переходим по ней
				if (event.target.nodeName === 'A')
					return;

				// Вложенное меню
				const currentSubMenu = event.target.nextElementSibling;

				// Закрываем все вложенные меню, кроме текущего
				this.closeSubMenus(currentSubMenu);

				// Выделяем цветом вложенное меню
				event.target.classList.add('active')

				// Открываем/закрываем вложенное меню
				currentSubMenu.classList.toggle('w-menu__submenu--active');
			},
			closeSubMenus (currentSubMenu = null) {
				let parents = [];

				// Ищем все родительские вложенные меню
				if (currentSubMenu) {
					let currentParrent = currentSubMenu.parentNode;
					while (currentParrent) {
						// Останавливаемся, если дошли до корневого элемента
						if (currentParrent.classList.contains('w-menu--root'))
							break;

						// Заполняем массив родителей
						if (currentParrent.nodeName === "UL")
							parents.push(currentParrent);

						currentParrent = currentParrent.parentNode;
					}
				}

				const subMenus = document.querySelectorAll('.w-menu__submenu');

				Array.from(subMenus).forEach(submenu => {
					// Если не текущее вложенное меню и не содержится среди родителей текущего вложенного меню
					if ((submenu !== currentSubMenu) && !parents.includes(submenu)) {
						submenu.classList.remove('w-menu__submenu--active');
						if (submenu.previousElementSibling.nodeName === 'SPAN') {
							submenu.previousElementSibling.classList.remove('active');
						}
					}
				});
			}
		}
	}
</script>
