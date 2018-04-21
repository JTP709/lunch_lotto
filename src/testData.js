export const testData = {
	restaurants: [
		{
			name: 'Fusian',
			filters: {
						type: 'sushi',
						distance: 'walking',
						price: '$$',
						diet: 'else'
			},
			url: 'http://www.fusian.com'
		},
		{
			name: 'Whalburgers',
			filters: {
						type: 'hamburgers',
						distance: 'walking',
						price: '$$$',
						diet: 'else'
			},
			url: 'http://www.whalburgers.com'
		},
		{
			name: 'Zablongs',
			filters: {
						type: 'za',
						distance: 'walking',
						price: '$$',
						diet: 'no_vegetarian'
			},
			url: 'http://www.zablongs.com'
		},
		{
			name: 'Currito',
			filters: {
						type: 'global_fusion',
						distance: 'walking',
						price: '$$',
						diet: 'else'
			},
			url: 'http://www.currito.com'
		},
		{
			name: 'Panera',
			filters: {
						type: 'cafe',
						distance: 'walking',
						price: '$$',
						diet: 'else'
			},
			url: 'http://www.panerabread.com'
		},
		{
			name: 'Eli\'s',
			filters: {
						type: 'BBQ',
						distance: 'streetcar',
						price: '$$',
						diet: 'else'
			},
			url: 'http://www.elisbbq.com'
		},
		{
			name: 'Taste of Belgium',
			filters: {
						type: 'breakfast',
						distance: 'walking',
						price: '$$',
						diet: 'else'
			},
			url: 'http://www.tasteofbelgium.com'
		},
		{
			name: 'Akash',
			filters: {
						type: 'indian',
						distance: 'walking',
						price: '$$',
						diet: 'else'
			},
			url: 'http://www.akash.com'
		},
		{
			name: 'The Senate',
			filters: {
						type: 'traditional',
						distance: 'streetcar',
						price: '$$',
						diet: 'else'
			},
			url: 'http://www.senate.com'
		},
		{
			name: 'The Eagle',
			filters: {
						type: 'traditional',
						distance: 'streetcar',
						price: '$$',
						diet: 'else'
			},
			url: 'http://www.theeagle.com'
		}
	]
}

export const testFilters = {
  type: {
    sushi: true,
    za: true,
    hamburgers: true,
    global_fusion: true,
    cafe: true,
    breakfast: true,
    BBQ: true,
    indian: true,
    traditional: true
  },
  price: {
    $: true,
    $$: true,
    $$$: true
  },
  distance: {
    walking: true,
    driving: true,
    streetcar: true,
    flying: true
  },
  diet: {
    no_vegetarian: true,
    no_gluten_free: true,
    else: true
  }
}