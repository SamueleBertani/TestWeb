lorem= ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
		'adipiscing', 'elit', 'curabitur', 'vel', 'hendrerit', 'libero',
		'eleifend', 'blandit', 'nunc', 'ornare', 'odio', 'ut',
		'orci', 'gravida', 'imperdiet', 'nullam', 'purus', 'lacinia',
		'a', 'pretium', 'quis', 'congue', 'praesent', 'sagittis', 
		'laoreet', 'auctor', 'mauris', 'non', 'velit', 'eros',
		'dictum', 'proin', 'accumsan', 'sapien', 'nec', 'massa',
		'volutpat', 'venenatis', 'sed', 'eu', 'molestie', 'lacus',
		'quisque', 'porttitor', 'ligula', 'dui', 'mollis', 'tempus',
		'at', 'magna', 'vestibulum', 'turpis', 'ac', 'diam',
		'tincidunt', 'id', 'condimentum', 'enim', 'sodales', 'in',
		'hac', 'habitasse', 'platea', 'dictumst', 'aenean', 'neque',
		'fusce', 'augue', 'leo', 'eget', 'semper', 'mattis', 
		'tortor', 'scelerisque', 'nulla', 'interdum', 'tellus', 'malesuada',
		'rhoncus', 'porta', 'sem', 'aliquet', 'et', 'nam',
		'suspendisse', 'potenti', 'vivamus', 'luctus', 'fringilla', 'erat',
		'donec', 'justo', 'vehicula', 'ultricies', 'varius', 'ante',
		'primis', 'faucibus', 'ultrices', 'posuere', 'cubilia', 'curae',
		'etiam', 'cursus', 'aliquam', 'quam', 'dapibus', 'nisl',
		'feugiat', 'egestas', 'class', 'aptent', 'taciti', 'sociosqu',
		'ad', 'litora', 'torquent', 'per', 'conubia', 'nostra',
		'inceptos', 'himenaeos', 'phasellus', 'nibh', 'pulvinar', 'vitae',
		'urna', 'iaculis', 'lobortis', 'nisi', 'viverra', 'arcu',
		'morbi', 'pellentesque', 'metus', 'commodo', 'ut', 'facilisis',
		'felis', 'tristique', 'ullamcorper', 'placerat', 'aenean', 'convallis',
		'sollicitudin', 'integer', 'rutrum', 'duis', 'est', 'etiam',
		'bibendum', 'donec', 'pharetra', 'vulputate', 'maecenas', 'mi',
		'fermentum', 'consequat', 'suscipit', 'aliquam', 'habitant', 'senectus',
		'netus', 'fames', 'quisque', 'euismod', 'curabitur', 'lectus',
		'elementum', 'tempor', 'risus', 'cras'];

		

$(document).ready(function()
{
	$("#wordCloud").jQWCloud({
		words: [
				{word: 'Prashant', weight: 40},
				{word: 'Sandeep', weight: 39},
				{word: 'Ajinkya', weight: 11, color: 'green'},
				{word: 'Rishi', weight: 27},
				{word: 'Kuldeep', weight: 36},
				{word: 'Vivek', weight: 39},
				{word: 'Saheer', weight: 12, color: 'green'},
				{word: 'Lohit', weight: 27},
				{word: 'Anirudh', weight: 36},
				{word: 'Raj', weight: 22},
				{word: 'Mohan', weight: 40},
				{word: 'Yadav', weight: 39},
				{word: 'India', weight: 11, color: 'green'},
				{word: 'USA', weight: 27},
				{word: 'Sreekar', weight: 36},
				{word: 'Ram', weight: 39},
				{word: 'Deepali', weight: 12, color: 'green'},
				{word: 'Kunal', weight: 27},
				{word: 'Rishi', weight: 80},
				{word: 'Chintan', weight: 22},
				{word: 'Prashant', weight: 40},
				{word: 'Sandeep', weight: 39},
				{word: 'Ajinkya', weight: 11, color: 'green'},
				{word: 'Rishi', weight: 27},
				{word: 'Kuldeep', weight: 36},
				{word: 'Vivek', weight: 39},
				{word: 'Saheer', weight: 12, color: 'green'},
				{word: 'Lohit', weight: 27},
				{word: 'Anirudh', weight: 36},
				{word: 'Raj', weight: 22},
				{word: 'Mohan', weight: 40},
				{word: 'Yadav', weight: 39},
				{word: 'India', weight: 11, color: 'green'},
				{word: 'USA', weight: 27},
				{word: 'Sreekar', weight: 36},
				{word: 'Ram', weight: 39},
				{word: 'Deepali', weight: 12, color: 'green'},
				{word: 'Kunal', weight: 27},
				{word: 'Rishi', weight: 80},
				{word: 'Chintan', weight: 22}
				       		        
		],
		//cloud_color: 'yellow',		
		minFont: 10,
		maxFont: 50,
		//fontOffset: 5,
		//cloud_font_family: 'Owned',
		//verticalEnabled: false,
		padding_left: 1,
		//showSpaceDIV: true,
		//spaceDIVColor: 'white',
		word_common_classes: 'WordClass',	
			
		word_mouseEnter :function(){
			$(this).css("text-decoration","underline");
		},

		word_mouseOut :function(){
			$(this).css("text-decoration","none");	
		},

		word_click: function(){ 			
			alert("You have selected:" +$(this).text());
		},

		beforeCloudRender: function(){
		       date1=new Date();
		 },
		 
	 	afterCloudRender: function(){
				var date2=new Date();
				console.log("Cloud Completed in "+(date2.getTime()-date1.getTime()) +" milliseconds");
			}
	});
	
});
