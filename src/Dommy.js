/*
 * Dommy
 * HTML Dom Manipulation
 * Author: Aykut Kardaş
 * Github: http://github.com/aykutkardas
 * Email:  aykutkrds@gmail.com
 */

class Dommy extends Array {

	// Bir eleman seçer
	select(el) {
		this.reset().push(document.querySelector(el))

		return this
	}


	// Tüm elemanları seçer
	selectAll(el) {
		let els = document.querySelectorAll(el)
		this.transfer(els)

		return this
	}

	// Seçili Eleman listesini temizler
	reset() {
		this.length = 0
		return this
	}

	// İlk elemanı seçer
	first() {
		return this[0]
	}

	// Bir diziyi Dommy listesine aktarır
	transfer(arr) {
		this.reset()
		for (let i = 0; i < arr.length; i++)
			this.push(arr[i])

		return this
	}

	// Verilen indexteki elemanı seçer
	eq(n) {
		let select = this[n]
		if (select) {
			this.reset().push(select)
		}
		return this
	}

	// Seçili elamının ebeveynini verir
	parent() {
		let parentElem = this.first().parentElement
		this.reset().push(parentElem)

		return this
	}

	// Seçili elemanının çocuklarını döner
	children() {
		let children = this.first().children
		this.transfer(children)

		return this
	}

	// Sonraki elemanı verir
	nextSibling() {
		let nextSibling = this.first().nextElementSibling
		this.reset().push(nextSibling)

		return this
	}

	// Önceki elemanı verir
	prevSibling() {
		let prevSibling = this.first().previousElementSibling
		this.reset().push(prevSibling)

		return this
	}

	/*
		CLASS 
		classList & addClass & removeClass & toggleClass
	*/

	// Seçeli elemanın class listesini döner
	classList() {
		return this.first().classList
	}

	// Seçili elamanlara class ekler
	addClass(className) {
		this.map((el) => {
			el.classList.add(className)
		})
		return this
	}

	// Seçili elamanlardan belirtilen class ı siler
	removeClass(className) {
		this.map((el) => {
			el.classList.remove(className)
		})
		return this
	}

	// Seçili elemanlardan belirtilen classı
	// yoksa ekler / varsa kaldırır
	toggleClass(className) {
		this.map((el) => {
			el.classList.toggle(className)
		})
		return this
	}

	/*
		ATTRIBUTE
		attr & attributes
		*/

	// attr(key) İlk elemanın özelliğinin değerini getirir
	// attr(key, val) Elemanlara özellik ekler
	attr(key, val = false) {
		if (key && val) {
			this.map((el) => {
				el.setAttribute(key, val)
			})
			return this
		} else {
			return this.fist().getAttribute(key)
		}
	}

	// attributes() İlk elemanın özellik listesini döner
	attributes() {
		return this.first().attributes
	}

	/*
		TEXT & HTML
		text & html & empty
	*/

	// text() Seçili elemanın içeriğini döner
	// text(val) Seçili elamanlara yazar
	text(val = false) {
		if (val) {
			this.map((el) => {
				el.innerText = val
			})
			return this
		} else {
			return this.first().innerText
		}
	}

	// html() Seçili elemanın içeriğini döner
	// html(val) Seçili elamanlara yazar
	html(val = false) {
		if (val) {
			this.map((el) => {
				el.innerHTML = val
			})
			return this
		} else {
			return this.first().innerHTML
		}
	}

	// Seçili elemanın içeriğini temizler
	empty() {
		this.map((el) => {
			el.innerHTML = ''
		})
		return this
	}

	/*
		CSS
		css
	*/

	// css(key: string) İlk elemanın belirtilen css özelliğini döner
	// css(key: object) Seçili elemanlara nesne tipindeki css özelliklerini verir
	// css(key: string, value: string) Seçili elemanlara belirtilen css özelliklerini verir.
	css(key, val) {
		if(arguments.length == 2) {

			this.map((el) => {
				el.style[key] = val
			})
			return this

		} else {
			
			if(typeof key === 'object') {
				this.map((el) => {
					Object.assign(el.style, key)
				})

				return this
			
			} else {

				if(this.first().style[key] === '') {
					return document
						.defaultView.getComputedStyle(this.first())[key]
				} else {
					return this.first().style[key]
				}
				
			}

		}
	}




}