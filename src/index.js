import Component from './ModularTable.vue';
import TableDefinition from './TableDefinition';

export default Component;
export * from './formatters';
export { TableDefinition };

Component.install = Vue => Vue.component(Component.name, Component);
Component.version = proccess.env.VERSION;

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(Component)
}
