import * as vscode from 'vscode';

export function getActiveEditor() {
    const editor = vscode.window.activeTextEditor;

    if (!editor) {
        vscode.window.showErrorMessage('Bemmet: no active text editor...');
        throw new Error('Sorry, but no active editor...');
    }

    return editor;
}

export function getSelectionText(editor) {
    return editor.document.getText(editor.selection);
}

export function replaceSelectionBy(editor, str) {
    if (str && str !== 'undefined') {
        editor.edit(edit => edit.replace(editor.selection, str));
    } else {
        vscode.window.showErrorMessage('Bemmet: please, select abbreviation first...');
        throw new Error('Sorry, but no selected abbreviation...');
    }
}
