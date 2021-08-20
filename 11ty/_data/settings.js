const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: '7ma1tzer',
  dataset: 'production',
  apiVersion: '2021-08-20',
	useCdn: true,
})

module.exports = client.fetch(`
	*[_type == 'siteSettings'][0]{
		name,
		address,
		googleMaps,
		phone,
		tagline,
		disclaimerFood,
		disclaimerSpecials,
	}
`)

