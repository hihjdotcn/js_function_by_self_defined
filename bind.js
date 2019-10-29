let cat = {
	sound: 'miao',
	talk: function () {
		return this.sound
	}
}

let unbindGetTalk = cat.talk;
console.log(unbindGetTalk())

let bindGetTalk = unbindGetTalk.bind(cat)
console.log(bindGetTalk())
