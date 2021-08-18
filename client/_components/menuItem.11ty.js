module.exports = ({ name, price }) => `
<div class="flex justify-end tracking-tight">
	<span>${ name }</span>
	<span class="ml-2.5 w-10">$ ${ price }</span>
</div>
`