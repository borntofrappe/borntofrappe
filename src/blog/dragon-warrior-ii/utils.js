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

export function typewriter(node, { speed = 50 }) {
	const  { textContent: text } = node;
	const { length } = text;

	const duration = speed * length;
	return {
		duration,
		tick: t => {
			const i = ~~(length * t);
			node.textContent = text.slice(0, i)
		}
	}
}

