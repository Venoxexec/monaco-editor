let editors = {};

require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.33.0/min/vs' }});
require(['vs/editor/editor.main'], function() {
    editors['tab1'] = monaco.editor.create(document.getElementById('tab1'), {
        value: '// Type your code here...',
        language: 'javascript',
        theme: 'vs-dark'
    });
    editors['tab2'] = monaco.editor.create(document.getElementById('tab2'), {
        value: '// Type your code here...',
        language: 'javascript',
        theme: 'vs-dark'
    });
    editors['tab3'] = monaco.editor.create(document.getElementById('tab3'), {
        value: '// Type your code here...',
        language: 'javascript',
        theme: 'vs-dark'
    });
    openTab('tab1');
});

function openTab(tabName) {
    for (let editor in editors) {
        document.getElementById(editor).style.display = 'none';
        editors[editor].layout();
    }
    document.getElementById(tabName).style.display = 'block';
    editors[tabName].layout();
}
