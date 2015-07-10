jQuery(document).ready(function () {     
	          $('.rating-input').rating({
	                min: 0,
	                max: 5,
	                step: 1,
	                size: 'xs',
	                showClear: false,
	                readonly: true,
	          });   
	      });