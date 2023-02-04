export const animate = (node) => {
	const observation = (entries) => {
		if(entries[0].isIntersecting) {
			node.querySelectorAll('animate').forEach(d => d.beginElement())
		} else {
			node.querySelectorAll('animate').forEach(d => d.endElement())
		}
	} 
	
	const observer = new IntersectionObserver(observation);
	observer.observe(node)		
	
	return {
		onDestroy() {
			observer.unobserve(node)		
		}
	}
}