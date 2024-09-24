import { getDb, putDb } from './database';
import { header } from './header';

export default class {
  constructor() {
    const localData = localStorage.getItem('content');

    // Check if CodeMirror is loaded
    if (typeof CodeMirror === 'undefined') {
      throw new Error('CodeMirror is not loaded');
    }

    this.editor = CodeMirror(document.querySelector('#main'), {
      value: '',
      mode: 'javascript',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true,
      autofocus: true,
      indentUnit: 2,
      tabSize: 2,
    });

    // Load data from IndexedDB, fall back to localStorage, then to header
    getDb().then((data) => {
      console.info('Loaded data from IndexedDB, injecting into editor');
      this.editor.setValue(data || localData || header);
    });

    this.editor.on('change', this.handleChange.bind(this));
    this.editor.on('blur', this.handleBlur.bind(this));
  }

  handleChange() {
    localStorage.setItem('content', this.editor.getValue());
  }

  async handleBlur() {
    console.log('The editor has lost focus');
    try {
      await putDb(this.editor.getValue());
    } catch (err) {
      console.error('Failed to save to IndexedDB', err);
    }
  }
}
