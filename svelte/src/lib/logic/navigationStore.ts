import { writable } from 'svelte/store';

function createNavigationStore() {
  const dummyNavigation: string[] = [];
	const { subscribe, set } = writable(dummyNavigation);


	return {
		subscribe,
		set,
    clear: () => set([]),
    scrollTo: (document: Document, id: string) => {
      document.querySelector(`#${id.replace(/\s/g, '-')}`)?.scrollIntoView({behavior: 'smooth'})
    },
    scrollToTop: () => window.scrollTo({top: 0, behavior: 'smooth'}),
    scrollToBottom: () => window.scrollTo({top: 1000000, behavior: 'smooth'})
	};
}

export default createNavigationStore();