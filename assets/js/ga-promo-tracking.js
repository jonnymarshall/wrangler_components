document.addEventListener("DOMContentLoaded", function(){
  
  // GA Promo tracking
  document.querySelectorAll('div[data-name]').forEach( 
	function(e){ 
		promoViews = [];
		/* push impression data to dataLayer */ 
		impName = e.getAttribute('data-name');
		impPos = e.getAttribute('data-position');
		impID = e.getAttribute('data-id');
		promoData = {};
		promoData.id = impID;
		promoData.name = impName;
		promoData.position = impPos;
		promoViews.push(promoData);
		/* add click listener to all child links */
		promoLinks = e.querySelectorAll('a'); 
		for (let i = 0; i < promoLinks.length; i++) {
     		promoLinks[i].addEventListener("click", function() {
       			dataLayer.push({event: 'promoClick', ecommerce: { promoClick: { promotions: [ {id: impID, name: impName, position: impPos } ] }}});
     		});
 		}		
	})
ecommData = {};
ecommData.promoView = promoViews;
dataLayer.push({event: 'promoView', ecommerce: { promoView: { promotions: promoViews }}});

});
